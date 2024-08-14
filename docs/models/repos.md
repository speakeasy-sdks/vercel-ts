# Repos

## Example Usage

```typescript
import { Repos } from "@simplesagar/vercel/models/searchrepoop.js";

let value: Repos = {
    id: "<value>",
    provider: "github",
    url: "http://slushy-praise.biz",
    name: "<value>",
    slug: "<value>",
    namespace: "<value>",
    owner: {
        id: 8987.6,
        name: "<value>",
    },
    ownerType: "team",
    private: false,
    defaultBranch: "<value>",
    updatedAt: 89.31,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *models.SearchRepoId*                                                                | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `provider`                                                                           | [models.SearchRepoIntegrationsProvider](../models/searchrepointegrationsprovider.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `slug`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `namespace`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `owner`                                                                              | [models.Owner](../models/owner.md)                                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `ownerType`                                                                          | [models.OwnerType](../models/ownertype.md)                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `private`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `defaultBranch`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |