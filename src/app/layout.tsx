import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Portfolio - Lean Vilas',
    description: 'My work',
    icons: { icon: '/favicon.ico' }
};

const font = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
});

export default function RootLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-screen w-screen dark">
            <body className={`${font.className} size-full max-h-full max-w-full overflow-x-hidden bg-[#343D35FF]`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
