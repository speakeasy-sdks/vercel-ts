# ListAliasesResponseBody

The paginated list of aliases

## Example Usage

```typescript
import { ListAliasesResponseBody } from "@simplesagar/vercel/models/listaliasesop.js";

let value: ListAliasesResponseBody = {
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
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aliases`                                                                                                                                                       | [models.ListAliasesAliases](../models/listaliasesaliases.md)[]                                                                                                  | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |