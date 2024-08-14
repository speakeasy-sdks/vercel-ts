# Subscriptions

## Example Usage

```typescript
import { Subscriptions } from "@simplesagar/vercel/models/authuser.js";

let value: Subscriptions = {
    id: "<id>",
    trial: {
        start: 2201.04,
        end: 1180.41,
    },
    period: {
        start: 6228.94,
        end: 7847.31,
    },
    frequency: {
        interval: "month",
        intervalCount: 4915.91,
    },
    discount: {
        id: "<id>",
        coupon: {
            id: "<id>",
            name: "<value>",
            amountOff: 4589.7,
            percentageOff: 8541.15,
            durationInMonths: 3223.33,
            duration: "forever",
        },
    },
    items: [
        {
            id: "<id>",
            priceId: "<value>",
            productId: "<value>",
            amount: 3165.01,
            quantity: 9650.9,
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