# EmailInviteCodes1


## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `email`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `role`                                                                                   | [models.EmailInviteCodesRole](../models/emailinvitecodesrole.md)                         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `isDSyncUser`                                                                            | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `expired`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `projects`                                                                               | Record<string, [models.EmailInviteCodesProjects](../models/emailinvitecodesprojects.md)> | :heavy_minus_sign:                                                                       | N/A                                                                                      |