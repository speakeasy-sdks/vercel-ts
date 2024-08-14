# UpdateAccessGroupRequest

## Example Usage

```typescript
import { UpdateAccessGroupRequest } from "@simplesagar/vercel/models/updateaccessgroupop.js";

let value: UpdateAccessGroupRequest = {
    idOrName: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `idOrName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `teamId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The Team identifier to perform the request on behalf of.                         |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The Team slug to perform the request on behalf of.                               |
| `requestBody`                                                                    | [models.UpdateAccessGroupRequestBody](../models/updateaccessgrouprequestbody.md) | :heavy_minus_sign:                                                               | N/A                                                                              |