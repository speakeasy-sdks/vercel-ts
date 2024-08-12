# CreateTeamVercelMarketplace

Will be used to create an invoice item. The price must be in cents: 2000 for $20.


## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tier`                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `price`                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `quantity`                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `highestQuantity`                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | The highest quantity in the current period. Used to render the correct enable/disable UI for add-ons.                                                                                                                        |
| `name`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `hidden`                                                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `createdAt`                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `disabledAt`                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `frequency`                                                                                                                                                                                                                  | [models.CreateTeamTeamsResponse200ApplicationJSONResponseBodyBillingInvoiceItemsVercelMarketplaceFrequency](../models/createteamteamsresponse200applicationjsonresponsebodybillinginvoiceitemsvercelmarketplacefrequency.md) | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `maxQuantity`                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |