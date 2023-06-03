'use client';

import { useToast } from '@/components/ui/use-toast';
import useGetCurrentLocale from '@/hooks/useGetCurrentLocale';
import useGetDictionary from '@/hooks/useGetDictionary';
import { commutersSans, futuraPTLight } from '@/lib/fontLoader';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import type { ContactFormBody } from '../api/contact/route';

const ContactForm: FunctionComponent = () => {
    const currentLocale = useGetCurrentLocale();

    const DEFAULT_CONTACT_STATE: ContactFormBody = {
        name: '',
        email: '',
        message: '',
        phone: '',
    };

    const { toast } = useToast();

    const dictionary = useGetDictionary();
    const {
        nameInput,
        emailInput,
        phoneInput,
        messageInput,
        submitMessage,
        loadingMessage,
        successMessage,
        errorMessage,
    } = dictionary.contactUsPage.formContent;

    const mutation = useMutation({
        mutationFn: (contactForm: ContactFormBody) => {
            return axios.post(`../${currentLocale}/api/contact`, contactForm);
        },
    });

    const [formData, setFormData] = useState<ContactFormBody>(DEFAULT_CONTACT_STATE);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            mutation.mutate(formData, {
                onSuccess: () => {
                    toast({
                        title: successMessage.title,
                        description: successMessage.description,
                        variant: 'success',
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
        } finally {
            setFormData(DEFAULT_CONTACT_STATE);
            setSubmitted(false);
        }
    };

    return (
        <form
            onSubmit={(e) => onSubmit(e)}
            className="flex w-full min-w-[40%] max-w-md flex-1 flex-col gap-6"
        >
            <InputField
                label={nameInput.label}
                id={nameInput.label}
                name="name"
                type="text"
                placeholder={nameInput.placeholder}
                value={formData.name}
                onChange={handleChange}
                submitted={submitted}
                required
            />
            <InputField
                label={emailInput.label}
                id={emailInput.label}
                name="email"
                type="email"
                placeholder={emailInput.placeholder}
                value={formData.email}
                onChange={handleChange}
                submitted={submitted}
                required
            />
            <InputField
                label={phoneInput.label}
                id={phoneInput.label}
                name="phone"
                type="tel"
                placeholder={phoneInput.placeholder}
                value={formData.phone}
                onChange={handleChange}
                submitted={submitted}
                required
            />
            <InputField
                label={messageInput.label}
                id={messageInput.label}
                name="message"
                type="textarea"
                placeholder={messageInput.placeholder}
                value={formData.message}
                onChange={handleChange}
                submitted={submitted}
                required
            />
            <button
                className={`${futuraPTLight.variable} block w-full bg-black p-4 text-center font-futuraPTLight font-bold uppercase text-white  disabled:bg-gray-400 `}
                type="submit"
                disabled={mutation.isLoading}
                onClick={() => setSubmitted(true)}
            >
                {mutation.isLoading ? loadingMessage : submitMessage}
            </button>
        </form>
    );
};

interface InputFieldProps {
    label: string;
    id: string;
    name: keyof ContactFormBody;
    type: string;
    placeholder: string;
    pattern?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    submitted: boolean;
}

const InputField: FunctionComponent<InputFieldProps> = ({
    label,
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    pattern,
    required = false,
    submitted,
}) => {
    const inputStyle = `${
        commutersSans.variable
    } font-commutersSans block py-4 px-2 w-full appearance-none border border-gray-200 bg-gray-200 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none ${
        submitted &&
        'invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
    }`;

    return (
        <div className="flex flex-col gap-2">
            <label
                className={`${
                    futuraPTLight.variable
                } mb-2 font-futuraPTLight text-base font-bold uppercase ${
                    required && "after:ml-0.5 after:text-red-500 after:content-['*']"
                }`}
                htmlFor={id}
            >
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    className={`${inputStyle}`}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            ) : (
                <input
                    className={`${inputStyle}`}
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    pattern={pattern}
                    onChange={onChange}
                    required={required}
                />
            )}
        </div>
    );
};

export default ContactForm;
