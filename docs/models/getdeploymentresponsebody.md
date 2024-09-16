# GetDeploymentResponseBody

The deployment including only public information
The deployment including both public and private information

## Example Usage

```typescript
import { GetDeploymentResponseBody } from "@simplesagar/vercel/models/getdeploymentop.js";

let value: GetDeploymentResponseBody = {
  build: {
    env: [
      "<value>",
    ],
  },
  env: [
    "<value>",
  ],
  inspectorUrl: "<value>",
  isInConcurrentBuildsQueue: false,
  projectSettings: {},
  aliasAssigned: false,
  bootedAt: 460.07,
  buildingAt: 7386.83,
  buildSkipped: false,
  creator: {
    uid: "<value>",
  },
  public: false,
  status: "BUILDING",
  id: "<id>",
  type: "LAMBDAS",
  createdAt: 4490.83,
  name: "<value>",
  readyState: "ERROR",
  meta: {
    "key": "<value>",
  },
  regions: [
    "<value>",
  ],
  url: "https://sturdy-diabetes.org",
  version: 3817.6,
  projectId: "<value>",
  plan: "hobby",
  createdIn: "<value>",
  ownerId: "<value>",
  routes: [
    {
      src: "<value>",
      continue: false,
      middleware: 9049.49,
    },
  ],
};
```

## Supported Types

### `models.GetDeploymentResponseBody1`

```typescript
const value: models.GetDeploymentResponseBody1 = /* values here */
```

### `models.GetDeploymentResponseBody2`

```typescript
const value: models.GetDeploymentResponseBody2 = /* values here */
```

