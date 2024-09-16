# Link1

## Example Usage

```typescript
import { Link1 } from "@simplesagar/vercel/models/updateprojectdatacacheop.js";

let value: Link1 = {
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://tender-carload.name",
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `org`                                            | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `repo`                                           | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `repoId`                                         | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `type`                                           | [models.LinkType](../models/linktype.md)         | :heavy_minus_sign:                               | N/A                                              |
| `createdAt`                                      | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `deployHooks`                                    | [models.DeployHooks](../models/deployhooks.md)[] | :heavy_check_mark:                               | N/A                                              |
| `gitCredentialId`                                | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `updatedAt`                                      | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `sourceless`                                     | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `productionBranch`                               | *string*                                         | :heavy_minus_sign:                               | N/A                                              |