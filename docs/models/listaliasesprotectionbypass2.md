# ListAliasesProtectionBypass2

The protection bypass for the alias

## Example Usage

```typescript
import { ListAliasesProtectionBypass2 } from "@simplesagar/vercel/models/listaliasesop.js";

let value: ListAliasesProtectionBypass2 = {
    createdAt: 5068.63,
    lastUpdatedAt: 6955.26,
    lastUpdatedBy: "<value>",
    access: "granted",
    scope: "user",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `lastUpdatedAt`                                                                          | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `lastUpdatedBy`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `access`                                                                                 | [models.ProtectionBypassAccess](../models/protectionbypassaccess.md)                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `scope`                                                                                  | [models.ListAliasesProtectionBypassScope](../models/listaliasesprotectionbypassscope.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |