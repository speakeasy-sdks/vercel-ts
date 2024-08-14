# GetDeploymentFlags1

Flags defined in the Build Output API, used by this deployment. Primarily used by the Toolbar to know about the used flags.

## Example Usage

```typescript
import { GetDeploymentFlags1 } from "@simplesagar/vercel/models/getdeploymentop.js";

let value: GetDeploymentFlags1 = {
    definitions: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `definitions`                                                                                      | Record<string, [models.GetDeploymentFlagsDefinitions](../models/getdeploymentflagsdefinitions.md)> | :heavy_check_mark:                                                                                 | N/A                                                                                                |