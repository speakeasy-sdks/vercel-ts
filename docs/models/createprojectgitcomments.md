# CreateProjectGitComments

## Example Usage

```typescript
import { CreateProjectGitComments } from "@simplesagar/vercel/models/createprojectop.js";

let value: CreateProjectGitComments = {
    onPullRequest: false,
    onCommit: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |