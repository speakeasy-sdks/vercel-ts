# CreateTeamDiscount

## Example Usage

```typescript
import { CreateTeamDiscount } from "@simplesagar/vercel/models/createteamop.js";

let value: CreateTeamDiscount = {
    id: "<id>",
    coupon: {
        id: "<id>",
        name: "<value>",
        amountOff: 7332.89,
        percentageOff: 5750.78,
        durationInMonths: 4097.26,
        duration: "repeating",
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `coupon`                                                 | [models.CreateTeamCoupon](../models/createteamcoupon.md) | :heavy_check_mark:                                       | N/A                                                      |