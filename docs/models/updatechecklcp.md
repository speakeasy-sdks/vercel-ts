# UpdateCheckLCP

## Example Usage

```typescript
import { UpdateCheckLCP } from "@simplesagar/vercel/models/updatecheckop.js";

let value: UpdateCheckLCP = {
    value: 9589.5,
    source: "web-vitals",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `value`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `previousValue`                                                                              | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `source`                                                                                     | [models.UpdateCheckChecksResponse200Source](../models/updatecheckchecksresponse200source.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |