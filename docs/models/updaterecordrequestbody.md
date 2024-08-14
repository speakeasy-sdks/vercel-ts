# UpdateRecordRequestBody

## Example Usage

```typescript
import { UpdateRecordRequestBody } from "@simplesagar/vercel/models/updaterecordop.js";

let value: UpdateRecordRequestBody = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The name of the DNS record                               | example-1                                                |
| `value`                                                  | *string*                                                 | :heavy_minus_sign:                                       | The value of the DNS record                              | google.com                                               |
| `type`                                                   | [models.UpdateRecordType](../models/updaterecordtype.md) | :heavy_minus_sign:                                       | The type of the DNS record                               | A                                                        |
| `ttl`                                                    | *number*                                                 | :heavy_minus_sign:                                       | The Time to live (TTL) value of the DNS record           | 60                                                       |
| `mxPriority`                                             | *number*                                                 | :heavy_minus_sign:                                       | The MX priority value of the DNS record                  |                                                          |
| `srv`                                                    | [models.Srv](../models/srv.md)                           | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `https`                                                  | [models.Https](../models/https.md)                       | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `comment`                                                | *string*                                                 | :heavy_minus_sign:                                       | A comment to add context on what this DNS record is for  | used to verify ownership of domain                       |