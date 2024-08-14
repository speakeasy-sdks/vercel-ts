# CreateProjectTrustedIps1

## Example Usage

```typescript
import { CreateProjectTrustedIps1 } from "@simplesagar/vercel/models/createprojectop.js";

let value: CreateProjectTrustedIps1 = {
    deploymentType: "preview",
    addresses: [
        {
            value: "<value>",
        },
    ],
    protectionMode: "exclusive",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                   | [models.CreateProjectTrustedIpsDeploymentType](../models/createprojecttrustedipsdeploymenttype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `addresses`                                                                                        | [models.TrustedIpsAddresses](../models/trustedipsaddresses.md)[]                                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `protectionMode`                                                                                   | [models.TrustedIpsProtectionMode](../models/trustedipsprotectionmode.md)                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |