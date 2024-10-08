# CreateAccessGroupRequestBody

## Example Usage

```typescript
import { CreateAccessGroupRequestBody } from "@simplesagar/vercel/models/createaccessgroupop.js";

let value: CreateAccessGroupRequestBody = {
  name: "My access group",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the access group                                                 | My access group                                                              |
| `projects`                                                                   | [models.CreateAccessGroupProjects](../models/createaccessgroupprojects.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
| `membersToAdd`                                                               | *string*[]                                                                   | :heavy_minus_sign:                                                           | List of members to add to the access group.                                  |                                                                              |