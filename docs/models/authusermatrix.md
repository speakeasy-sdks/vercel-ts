# AuthUserMatrix

## Example Usage

```typescript
import { AuthUserMatrix } from "@simplesagar/vercel/models/authuser.js";

let value: AuthUserMatrix = {
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