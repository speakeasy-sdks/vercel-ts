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
                type: "A",
                value: "<value>",
                creator: "<value>",
                created: 3613.06,
                updated: 6964.63,
                createdAt: 9109.94,
                updatedAt: 2473.99,
            },
        ],
    },
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `result`                        | *models.GetRecordsResponseBody* | :heavy_check_mark:              | N/A                             |