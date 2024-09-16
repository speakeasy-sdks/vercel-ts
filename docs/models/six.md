# Six

## Example Usage

```typescript
import { Six } from "@simplesagar/vercel/models/createrecordop.js";

let value: Six = {
  name: "subdomain",
  type: "SRV",
  value: "10 mail.example.com.",
  mxPriority: 10,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | A subdomain name or an empty string for the root domain.                                                 | subdomain                                                                                                |
| `type`                                                                                                   | [models.CreateRecordRequestBodyDnsRequest6Type](../models/createrecordrequestbodydnsrequest6type.md)     | :heavy_check_mark:                                                                                       | The type of record, it could be one of the valid DNS records.                                            |                                                                                                          |
| `ttl`                                                                                                    | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The TTL value. Must be a number between 60 and 2147483647. Default value is 60.                          | 60                                                                                                       |
| `value`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | An MX record specifying the mail server responsible for accepting messages on behalf of the domain name. | 10 mail.example.com.                                                                                     |
| `mxPriority`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | 10                                                                                                       |
| `comment`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | A comment to add context on what this DNS record is for                                                  | used to verify ownership of domain                                                                       |