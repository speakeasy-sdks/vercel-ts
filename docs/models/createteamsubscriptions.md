# CreateTeamSubscriptions

## Example Usage

```typescript
import { CreateTeamSubscriptions } from "@simplesagar/vercel/models/createteamop.js";

let value: CreateTeamSubscriptions = {
    id: "<id>",
    trial: {
        start: 9195.08,
        end: 340.7,
    },
    period: {
        start: 7104.56,
        end: 8852.08,
    },
    frequency: {
        interval: "month",
        intervalCount: 8448.54,
    },
    discount: {
        id: "<id>",
        coupon: {
            id: "<id>",
            name: "<value>",
            amountOff: 4835.18,
            percentageOff: 5101.28,
            durationInMonths: 1403.16,
            duration: "forever",
        },
    },
    items: [
        {
            id: "<id>",
            priceId: "<value>",
            productId: "<value>",
            amount: 3589.95,
            quantity: 6214.73,
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