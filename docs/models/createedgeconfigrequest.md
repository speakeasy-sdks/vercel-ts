# CreateEdgeConfigRequest

## Example Usage

```typescript
import { CreateEdgeConfigRequest } from "@simplesagar/vercel/models/createedgeconfigop.js";

let value: CreateEdgeConfigRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The Team identifier to perform the request on behalf of.                       |
| `slug`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The Team slug to perform the request on behalf of.                             |
| `requestBody`                                                                  | [models.CreateEdgeConfigRequestBody](../models/createedgeconfigrequestbody.md) | :heavy_minus_sign:                                                             | N/A                                                                            |