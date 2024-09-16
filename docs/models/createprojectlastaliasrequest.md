# CreateProjectLastAliasRequest

## Example Usage

```typescript
import { CreateProjectLastAliasRequest } from "@simplesagar/vercel/models/createprojectop.js";

let value: CreateProjectLastAliasRequest = {
  fromDeploymentId: "<value>",
  toDeploymentId: "<value>",
  jobStatus: "succeeded",
  requestedAt: 5556.49,
  type: "rollback",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fromDeploymentId`                                                                                                                                     | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `toDeploymentId`                                                                                                                                       | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `jobStatus`                                                                                                                                            | [models.CreateProjectJobStatus](../models/createprojectjobstatus.md)                                                                                   | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `requestedAt`                                                                                                                                          | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `type`                                                                                                                                                 | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyType](../models/createprojectprojectsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |