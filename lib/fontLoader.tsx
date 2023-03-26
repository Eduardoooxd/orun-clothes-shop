import localFont from 'next/font/local';

export const commutersSans = localFont({
    src: [
        {
            path: '/../public/assets/fonts/commuterssans-regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '/../public/assets/fonts/commuterssans-extralight.otf',
            weight: '200',
            style: 'normal',
        },
    ],
    variable: '--font-commutersSans',
});

export const futuraPTLight = localFont({
    src: '/../public/assets/fonts/futura-pt-light.otf',
    variable: '--font-futuraPTLight',
});
