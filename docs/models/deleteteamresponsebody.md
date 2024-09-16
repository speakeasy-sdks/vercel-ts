# DeleteTeamResponseBody

The Team was successfully deleted

## Example Usage

```typescript
import { DeleteTeamResponseBody } from "@simplesagar/vercel/models/deleteteamop.js";

let value: DeleteTeamResponseBody = {
  id: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The ID of the deleted Team                                                                                | team_LLHUOMOoDlqOp8wPE4kFo9pE                                                                             |
| `newDefaultTeamIdError`                                                                                   | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Signifies whether the default team update has failed, when newDefaultTeamId is provided in request query. | true                                                                                                      |