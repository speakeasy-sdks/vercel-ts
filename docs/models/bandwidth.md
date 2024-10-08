# Bandwidth

## Example Usage

```typescript
import { Bandwidth } from "@simplesagar/vercel/models/authuser.js";

let value: Bandwidth = {
  price: 4633.44,
  batch: 2114.55,
  threshold: 2646.19,
  hidden: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `matrix`                                                           | [models.AuthUserBillingMatrix](../models/authuserbillingmatrix.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `tier`                                                             | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `price`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `batch`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `threshold`                                                        | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `hidden`                                                           | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `disabledAt`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `enabledAt`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |