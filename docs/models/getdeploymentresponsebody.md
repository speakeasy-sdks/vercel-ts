# GetDeploymentResponseBody

The deployment including only public information
The deployment including both public and private information

## Example Usage

```typescript
import { GetDeploymentResponseBody } from "@simplesagar/vercel/models/getdeploymentop.js";

let value: GetDeploymentResponseBody = {
    build: {
        env: ["<value>"],
    },
    env: ["<value>"],
    inspectorUrl: "<value>",
    isInConcurrentBuildsQueue: false,
    projectSettings: {},
    aliasAssigned: false,
    bootedAt: 3485.19,
    buildingAt: 9372.85,
    buildSkipped: false,
    creator: {
        uid: "<value>",
    },
    public: false,
    status: "READY",
    id: "<id>",
    type: "LAMBDAS",
    createdAt: 2572.33,
    name: "<value>",
    readyState: "CANCELED",
    meta: {
        key: "<value>",
    },
    regions: ["<value>"],
    url: "http://wide-eyed-progenitor.org",
    version: 8970.71,
    projectId: "<value>",
    plan: "pro",
    createdIn: "<value>",
    ownerId: "<value>",
    routes: [
        {
            src: "<value>",
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

