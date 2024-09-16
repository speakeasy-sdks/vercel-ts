# RenameSecretRequest

## Example Usage

```typescript
import { RenameSecretRequest } from "@simplesagar/vercel/models/renamesecretop.js";

let value: RenameSecretRequest = {
  name: "my-api-key",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name of the secret.                                                | my-api-key                                                             |
| `teamId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | The Team identifier to perform the request on behalf of.               |                                                                        |
| `slug`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | The Team slug to perform the request on behalf of.                     |                                                                        |
| `requestBody`                                                          | [models.RenameSecretRequestBody](../models/renamesecretrequestbody.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |