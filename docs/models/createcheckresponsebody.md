# CreateCheckResponseBody

## Example Usage

```typescript
import { CreateCheckResponseBody } from "@simplesagar/vercel/models/createcheckop.js";

let value: CreateCheckResponseBody = {
  id: "<id>",
  name: "<value>",
  status: "registered",
  blocking: false,
  integrationId: "<value>",
  deploymentId: "<value>",
  createdAt: 5684.34,
  updatedAt: 1352.18,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `path`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `status`                                                           | [models.CreateCheckStatus](../models/createcheckstatus.md)         | :heavy_check_mark:                                                 | N/A                                                                |
| `conclusion`                                                       | [models.CreateCheckConclusion](../models/createcheckconclusion.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `blocking`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `output`                                                           | [models.CreateCheckOutput](../models/createcheckoutput.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `detailsUrl`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `integrationId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `deploymentId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `externalId`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `createdAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `updatedAt`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `startedAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `completedAt`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `rerequestable`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |