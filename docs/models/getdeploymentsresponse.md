# GetDeploymentsResponse

## Example Usage

```typescript
import { GetDeploymentsResponse } from "@simplesagar/vercel/models/getdeploymentsop.js";

let value: GetDeploymentsResponse = {
    result: {
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
                inspectorUrl: "https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq",
            },
        ],
    },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [models.GetDeploymentsResponseBody](../models/getdeploymentsresponsebody.md) | :heavy_check_mark:                                                           | N/A                                                                          |