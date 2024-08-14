# GetRecordsResponse

## Example Usage

```typescript
import { GetRecordsResponse } from "@simplesagar/vercel/models/getrecordsop.js";

let value: GetRecordsResponse = {
    result: {
        records: [
            {
                id: "<id>",
                slug: "<value>",
                name: "<value>",
                type: "TXT",
                value: "<value>",
                creator: "<value>",
                created: 5979.37,
                updated: 4463.94,
                createdAt: 2380.43,
                updatedAt: 9078.76,
            },
        ],
    },
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `result`                        | *models.GetRecordsResponseBody* | :heavy_check_mark:              | N/A                             |