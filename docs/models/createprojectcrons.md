# CreateProjectCrons

## Example Usage

```typescript
import { CreateProjectCrons } from "@simplesagar/vercel/models/createprojectop.js";

let value: CreateProjectCrons = {
  enabledAt: 6793.93,
  disabledAt: 4785.96,
  updatedAt: 4536.97,
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
| `definitions`                                                                                                                      | [models.CreateProjectDefinitions](../models/createprojectdefinitions.md)[]                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |