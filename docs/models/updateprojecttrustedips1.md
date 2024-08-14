# UpdateProjectTrustedIps1

## Example Usage

```typescript
import { UpdateProjectTrustedIps1 } from "@simplesagar/vercel/models/updateprojectop.js";

let value: UpdateProjectTrustedIps1 = {
    deploymentType: "production",
    addresses: [
        {
            value: "<value>",
        },
    ],
    protectionMode: "additional",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                   | [models.UpdateProjectTrustedIpsDeploymentType](../models/updateprojecttrustedipsdeploymenttype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `addresses`                                                                                        | [models.UpdateProjectTrustedIpsAddresses](../models/updateprojecttrustedipsaddresses.md)[]         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `protectionMode`                                                                                   | [models.UpdateProjectTrustedIpsProtectionMode](../models/updateprojecttrustedipsprotectionmode.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |