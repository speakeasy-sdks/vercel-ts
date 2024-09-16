# GitRepo3

## Example Usage

```typescript
import { GitRepo3 } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: GitRepo3 = {
  owner: "<value>",
  repoUuid: "<value>",
  slug: "<value>",
  type: "bitbucket",
  workspaceUuid: "<value>",
  path: "/opt/sbin",
  defaultBranch: "<value>",
  name: "<value>",
  private: false,
  ownerType: "user",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `owner`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `repoUuid`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `slug`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [models.CreateDeploymentGitRepoDeploymentsType](../models/createdeploymentgitrepodeploymentstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `workspaceUuid`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `path`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `defaultBranch`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `private`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ownerType`                                                                                          | [models.CreateDeploymentGitRepoOwnerType](../models/createdeploymentgitrepoownertype.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |