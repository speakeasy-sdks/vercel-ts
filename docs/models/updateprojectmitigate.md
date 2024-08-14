# UpdateProjectMitigate

## Example Usage

```typescript
import { UpdateProjectMitigate } from "@simplesagar/vercel/models/updateprojectop.js";

let value: UpdateProjectMitigate = {
    action: "bypass",
    ruleId: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `action`                                                       | [models.UpdateProjectAction](../models/updateprojectaction.md) | :heavy_check_mark:                                             | N/A                                                            |
| `ruleId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `ttl`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `erl`                                                          | [models.UpdateProjectErl](../models/updateprojecterl.md)       | :heavy_minus_sign:                                             | N/A                                                            |