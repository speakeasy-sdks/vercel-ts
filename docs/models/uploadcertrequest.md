# UploadCertRequest

## Example Usage

```typescript
import { UploadCertRequest } from "@simplesagar/vercel/models/uploadcertop.js";

let value: UploadCertRequest = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `teamId`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | The Team identifier to perform the request on behalf of.           |
| `slug`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The Team slug to perform the request on behalf of.                 |
| `requestBody`                                                      | [models.UploadCertRequestBody](../models/uploadcertrequestbody.md) | :heavy_minus_sign:                                                 | N/A                                                                |