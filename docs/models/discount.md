# Discount

## Example Usage

```typescript
import { Discount } from "@simplesagar/vercel/models/authuser.js";

let value: Discount = {
    id: "<id>",
    coupon: {
        id: "<id>",
        name: "<value>",
        amountOff: 5221.76,
        percentageOff: 7538.9,
        durationInMonths: 8536.06,
        duration: "repeating",
    },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `coupon`                             | [models.Coupon](../models/coupon.md) | :heavy_check_mark:                   | N/A                                  |