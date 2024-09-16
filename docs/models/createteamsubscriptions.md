# CreateTeamSubscriptions

## Example Usage

```typescript
import { CreateTeamSubscriptions } from "@simplesagar/vercel/models/createteamop.js";

let value: CreateTeamSubscriptions = {
  id: "<id>",
  trial: {
    start: 1276.88,
    end: 3589.95,
  },
  period: {
    start: 6214.73,
    end: 9371.17,
  },
  frequency: {
    interval: "month",
    intervalCount: 9233.06,
  },
  discount: {
    id: "<id>",
    coupon: {
      id: "<id>",
      name: "<value>",
      amountOff: 6308.71,
      percentageOff: 2828.37,
      durationInMonths: 6937.46,
      duration: "repeating",
    },
  },
  items: [
    {
      id: "<id>",
      priceId: "<value>",
      productId: "<value>",
      amount: 1062.55,
      quantity: 6002.13,
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `trial`                                                            | [models.CreateTeamTeamsTrial](../models/createteamteamstrial.md)   | :heavy_check_mark:                                                 | N/A                                                                |
| `period`                                                           | [models.CreateTeamTeamsPeriod](../models/createteamteamsperiod.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `frequency`                                                        | [models.CreateTeamFrequency](../models/createteamfrequency.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `discount`                                                         | [models.CreateTeamDiscount](../models/createteamdiscount.md)       | :heavy_check_mark:                                                 | N/A                                                                |
| `items`                                                            | [models.CreateTeamItems](../models/createteamitems.md)[]           | :heavy_check_mark:                                                 | N/A                                                                |