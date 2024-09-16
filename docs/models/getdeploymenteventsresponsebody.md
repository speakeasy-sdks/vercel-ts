# GetDeploymentEventsResponseBody

A stream of jsonlines where each line is a deployment log item.
Array of deployment logs for the provided query.

## Example Usage

```typescript
import { GetDeploymentEventsResponseBody } from "@simplesagar/vercel/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBody = {
  type: "edge-function-invocation",
  created: 829.71,
  payload: {
    deploymentId: "<value>",
    id: "<id>",
    date: 4586.04,
    serial: "<value>",
  },
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

