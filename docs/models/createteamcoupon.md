# CreateTeamCoupon

## Example Usage

```typescript
import { CreateTeamCoupon } from "@simplesagar/vercel/models/createteamop.js";

let value: CreateTeamCoupon = {
    id: "<id>",
    name: "<value>",
    amountOff: 4731.43,
    percentageOff: 5888.12,
    durationInMonths: 8822.84,
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