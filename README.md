This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Scraper on the Edge with Next 14

This project is a discovery of how to use Next.js 14 to scrape data on the edge. The goal is to use Next.js to scrape data from a website and then serve that data to the client. This is a proof of concept and **not intended for production use**. However, it could be used as a _starting point for a production application_ if you have any concerns on how to do it.

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## How it works

This project uses Next 14 app directory and Server Components to utilize latest Next.js features. This app is a personal website with aggregator of JavaScript related conferences from all over the world.

The data is scraped from [https://confs.tech/](https://confs.tech/) using [Puppeteer](https://pptr.dev/) and served to the client. The data is scraped on the edge and cached for 24h. The data is then served to the client from the cache. Route dependent on the scraper is revalidated every 24h.

To utilize scraping outside your local environment you need a virtual HTML renderer such as [Browserless](https://www.browserless.io/) which this project is using. Browserless provides headless Chrome browser environment, which Puppeteer can scrape through. Because the site I'm trying to scrape is a Single-Page Application there is [important Puppeteer setting](https://pptr.dev/api/puppeteer.page.waitfornetworkidle/) which I needed to use.

## Conclusions

### 1. Copyright

Even though we are scraping data from a public website, we need to be careful about the data we are scraping. We need to make sure that we are not violating any terms of service or any other legal issues. We need to make sure that we are not scraping any personal data or any other data that we are not allowed to scrape. Although, it is not our our responsibility to make the data secure we need to make sure the content we want to republish is allowed to be republished. We need to make sure that we are not violating any intellectual property rights.

### 2. Performance

Scraping data on the edge with the regular intervals is a good way to improve performance by removing unnecessary API requests from the client. If the data stale time is - like in our case - about a day, there is no reason to make request on every visit, but only once a day. However, we need to be careful about the amount of data we are scraping.

### 3. Scraping is not easy nor readable

Scraping data from a website is not easy. It is not easy to find the right selectors and the right data. It is also not easy to make the code readable, because selectors are often long and complicated. If the website is not well structured, it is even harder to scrape the data. If the website we scrape is using minification and obfuscation often the only solution might be accessing DOM by XPath. Everything that you built might break once the website structure is changed.

### 4. Sometimes there is no other way

In our case like in many other caes, the data is not available through any API. The only way to get the data is to scrape it from the website. This is not ideal, but sometimes there is no other way.
