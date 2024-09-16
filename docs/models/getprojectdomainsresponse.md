# GetProjectDomainsResponse

## Example Usage

```typescript
import { GetProjectDomainsResponse } from "@simplesagar/vercel/models/getprojectdomainsop.js";

let value: GetProjectDomainsResponse = {
  result: {
    domains: [
      {
        name: "<value>",
        apexName: "<value>",
        projectId: "<value>",
        verified: false,
      },
    ],
    pagination: {
      count: 20,
      next: 1540095775951,
      prev: 1540095775951,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [models.GetProjectDomainsResponseBody](../models/getprojectdomainsresponsebody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |