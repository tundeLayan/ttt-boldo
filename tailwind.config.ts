import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                manrope: ['Manrope'],
                openSans: ['Open Sans'],
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    100: '#0A2640',
                    200: '#F1F1F1',
                    300: '#777777',
                },
                green: {
                    100: '#4FE9A4',
                    200: '#65E4A3',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require('tailwindcss-animate')],
};
export default config;
