# GitRepository

The Git Repository that will be connected to the project. When this is defined, any pushes to the specified connected Git Repository will be automatically deployed

## Example Usage

```typescript
import { GitRepository } from "@simplesagar/vercel/models/createprojectop.js";

let value: GitRepository = {
  repo: "<value>",
  type: "bitbucket",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `repo`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The name of the git repository. For example: \"vercel/next.js\"            |
| `type`                                                                     | [models.CreateProjectProjectsType](../models/createprojectprojectstype.md) | :heavy_check_mark:                                                         | The Git Provider of the repository                                         |