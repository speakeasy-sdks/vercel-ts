# UpdateCheckMetrics

## Example Usage

```typescript
import { UpdateCheckMetrics } from "@simplesagar/vercel/models/updatecheckop.js";

let value: UpdateCheckMetrics = {
  fcp: {
    value: 2088.76,
    source: "web-vitals",
  },
  lcp: {
    value: 6350.59,
    source: "web-vitals",
  },
  cls: {
    value: 1613.09,
    source: "web-vitals",
  },
  tbt: {
    value: 9953,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `fcp`                                                                                      | [models.UpdateCheckFCP](../models/updatecheckfcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lcp`                                                                                      | [models.UpdateCheckLCP](../models/updatechecklcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `cls`                                                                                      | [models.UpdateCheckCLS](../models/updatecheckcls.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `tbt`                                                                                      | [models.UpdateCheckTBT](../models/updatechecktbt.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `virtualExperienceScore`                                                                   | [models.UpdateCheckVirtualExperienceScore](../models/updatecheckvirtualexperiencescore.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |