# CreateTeamCoupon

## Example Usage

```typescript
import { CreateTeamCoupon } from "@simplesagar/vercel/models/createteamop.js";

let value: CreateTeamCoupon = {
  id: "<id>",
  name: "<value>",
  amountOff: 6841.26,
  percentageOff: 9195.08,
  durationInMonths: 340.7,
  duration: "once",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `amountOff`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `percentageOff`                                              | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `durationInMonths`                                           | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `duration`                                                   | [models.CreateTeamDuration](../models/createteamduration.md) | :heavy_check_mark:                                           | N/A                                                          |