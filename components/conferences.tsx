import { getConferences, isPolishConference } from '@/app/getConferences';
import Link from 'next/link';
import { FiCalendar, FiMapPin, FiTwitter } from 'react-icons/fi';

export default async function Conferences() {
  const conferencesByMonth = await getConferences();

  if (!conferencesByMonth)
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
        <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold drop-shadow-sm dark:drop-shadow-md">
          Conferences not found
        </h1>
      </main>
    );

  return (
    <>
      <nav className="flex flex-row justify-center gap-2 py-6 md:py-12 px-4 flex-wrap">
        {conferencesByMonth.map(({ month }) => (
          <Link
            key={month}
            href={`#${month.toLowerCase()}`}
            className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2 after:text-[rgb(var(--foreground-rgb))] last:after:hidden after:content-['•'] transition-colors"
          >
            {month}
          </Link>
        ))}
      </nav>
      <section className="flex flex-col md:justify-center w-full md:py-2">
        {conferencesByMonth.map(({ month, conferences }) => (
          <div
            key={month}
            className="flex flex-col sm:items-center items-start p-4 max-w-md md:max-w-lg sm:mx-auto"
          >
            <h2
              className="text-3xl font-bold drop-shadow-sm"
              id={month.toLowerCase()}
            >
              {month}
            </h2>
            <ul className="flex flex-col sm:items-center sm:justify-center w-full py-4">
              {conferences.map(({ name, url, date, location, twitter }) => (
                <li
                  key={name}
                  className="flex flex-col sm:items-center items-start justify-center py-3"
                >
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-lg font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-500 hover:dark:text-blue-700 md:text-center transition-colors"
                  >
                    {name}
                  </Link>
                  <span
                    className={`dark:text-gray-500 inline-flex items-center gap-2 flex-shrink [&_svg]:flex-shrink-0`}
                  >
                    <FiCalendar /> {date}
                  </span>
                  <span
                    className={`dark:text-gray-500 inline-flex items-center gap-2 flex-shrink [&_svg]:flex-shrink-0 ${
                      isPolishConference(location) && 'font-medium dark:text-red-500 text-red-700 drop-shadow-lg'
                    }`}
                  >
                    <FiMapPin />
                    {location}
                  </span>

                  {twitter && (
                    <span className="text-blue-600 hover:text-blue-800 dark:text-gray-400 hover:dark:text-gray-300 inline-flex items-center gap-2 flex-shrink [&_svg]:flex-shrink-0 transition-colors">
                      <FiTwitter />
                      <Link
                        href={twitter.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {twitter.name}
                      </Link>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
