# GetConfigurationResponseBodyIntegrationsResponseScopesQueue

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsResponseScopesQueue } from "@simplesagar/vercel/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyIntegrationsResponseScopesQueue = {
  scopes: {
    added: [
      "read-write:otel-endpoint",
    ],
    upgraded: [
      "read-write:domain",
    ],
  },
  note: "<value>",
  requestedAt: 1794.1,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `scopes`                                                                                                                             | [models.GetConfigurationResponseBodyIntegrationsResponseScopes](../models/getconfigurationresponsebodyintegrationsresponsescopes.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `note`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `requestedAt`                                                                                                                        | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `confirmedAt`                                                                                                                        | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |