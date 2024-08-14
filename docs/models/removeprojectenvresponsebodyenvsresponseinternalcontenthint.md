# RemoveProjectEnvResponseBodyEnvsResponseInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { RemoveProjectEnvResponseBodyEnvsResponseInternalContentHint } from "@simplesagar/vercel/models/removeprojectenvop.js";

let value: RemoveProjectEnvResponseBodyEnvsResponseInternalContentHint = {
    type: "flags-secret",
    encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [models.RemoveProjectEnvResponseBodyEnvsResponse200ApplicationJson3Type](../models/removeprojectenvresponsebodyenvsresponse200applicationjson3type.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `encryptedValue`                                                                                                                                       | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                           |