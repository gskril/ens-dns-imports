# DNS → ENS Indexer

Index the DNSRegistrar contracts from the Ethereum Name Service to create a subgraph for querying imported DNS records. An API-friendly version of [this Dune dashboard](https://dune.com/queries/3324133).

## How to run it

Install the dependencies (mainly [Ponder](https://ponder.sh/)):

```bash
npm install
```

Set an Ethereum RPC URL in your environment variables:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:42069](http://localhost:42069) with your browser to see the result.

## Example query

```graphql
{
  dnsNames(first: 100, orderBy: "createdAt", orderDirection: "desc") {
    name
    createdAt
  }
}
```

## Deploy

This app can be hosted on [Railway](https://railway.app?referralCode=ONtqGs) for a few dollars per month. Follow Ponder's deployment guide [here](https://ponder.sh/docs/guides/production#railway-recommended).
