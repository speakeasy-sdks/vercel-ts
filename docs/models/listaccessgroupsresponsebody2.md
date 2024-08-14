# ListAccessGroupsResponseBody2

## Example Usage

```typescript
import { ListAccessGroupsResponseBody2 } from "@simplesagar/vercel/models/listaccessgroupsop.js";

let value: ListAccessGroupsResponseBody2 = {
    accessGroups: [
        {
            isDsyncManaged: false,
            name: "my-access-group",
            createdAt: "1588720733602",
            teamId: "team_123a6c5209bc3778245d011443644c8d27dc2c50",
            updatedAt: "1588720733602",
            accessGroupId: "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
            membersCount: 5,
            projectsCount: 2,
        },
    ],
    pagination: {
        count: 7781.57,
        next: "<value>",
    },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accessGroups`                                                             | [models.ResponseBodyAccessGroups](../models/responsebodyaccessgroups.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `pagination`                                                               | [models.ResponseBodyPagination](../models/responsebodypagination.md)       | :heavy_check_mark:                                                         | N/A                                                                        |