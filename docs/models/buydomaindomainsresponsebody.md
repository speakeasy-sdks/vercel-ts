# BuyDomainDomainsResponseBody

Domain purchase is being processed asynchronously.

## Example Usage

```typescript
import { BuyDomainDomainsResponseBody } from "@simplesagar/vercel/models/buydomainop.js";

let value: BuyDomainDomainsResponseBody = {
  domain: {
    uid: "<value>",
    ns: [
      "<value>",
    ],
    verified: false,
    created: 5199.52,
    pending: false,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `domain`                                               | [models.BuyDomainDomain](../models/buydomaindomain.md) | :heavy_check_mark:                                     | N/A                                                    |