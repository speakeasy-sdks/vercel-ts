# IssueCertRequest

## Example Usage

```typescript
import { IssueCertRequest } from "@simplesagar/vercel/models/issuecertop.js";

let value: IssueCertRequest = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `teamId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | The Team identifier to perform the request on behalf of.         |
| `slug`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The Team slug to perform the request on behalf of.               |
| `requestBody`                                                    | [models.IssueCertRequestBody](../models/issuecertrequestbody.md) | :heavy_minus_sign:                                               | N/A                                                              |