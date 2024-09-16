# Eight

## Example Usage

```typescript
import { Eight } from "@simplesagar/vercel/models/createrecordop.js";

let value: Eight = {
  name: "<value>",
  type: "A",
  value: "hello",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | A subdomain name or an empty string for the root domain.                                             |                                                                                                      |
| `type`                                                                                               | [models.CreateRecordRequestBodyDnsRequest8Type](../models/createrecordrequestbodydnsrequest8type.md) | :heavy_check_mark:                                                                                   | The type of record, it could be one of the valid DNS records.                                        |                                                                                                      |
| `ttl`                                                                                                | *number*                                                                                             | :heavy_minus_sign:                                                                                   | The TTL value. Must be a number between 60 and 2147483647. Default value is 60.                      | 60                                                                                                   |
| `value`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | A TXT record containing arbitrary text.                                                              | hello                                                                                                |
| `comment`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A comment to add context on what this DNS record is for                                              | used to verify ownership of domain                                                                   |