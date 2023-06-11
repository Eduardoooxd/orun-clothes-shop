import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID;

export const GoogleAnalyticsScripts = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            ></Script>
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                    });
                    `,
                }}
            />
        </>
    );
};

export const pageView = (url: string) => {
    // @ts-expect-error - window is defined with gtag after the script of google analytics is loaded
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label: string;
    value: string;
}) => {
    // @ts-expect-error - window is defined with gtag after the script of google analytics is loaded
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    });
};
