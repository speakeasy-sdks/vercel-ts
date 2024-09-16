# Subscriptions

## Example Usage

```typescript
import { Subscriptions } from "@simplesagar/vercel/models/authuser.js";

let value: Subscriptions = {
  id: "<id>",
  trial: {
    start: 1348.18,
    end: 3165.01,
  },
  period: {
    start: 9650.9,
    end: 4825.84,
  },
  frequency: {
    interval: "day",
    intervalCount: 7298.28,
  },
  discount: {
    id: "<id>",
    coupon: {
      id: "<id>",
      name: "<value>",
      amountOff: 723.5,
      percentageOff: 691.82,
      durationInMonths: 2801.14,
      duration: "once",
    },
  },
  items: [
    {
      id: "<id>",
      priceId: "<value>",
      productId: "<value>",
      amount: 9025.81,
      quantity: 7348.14,
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