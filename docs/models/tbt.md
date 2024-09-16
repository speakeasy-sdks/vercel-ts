# Tbt

## Example Usage

```typescript
import { Tbt } from "@simplesagar/vercel/models/updatecheckop.js";

let value: Tbt = {
  value: 3000,
  source: "web-vitals",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Total Blocking Time value                                                                                  | 3000                                                                                                       |
| `previousValue`                                                                                            | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Previous Total Blocking Time value to display a delta                                                      | 3500                                                                                                       |
| `source`                                                                                                   | [models.UpdateCheckChecksRequestRequestBodySource](../models/updatecheckchecksrequestrequestbodysource.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |