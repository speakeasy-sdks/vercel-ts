# CreateSecretRequest

## Example Usage

```typescript
import { CreateSecretRequest } from "@simplesagar/vercel/models/createsecretop.js";

let value: CreateSecretRequest = {
  name: "my-api-key",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name of the secret.                                                | my-api-key                                                             |
| `requestBody`                                                          | [models.CreateSecretRequestBody](../models/createsecretrequestbody.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |