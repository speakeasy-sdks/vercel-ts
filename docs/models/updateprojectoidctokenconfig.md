# UpdateProjectOidcTokenConfig

OpenID Connect JSON Web Token generation configuration.

## Example Usage

```typescript
import { UpdateProjectOidcTokenConfig } from "@simplesagar/vercel/models/updateprojectop.js";

let value: UpdateProjectOidcTokenConfig = {
  enabled: false,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `enabled`                                                  | *boolean*                                                  | :heavy_check_mark:                                         | Whether or not to generate OpenID Connect JSON Web Tokens. |