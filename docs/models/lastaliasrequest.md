# LastAliasRequest

## Example Usage

```typescript
import { LastAliasRequest } from "@simplesagar/vercel/models/updateprojectdatacacheop.js";

let value: LastAliasRequest = {
  fromDeploymentId: "<value>",
  toDeploymentId: "<value>",
  jobStatus: "failed",
  requestedAt: 6754.39,
  type: "rollback",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `fromDeploymentId`                                                                                                 | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `toDeploymentId`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `jobStatus`                                                                                                        | [models.JobStatus](../models/jobstatus.md)                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `requestedAt`                                                                                                      | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [models.UpdateProjectDataCacheProjectsResponse200Type](../models/updateprojectdatacacheprojectsresponse200type.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |