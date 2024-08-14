# ScopesQueue

## Example Usage

```typescript
import { ScopesQueue } from "@simplesagar/vercel/models/getconfigurationsop.js";

let value: ScopesQueue = {
    scopes: {
        added: ["read:integration-configuration"],
        upgraded: ["read-write:integration-resource"],
    },
    note: "<value>",
    requestedAt: 9846.32,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `scopes`                                                     | [models.ResponseBodyScopes](../models/responsebodyscopes.md) | :heavy_check_mark:                                           | N/A                                                          |
| `note`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `requestedAt`                                                | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `confirmedAt`                                                | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |