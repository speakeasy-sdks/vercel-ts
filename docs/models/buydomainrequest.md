# BuyDomainRequest

## Example Usage

```typescript
import { BuyDomainRequest } from "@simplesagar/vercel/models/buydomainop.js";

let value: BuyDomainRequest = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `teamId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | The Team identifier to perform the request on behalf of.         |
| `slug`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The Team slug to perform the request on behalf of.               |
| `requestBody`                                                    | [models.BuyDomainRequestBody](../models/buydomainrequestbody.md) | :heavy_minus_sign:                                               | N/A                                                              |