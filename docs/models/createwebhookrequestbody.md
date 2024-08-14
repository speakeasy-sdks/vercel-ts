# CreateWebhookRequestBody

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "@simplesagar/vercel/models/createwebhookop.js";

let value: CreateWebhookRequestBody = {
    url: "http://admirable-antelope.biz",
    events: ["budget.reset"],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `events`                                                         | [models.CreateWebhookEvents](../models/createwebhookevents.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `projectIds`                                                     | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |