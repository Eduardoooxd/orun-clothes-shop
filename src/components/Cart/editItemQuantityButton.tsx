import { CartItem } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { store } from '@/store';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import LoadingDots from '../Icons/loadingDots';
import MinusIcon from '../Icons/minus';
import PlusIcon from '../Icons/plus';
import { useToast } from '../ui/use-toast';

type EditItemQuantityAction = 'plus' | 'minus';

interface EditItemQuantityButtonProps {
    item: CartItem;
    type: EditItemQuantityAction;
}

export default function EditItemQuantityButton({ item, type }: EditItemQuantityButtonProps) {
    const dictionary = store.getState().dictionary.dictionary;
    const { successMessage, errorMessage, increaseMessage, decreaseMessage } =
        dictionary.editItemQuantityForm;

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();

    const mutation = useMutation({
        mutationFn: (body: { lineId: string; variantId: string; quantity: number }) => {
            return axios.put(`/api/cart`, body);
        },
    });

    const isMutating = mutation.isLoading || isPending;

    async function handleEdit() {
        const body = {
            lineId: item.id,
            variantId: item.merchandise.id,
            quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1,
        };

        try {
            mutation.mutate(body, {
                onSuccess: () => {
                    startTransition(() => {
                        router.refresh();
                        toast({
                            description: successMessage.description,
                            variant: 'success',
                        });
                    });
                },
                onError: () => {
                    toast({
                        title: errorMessage.title,
                        description: errorMessage.description,
                        variant: 'destructive',
                    });
                },
            });
        } catch (_) {
            toast({
                title: errorMessage.title,
                description: errorMessage.description,
                variant: 'destructive',
            });
        }
    }
    return (
        <button
            aria-label={type === 'plus' ? increaseMessage : decreaseMessage}
            onClick={handleEdit}
            disabled={isMutating}
            className={cn(
                'ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900',
                {
                    'cursor-not-allowed': isMutating,
                    'ml-auto': type === 'minus',
                }
            )}
        >
            {isMutating ? (
                <LoadingDots className="bg-black dark:bg-white" />
            ) : type === 'plus' ? (
                <PlusIcon className="h-4 w-4" />
            ) : (
                <MinusIcon className="h-4 w-4" />
            )}
        </button>
    );
}
