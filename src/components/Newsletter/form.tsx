'use client';

import { store } from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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
import { Checkbox } from '../ui/checkbox';

const dictionary = store.getState().dictionary.dictionary;
const { invalidEmail, requireCheckboxEmail, signUpButtonText } = dictionary.newsletterValidation;

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

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
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
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0 text-justify rounded-md">
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
                    className={cn(
                        'w-full uppercase',
                        `${commutersSans.variable} font-commutersSans`
                    )}
                    type="submit"
                >
                    {signUpButtonText}
                </Button>
            </form>
        </Form>
    );
}
