# GetRecordsResponseBody2

## Example Usage

```typescript
import { GetRecordsResponseBody2 } from "@simplesagar/vercel/models/getrecordsop.js";

let value: GetRecordsResponseBody2 = {
    records: [
        {
            id: "<id>",
            slug: "<value>",
            name: "<value>",
            type: "ALIAS",
            value: "<value>",
            creator: "<value>",
            created: 9521.43,
            updated: 5627.83,
            createdAt: 3000.29,
            updatedAt: 9063.55,
        },
    ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `records`                                | [models.Records](../models/records.md)[] | :heavy_check_mark:                       | N/A                                      |