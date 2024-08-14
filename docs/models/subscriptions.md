# Subscriptions

## Example Usage

```typescript
import { Subscriptions } from "@simplesagar/vercel/models/authuser.js";

let value: Subscriptions = {
    id: "<id>",
    trial: {
        start: 7538.9,
        end: 8536.06,
    },
    period: {
        start: 6040.78,
        end: 8894.48,
    },
    frequency: {
        interval: "day",
        intervalCount: 2201.04,
    },
    discount: {
        id: "<id>",
        coupon: {
            id: "<id>",
            name: "<value>",
            amountOff: 1180.41,
            percentageOff: 6228.94,
            durationInMonths: 7847.31,
            duration: "forever",
        },
    },
    items: [
        {
            id: "<id>",
            priceId: "<value>",
            productId: "<value>",
            amount: 4915.91,
            quantity: 4589.7,
        },
    ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `trial`                                              | [models.AuthUserTrial](../models/authusertrial.md)   | :heavy_check_mark:                                   | N/A                                                  |
| `period`                                             | [models.AuthUserPeriod](../models/authuserperiod.md) | :heavy_check_mark:                                   | N/A                                                  |
| `frequency`                                          | [models.Frequency](../models/frequency.md)           | :heavy_check_mark:                                   | N/A                                                  |
| `discount`                                           | [models.Discount](../models/discount.md)             | :heavy_check_mark:                                   | N/A                                                  |
| `items`                                              | [models.Items](../models/items.md)[]                 | :heavy_check_mark:                                   | N/A                                                  |