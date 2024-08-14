# GetAuthUserResponseBody

Successful response.

## Example Usage

```typescript
import { GetAuthUserResponseBody } from "@simplesagar/vercel/models/getauthuserop.js";

let value: GetAuthUserResponseBody = {
    user: {
        createdAt: 1630748523395,
        softBlock: {
            blockedAt: 9233.06,
            reason: "ENTERPRISE_TRIAL_ENDED",
        },
        billing: {
            period: {
                start: 2828.37,
                end: 6937.46,
            },
            plan: "enterprise",
        },
        resourceConfig: {},
        stagingPrefix: "<value>",
        hasTrialAvailable: false,
        id: "AEIIDYVk59zbFF2Sxfyxxmua",
        email: "me@example.com",
        name: "John Doe",
        username: "jdoe",
        avatar: "22cb30c85ff45ac4c72de8981500006b28114aa1",
        defaultTeamId: "<value>",
        version: "northstar",
    },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `user`                   | *models.GetAuthUserUser* | :heavy_check_mark:       | N/A                      |