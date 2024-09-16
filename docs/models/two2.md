# Two2

## Example Usage

```typescript
import { Two2 } from "@simplesagar/vercel/models/createprojectenvop.js";

let value: Two2 = {
  key: "API_URL",
  value: "https://api.vercel.com",
  type: "plain",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `key`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | The name of the environment variable                                              | API_URL                                                                           |
| `value`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | The value of the environment variable                                             | https://api.vercel.com                                                            |
| `type`                                                                            | [models.CreateProjectEnv2Type](../models/createprojectenv2type.md)                | :heavy_check_mark:                                                                | The type of environment variable                                                  | plain                                                                             |
| `target`                                                                          | [models.CreateProjectEnv2Target](../models/createprojectenv2target.md)[]          | :heavy_minus_sign:                                                                | The target environment of the environment variable                                | [<br/>"preview"<br/>]                                                             |
| `gitBranch`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | If defined, the git branch of the environment variable (must have target=preview) | feature-1                                                                         |
| `comment`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | A comment to add context on what this environment variable is for                 | database connection string for production                                         |