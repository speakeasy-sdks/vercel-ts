# GetRecordsRequest

## Example Usage

```typescript
import { GetRecordsRequest } from "@simplesagar/vercel/models/getrecordsop.js";

let value: GetRecordsRequest = {
  domain: "example.com",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `domain`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | example.com                                              |
| `limit`                                                  | *string*                                                 | :heavy_minus_sign:                                       | Maximum number of records to list from a request.        | 20                                                       |
| `since`                                                  | *string*                                                 | :heavy_minus_sign:                                       | Get records created after this JavaScript timestamp.     | 1609499532000                                            |
| `until`                                                  | *string*                                                 | :heavy_minus_sign:                                       | Get records created before this JavaScript timestamp.    | 1612264332000                                            |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. |                                                          |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       |                                                          |