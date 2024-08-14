# GetConfigurationResponseBodyScopesQueue

## Example Usage

```typescript
import { GetConfigurationResponseBodyScopesQueue } from "@simplesagar/vercel/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyScopesQueue = {
    scopes: {
        added: ["read:team"],
        upgraded: ["read-write:otel-endpoint"],
    },
    note: "<value>",
    requestedAt: 7730.84,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `scopes`                                                                                     | [models.GetConfigurationResponseBodyScopes](../models/getconfigurationresponsebodyscopes.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `note`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestedAt`                                                                                | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `confirmedAt`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |