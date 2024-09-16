# UpdateCheckRequest

## Example Usage

```typescript
import { UpdateCheckRequest } from "@simplesagar/vercel/models/updatecheckop.js";

let value: UpdateCheckRequest = {
  deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
  checkId: "check_2qn7PZrx89yxY34vEZPD31Y9XVj6",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `deploymentId`                                                       | *string*                                                             | :heavy_check_mark:                                                   | The deployment to update the check for.                              | dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6                                     |
| `checkId`                                                            | *string*                                                             | :heavy_check_mark:                                                   | The check being updated                                              | check_2qn7PZrx89yxY34vEZPD31Y9XVj6                                   |
| `teamId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | The Team identifier to perform the request on behalf of.             |                                                                      |
| `slug`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | The Team slug to perform the request on behalf of.                   |                                                                      |
| `requestBody`                                                        | [models.UpdateCheckRequestBody](../models/updatecheckrequestbody.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |