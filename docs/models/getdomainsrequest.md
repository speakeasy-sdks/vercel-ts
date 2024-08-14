# GetDomainsRequest

## Example Usage

```typescript
import { GetDomainsRequest } from "@simplesagar/vercel/models/getdomainsop.js";

let value: GetDomainsRequest = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | Maximum number of domains to list from a request.        | 20                                                       |
| `since`                                                  | *number*                                                 | :heavy_minus_sign:                                       | Get domains created after this JavaScript timestamp.     | 1609499532000                                            |
| `until`                                                  | *number*                                                 | :heavy_minus_sign:                                       | Get domains created before this JavaScript timestamp.    | 1612264332000                                            |
| `teamId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The Team identifier to perform the request on behalf of. |                                                          |
| `slug`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The Team slug to perform the request on behalf of.       |                                                          |