'use client';

import { futuraPTLight } from '@/lib/fontLoader';
import { ProductVariant } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import LoadingDots from '../Icons/loadingDots';
import { useToast } from '../ui/use-toast';

interface AddToCartProps {
    selectedVariant: ProductVariant | null;
}

export function AddToCart({ selectedVariant }: AddToCartProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();

    const mutation = useMutation({
        mutationFn: (variantId: string) => {
            return axios.post(`../../api/cart`, {
                merchandiseId: variantId,
            });
        },
    });

    const isMutating = mutation.isLoading || isPending;
    const isDisabled = !selectedVariant || isMutating;
    const isForSale = selectedVariant && selectedVariant.availableForSale;

    async function handleAdd() {
        if (isDisabled || !isForSale) return;

        // TODO ADD Messages
        if (!selectedVariant) {
            toast({
                title: 'successMessage.title',
                description: 'successMessage.description',
                variant: 'destructive',
            });
            return;
        }

        try {
            mutation.mutate(selectedVariant.id, {
                onSuccess: () => {
                    toast({
                        title: 'successMessage.title',
                        description: 'successMessage.description',
                        variant: 'success',
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
            aria-label="Add item to cart"
            disabled={isDisabled || !isForSale}
            onClick={handleAdd}
            className={cn(
                'disabled mt-4 flex w-full items-center justify-center bg-black p-4 text-sm font-bold uppercase tracking-wide text-white opacity-90 hover:opacity-100 disabled:cursor-not-allowed disabled:bg-gray-300 dark:bg-white dark:text-black dark:disabled:bg-gray-700',
                {
                    'cursor-not-allowed': isDisabled || !isForSale,
                },
                `${futuraPTLight.variable}`
            )}
        >
            <span>{isForSale ? 'Add to Cart' : 'Not available'}</span>
            {isMutating ? <LoadingDots className="bg-white dark:bg-black" /> : null}
        </button>
    );
}
