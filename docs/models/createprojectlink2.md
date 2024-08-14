# CreateProjectLink2

## Example Usage

```typescript
import { CreateProjectLink2 } from "@simplesagar/vercel/models/createprojectop.js";

let value: CreateProjectLink2 = {
    deployHooks: [
        {
            id: "<id>",
            name: "<value>",
            ref: "<value>",
            url: "http://crisp-hen.net",
        },
    ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `projectName`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `projectNameWithNamespace`                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `projectNamespace`                                                                                 | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `projectUrl`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [models.CreateProjectLinkProjectsType](../models/createprojectlinkprojectstype.md)                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `deployHooks`                                                                                      | [models.CreateProjectLinkProjectsDeployHooks](../models/createprojectlinkprojectsdeployhooks.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `gitCredentialId`                                                                                  | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `sourceless`                                                                                       | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `productionBranch`                                                                                 | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |