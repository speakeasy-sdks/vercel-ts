# CustomEnvironmentBranchMatcher

## Example Usage

```typescript
import { CustomEnvironmentBranchMatcher } from "@simplesagar/vercel/models/canceldeploymentop.js";

let value: CustomEnvironmentBranchMatcher = {
    type: "endsWith",
    pattern: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [models.CancelDeploymentCustomEnvironmentDeploymentsType](../models/canceldeploymentcustomenvironmentdeploymentstype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `pattern`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |