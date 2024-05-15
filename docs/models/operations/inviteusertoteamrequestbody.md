# InviteUserToTeamRequestBody


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uid`                                                        | *string*                                                     | :heavy_minus_sign:                                           | The id of the user to invite                                 | kr1PsOIzqEL5Xg6M4VZcZosf                                     |
| `email`                                                      | *string*                                                     | :heavy_minus_sign:                                           | The email address of the user to invite                      | john@example.com                                             |
| `role`                                                       | [operations.Role](../../models/operations/role.md)           | :heavy_minus_sign:                                           | The role of the user to invite                               | MEMBER                                                       |
| `projects`                                                   | [operations.Projects](../../models/operations/projects.md)[] | :heavy_minus_sign:                                           | N/A                                                          |                                                              |