# Membership

The membership of the authenticated User in relation to the Team.

## Example Usage

```typescript
import { Membership } from "@simplesagar/vercel/models/teamlimited.js";

let value: Membership = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `confirmed`                                  | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `confirmedAt`                                | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `accessRequestedAt`                          | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `role`                                       | [models.Role](../models/role.md)             | :heavy_minus_sign:                           | N/A                                          |
| `teamId`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `createdAt`                                  | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `created`                                    | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `joinedFrom`                                 | [models.JoinedFrom](../models/joinedfrom.md) | :heavy_minus_sign:                           | N/A                                          |
| `uid`                                        | *string*                                     | :heavy_minus_sign:                           | N/A                                          |