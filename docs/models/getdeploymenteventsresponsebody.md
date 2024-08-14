# GetDeploymentEventsResponseBody

A stream of jsonlines where each line is a deployment log item.
Array of deployment logs for the provided query.

## Example Usage

```typescript
import { GetDeploymentEventsResponseBody } from "@simplesagar/vercel/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBody = {
    created: 9105.45,
    date: 8820.42,
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

## Supported Types

### `models.GetDeploymentEventsResponseBodyDeployments1`

```typescript
const value: models.GetDeploymentEventsResponseBodyDeployments1 = /* values here */
```

### `models.GetDeploymentEventsResponseBodyDeployments2`

```typescript
const value: models.GetDeploymentEventsResponseBodyDeployments2 = /* values here */
```

