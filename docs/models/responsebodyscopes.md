# ResponseBodyScopes

## Example Usage

```typescript
import { ResponseBodyScopes } from "@simplesagar/vercel/models/getconfigurationsop.js";

let value: ResponseBodyScopes = {
    added: ["read-write:project-env-vars"],
    upgraded: ["read-write:project-env-vars"],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `added`                                    | [models.Added](../models/added.md)[]       | :heavy_check_mark:                         | N/A                                        |
| `upgraded`                                 | [models.Upgraded](../models/upgraded.md)[] | :heavy_check_mark:                         | N/A                                        |