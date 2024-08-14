# GetDeploymentEventsResponseBodyDeployments2

## Example Usage

```typescript
import { GetDeploymentEventsResponseBodyDeployments2 } from "@simplesagar/vercel/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBodyDeployments2 = {
    type: "stderr",
    created: 5392.24,
    payload: {
        deploymentId: "<value>",
        id: "<id>",
        date: 1288.6,
        serial: "<value>",
    },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [models.GetDeploymentEventsResponseBodyDeploymentsResponseType](../models/getdeploymenteventsresponsebodydeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `created`                                                                                                                            | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `payload`                                                                                                                            | [models.ResponseBodyPayload](../models/responsebodypayload.md)                                                                       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |