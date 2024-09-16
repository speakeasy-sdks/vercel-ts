# GetAuthTokenResponseBody

Successful response.

## Example Usage

```typescript
import { GetAuthTokenResponseBody } from "@simplesagar/vercel/models/getauthtokenop.js";

let value: GetAuthTokenResponseBody = {
  token: {
    id: "5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391",
    name: "<value>",
    type: "oauth2-token",
    activeAt: 1632816536002,
    createdAt: 1632816536002,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `token`                                    | [models.AuthToken](../models/authtoken.md) | :heavy_check_mark:                         | Authentication token metadata.             |