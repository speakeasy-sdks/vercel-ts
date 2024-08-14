# SearchRepoResponseBody

## Example Usage

```typescript
import { SearchRepoResponseBody } from "@simplesagar/vercel/models/searchrepoop.js";

let value: SearchRepoResponseBody = {
    gitAccount: {
        provider: "bitbucket",
        namespaceId: 585.34,
    },
    repos: [
        {
            id: "<value>",
            provider: "github-custom-host",
            url: "http://chilly-jeweller.info",
            name: "<value>",
            slug: "<value>",
            namespace: "<value>",
            owner: {
                id: 9799.63,
                name: "<value>",
            },
            ownerType: "team",
            private: false,
            defaultBranch: "<value>",
            updatedAt: 4237.06,
        },
    ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `gitAccount`                                 | [models.GitAccount](../models/gitaccount.md) | :heavy_check_mark:                           | N/A                                          |
| `repos`                                      | [models.Repos](../models/repos.md)[]         | :heavy_check_mark:                           | N/A                                          |