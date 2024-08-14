# CreateCheckFCP

## Example Usage

```typescript
import { CreateCheckFCP } from "@simplesagar/vercel/models/createcheckop.js";

let value: CreateCheckFCP = {
    value: 1059.07,
    source: "web-vitals",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `value`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `previousValue`                                            | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `source`                                                   | [models.CreateCheckSource](../models/createchecksource.md) | :heavy_check_mark:                                         | N/A                                                        |