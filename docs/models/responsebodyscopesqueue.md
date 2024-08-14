# ResponseBodyScopesQueue

## Example Usage

```typescript
import { ResponseBodyScopesQueue } from "@simplesagar/vercel/models/getconfigurationop.js";

let value: ResponseBodyScopesQueue = {
    scopes: {
        added: ["read:user"],
        upgraded: ["read:user"],
    },
    note: "<value>",
    requestedAt: 9364.69,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `scopes`                                                                                                                             | [models.GetConfigurationResponseBodyIntegrationsResponseScopes](../models/getconfigurationresponsebodyintegrationsresponsescopes.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `note`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `requestedAt`                                                                                                                        | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `confirmedAt`                                                                                                                        | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |