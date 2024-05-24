# Three

transfer-in


## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `name`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | The domain name you want to add.                                          | example.com                                                               |
| `method`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | The domain operation to perform. It can be either `add` or `transfer-in`. | transfer-in                                                               |
| `authCode`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | The authorization code assigned to the domain.                            | fdhfr820ad#@FAdlj$$                                                       |
| `expectedPrice`                                                           | *number*                                                                  | :heavy_minus_sign:                                                        | The price you expect to be charged for the required 1 year renewal.       | 8                                                                         |