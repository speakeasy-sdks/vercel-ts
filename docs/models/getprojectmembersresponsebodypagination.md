# GetProjectMembersResponseBodyPagination


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `hasNext`                                                 | *boolean*                                                 | :heavy_check_mark:                                        | N/A                                                       |                                                           |
| `count`                                                   | *number*                                                  | :heavy_check_mark:                                        | Amount of items in the current page.                      | 20                                                        |
| `next`                                                    | *number*                                                  | :heavy_check_mark:                                        | Timestamp that must be used to request the next page.     | 1540095775951                                             |
| `prev`                                                    | *number*                                                  | :heavy_check_mark:                                        | Timestamp that must be used to request the previous page. | 1540095775951                                             |