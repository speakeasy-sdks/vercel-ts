# GetConfigurableLogDrainResponseBody


## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `deliveryFormat`                                                                                   | [models.GetConfigurableLogDrainDeliveryFormat](../models/getconfigurablelogdraindeliveryformat.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `clientId`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `configurationId`                                                                                  | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `teamId`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `ownerId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `projectIds`                                                                                       | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `sources`                                                                                          | [models.GetConfigurableLogDrainSources](../models/getconfigurablelogdrainsources.md)[]             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `headers`                                                                                          | Record<string, *string*>                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `environments`                                                                                     | [models.GetConfigurableLogDrainEnvironments](../models/getconfigurablelogdrainenvironments.md)[]   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [models.GetConfigurableLogDrainStatus](../models/getconfigurablelogdrainstatus.md)                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `disabledAt`                                                                                       | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `disabledReason`                                                                                   | [models.DisabledReason](../models/disabledreason.md)                                               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `disabledBy`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `firstErrorTimestamp`                                                                              | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `samplingRate`                                                                                     | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `compression`                                                                                      | [models.Compression](../models/compression.md)                                                     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `secret`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdFrom`                                                                                      | [models.GetConfigurableLogDrainCreatedFrom](../models/getconfigurablelogdraincreatedfrom.md)       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |