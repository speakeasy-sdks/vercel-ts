# CreatedInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { CreatedInternalContentHint } from "@simplesagar/vercel/models/createprojectenvop.js";

let value: CreatedInternalContentHint = {
    type: "flags-secret",
    encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [models.CreateProjectEnvCreatedEnvsType](../models/createprojectenvcreatedenvstype.md)                                       | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `encryptedValue`                                                                                                             | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda. |