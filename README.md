This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Scraper on the Edge with Next 14

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

The data is scraped from [https://confs.tech/](https://confs.tech/) using [Puppeteer](https://pptr.dev/) and served to the client. The data is scraped on the edge and cached for 24h. The data is then served to the client from the cache. Sub-route dependent on the scraper is revalidated every 24h.
