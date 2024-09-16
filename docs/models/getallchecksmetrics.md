# GetAllChecksMetrics

## Example Usage

```typescript
import { GetAllChecksMetrics } from "@simplesagar/vercel/models/getallchecksop.js";

let value: GetAllChecksMetrics = {
  fcp: {
    value: 6169.34,
    source: "web-vitals",
  },
  lcp: {
    value: 3864.89,
    source: "web-vitals",
  },
  cls: {
    value: 9437.49,
    source: "web-vitals",
  },
  tbt: {
    value: 9025.99,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `fcp`                                                                                        | [models.GetAllChecksFCP](../models/getallchecksfcp.md)                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `lcp`                                                                                        | [models.GetAllChecksLCP](../models/getallcheckslcp.md)                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `cls`                                                                                        | [models.GetAllChecksCLS](../models/getallcheckscls.md)                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `tbt`                                                                                        | [models.GetAllChecksTBT](../models/getallcheckstbt.md)                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `virtualExperienceScore`                                                                     | [models.GetAllChecksVirtualExperienceScore](../models/getallchecksvirtualexperiencescore.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |