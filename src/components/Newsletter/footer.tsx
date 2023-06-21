'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useGetDictionary from '@/hooks/useGetDictionary';
import NewsletterSectionImage from '@/images/newsletterSection/newsletterSection.png';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Container from '../Container';
import LoadingDots from '../Icons/loadingDots';
import Separator from '../Separator';
import { toast } from '../ui/use-toast';

export function NewsletterFooter() {
    const dictionary = useGetDictionary();

    const {
        lastNamePlaceholder,
        firstNamePlaceholder,
        signUpButtonText,
        successMessage,
        errorMessage,
        invalidEmail,
        requireCheckboxEmail,
        invalidFirstName,
        invalidLastName,
    } = dictionary.newsletterValidation;

    const { calloutText, learnMoreText } = dictionary.newsletterFooter;

    const newsletterBodySchema = z.object({
        email: z.string().email({ message: invalidEmail }),
        agreeMarketing: z
            .boolean({
                required_error: requireCheckboxEmail,
                invalid_type_error: requireCheckboxEmail,
            })
            .refine((data) => data === true, { message: requireCheckboxEmail }),
        firstName: z
            .string()
            .min(2, { message: invalidFirstName })
            .max(100, { message: invalidFirstName }),
        lastName: z
            .string()
            .min(2, { message: invalidLastName })
            .max(100, { message: invalidLastName }),
    });

    const form = useForm<z.infer<typeof newsletterBodySchema>>({
        resolver: zodResolver(newsletterBodySchema),
        defaultValues: {
            email: '',
            agreeMarketing: true,
            firstName: '',
            lastName: '',
        },
    });

    type NewsletterBody = z.infer<typeof newsletterBodySchema>;

    const mutation = useMutation({
        mutationFn: (body: NewsletterBody) => {
            return axios.post(`/api/newsletter`, body);
        },
    });

    function onSubmit(formData: z.infer<typeof newsletterBodySchema>) {
        try {
            mutation.mutate(formData, {
                onSuccess: () => {
                    toast({
                        title: successMessage.title,
                        description: (
                            <p dangerouslySetInnerHTML={{ __html: successMessage.description }} />
                        ),
                        variant: 'success',
                        duration: 60000,
                    });
                    form.reset();
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
        } finally {
        }
    }

    return (
        <section className="my-4 w-full">
            <Separator />
            <Container>
                <div className="flex flex-col justify-evenly sm:flex-row">
                    <div className="mb-2 flex w-full flex-col sm:w-[50%] sm:py-0 lg:mb-0">
                        <h5
                            className={cn(
                                'text-4xl uppercase lg:text-8xl',
                                `${futuraPTLight.variable} font-futuraPTLight`
                            )}
                        >
                            {calloutText}
                        </h5>
                        <div className="relative hidden  w-[75%] sm:block sm:min-h-[75%]">
                            <Image
                                src={NewsletterSectionImage}
                                alt={'ORUN Values'}
                                fill
                                sizes="100vw (max-width: 768px) 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-4 sm:w-[50%]">
                        <p
                            className={cn(
                                'text text-base font-bold uppercase lg:text-lg',
                                `${futuraPTLight.variable} font-futuraPTLight`
                            )}
                        >
                            {learnMoreText}
                        </p>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className={cn(
                                                        'text-xs sm:text-sm lg:text-base',
                                                        `${futuraPTLight.variable} font-futuraPTLight`
                                                    )}
                                                    type="email"
                                                    placeholder="Email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage
                                                className={cn(
                                                    'text-xs sm:text-sm lg:text-base',
                                                    `${futuraPTLight.variable} font-futuraPTLight`
                                                )}
                                            />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className={cn(
                                                        'text-xs sm:text-sm lg:text-base',
                                                        `${futuraPTLight.variable} font-futuraPTLight`
                                                    )}
                                                    type="text"
                                                    placeholder={firstNamePlaceholder}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage
                                                className={cn(
                                                    'text-xs sm:text-sm lg:text-base',
                                                    `${futuraPTLight.variable} font-futuraPTLight`
                                                )}
                                            />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className={cn(
                                                        'text-xs sm:text-sm lg:text-base',
                                                        `${futuraPTLight.variable} font-futuraPTLight`
                                                    )}
                                                    type="text"
                                                    placeholder={lastNamePlaceholder}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage
                                                className={cn(
                                                    'text-xs sm:text-sm lg:text-base',
                                                    `${futuraPTLight.variable} font-futuraPTLight`
                                                )}
                                            />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    disabled={mutation.isLoading}
                                    className={cn(
                                        'w-full uppercase',
                                        `${commutersSans.variable} font-commutersSans`
                                    )}
                                    type="submit"
                                >
                                    {signUpButtonText}
                                    {mutation.isLoading && (
                                        <LoadingDots className="bg-white dark:bg-black" />
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </Container>
        </section>
    );
}
