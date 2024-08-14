# Billing

An object containing billing infomation associated with the User account.

## Example Usage

```typescript
import { Billing } from "@simplesagar/vercel/models/authuser.js";

let value: Billing = {
    period: {
        start: 4912.01,
        end: 7298.28,
    },
    plan: "pro",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `currency`                                                 | [models.Currency](../models/currency.md)                   | :heavy_minus_sign:                                         | N/A                                                        |
| `cancelation`                                              | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `period`                                                   | [models.Period](../models/period.md)                       | :heavy_check_mark:                                         | N/A                                                        |
| `contract`                                                 | [models.Contract](../models/contract.md)                   | :heavy_minus_sign:                                         | N/A                                                        |
| `plan`                                                     | [models.Plan](../models/plan.md)                           | :heavy_check_mark:                                         | N/A                                                        |
| `planIteration`                                            | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `platform`                                                 | [models.Platform](../models/platform.md)                   | :heavy_minus_sign:                                         | N/A                                                        |
| `orbCustomerId`                                            | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `syncedAt`                                                 | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `programType`                                              | [models.ProgramType](../models/programtype.md)             | :heavy_minus_sign:                                         | N/A                                                        |
| `trial`                                                    | [models.Trial](../models/trial.md)                         | :heavy_minus_sign:                                         | N/A                                                        |
| `email`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `tax`                                                      | [models.Tax](../models/tax.md)                             | :heavy_minus_sign:                                         | N/A                                                        |
| `language`                                                 | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `address`                                                  | [models.Address](../models/address.md)                     | :heavy_minus_sign:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `invoiceItems`                                             | [models.InvoiceItems](../models/invoiceitems.md)           | :heavy_minus_sign:                                         | N/A                                                        |
| `invoiceSettings`                                          | [models.InvoiceSettings](../models/invoicesettings.md)     | :heavy_minus_sign:                                         | N/A                                                        |
| `subscriptions`                                            | [models.Subscriptions](../models/subscriptions.md)[]       | :heavy_minus_sign:                                         | N/A                                                        |
| `controls`                                                 | [models.Controls](../models/controls.md)                   | :heavy_minus_sign:                                         | N/A                                                        |
| `purchaseOrder`                                            | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `status`                                                   | [models.Status](../models/status.md)                       | :heavy_minus_sign:                                         | N/A                                                        |
| `pricingExperiment`                                        | [models.PricingExperiment](../models/pricingexperiment.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `orbMigrationScheduledAt`                                  | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `forceOrbMigration`                                        | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `awsMarketplace`                                           | [models.AwsMarketplace](../models/awsmarketplace.md)       | :heavy_minus_sign:                                         | N/A                                                        |
| `reseller`                                                 | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |