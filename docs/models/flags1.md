# Flags1

Flags defined in the Build Output API, used by this deployment. Primarily used by the Toolbar to know about the used flags.

## Example Usage

```typescript
import { Flags1 } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: Flags1 = {
  definitions: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `definitions`                                                            | Record<string, [models.FlagsDefinitions](../models/flagsdefinitions.md)> | :heavy_check_mark:                                                       | N/A                                                                      |