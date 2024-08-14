# GetAllChecksChecks

## Example Usage

```typescript
import { GetAllChecksChecks } from "@simplesagar/vercel/models/getallchecksop.js";

let value: GetAllChecksChecks = {
    createdAt: 3595.08,
    id: "<id>",
    integrationId: "<value>",
    name: "<value>",
    rerequestable: false,
    status: "running",
    updatedAt: 4370.32,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `completedAt`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `conclusion`                                                         | [models.GetAllChecksConclusion](../models/getallchecksconclusion.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `createdAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `detailsUrl`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `integrationId`                                                      | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `output`                                                             | [models.GetAllChecksOutput](../models/getallchecksoutput.md)         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `path`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `rerequestable`                                                      | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `startedAt`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `status`                                                             | [models.GetAllChecksStatus](../models/getallchecksstatus.md)         | :heavy_check_mark:                                                   | N/A                                                                  |
| `updatedAt`                                                          | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |