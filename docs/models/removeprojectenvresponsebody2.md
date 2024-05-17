# RemoveProjectEnvResponseBody2


## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `system`                                                                                                                               | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `target`                                                                                                                               | *models.RemoveProjectEnvResponseBodyProjectsTarget*                                                                                    | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `type`                                                                                                                                 | [models.RemoveProjectEnvResponseBodyProjectsType](../models/removeprojectenvresponsebodyprojectstype.md)                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `key`                                                                                                                                  | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `configurationId`                                                                                                                      | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `createdAt`                                                                                                                            | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `updatedAt`                                                                                                                            | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `createdBy`                                                                                                                            | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `updatedBy`                                                                                                                            | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `gitBranch`                                                                                                                            | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `edgeConfigId`                                                                                                                         | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `edgeConfigTokenId`                                                                                                                    | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `contentHint`                                                                                                                          | *models.RemoveProjectEnvResponseBodyProjectsContentHint*                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `internalContentHint`                                                                                                                  | [models.RemoveProjectEnvResponseBodyProjectsInternalContentHint](../models/removeprojectenvresponsebodyprojectsinternalcontenthint.md) | :heavy_minus_sign:                                                                                                                     | Similar to `contentHints`, but should not be exposed to the user.                                                                      |
| `decrypted`                                                                                                                            | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Whether `value` is decrypted.                                                                                                          |
| `comment`                                                                                                                              | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `customEnvironmentId`                                                                                                                  | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |