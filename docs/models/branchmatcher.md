# BranchMatcher

## Example Usage

```typescript
import { BranchMatcher } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: BranchMatcher = {
    type: "endsWith",
    pattern: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [models.CreateDeploymentCustomEnvironmentType](../models/createdeploymentcustomenvironmenttype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pattern`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |