# Crons

## Example Usage

```typescript
import { Crons } from "@simplesagar/vercel/models/updateprojectdatacacheop.js";

let value: Crons = {
    enabledAt: 2444.25,
    disabledAt: 6235.1,
    updatedAt: 1589.69,
    deploymentId: "<value>",
    definitions: [
        {
            host: "vercel.com",
            path: "/api/crons/sync-something?hello=world",
            schedule: "0 0 * * *",
        },
    ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `enabledAt`                                                                                                                        | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The time the feature was enabled for this project. Note: It enables automatically with the first Deployment that outputs cronjobs. |
| `disabledAt`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The time the feature was disabled for this project.                                                                                |
| `updatedAt`                                                                                                                        | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `deploymentId`                                                                                                                     | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The ID of the Deployment from which the definitions originated.                                                                    |
| `definitions`                                                                                                                      | [models.Definitions](../models/definitions.md)[]                                                                                   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |