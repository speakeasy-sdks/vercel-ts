# ResponseBody3

Successful response retrieving a list of paginated DNS records.

## Example Usage

```typescript
import { ResponseBody3 } from "@simplesagar/vercel/models/getrecordsop.js";

let value: ResponseBody3 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "AAAA",
      value: "<value>",
      creator: "<value>",
      created: 1747.72,
      updated: 3164.88,
      createdAt: 3891.35,
      updatedAt: 2465.35,
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
| `records`                                                                                                                                                       | [models.ResponseBodyRecords](../models/responsebodyrecords.md)[]                                                                                                | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |