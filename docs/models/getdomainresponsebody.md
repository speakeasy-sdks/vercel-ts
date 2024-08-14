# GetDomainResponseBody

Successful response retrieving an information for a specific domains.

## Example Usage

```typescript
import { GetDomainResponseBody } from "@simplesagar/vercel/models/getdomainop.js";

let value: GetDomainResponseBody = {
    domain: {
        suffix: false,
        verified: true,
        nameservers: ["ns1.nameserver.net", "ns2.nameserver.net"],
        intendedNameservers: ["ns1.vercel-dns.com", "ns2.vercel-dns.com"],
        creator: {
            username: "vercel_user",
            email: "demo@example.com",
            id: "ZspSRT4ljIEEmMHgoDwKWDei",
        },
        teamId: "<value>",
        userId: "<value>",
        boughtAt: 1613602938882,
        createdAt: 1613602938882,
        expiresAt: 1613602938882,
        id: "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
        name: "example.com",
        serviceType: "zeit.world",
    },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `domain`                                               | [models.GetDomainDomain](../models/getdomaindomain.md) | :heavy_check_mark:                                     | N/A                                                    |