# Scopes1

The access scopes granted to the token.

## Example Usage

```typescript
import { Scopes1 } from "@simplesagar/vercel/models/authtoken.js";

let value: Scopes1 = {
  type: "user",
  origin: "saml",
  createdAt: 3228.29,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | [models.ScopesType](../models/scopestype.md)     | :heavy_check_mark:                               | N/A                                              |
| `origin`                                         | [models.ScopesOrigin](../models/scopesorigin.md) | :heavy_check_mark:                               | N/A                                              |
| `createdAt`                                      | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `expiresAt`                                      | *number*                                         | :heavy_minus_sign:                               | N/A                                              |