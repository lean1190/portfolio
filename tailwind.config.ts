import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            keyframes: {
                rotate: {
                    '0%': { opacity: '0', transform: 'translateY(-50px)' },
                    '2%': { opacity: '1', transform: 'translateY(0px)' },
                    '18%': { opacity: '1', transform: 'translateY(0px)' },
                    '20%': { opacity: '0', transform: 'translateY(50px)' },
                    '100%': { opacity: '0', transform: 'translateY(50px)' }
                }
            },
            animation: {
                rotate: 'rotate 10s linear infinite'
            }
        }
    },
    darkMode: 'class',
    plugins: [
        nextui(),
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    'animation-delay': (value) => ({
                        'animation-delay': value
                    })
                },
                {
                    values: theme('transitionDelay')
                }
            );
        })
    ]
};
export default config;
