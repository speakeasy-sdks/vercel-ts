# CreateTeamSubscriptions

## Example Usage

```typescript
import { CreateTeamSubscriptions } from "@simplesagar/vercel/models/createteamop.js";

let value: CreateTeamSubscriptions = {
    id: "<id>",
    trial: {
        start: 5156.38,
        end: 3572.07,
    },
    period: {
        start: 8890.6,
        end: 9729.12,
    },
    frequency: {
        interval: "week",
        intervalCount: 8723.03,
    },
    discount: {
        id: "<id>",
        coupon: {
            id: "<id>",
            name: "<value>",
            amountOff: 51.52,
            percentageOff: 1566.53,
            durationInMonths: 6941.58,
            duration: "once",
        },
    },
    items: [
        {
            id: "<id>",
            priceId: "<value>",
            productId: "<value>",
            amount: 9195.08,
            quantity: 340.7,
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