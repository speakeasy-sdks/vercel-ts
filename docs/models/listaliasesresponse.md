# ListAliasesResponse

## Example Usage

```typescript
import { ListAliasesResponse } from "@simplesagar/vercel/models/listaliasesop.js";

let value: ListAliasesResponse = {
  result: {
    aliases: [
      {
        alias: "my-alias.vercel.app",
        created: new Date("2017-04-26T23:00:34.232Z"),
        deploymentId: "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",
        projectId: "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
        uid: "<value>",
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `result`                                                               | [models.ListAliasesResponseBody](../models/listaliasesresponsebody.md) | :heavy_check_mark:                                                     | N/A                                                                    |