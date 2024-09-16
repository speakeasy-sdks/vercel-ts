# ResponseBodyScopesQueue

## Example Usage

```typescript
import { ResponseBodyScopesQueue } from "@simplesagar/vercel/models/getconfigurationsop.js";

let value: ResponseBodyScopesQueue = {
  scopes: {
    added: [
      "read-write:integration-resource",
    ],
    upgraded: [
      "read:user",
    ],
  },
  note: "<value>",
  requestedAt: 8897.94,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `scopes`                                                     | [models.ResponseBodyScopes](../models/responsebodyscopes.md) | :heavy_check_mark:                                           | N/A                                                          |
| `note`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `requestedAt`                                                | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `confirmedAt`                                                | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |