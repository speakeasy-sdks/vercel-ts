# AnalyticsUsage

## Example Usage

```typescript
import { AnalyticsUsage } from "@simplesagar/vercel/models/authuser.js";

let value: AnalyticsUsage = {
    price: 3252.97,
    batch: 4483.69,
    threshold: 4969.15,
    hidden: false,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `matrix`                             | [models.Matrix](../models/matrix.md) | :heavy_minus_sign:                   | N/A                                  |
| `tier`                               | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `price`                              | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `batch`                              | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `threshold`                          | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `name`                               | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `hidden`                             | *boolean*                            | :heavy_check_mark:                   | N/A                                  |
| `disabledAt`                         | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `enabledAt`                          | *number*                             | :heavy_minus_sign:                   | N/A                                  |