# CreateWebhookRequest

## Example Usage

```typescript
import { CreateWebhookRequest } from "@simplesagar/vercel/models/createwebhookop.js";

let value: CreateWebhookRequest = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `teamId`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | The Team identifier to perform the request on behalf of.                 |
| `slug`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The Team slug to perform the request on behalf of.                       |
| `requestBody`                                                            | [models.CreateWebhookRequestBody](../models/createwebhookrequestbody.md) | :heavy_minus_sign:                                                       | N/A                                                                      |