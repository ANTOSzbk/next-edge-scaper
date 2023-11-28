import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next Edge Scraper',
    description:
        'This project is made with Next.js and puppeteer. Discovery of scraping data on the edge.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`antialiased bg-fixed ${inter.className}`}>
                {children}
            </body>
        </html>
    );
}
