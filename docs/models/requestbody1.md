# RequestBody1

## Example Usage

```typescript
import { RequestBody1 } from "@simplesagar/vercel/models/createrecordop.js";

let value: RequestBody1 = {
    name: "subdomain",
    type: "NS",
    value: "192.0.2.42",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | A subdomain name or an empty string for the root domain.                        | subdomain                                                                       |
| `type`                                                                          | [models.RequestBodyType](../models/requestbodytype.md)                          | :heavy_check_mark:                                                              | The type of record, it could be one of the valid DNS records.                   |                                                                                 |
| `ttl`                                                                           | *number*                                                                        | :heavy_minus_sign:                                                              | The TTL value. Must be a number between 60 and 2147483647. Default value is 60. | 60                                                                              |
| `value`                                                                         | *string*                                                                        | :heavy_check_mark:                                                              | The record value must be a valid IPv4 address.                                  | 192.0.2.42                                                                      |
| `comment`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | A comment to add context on what this DNS record is for                         | used to verify ownership of domain                                              |