# Scopes2

The access scopes granted to the token.

## Example Usage

```typescript
import { Scopes2 } from "@simplesagar/vercel/models/authtoken.js";

let value: Scopes2 = {
    type: "team",
    teamId: "<value>",
    origin: "bitbucket",
    createdAt: 5908.58,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | [models.AuthTokenScopesType](../models/authtokenscopestype.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `teamId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `origin`                                                           | [models.AuthTokenScopesOrigin](../models/authtokenscopesorigin.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `createdAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `expiresAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |