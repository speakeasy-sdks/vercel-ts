# CreateProjectLink1

## Example Usage

```typescript
import { CreateProjectLink1 } from "@simplesagar/vercel/models/createprojectop.js";

let value: CreateProjectLink1 = {
    deployHooks: [
        {
            id: "<id>",
            name: "<value>",
            ref: "<value>",
            url: "http://dental-narrative.net",
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
| `type`                                                                             | [models.CreateProjectLinkType](../models/createprojectlinktype.md)                 | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `deployHooks`                                                                      | [models.CreateProjectLinkDeployHooks](../models/createprojectlinkdeployhooks.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gitCredentialId`                                                                  | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `sourceless`                                                                       | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `productionBranch`                                                                 | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |