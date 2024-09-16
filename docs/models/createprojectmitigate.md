# CreateProjectMitigate

## Example Usage

```typescript
import { CreateProjectMitigate } from "@simplesagar/vercel/models/createprojectop.js";

let value: CreateProjectMitigate = {
  action: "redirect",
  ruleId: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `action`                                                       | [models.CreateProjectAction](../models/createprojectaction.md) | :heavy_check_mark:                                             | N/A                                                            |
| `ruleId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `ttl`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `erl`                                                          | [models.CreateProjectErl](../models/createprojecterl.md)       | :heavy_minus_sign:                                             | N/A                                                            |