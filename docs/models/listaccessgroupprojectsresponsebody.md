# ListAccessGroupProjectsResponseBody

## Example Usage

```typescript
import { ListAccessGroupProjectsResponseBody } from "@simplesagar/vercel/models/listaccessgroupprojectsop.js";

let value: ListAccessGroupProjectsResponseBody = {
    projects: [
        {
            projectId: "<value>",
            role: "PROJECT_VIEWER",
            createdAt: "<value>",
            updatedAt: "<value>",
            project: {},
        },
    ],
    pagination: {
        count: 4614.79,
        next: "<value>",
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projects`                                                                                 | [models.ListAccessGroupProjectsProjects](../models/listaccessgroupprojectsprojects.md)[]   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [models.ListAccessGroupProjectsPagination](../models/listaccessgroupprojectspagination.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |