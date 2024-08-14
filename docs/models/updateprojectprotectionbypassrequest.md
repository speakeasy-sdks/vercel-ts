# UpdateProjectProtectionBypassRequest

## Example Usage

```typescript
import { UpdateProjectProtectionBypassRequest } from "@simplesagar/vercel/models/updateprojectprotectionbypassop.js";

let value: UpdateProjectProtectionBypassRequest = {
    idOrName: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `idOrName`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique project identifier or the project name                                                        |
| `teamId`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The Team identifier to perform the request on behalf of.                                                 |
| `slug`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The Team slug to perform the request on behalf of.                                                       |
| `requestBody`                                                                                            | [models.UpdateProjectProtectionBypassRequestBody](../models/updateprojectprotectionbypassrequestbody.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |