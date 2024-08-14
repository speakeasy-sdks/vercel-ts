# CreateCheckTBT

## Example Usage

```typescript
import { CreateCheckTBT } from "@simplesagar/vercel/models/createcheckop.js";

let value: CreateCheckTBT = {
    value: 2645.55,
    source: "web-vitals",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `value`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `previousValue`                                                                              | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `source`                                                                                     | [models.CreateCheckChecksResponse200Source](../models/createcheckchecksresponse200source.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |