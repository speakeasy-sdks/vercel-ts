# GetConfigurationResponseBodyIntegrationsScopesQueue

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsScopesQueue } from "@simplesagar/vercel/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyIntegrationsScopesQueue = {
  scopes: {
    added: [
      "read:user",
    ],
    upgraded: [
      "read:monitoring",
    ],
  },
  note: "<value>",
  requestedAt: 7453.98,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `scopes`                                                                                                             | [models.GetConfigurationResponseBodyIntegrationsScopes](../models/getconfigurationresponsebodyintegrationsscopes.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `note`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `requestedAt`                                                                                                        | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `confirmedAt`                                                                                                        | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |