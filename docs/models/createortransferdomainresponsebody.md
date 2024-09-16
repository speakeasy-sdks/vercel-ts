# CreateOrTransferDomainResponseBody

## Example Usage

```typescript
import { CreateOrTransferDomainResponseBody } from "@simplesagar/vercel/models/createortransferdomainop.js";

let value: CreateOrTransferDomainResponseBody = {
  domain: {
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
    boughtAt: 1613602938882,
    createdAt: 1613602938882,
    expiresAt: 1613602938882,
    id: "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
    name: "example.com",
    serviceType: "zeit.world",
    userId: "<value>",
    teamId: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `domain`                                                                         | [models.CreateOrTransferDomainDomain](../models/createortransferdomaindomain.md) | :heavy_check_mark:                                                               | N/A                                                                              |