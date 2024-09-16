# GetCheckFCP

## Example Usage

```typescript
import { GetCheckFCP } from "@simplesagar/vercel/models/getcheckop.js";

let value: GetCheckFCP = {
  value: 9698.1,
  source: "web-vitals",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `value`                                              | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `previousValue`                                      | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `source`                                             | [models.GetCheckSource](../models/getchecksource.md) | :heavy_check_mark:                                   | N/A                                                  |