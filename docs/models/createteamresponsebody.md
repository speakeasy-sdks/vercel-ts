# CreateTeamResponseBody

The team was created successfully

## Example Usage

```typescript
import { CreateTeamResponseBody } from "@simplesagar/vercel/models/createteamop.js";

let value: CreateTeamResponseBody = {
  id: "team_nLlpyC6RE1qxqglFKbrMxlud",
  slug: "<value>",
  billing: {
    period: {
      start: 2536.25,
      end: 2569.16,
    },
    plan: "pro",
  },
};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         | Example                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | Id of the created team                                                                                                                                                              | team_nLlpyC6RE1qxqglFKbrMxlud                                                                                                                                                       |
| `slug`                                                                                                                                                                              | *string*                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                  | N/A                                                                                                                                                                                 |                                                                                                                                                                                     |
| `billing`                                                                                                                                                                           | [models.CreateTeamBilling](../models/createteambilling.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                  | IMPORTANT: If extending Billing, particularly with optional fields, make sure you also update `sync-orb-subscription-to-owner.ts` to handle the items when the object is recreated. |                                                                                                                                                                                     |