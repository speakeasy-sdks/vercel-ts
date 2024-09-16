# CreateTeamDiscount

## Example Usage

```typescript
import { CreateTeamDiscount } from "@simplesagar/vercel/models/createteamop.js";

let value: CreateTeamDiscount = {
  id: "<id>",
  coupon: {
    id: "<id>",
    name: "<value>",
    amountOff: 8852.08,
    percentageOff: 1770.05,
    durationInMonths: 8448.54,
    duration: "repeating",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `coupon`                                                 | [models.CreateTeamCoupon](../models/createteamcoupon.md) | :heavy_check_mark:                                       | N/A                                                      |