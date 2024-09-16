# Mitigate

## Example Usage

```typescript
import { Mitigate } from "@simplesagar/vercel/models/updateprojectdatacacheop.js";

let value: Mitigate = {
  action: "rate_limit",
  ruleId: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `action`                             | [models.Action](../models/action.md) | :heavy_check_mark:                   | N/A                                  |
| `ruleId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `ttl`                                | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `erl`                                | [models.Erl](../models/erl.md)       | :heavy_minus_sign:                   | N/A                                  |