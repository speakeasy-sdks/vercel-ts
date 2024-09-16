# GetProjectsLastAliasRequest

## Example Usage

```typescript
import { GetProjectsLastAliasRequest } from "@simplesagar/vercel/models/getprojectsop.js";

let value: GetProjectsLastAliasRequest = {
  fromDeploymentId: "<value>",
  toDeploymentId: "<value>",
  jobStatus: "pending",
  requestedAt: 5356.33,
  type: "rollback",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `fromDeploymentId`                                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `toDeploymentId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `jobStatus`                                                                                  | [models.GetProjectsJobStatus](../models/getprojectsjobstatus.md)                             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestedAt`                                                                                | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [models.GetProjectsProjectsResponse200Type](../models/getprojectsprojectsresponse200type.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |