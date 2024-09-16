# Cls

## Example Usage

```typescript
import { Cls } from "@simplesagar/vercel/models/updatecheckop.js";

let value: Cls = {
  value: 4,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `value`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | Cumulative Layout Shift value                                                        | 4                                                                                    |
| `previousValue`                                                                      | *number*                                                                             | :heavy_minus_sign:                                                                   | Previous Cumulative Layout Shift value to display a delta                            | 2                                                                                    |
| `source`                                                                             | [models.UpdateCheckChecksRequestSource](../models/updatecheckchecksrequestsource.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |