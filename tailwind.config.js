// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                commutersSans: ['var(--font-commutersSans)', ...fontFamily.sans],
                futuraPTLight: ['var(--font-futuraPTLight)', ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
