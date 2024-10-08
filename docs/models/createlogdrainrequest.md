# CreateLogDrainRequest

## Example Usage

```typescript
import { CreateLogDrainRequest } from "@simplesagar/vercel/models/createlogdrainop.js";

let value: CreateLogDrainRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `teamId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | The Team identifier to perform the request on behalf of.                   |
| `slug`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | The Team slug to perform the request on behalf of.                         |
| `requestBody`                                                              | [models.CreateLogDrainRequestBody](../models/createlogdrainrequestbody.md) | :heavy_minus_sign:                                                         | N/A                                                                        |