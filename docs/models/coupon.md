# Coupon

## Example Usage

```typescript
import { Coupon } from "@simplesagar/vercel/models/authuser.js";

let value: Coupon = {
    id: "<id>",
    name: "<value>",
    amountOff: 8915.81,
    percentageOff: 2908.41,
    durationInMonths: 7009.28,
    duration: "forever",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `amountOff`                              | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `percentageOff`                          | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `durationInMonths`                       | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `duration`                               | [models.Duration](../models/duration.md) | :heavy_check_mark:                       | N/A                                      |