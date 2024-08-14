# CreateAuthTokenRequest

## Example Usage

```typescript
import { CreateAuthTokenRequest } from "@simplesagar/vercel/models/createauthtokenop.js";

let value: CreateAuthTokenRequest = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       |
| `requestBody`                                            | *models.CreateAuthTokenRequestBody*                      | :heavy_minus_sign:                                       | N/A                                                      |