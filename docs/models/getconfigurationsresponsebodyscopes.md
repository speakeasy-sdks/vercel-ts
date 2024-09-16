# GetConfigurationsResponseBodyScopes

## Example Usage

```typescript
import { GetConfigurationsResponseBodyScopes } from "@simplesagar/vercel/models/getconfigurationsop.js";

let value: GetConfigurationsResponseBodyScopes = {
  added: [
    "read-write:deployment-check",
  ],
  upgraded: [
    "read-write:project",
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `added`                                    | [models.Added](../models/added.md)[]       | :heavy_check_mark:                         | N/A                                        |
| `upgraded`                                 | [models.Upgraded](../models/upgraded.md)[] | :heavy_check_mark:                         | N/A                                        |