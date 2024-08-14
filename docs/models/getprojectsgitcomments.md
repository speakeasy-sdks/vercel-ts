# GetProjectsGitComments

## Example Usage

```typescript
import { GetProjectsGitComments } from "@simplesagar/vercel/models/getprojectsop.js";

let value: GetProjectsGitComments = {
    onPullRequest: false,
    onCommit: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |