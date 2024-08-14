# UpdateCheckResponseBody

## Example Usage

```typescript
import { UpdateCheckResponseBody } from "@simplesagar/vercel/models/updatecheckop.js";

let value: UpdateCheckResponseBody = {
    id: "<id>",
    name: "<value>",
    status: "running",
    blocking: false,
    integrationId: "<value>",
    deploymentId: "<value>",
    createdAt: 2532.91,
    updatedAt: 4143.69,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `path`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `status`                                                               | [models.UpdateCheckChecksStatus](../models/updatecheckchecksstatus.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `conclusion`                                                           | [models.UpdateCheckConclusion](../models/updatecheckconclusion.md)     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `blocking`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `output`                                                               | [models.UpdateCheckOutput](../models/updatecheckoutput.md)             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `detailsUrl`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `integrationId`                                                        | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `deploymentId`                                                         | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `externalId`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `createdAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `updatedAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `startedAt`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `completedAt`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `rerequestable`                                                        | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |