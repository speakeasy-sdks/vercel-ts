# GetAllChecksResponseBody

## Example Usage

```typescript
import { GetAllChecksResponseBody } from "@simplesagar/vercel/models/getallchecksop.js";

let value: GetAllChecksResponseBody = {
  checks: [
    {
      createdAt: 4370.32,
      id: "<id>",
      integrationId: "<value>",
      name: "<value>",
      rerequestable: false,
      status: "completed",
      updatedAt: 6976.31,
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `checks`                                                       | [models.GetAllChecksChecks](../models/getallcheckschecks.md)[] | :heavy_check_mark:                                             | N/A                                                            |