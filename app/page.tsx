import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JavaScript Events and Conferences',
  description: 'Tech news from web development world',
  keywords: ['javascript', 'typescript', 'react', 'events', 'conferences'],
};

export const revalidate = 86400; // 24 hours

export default function Conferences() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 relative">
      <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold drop-shadow-sm dark:drop-shadow-md text-center md:px-48">
        Incoming JavaScript events and conferences
      </h1>
      <footer className="flex flex-col items-center justify-center w-full absolute bottom-2">
        <p className="text-gray-500 text-center text-xs md:text-md px-4">
          Data aggregated from{' '}
          <Link
            href=""
            className="dark:text-blue-300 dark:hover:text-blue-500 text-blue-600 hover:text-blue-800 transition"
          ></Link>
          .
        </p>
      </footer>
    </main>
  );
}
