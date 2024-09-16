# Three

## Example Usage

```typescript
import { Three } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: Three = {
  projectId: 4895.09,
  ref: "<value>",
  type: "gitlab",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectId`                                                                        | *models.ProjectId*                                                                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ref`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sha`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.CreateDeploymentGitSourceType](../models/createdeploymentgitsourcetype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |