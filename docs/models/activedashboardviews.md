# ActiveDashboardViews

set of dashboard view preferences (cards or list) per scopeId

## Example Usage

```typescript
import { ActiveDashboardViews } from "@simplesagar/vercel/models/authuser.js";

let value: ActiveDashboardViews = {
    scopeId: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `scopeId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `viewPreference`                                                       | [models.ViewPreference](../models/viewpreference.md)                   | :heavy_minus_sign:                                                     | N/A                                                                    |
| `favoritesViewPreference`                                              | [models.FavoritesViewPreference](../models/favoritesviewpreference.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `recentsViewPreference`                                                | [models.RecentsViewPreference](../models/recentsviewpreference.md)     | :heavy_minus_sign:                                                     | N/A                                                                    |