# GetAllChecksResponseBody

## Example Usage

```typescript
import { GetAllChecksResponseBody } from "@simplesagar/vercel/models/getallchecksop.js";

let value: GetAllChecksResponseBody = {
    checks: [
        {
            createdAt: 9023.49,
            id: "<id>",
            integrationId: "<value>",
            name: "<value>",
            rerequestable: false,
            status: "completed",
            updatedAt: 992.8,
        },
    ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `checks`                                                       | [models.GetAllChecksChecks](../models/getallcheckschecks.md)[] | :heavy_check_mark:                                             | N/A                                                            |