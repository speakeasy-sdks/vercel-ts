# GetConfigurationResponseBodyIntegrationsScopes

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsScopes } from "@simplesagar/vercel/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyIntegrationsScopes = {
  added: [
    "read-write:integration-configuration",
  ],
  upgraded: [
    "read:user",
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `added`                                                                                                                    | [models.GetConfigurationResponseBodyIntegrationsAdded](../models/getconfigurationresponsebodyintegrationsadded.md)[]       | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `upgraded`                                                                                                                 | [models.GetConfigurationResponseBodyIntegrationsUpgraded](../models/getconfigurationresponsebodyintegrationsupgraded.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |