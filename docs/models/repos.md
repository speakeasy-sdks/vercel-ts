# Repos

## Example Usage

```typescript
import { Repos } from "@simplesagar/vercel/models/searchrepoop.js";

let value: Repos = {
    id: "<value>",
    provider: "github-custom-host",
    url: "https://oblong-geography.biz",
    name: "<value>",
    slug: "<value>",
    namespace: "<value>",
    owner: {
        id: "<value>",
        name: "<value>",
    },
    ownerType: "user",
    private: false,
    defaultBranch: "<value>",
    updatedAt: 9849.34,
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