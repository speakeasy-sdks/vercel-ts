# PatchTeamRequest

## Example Usage

```typescript
import { PatchTeamRequest } from "@simplesagar/vercel/models/patchteamop.js";

let value: PatchTeamRequest = {
  teamId: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `teamId`                                                         | *string*                                                         | :heavy_check_mark:                                               | The Team identifier to perform the request on behalf of.         |
| `slug`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The Team slug to perform the request on behalf of.               |
| `requestBody`                                                    | [models.PatchTeamRequestBody](../models/patchteamrequestbody.md) | :heavy_minus_sign:                                               | N/A                                                              |