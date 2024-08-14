# GetDeploymentEventsResponseBody2

## Example Usage

```typescript
import { GetDeploymentEventsResponseBody2 } from "@simplesagar/vercel/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBody2 = {
    type: "deployment-state",
    created: 6996.22,
    payload: {
        deploymentId: "<value>",
        id: "<id>",
        date: 5801.97,
        serial: "<value>",
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [models.GetDeploymentEventsResponseBodyType](../models/getdeploymenteventsresponsebodytype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `created`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `payload`                                                                                      | [models.Payload](../models/payload.md)                                                         | :heavy_check_mark:                                                                             | N/A                                                                                            |