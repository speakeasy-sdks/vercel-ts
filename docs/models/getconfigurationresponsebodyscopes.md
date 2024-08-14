# GetConfigurationResponseBodyScopes

## Example Usage

```typescript
import { GetConfigurationResponseBodyScopes } from "@simplesagar/vercel/models/getconfigurationop.js";

let value: GetConfigurationResponseBodyScopes = {
    added: ["read:deployment"],
    upgraded: ["read:domain"],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `added`                                                                                            | [models.GetConfigurationResponseBodyAdded](../models/getconfigurationresponsebodyadded.md)[]       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `upgraded`                                                                                         | [models.GetConfigurationResponseBodyUpgraded](../models/getconfigurationresponsebodyupgraded.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |