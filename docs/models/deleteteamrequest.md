# DeleteTeamRequest

## Example Usage

```typescript
import { DeleteTeamRequest } from "@simplesagar/vercel/models/deleteteamop.js";

let value: DeleteTeamRequest = {
  teamId: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `teamId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | The Team identifier to perform the request on behalf of.           |                                                                    |
| `newDefaultTeamId`                                                 | *string*                                                           | :heavy_minus_sign:                                                 | Id of the team to be set as the new default team                   | team_LLHUOMOoDlqOp8wPE4kFo9pE                                      |
| `slug`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The Team slug to perform the request on behalf of.                 |                                                                    |
| `requestBody`                                                      | [models.DeleteTeamRequestBody](../models/deleteteamrequestbody.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |