# GitRepo1

## Example Usage

```typescript
import { GitRepo1 } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: GitRepo1 = {
    namespace: "<value>",
    projectId: 193,
    type: "gitlab",
    url: "https://wooden-documentary.com",
    path: "/srv",
    defaultBranch: "<value>",
    name: "<value>",
    private: false,
    ownerType: "team",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `namespace`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `projectId`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [models.GitRepoType](../models/gitrepotype.md)                                                                 | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `url`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `path`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `defaultBranch`                                                                                                | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `private`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `ownerType`                                                                                                    | [models.CreateDeploymentGitRepoDeploymentsOwnerType](../models/createdeploymentgitrepodeploymentsownertype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |