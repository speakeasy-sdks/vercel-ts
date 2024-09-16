# Metrics

Metrics about the page

## Example Usage

```typescript
import { Metrics } from "@simplesagar/vercel/models/updatecheckop.js";

let value: Metrics = {
  fcp: {
    value: 1200,
    source: "web-vitals",
  },
  lcp: {
    value: 1200,
    source: "web-vitals",
  },
  cls: {
    value: 4,
    source: "web-vitals",
  },
  tbt: {
    value: 3000,
    source: "web-vitals",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `fcp`                                                                | [models.Fcp](../models/fcp.md)                                       | :heavy_check_mark:                                                   | N/A                                                                  |
| `lcp`                                                                | [models.Lcp](../models/lcp.md)                                       | :heavy_check_mark:                                                   | N/A                                                                  |
| `cls`                                                                | [models.Cls](../models/cls.md)                                       | :heavy_check_mark:                                                   | N/A                                                                  |
| `tbt`                                                                | [models.Tbt](../models/tbt.md)                                       | :heavy_check_mark:                                                   | N/A                                                                  |
| `virtualExperienceScore`                                             | [models.VirtualExperienceScore](../models/virtualexperiencescore.md) | :heavy_minus_sign:                                                   | N/A                                                                  |