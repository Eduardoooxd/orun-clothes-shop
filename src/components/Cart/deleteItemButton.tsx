'use client';

import { convertCartLineIdToId } from '@/lib/shopify/converters';
import { CartItem } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import { store } from '@/store';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import CloseIcon from '../Icons/close';
import LoadingDots from '../Icons/loadingDots';
import { useToast } from '../ui/use-toast';

interface DeleteItemButtonProps {
    item: CartItem;
}

export default function DeleteItemButton({ item }: DeleteItemButtonProps) {
    const dictionary = store.getState().dictionary.dictionary;
    const { successMessage, errorMessage, deleteMessage } = dictionary.deleteItemForm;

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();

    const mutation = useMutation({
        mutationFn: (lineId: string) => {
            return axios.delete(`/api/cart/${convertCartLineIdToId(lineId)}`);
        },
    });

    const isMutating = mutation.isLoading || isPending;

    async function handleRemove() {
        try {
            mutation.mutate(item.id, {
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
            aria-label={deleteMessage}
            onClick={handleRemove}
            disabled={isMutating}
            className={cn(
                'ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900',
                {
                    'cursor-not-allowed px-0': isMutating,
                }
            )}
        >
            {isMutating ? (
                <LoadingDots className="bg-black dark:bg-white" />
            ) : (
                <CloseIcon className="mx-[1px] h-4 w-4" />
            )}
        </button>
    );
}
