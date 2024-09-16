# Coupon

## Example Usage

```typescript
import { Coupon } from "@simplesagar/vercel/models/authuser.js";

let value: Coupon = {
  id: "<id>",
  name: "<value>",
  amountOff: 4956.17,
  percentageOff: 2201.04,
  durationInMonths: 1180.41,
  duration: "repeating",
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