# One

The membership of the authenticated User in relation to the Team.


## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `confirmed`                                  | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `confirmedAt`                                | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `accessRequestedAt`                          | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `role`                                       | [models.Role](../models/role.md)             | :heavy_check_mark:                           | N/A                                          |
| `teamId`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `uid`                                        | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `createdAt`                                  | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `created`                                    | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `joinedFrom`                                 | [models.JoinedFrom](../models/joinedfrom.md) | :heavy_minus_sign:                           | N/A                                          |