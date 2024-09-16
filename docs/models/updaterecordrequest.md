# UpdateRecordRequest

## Example Usage

```typescript
import { UpdateRecordRequest } from "@simplesagar/vercel/models/updaterecordop.js";

let value: UpdateRecordRequest = {
  recordId: "rec_2qn7pzrx89yxy34vezpd31y9",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `recordId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | The id of the DNS record                                               | rec_2qn7pzrx89yxy34vezpd31y9                                           |
| `teamId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | The Team identifier to perform the request on behalf of.               |                                                                        |
| `slug`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | The Team slug to perform the request on behalf of.                     |                                                                        |
| `requestBody`                                                          | [models.UpdateRecordRequestBody](../models/updaterecordrequestbody.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |