# CreateCheckMetrics

## Example Usage

```typescript
import { CreateCheckMetrics } from "@simplesagar/vercel/models/createcheckop.js";

let value: CreateCheckMetrics = {
  fcp: {
    value: 1863.32,
    source: "web-vitals",
  },
  lcp: {
    value: 7742.34,
    source: "web-vitals",
  },
  cls: {
    value: 7369.18,
    source: "web-vitals",
  },
  tbt: {
    value: 4561.5,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `fcp`                                                                                      | [models.CreateCheckFCP](../models/createcheckfcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lcp`                                                                                      | [models.CreateCheckLCP](../models/createchecklcp.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `cls`                                                                                      | [models.CreateCheckCLS](../models/createcheckcls.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `tbt`                                                                                      | [models.CreateCheckTBT](../models/createchecktbt.md)                                       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `virtualExperienceScore`                                                                   | [models.CreateCheckVirtualExperienceScore](../models/createcheckvirtualexperiencescore.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |