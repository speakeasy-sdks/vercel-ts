# GetProjectsLink3

## Example Usage

```typescript
import { GetProjectsLink3 } from "@simplesagar/vercel/models/getprojectsop.js";

let value: GetProjectsLink3 = {
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://these-subroutine.net",
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `slug`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `owner`                                                                                                        | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [models.GetProjectsLinkProjectsResponseType](../models/getprojectslinkprojectsresponsetype.md)                 | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `uuid`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `workspaceUuid`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `deployHooks`                                                                                                  | [models.GetProjectsLinkProjectsResponseDeployHooks](../models/getprojectslinkprojectsresponsedeployhooks.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `gitCredentialId`                                                                                              | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `sourceless`                                                                                                   | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `productionBranch`                                                                                             | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |