# GitSource1

## Example Usage

```typescript
import { GitSource1 } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: GitSource1 = {
  ref: "<value>",
  repoId: "<value>",
  type: "github",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`                                                                                                                                        | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `repoId`                                                                                                                                     | *models.RepoId*                                                                                                                              | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `sha`                                                                                                                                        | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `type`                                                                                                                                       | [models.CreateDeploymentGitSourceDeploymentsRequestRequestBodyType](../models/createdeploymentgitsourcedeploymentsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |