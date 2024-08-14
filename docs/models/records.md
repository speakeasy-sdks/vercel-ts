# Records

## Example Usage

```typescript
import { Records } from "@simplesagar/vercel/models/getrecordsop.js";

let value: Records = {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    type: "HTTPS",
    value: "<value>",
    creator: "<value>",
    created: 3000.29,
    updated: 9063.55,
    createdAt: 1604.67,
    updatedAt: 5801.07,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `slug`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `type`                                                                       | [models.GetRecordsResponseBodyType](../models/getrecordsresponsebodytype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `value`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `mxPriority`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `priority`                                                                   | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `creator`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `created`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `updated`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `updatedAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |