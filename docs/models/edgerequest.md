# EdgeRequest

## Example Usage

```typescript
import { EdgeRequest } from "@simplesagar/vercel/models/authuser.js";

let value: EdgeRequest = {
    price: 5782.1,
    batch: 3679.17,
    threshold: 3063.82,
    hidden: false,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `matrix`                                                                                                         | [models.AuthUserBillingInvoiceItemsEdgeRequestMatrix](../models/authuserbillinginvoiceitemsedgerequestmatrix.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `tier`                                                                                                           | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `price`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `batch`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `threshold`                                                                                                      | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `hidden`                                                                                                         | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `disabledAt`                                                                                                     | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `enabledAt`                                                                                                      | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |