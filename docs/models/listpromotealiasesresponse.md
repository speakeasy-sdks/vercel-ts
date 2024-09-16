# ListPromoteAliasesResponse

## Example Usage

```typescript
import { ListPromoteAliasesResponse } from "@simplesagar/vercel/models/listpromotealiasesop.js";

let value: ListPromoteAliasesResponse = {
  result: {
    aliases: [
      {
        status: "<value>",
        alias: "<value>",
        id: "<id>",
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

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `result`                                | *models.ListPromoteAliasesResponseBody* | :heavy_check_mark:                      | N/A                                     |