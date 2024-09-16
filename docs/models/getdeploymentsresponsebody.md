# GetDeploymentsResponseBody

## Example Usage

```typescript
import { GetDeploymentsResponseBody } from "@simplesagar/vercel/models/getdeploymentsop.js";

let value: GetDeploymentsResponseBody = {
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
  deployments: [
    {
      uid: "dpl_2euZBFqxYdDMDG1jTrHFnNZ2eUVa",
      name: "docs",
      url: "docs-9jaeg38me.vercel.app",
      created: 1609492210000,
      type: "LAMBDAS",
      creator: {
        uid: "eLrCnEgbKhsHyfbiNR7E8496",
      },
      inspectorUrl:
        "https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `deployments`                                                                                                                                                   | [models.GetDeploymentsDeployments](../models/getdeploymentsdeployments.md)[]                                                                                    | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |