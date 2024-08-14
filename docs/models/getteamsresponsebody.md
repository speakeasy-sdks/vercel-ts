# GetTeamsResponseBody

A paginated list of teams.

## Example Usage

```typescript
import { GetTeamsResponseBody } from "@simplesagar/vercel/models/getteamsop.js";

let value: GetTeamsResponseBody = {
    teams: [
        {
            limited: false,
            id: "team_nllPyCtREAqxxdyFKbbMDlxd",
            slug: "my-team",
            name: "My Team",
            avatar: "6eb07268bcfadd309905ffb1579354084c24655c",
            membership: {},
            created: "<value>",
            createdAt: 1630748523395,
        },
    ],
    pagination: {
        count: 20,
        next: 1540095775951,
        prev: 1540095775951,
    },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `teams`                                                                                                                                                         | *models.GetTeamsTeams*[]                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |