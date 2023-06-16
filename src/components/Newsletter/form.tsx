'use client';

import { store } from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { NewsletterBody } from '@/app/api/newsletter/route';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import LoadingDots from '../Icons/loadingDots';
import { Checkbox } from '../ui/checkbox';
import { toast } from '../ui/use-toast';

const dictionary = store.getState().dictionary.dictionary;
const { invalidEmail, requireCheckboxEmail, signUpButtonText, successMessage, errorMessage } =
    dictionary.newsletterValidation;

const formSchema = z.object({
    email: z.string().email({ message: invalidEmail }),
    agreeMarketing: z
        .boolean({
            required_error: requireCheckboxEmail,
            invalid_type_error: requireCheckboxEmail,
        })
        .refine((data) => data === true, { message: requireCheckboxEmail }),
});

export default function NewsletterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            agreeMarketing: false,
        },
    });

    const mutation = useMutation({
        mutationFn: (body: NewsletterBody) => {
            return axios.post(`/api/newsletter`, body);
        },
    });

    function onSubmit(formData: z.infer<typeof formSchema>) {
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
        }
    }

    return (
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
                    name="agreeMarketing"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md text-justify">
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel
                                className={cn(
                                    'text-xs sm:text-sm lg:text-base',
                                    `${futuraPTLight.variable} font-futuraPTLight`
                                )}
                            >
                                {requireCheckboxEmail}
                            </FormLabel>
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
                    {mutation.isLoading && <LoadingDots className="bg-white dark:bg-black" />}
                </Button>
            </form>
        </Form>
    );
}
