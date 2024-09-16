# GitRepo2

## Example Usage

```typescript
import { GitRepo2 } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: GitRepo2 = {
  org: "<value>",
  repo: "<value>",
  repoId: 3783.26,
  type: "github",
  repoOwnerId: "<value>",
  path: "/sys",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "team",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `org`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `repo`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `repoId`                                                                       | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | [models.CreateDeploymentGitRepoType](../models/createdeploymentgitrepotype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `repoOwnerId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `path`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `defaultBranch`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `private`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `ownerType`                                                                    | [models.GitRepoOwnerType](../models/gitrepoownertype.md)                       | :heavy_check_mark:                                                             | N/A                                                                            |