# Discount

## Example Usage

```typescript
import { Discount } from "@simplesagar/vercel/models/authuser.js";

let value: Discount = {
    id: "<id>",
    coupon: {
        id: "<id>",
        name: "<value>",
        amountOff: 4407.77,
        percentageOff: 3455.06,
        durationInMonths: 2072.96,
        duration: "repeating",
    },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `coupon`                             | [models.Coupon](../models/coupon.md) | :heavy_check_mark:                   | N/A                                  |