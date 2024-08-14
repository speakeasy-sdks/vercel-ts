# ListAccessGroupMembersResponseBody

## Example Usage

```typescript
import { ListAccessGroupMembersResponseBody } from "@simplesagar/vercel/models/listaccessgroupmembersop.js";

let value: ListAccessGroupMembersResponseBody = {
    members: [
        {
            email: "Kenyon_Huel7@yahoo.com",
            uid: "<value>",
            username: "Ettie.Bogisich",
            teamRole: "DEVELOPER",
        },
    ],
    pagination: {
        count: 8326.2,
        next: "<value>",
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `members`                                                                                | [models.Members](../models/members.md)[]                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `pagination`                                                                             | [models.ListAccessGroupMembersPagination](../models/listaccessgroupmemberspagination.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |