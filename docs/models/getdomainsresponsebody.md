# GetDomainsResponseBody

Successful response retrieving a list of domains.

## Example Usage

```typescript
import { GetDomainsResponseBody } from "@simplesagar/vercel/models/getdomainsop.js";

let value: GetDomainsResponseBody = {
  domains: [
    {
      verified: true,
      nameservers: [
        "ns1.nameserver.net",
        "ns2.nameserver.net",
      ],
      intendedNameservers: [
        "ns1.vercel-dns.com",
        "ns2.vercel-dns.com",
      ],
      creator: {
        username: "vercel_user",
        email: "demo@example.com",
        id: "ZspSRT4ljIEEmMHgoDwKWDei",
      },
      teamId: "<value>",
      createdAt: 1613602938882,
      boughtAt: 1613602938882,
      expiresAt: 1613602938882,
      id: "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
      name: "example.com",
      serviceType: "zeit.world",
      userId: "<value>",
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domains`                                                                                                                                                       | [models.GetDomainsDomains](../models/getdomainsdomains.md)[]                                                                                                    | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |