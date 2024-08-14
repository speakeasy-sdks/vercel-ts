# GetRecordsResponseBody

Successful response retrieving a list of paginated DNS records.

## Example Usage

```typescript
import { GetRecordsResponseBody } from "@simplesagar/vercel/models/getrecordsop.js";

let value: GetRecordsResponseBody = {
    records: [
        {
            id: "<id>",
            slug: "<value>",
            name: "<value>",
            type: "AAAA",
            value: "<value>",
            creator: "<value>",
            created: 1458.7,
            updated: 6611.18,
            createdAt: 3356.31,
            updatedAt: 4402.64,
        },
    ],
};
```

## Supported Types

### `string`

```typescript
const value: string = /* values here */
```

### `models.GetRecordsResponseBody2`

```typescript
const value: models.GetRecordsResponseBody2 = /* values here */
```

### `models.ResponseBody3`

```typescript
const value: models.ResponseBody3 = /* values here */
```

