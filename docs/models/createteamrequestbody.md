# CreateTeamRequestBody

## Example Usage

```typescript
import { CreateTeamRequestBody } from "@simplesagar/vercel/models/createteamop.js";

let value: CreateTeamRequestBody = {
  slug: "a-random-team",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `slug`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | The desired slug for the Team                                                                     | a-random-team                                                                                     |
| `name`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | The desired name for the Team. It will be generated from the provided slug if nothing is provided | A Random Team                                                                                     |
| `attribution`                                                                                     | [models.Attribution](../models/attribution.md)                                                    | :heavy_minus_sign:                                                                                | Attribution information for the session or current page                                           |                                                                                                   |