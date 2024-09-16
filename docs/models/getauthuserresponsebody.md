# GetAuthUserResponseBody

Successful response.

## Example Usage

```typescript
import { GetAuthUserResponseBody } from "@simplesagar/vercel/models/getauthuserop.js";

let value: GetAuthUserResponseBody = {
  user: {
    limited: false,
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