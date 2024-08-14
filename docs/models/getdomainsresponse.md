# GetDomainsResponse

## Example Usage

```typescript
import { GetDomainsResponse } from "@simplesagar/vercel/models/getdomainsop.js";

let value: GetDomainsResponse = {
    result: {
        domains: [
            {
                verified: true,
                nameservers: ["ns1.nameserver.net", "ns2.nameserver.net"],
                intendedNameservers: ["ns1.vercel-dns.com", "ns2.vercel-dns.com"],
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
    },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [models.GetDomainsResponseBody](../models/getdomainsresponsebody.md) | :heavy_check_mark:                                                   | N/A                                                                  |