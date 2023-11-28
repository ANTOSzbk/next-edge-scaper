import puppeteer from 'puppeteer';

export const CONFS_TECH_URL = 'https://confs.tech/javascript';

const getBrowser = () =>
  puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_TOKEN}`,
  });

export async function getConferences() {
  try {
    const browser = await getBrowser();
    const page = await browser.newPage();

    await page.goto(CONFS_TECH_URL, {
      waitUntil: 'networkidle2',
    });

    const data = await page.evaluate(() => {
      return document;
    });

    console.log(data);

    browser.close();

    return data;
  } catch (e) {
    return null;
  }
}
