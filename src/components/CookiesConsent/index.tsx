'use client';

import useGetDictionary from '@/hooks/useGetDictionary';
import { futuraPTLight } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';
import { useLocalStorage } from 'usehooks-ts';
import { Button } from '../ui/button';
import { StickyWarning } from '../ui/stickyWarning';
import { useStickyWarningContext } from '../ui/stickyWarningContext';

export default function CookiesConsent() {
    const [cookiesConsent, setCookiesConsent] = useLocalStorage('cookiesConsent', false);

    const dictionary = useGetDictionary();
    const { title, description, acceptAllCookiesText } = dictionary.cookiesSettingContent;
    const { setIsOpen } = useStickyWarningContext();

    return (
        <StickyWarning open={!cookiesConsent} title={title}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <p
                    className={cn(
                        'w-full text-xs sm:w-4/5',
                        `${futuraPTLight.variable} font-futuraPTLight`
                    )}
                >
                    {description}
                </p>
                <Button
                    onClick={() => {
                        setIsOpen(false);
                        setCookiesConsent(true);
                    }}
                    className={cn(
                        'w-full text-sm sm:w-1/5',
                        `${futuraPTLight.variable} font-futuraPTLight`
                    )}
                >
                    {acceptAllCookiesText}
                </Button>
            </div>
        </StickyWarning>
    );
}
