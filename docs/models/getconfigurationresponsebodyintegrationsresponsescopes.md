# GetConfigurationResponseBodyIntegrationsResponseScopes

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsResponseScopes } from "@simplesagar/vercel/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyIntegrationsResponseScopes = {
  added: [
    "read-write:deployment-check",
  ],
  upgraded: [
    "read:team",
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `added`                                                                                                                                    | [models.GetConfigurationResponseBodyIntegrationsResponseAdded](../models/getconfigurationresponsebodyintegrationsresponseadded.md)[]       | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `upgraded`                                                                                                                                 | [models.GetConfigurationResponseBodyIntegrationsResponseUpgraded](../models/getconfigurationresponsebodyintegrationsresponseupgraded.md)[] | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |