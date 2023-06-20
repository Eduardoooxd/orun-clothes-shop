'use client';

import useGetDictionary from '@/hooks/useGetDictionary';
import { futuraPTLight } from '@/lib/fontLoader';
import { ProductVariant } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import LoadingDots from '../Icons/loadingDots';
import { useToast } from '../ui/use-toast';

interface ProductContactFormProps {
    selectedVariant: ProductVariant;
}

const ProductContactForm = ({ selectedVariant }: ProductContactFormProps) => {
    const { title, price } = selectedVariant;

    const dictionary = useGetDictionary();
    const { mailSubject } = dictionary.productPage.contactForm;

    const parsedEmailSubject = mailSubject.replace('${title}', title);
    let mailBody = dictionary.productPage.contactForm.mailBody.replaceAll('${title}', title);
    mailBody = mailBody.replaceAll('${price}', price.toString());

    const { contactUsItemAvailableText } = dictionary.productPage;

    return (
        <section className="my-4 flex flex-col gap-2 py-4">
            <a
                target={'_blank'}
                className={`${futuraPTLight.variable} block w-full bg-black p-4 text-center font-futuraPTLight font-bold uppercase text-white`}
                href={`mailto:${process.env.CONTACT_EMAIL}?subject=${parsedEmailSubject}&body=${mailBody}`}
            >
                {contactUsItemAvailableText}
            </a>
        </section>
    );
};

interface AddToCartProps {
    selectedVariant: ProductVariant | null;
}

export function AddToCart({ selectedVariant }: AddToCartProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();

    const mutation = useMutation({
        mutationFn: (variantId: string) => {
            return axios.post('/api/cart', {
                merchandiseId: variantId,
            });
        },
    });

    const isMutating = mutation.isLoading || isPending;
    const isDisabled = !selectedVariant || isMutating;
    const isForSale = selectedVariant && selectedVariant.availableForSale;

    const dictionary = useGetDictionary();
    const { successMessage, errorMessage } = dictionary.productPage;
    const { addToBagText, selectOptionText, disabledProductText } =
        dictionary.productPage.addToCartContent;

    async function handleAdd() {
        if (isDisabled || !isForSale) return;

        if (!selectedVariant) {
            toast({
                title: errorMessage.title,
                description: errorMessage.description,
                variant: 'destructive',
            });
            return;
        }

        try {
            mutation.mutate(selectedVariant.id, {
                onSuccess: () => {
                    startTransition(() => {
                        router.refresh();
                        toast({
                            title: successMessage.title,
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

    return !selectedVariant || isForSale ? (
        <button
            aria-label={addToBagText}
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
            <span>
                {selectedVariant === null
                    ? selectOptionText
                    : isForSale
                    ? addToBagText
                    : disabledProductText}
            </span>
            {isMutating ? <LoadingDots className="bg-white dark:bg-black" /> : null}
        </button>
    ) : (
        <ProductContactForm selectedVariant={selectedVariant} />
    );
}
