# GetSecretsResponseBody

Successful response retrieving a list of secrets.

## Example Usage

```typescript
import { GetSecretsResponseBody } from "@simplesagar/vercel/models/getsecretsop.js";

let value: GetSecretsResponseBody = {
  secrets: [
    {
      created: new Date("2021-02-10T13:11:49.180Z"),
      name: "my-api-key",
      uid: "sec_XCG7t7AIHuO2SBA8667zNUiM",
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
| `secrets`                                                                                                                                                       | [models.GetSecretsSecrets](../models/getsecretssecrets.md)[]                                                                                                    | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |