# GetConfigurationResponseBodyIntegrationsResponseScopes

## Example Usage

```typescript
import { GetConfigurationResponseBodyIntegrationsResponseScopes } from "@simplesagar/vercel/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyIntegrationsResponseScopes = {
    added: ["read-write:deployment-check"],
    upgraded: ["read:deployment"],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `added`                                                            | [models.ResponseBodyAdded](../models/responsebodyadded.md)[]       | :heavy_check_mark:                                                 | N/A                                                                |
| `upgraded`                                                         | [models.ResponseBodyUpgraded](../models/responsebodyupgraded.md)[] | :heavy_check_mark:                                                 | N/A                                                                |