# GetConfigurationResponseBodyScopesQueue

## Example Usage

```typescript
import { GetConfigurationResponseBodyScopesQueue } from "@simplesagar/vercel/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyScopesQueue = {
    scopes: {
        added: ["read-write:deployment-check"],
        upgraded: ["read-write:project"],
    },
    note: "<value>",
    requestedAt: 820.57,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `scopes`                                                                                     | [models.GetConfigurationResponseBodyScopes](../models/getconfigurationresponsebodyscopes.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `note`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestedAt`                                                                                | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `confirmedAt`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |