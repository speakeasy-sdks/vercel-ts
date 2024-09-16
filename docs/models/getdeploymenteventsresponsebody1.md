# GetDeploymentEventsResponseBody1

## Example Usage

```typescript
import { GetDeploymentEventsResponseBody1 } from "@simplesagar/vercel/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBody1 = {
  created: 97.66,
  date: 7963.92,
  deploymentId: "<value>",
  id: "<id>",
  info: {
    type: "<value>",
    name: "<value>",
  },
  serial: "<value>",
  type: "exit",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `created`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `date`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `deploymentId`                                           | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `info`                                                   | [models.Info](../models/info.md)                         | :heavy_check_mark:                                       | N/A                                                      |
| `proxy`                                                  | [models.Proxy](../models/proxy.md)                       | :heavy_minus_sign:                                       | N/A                                                      |
| `requestId`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `serial`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `statusCode`                                             | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `text`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `type`                                                   | [models.ResponseBodyType](../models/responsebodytype.md) | :heavy_check_mark:                                       | N/A                                                      |