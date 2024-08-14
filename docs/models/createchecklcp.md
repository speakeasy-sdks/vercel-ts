# CreateCheckLCP

## Example Usage

```typescript
import { CreateCheckLCP } from "@simplesagar/vercel/models/createcheckop.js";

let value: CreateCheckLCP = {
    value: 4146.62,
    source: "web-vitals",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `value`                                                                | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousValue`                                                        | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `source`                                                               | [models.CreateCheckChecksSource](../models/createcheckcheckssource.md) | :heavy_check_mark:                                                     | N/A                                                                    |