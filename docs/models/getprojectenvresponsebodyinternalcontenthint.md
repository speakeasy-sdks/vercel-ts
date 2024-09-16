# GetProjectEnvResponseBodyInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { GetProjectEnvResponseBodyInternalContentHint } from "@simplesagar/vercel/models/getprojectenvop.js";

let value: GetProjectEnvResponseBodyInternalContentHint = {
  type: "flags-secret",
  encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [models.GetProjectEnvResponseBodyEnvsResponse200ApplicationJSONType](../models/getprojectenvresponsebodyenvsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `encryptedValue`                                                                                                                               | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                   |