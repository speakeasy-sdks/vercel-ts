# CancelDeploymentCustomEnvironment1

## Example Usage

```typescript
import { CancelDeploymentCustomEnvironment1 } from "@simplesagar/vercel/models/canceldeploymentop.js";

let value: CancelDeploymentCustomEnvironment1 = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "development",
  createdAt: 2536.42,
  updatedAt: 3299.35,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `slug`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [models.CancelDeploymentCustomEnvironmentType](../models/canceldeploymentcustomenvironmenttype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `branchMatcher`                                                                                    | [models.CustomEnvironmentBranchMatcher](../models/customenvironmentbranchmatcher.md)               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `domains`                                                                                          | [models.CustomEnvironmentDomains](../models/customenvironmentdomains.md)[]                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |