# CustomEnvironment1

## Example Usage

```typescript
import { CustomEnvironment1 } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: CustomEnvironment1 = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  type: "development",
  createdAt: 2378.07,
  updatedAt: 7955.35,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `slug`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [models.CustomEnvironmentType](../models/customenvironmenttype.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `branchMatcher`                                                                                            | [models.BranchMatcher](../models/branchmatcher.md)                                                         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `domains`                                                                                                  | [models.CreateDeploymentCustomEnvironmentDomains](../models/createdeploymentcustomenvironmentdomains.md)[] | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |