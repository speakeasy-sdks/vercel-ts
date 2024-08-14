# CreateTeamDiscount

## Example Usage

```typescript
import { CreateTeamDiscount } from "@simplesagar/vercel/models/createteamop.js";

let value: CreateTeamDiscount = {
    id: "<id>",
    coupon: {
        id: "<id>",
        name: "<value>",
        amountOff: 7372.79,
        percentageOff: 8723.03,
        durationInMonths: 51.52,
        duration: "forever",
    },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `coupon`                                                 | [models.CreateTeamCoupon](../models/createteamcoupon.md) | :heavy_check_mark:                                       | N/A                                                      |