# BlobStores

## Example Usage

```typescript
import { BlobStores } from "@simplesagar/vercel/models/authuser.js";

let value: BlobStores = {
  price: 593.83,
  batch: 5755.34,
  threshold: 8760.27,
  hidden: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `matrix`                                                                                   | [models.AuthUserBillingInvoiceItemsMatrix](../models/authuserbillinginvoiceitemsmatrix.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `tier`                                                                                     | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `price`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `batch`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `threshold`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `hidden`                                                                                   | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `disabledAt`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `enabledAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |