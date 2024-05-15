# SoftBlock

When the User account has been "soft blocked", this property will contain the date when the restriction was enacted, and the identifier for why.


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `blockedAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `reason`                                                               | [models.Reason](../models/reason.md)                                   | :heavy_check_mark:                                                     | N/A                                                                    |
| `blockedDueToOverageType`                                              | [models.BlockedDueToOverageType](../models/blockedduetooveragetype.md) | :heavy_minus_sign:                                                     | N/A                                                                    |