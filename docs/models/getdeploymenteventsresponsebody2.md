# GetDeploymentEventsResponseBody2

## Example Usage

```typescript
import { GetDeploymentEventsResponseBody2 } from "@simplesagar/vercel/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBody2 = {
  type: "middleware",
  created: 5801.97,
  payload: {
    deploymentId: "<value>",
    id: "<id>",
    date: 3277.2,
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