import Script from 'next/script';

export const GoogleAnalyticsScripts = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
            ></Script>
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                    });
                    `,
                }}
            />
        </>
    );
};
