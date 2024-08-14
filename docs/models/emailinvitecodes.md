# EmailInviteCodes

## Example Usage

```typescript
import { EmailInviteCodes } from "@simplesagar/vercel/models/getteammembersop.js";

let value: EmailInviteCodes = {
    id: "<id>",
    isDSyncUser: false,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accessGroups`                                                                                 | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `email`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `role`                                                                                         | [models.GetTeamMembersTeamsRole](../models/getteammembersteamsrole.md)                         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `isDSyncUser`                                                                                  | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `expired`                                                                                      | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `projects`                                                                                     | Record<string, [models.GetTeamMembersTeamsProjects](../models/getteammembersteamsprojects.md)> | :heavy_minus_sign:                                                                             | N/A                                                                                            |