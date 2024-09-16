# GetWebhooksResponseBody1

## Example Usage

```typescript
import { GetWebhooksResponseBody1 } from "@simplesagar/vercel/models/getwebhooksop.js";

let value: GetWebhooksResponseBody1 = {
  projectsMetadata: [
    {
      id: "<id>",
      name: "<value>",
    },
  ],
  events: [
    "deployment.created",
  ],
  id: "account_hook_GflD6EYyo7F4ViYS",
  url: "https://my-webhook.com",
  ownerId: "ZspSRT4ljIEEmMHgoDwKWDei",
  createdAt: 1567024758130,
  updatedAt: 1567024758130,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projectsMetadata`                                                           | [models.ProjectsMetadata](../models/projectsmetadata.md)[]                   | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `events`                                                                     | [models.ResponseBodyEvents](../models/responsebodyevents.md)[]               | :heavy_check_mark:                                                           | The webhooks events                                                          | deployment.created                                                           |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | The webhook id                                                               | account_hook_GflD6EYyo7F4ViYS                                                |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | A string with the URL of the webhook                                         | https://my-webhook.com                                                       |
| `ownerId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | The unique ID of the team the webhook belongs to                             | ZspSRT4ljIEEmMHgoDwKWDei                                                     |
| `createdAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | A number containing the date when the webhook was created in in milliseconds | 1567024758130                                                                |
| `updatedAt`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | A number containing the date when the webhook was updated in in milliseconds | 1567024758130                                                                |
| `projectIds`                                                                 | *string*[]                                                                   | :heavy_minus_sign:                                                           | The ID of the projects the webhook is associated with                        | [<br/>"prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB"<br/>]                               |