# GetProjectsLink1

## Example Usage

```typescript
import { GetProjectsLink1 } from "@simplesagar/vercel/models/getprojectsop.js";

let value: GetProjectsLink1 = {
    deployHooks: [
        {
            id: "<id>",
            name: "<value>",
            ref: "<value>",
            url: "http://tragic-framework.org",
        },
    ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `org`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `repo`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `repoId`                                                                       | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | [models.GetProjectsLinkType](../models/getprojectslinktype.md)                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `deployHooks`                                                                  | [models.GetProjectsLinkDeployHooks](../models/getprojectslinkdeployhooks.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `gitCredentialId`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `updatedAt`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sourceless`                                                                   | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `productionBranch`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |