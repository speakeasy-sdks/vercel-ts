# ProtectionBypass2

The protection bypass for the alias

## Example Usage

```typescript
import { ProtectionBypass2 } from "@simplesagar/vercel/models/getaliasop.js";

let value: ProtectionBypass2 = {
    createdAt: 8979.56,
    lastUpdatedAt: 5928.8,
    lastUpdatedBy: "<value>",
    access: "granted",
    scope: "user",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `createdAt`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `lastUpdatedAt`                                                                    | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `lastUpdatedBy`                                                                    | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `access`                                                                           | [models.Access](../models/access.md)                                               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `scope`                                                                            | [models.GetAliasProtectionBypassScope](../models/getaliasprotectionbypassscope.md) | :heavy_check_mark:                                                                 | N/A                                                                                |