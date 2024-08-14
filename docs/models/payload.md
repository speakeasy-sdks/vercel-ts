# Payload

## Example Usage

```typescript
import { Payload } from "@simplesagar/vercel/models/getdeploymenteventsop.js";

let value: Payload = {
    deploymentId: "<value>",
    id: "<id>",
    date: 6900.25,
    serial: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `deploymentId`                                                                                   | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `info`                                                                                           | [models.GetDeploymentEventsResponseBodyInfo](../models/getdeploymenteventsresponsebodyinfo.md)   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `text`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `date`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `serial`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `created`                                                                                        | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `statusCode`                                                                                     | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `requestId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `proxy`                                                                                          | [models.GetDeploymentEventsResponseBodyProxy](../models/getdeploymenteventsresponsebodyproxy.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |