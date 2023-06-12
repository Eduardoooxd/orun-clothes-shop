'use client';

import { CartItem } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
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
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();

    const mutation = useMutation({
        mutationFn: (body: { lineId: string; variantId: string; quantity: number }) => {
            return axios.put(`/api/cart`, body);
        },
    });

    const isMutating = mutation.isLoading || isPending;

    async function handleRemove() {
        const body = {
            lineId: item.id,
            variantId: item.merchandise.id,
            quantity: 0,
        };

        try {
            mutation.mutate(body, {
                onSuccess: () => {
                    startTransition(() => {
                        router.refresh();
                        toast({
                            title: 'successMessage.title',
                            description: 'successMessage.description',
                            variant: 'success',
                        });
                    });
                },
                onError: () => {
                    toast({
                        title: ' errorMessage.title',
                        description: 'errorMessage.description',
                        variant: 'destructive',
                    });
                },
            });
        } catch (_) {
            toast({
                title: 'errorMessage.title',
                description: 'errorMessage.description',
                variant: 'destructive',
            });
        } finally {
            startTransition(() => {
                router.refresh();
            });
        }
    }

    return (
        <button
            aria-label="Remove cart item"
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
