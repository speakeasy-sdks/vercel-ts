# CreateAccessGroupRequest

## Example Usage

```typescript
import { CreateAccessGroupRequest } from "@simplesagar/vercel/models/createaccessgroupop.js";

let value: CreateAccessGroupRequest = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `teamId`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The Team identifier to perform the request on behalf of.                         |
| `slug`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | The Team slug to perform the request on behalf of.                               |
| `requestBody`                                                                    | [models.CreateAccessGroupRequestBody](../models/createaccessgrouprequestbody.md) | :heavy_minus_sign:                                                               | N/A                                                                              |