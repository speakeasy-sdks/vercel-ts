# GetDeploymentGitRepo1

## Example Usage

```typescript
import { GetDeploymentGitRepo1 } from "@simplesagar/vercel/models/getdeploymentop.js";

let value: GetDeploymentGitRepo1 = {
    namespace: "<value>",
    projectId: 3807.29,
    type: "gitlab",
    url: "http://polite-placement.org",
    path: "/rescue",
    defaultBranch: "<value>",
    name: "<value>",
    private: false,
    ownerType: "user",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `namespace`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `projectId`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [models.GetDeploymentGitRepoDeploymentsResponseType](../models/getdeploymentgitrepodeploymentsresponsetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `url`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `path`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `defaultBranch`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `private`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `ownerType`                                                                                                    | [models.GetDeploymentGitRepoDeploymentsOwnerType](../models/getdeploymentgitrepodeploymentsownertype.md)       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |