# BuyDomainResponseBody

Successful response for purchasing a Domain.

## Example Usage

```typescript
import { BuyDomainResponseBody } from "@simplesagar/vercel/models/buydomainop.js";

let value: BuyDomainResponseBody = {
  domain: {
    uid: "<value>",
    ns: [
      "<value>",
    ],
    verified: false,
    created: 6939.57,
    pending: false,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `domain`                                                             | [models.BuyDomainDomainsDomain](../models/buydomaindomainsdomain.md) | :heavy_check_mark:                                                   | N/A                                                                  |