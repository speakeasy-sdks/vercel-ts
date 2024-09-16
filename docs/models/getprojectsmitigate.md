# GetProjectsMitigate

## Example Usage

```typescript
import { GetProjectsMitigate } from "@simplesagar/vercel/models/getprojectsop.js";

let value: GetProjectsMitigate = {
  action: "deny",
  ruleId: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `action`                                                   | [models.GetProjectsAction](../models/getprojectsaction.md) | :heavy_check_mark:                                         | N/A                                                        |
| `ruleId`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `ttl`                                                      | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `erl`                                                      | [models.GetProjectsErl](../models/getprojectserl.md)       | :heavy_minus_sign:                                         | N/A                                                        |