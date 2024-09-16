# GetDeploymentsGitComments

Since June '23

## Example Usage

```typescript
import { GetDeploymentsGitComments } from "@simplesagar/vercel/models/getdeploymentsop.js";

let value: GetDeploymentsGitComments = {
  onPullRequest: false,
  onCommit: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |