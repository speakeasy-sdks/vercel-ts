# PatchDomainRequest

## Example Usage

```typescript
import { PatchDomainRequest } from "@simplesagar/vercel/models/patchdomainop.js";

let value: PatchDomainRequest = {
  domain: "personal-extremist.com",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `domain`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       |
| `requestBody`                                            | *models.PatchDomainRequestBody*                          | :heavy_minus_sign:                                       | N/A                                                      |