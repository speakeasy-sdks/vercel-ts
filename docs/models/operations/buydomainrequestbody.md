# BuyDomainRequestBody


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `name`                                                        | *string*                                                      | :heavy_check_mark:                                            | The domain name to purchase.                                  | example.com                                                   |
| `expectedPrice`                                               | *number*                                                      | :heavy_minus_sign:                                            | The price you expect to be charged for the purchase.          | 10                                                            |
| `renew`                                                       | *boolean*                                                     | :heavy_minus_sign:                                            | Indicates whether the domain should be automatically renewed. | true                                                          |