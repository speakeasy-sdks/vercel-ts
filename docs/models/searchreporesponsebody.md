# SearchRepoResponseBody

## Example Usage

```typescript
import { SearchRepoResponseBody } from "@simplesagar/vercel/models/searchrepoop.js";

let value: SearchRepoResponseBody = {
    gitAccount: {
        provider: "github",
        namespaceId: "<value>",
    },
    repos: [
        {
            id: "<value>",
            provider: "gitlab",
            url: "https://hidden-deal.com",
            name: "<value>",
            slug: "<value>",
            namespace: "<value>",
            owner: {
                id: "<value>",
                name: "<value>",
            },
            ownerType: "team",
            private: false,
            defaultBranch: "<value>",
            updatedAt: 8595.81,
        },
    ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `gitAccount`                                 | [models.GitAccount](../models/gitaccount.md) | :heavy_check_mark:                           | N/A                                          |
| `repos`                                      | [models.Repos](../models/repos.md)[]         | :heavy_check_mark:                           | N/A                                          |