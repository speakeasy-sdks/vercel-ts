# UpdateProjectLink1

## Example Usage

```typescript
import { UpdateProjectLink1 } from "@simplesagar/vercel/models/updateprojectop.js";

let value: UpdateProjectLink1 = {
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://striped-deduce.info",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `org`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `repo`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `repoId`                                                                           | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.UpdateProjectLinkType](../models/updateprojectlinktype.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `deployHooks`                                                                      | [models.UpdateProjectLinkDeployHooks](../models/updateprojectlinkdeployhooks.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gitCredentialId`                                                                  | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `sourceless`                                                                       | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `productionBranch`                                                                 | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |