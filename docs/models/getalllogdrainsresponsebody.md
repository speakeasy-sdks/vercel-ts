# GetAllLogDrainsResponseBody

## Example Usage

```typescript
import { GetAllLogDrainsResponseBody } from "@simplesagar/vercel/models/getalllogdrainsop.js";

let value: GetAllLogDrainsResponseBody = {
  id: "<id>",
  deliveryFormat: "ndjson",
  url: "http://cautious-species.info",
  name: "<value>",
  ownerId: "<value>",
  createdAt: 7758.03,
  deletedAt: 4053.73,
  updatedAt: 2811.53,
  environments: [
    "production",
  ],
  secret: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deliveryFormat`                                                                   | [models.GetAllLogDrainsDeliveryFormat](../models/getalllogdrainsdeliveryformat.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `clientId`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `configurationId`                                                                  | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `teamId`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `ownerId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectIds`                                                                       | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deletedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sources`                                                                          | [models.GetAllLogDrainsSources](../models/getalllogdrainssources.md)[]             | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `headers`                                                                          | Record<string, *string*>                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `environments`                                                                     | [models.GetAllLogDrainsEnvironments](../models/getalllogdrainsenvironments.md)[]   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `status`                                                                           | [models.GetAllLogDrainsStatus](../models/getalllogdrainsstatus.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledAt`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledReason`                                                                   | [models.GetAllLogDrainsDisabledReason](../models/getalllogdrainsdisabledreason.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabledBy`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `firstErrorTimestamp`                                                              | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `samplingRate`                                                                     | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `compression`                                                                      | [models.GetAllLogDrainsCompression](../models/getalllogdrainscompression.md)       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `secret`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdFrom`                                                                      | [models.GetAllLogDrainsCreatedFrom](../models/getalllogdrainscreatedfrom.md)       | :heavy_minus_sign:                                                                 | N/A                                                                                |