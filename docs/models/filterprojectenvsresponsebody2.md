# FilterProjectEnvsResponseBody2

## Example Usage

```typescript
import { FilterProjectEnvsResponseBody2 } from "@simplesagar/vercel/models/filterprojectenvsop.js";

let value: FilterProjectEnvsResponseBody2 = {
  envs: [
    {},
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
| `envs`                                                                                                                                                          | [models.FilterProjectEnvsResponseBodyEnvs](../models/filterprojectenvsresponsebodyenvs.md)[]                                                                    | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |