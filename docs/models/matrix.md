# Matrix

## Example Usage

```typescript
import { Matrix } from "@simplesagar/vercel/models/authuser.js";

let value: Matrix = {
    defaultUnitPrice: "<value>",
    dimensionPrices: {
        key: "<value>",
    },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `defaultUnitPrice`       | *string*                 | :heavy_check_mark:       | N/A                      |
| `dimensionPrices`        | Record<string, *string*> | :heavy_check_mark:       | N/A                      |