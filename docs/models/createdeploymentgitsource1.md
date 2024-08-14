# CreateDeploymentGitSource1

## Example Usage

```typescript
import { CreateDeploymentGitSource1 } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: CreateDeploymentGitSource1 = {
    type: "github",
    repoId: 5485.19,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [models.CreateDeploymentGitSourceDeploymentsResponseType](../models/createdeploymentgitsourcedeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `repoId`                                                                                                                 | *models.GitSourceRepoId*                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `ref`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `sha`                                                                                                                    | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `prId`                                                                                                                   | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |