# GetDeploymentEventsResponseBodyDeployments1

## Example Usage

```typescript
import { GetDeploymentEventsResponseBodyDeployments1 } from "@simplesagar/vercel/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBodyDeployments1 = {
    created: 5789.22,
    date: 5438.06,
    deploymentId: "<value>",
    id: "<id>",
    info: {
        type: "<value>",
        name: "<value>",
    },
    serial: "<value>",
    type: "command",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `created`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `date`                                                                                                               | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `deploymentId`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `info`                                                                                                               | [models.ResponseBodyInfo](../models/responsebodyinfo.md)                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `proxy`                                                                                                              | [models.ResponseBodyProxy](../models/responsebodyproxy.md)                                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `requestId`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `serial`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `statusCode`                                                                                                         | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `text`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [models.GetDeploymentEventsResponseBodyDeploymentsType](../models/getdeploymenteventsresponsebodydeploymentstype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |