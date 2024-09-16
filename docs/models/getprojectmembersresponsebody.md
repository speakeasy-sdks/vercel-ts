# GetProjectMembersResponseBody

Paginated list of members for the project.

## Example Usage

```typescript
import { GetProjectMembersResponseBody } from "@simplesagar/vercel/models/getprojectmembersop.js";

let value: GetProjectMembersResponseBody = {
  members: [
    {
      email: "jane.doe@example.com",
      role: "ADMIN",
      computedProjectRole: "ADMIN",
      uid: "zTuNVUXEAvvnNN3IaqinkyMw",
      username: "jane-doe",
      createdAt: 1588720733602,
      teamRole: "CONTRIBUTOR",
    },
  ],
  pagination: {
    hasNext: false,
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Supported Types

### `models.GetProjectMembersResponseBody1`

```typescript
const value: models.GetProjectMembersResponseBody1 = /* values here */
```

### `models.GetProjectMembersResponseBody2`

```typescript
const value: models.GetProjectMembersResponseBody2 = /* values here */
```

