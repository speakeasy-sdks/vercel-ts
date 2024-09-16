# SearchRepoResponseBody

## Example Usage

```typescript
import { SearchRepoResponseBody } from "@simplesagar/vercel/models/searchrepoop.js";

let value: SearchRepoResponseBody = {
  gitAccount: {
    provider: "gitlab",
    namespaceId: 9672.6,
  },
  repos: [
    {
      id: "<id>",
      provider: "github",
      url: "https://any-bush.info",
      name: "<value>",
      slug: "<value>",
      namespace: "<value>",
      owner: {
        id: "<id>",
        name: "<value>",
      },
      ownerType: "user",
      private: false,
      defaultBranch: "<value>",
      updatedAt: 4037.93,
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `gitAccount`                                 | [models.GitAccount](../models/gitaccount.md) | :heavy_check_mark:                           | N/A                                          |
| `repos`                                      | [models.Repos](../models/repos.md)[]         | :heavy_check_mark:                           | N/A                                          |