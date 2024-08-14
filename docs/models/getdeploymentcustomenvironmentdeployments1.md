# GetDeploymentCustomEnvironmentDeployments1

## Example Usage

```typescript
import { GetDeploymentCustomEnvironmentDeployments1 } from "@simplesagar/vercel/models/getdeploymentop.js";

let value: GetDeploymentCustomEnvironmentDeployments1 = {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    type: "development",
    createdAt: 330.74,
    updatedAt: 5223.71,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `slug`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [models.GetDeploymentCustomEnvironmentDeploymentsType](../models/getdeploymentcustomenvironmentdeploymentstype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `branchMatcher`                                                                                                    | [models.GetDeploymentCustomEnvironmentBranchMatcher](../models/getdeploymentcustomenvironmentbranchmatcher.md)     | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `domains`                                                                                                          | [models.GetDeploymentCustomEnvironmentDomains](../models/getdeploymentcustomenvironmentdomains.md)[]               | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |