# Discount

## Example Usage

```typescript
import { Discount } from "@simplesagar/vercel/models/authuser.js";

let value: Discount = {
  id: "<id>",
  coupon: {
    id: "<id>",
    name: "<value>",
    amountOff: 7847.31,
    percentageOff: 1114.96,
    durationInMonths: 4915.91,
    duration: "repeating",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `coupon`                             | [models.Coupon](../models/coupon.md) | :heavy_check_mark:                   | N/A                                  |