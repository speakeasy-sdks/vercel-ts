# SoftBlock

When the User account has been "soft blocked", this property will contain the date when the restriction was enacted, and the identifier for why.

## Example Usage

```typescript
import { SoftBlock } from "@simplesagar/vercel/models/authuser.js";

let value: SoftBlock = {
  blockedAt: 7088.98,
  reason: "ENTERPRISE_TRIAL_ENDED",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `blockedAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `reason`                                                               | [models.Reason](../models/reason.md)                                   | :heavy_check_mark:                                                     | N/A                                                                    |
| `blockedDueToOverageType`                                              | [models.BlockedDueToOverageType](../models/blockedduetooveragetype.md) | :heavy_minus_sign:                                                     | N/A                                                                    |