# ResponseBodyScopes

## Example Usage

```typescript
import { ResponseBodyScopes } from "@simplesagar/vercel/models/getconfigurationsop.js";

let value: ResponseBodyScopes = {
  added: [
    "read-write:edge-config",
  ],
  upgraded: [
    "read-write:deployment-check",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `added`                                                            | [models.ResponseBodyAdded](../models/responsebodyadded.md)[]       | :heavy_check_mark:                                                 | N/A                                                                |
| `upgraded`                                                         | [models.ResponseBodyUpgraded](../models/responsebodyupgraded.md)[] | :heavy_check_mark:                                                 | N/A                                                                |