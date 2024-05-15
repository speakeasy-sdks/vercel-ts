# One

The membership of the authenticated User in relation to the Team.


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `confirmed`                                                    | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `confirmedAt`                                                  | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `accessRequestedAt`                                            | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `role`                                                         | [components.Role](../../models/components/role.md)             | :heavy_check_mark:                                             | N/A                                                            |
| `teamId`                                                       | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `uid`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `createdAt`                                                    | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `created`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `joinedFrom`                                                   | [components.JoinedFrom](../../models/components/joinedfrom.md) | :heavy_minus_sign:                                             | N/A                                                            |