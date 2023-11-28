import puppeteer from 'puppeteer';

export const CONFS_TECH_URL = 'https://confs.tech/javascript';

const getBrowser = () =>
  puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_TOKEN}`,
  });

type Conference = {
  name: string;
  url: string;
  location: string;
  date: string;
  twitter: {
    name: string;
    url: string;
  } | null;
};

type ConferenceByMonth = {
  month: string;
  conferences: Conference[];
};

export async function getConferences(): Promise<ConferenceByMonth[] | null> {
  try {
    const browser = await getBrowser();
    const page = await browser.newPage();

    await page.goto(CONFS_TECH_URL, {
      waitUntil: 'networkidle2',
    });

    const data = await page.evaluate(() => {
      const listsByYear = document.querySelectorAll('section > div[class^="ConferenceList_ConferenceList"]');

      // Append lists together
      const list = Array.from(listsByYear).reduce((acc, list) => {
        acc.appendChild(list);
        return acc;
      }, document.createElement('div'));

      const conferenceListByMonth = Array.from(list.querySelectorAll('h2')).map((month) => {
        // If there is no next element, we are at the end of the list
        if (!month.nextElementSibling) {
          return;
        }

        const conferenceElements = Array.from(month.nextElementSibling?.querySelectorAll('li'));

        const conferences = Array.from(conferenceElements).map((conference) => {
          const linkElement = conference.querySelector('a');
          const twitterLinkElement = conference.querySelector('a[href^="https://twitter.com/"]');
          // If there is no link, we are at the end of the list
          if (!linkElement) {
            return;
          }

          const [location, date] = conference.querySelector('p')?.innerText.split('・') || [];
          return {
            name: linkElement.textContent || 'JS Event',
            url: linkElement.getAttribute('href') || 'No URL',
            location,
            date,
            twitter: twitterLinkElement && {
              name: twitterLinkElement.textContent,
              url: twitterLinkElement.getAttribute('href'),
            },
          };
        });

        return {
          month: month.textContent || '',
          conferences: conferences.filter(Boolean),
        };
      });

      return conferenceListByMonth.filter(Boolean) as ConferenceByMonth[];
    });

    browser.close();

    return data;
  } catch (e) {
    console.log('Error while fetching conferences.', e);
    return null;
  }
}

export const isPolishConference = (conferenceLocation: string) => {
  const polishLocations = ['Poland', 'Polska', 'Kraków', 'Warszawa', 'Wrocław', 'Gdańsk', 'Poznań', 'Katowice'];
  return polishLocations.some((location) => conferenceLocation.includes(location));
};
