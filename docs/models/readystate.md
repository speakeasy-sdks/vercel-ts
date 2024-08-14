# ReadyState

The state of the deployment depending on the process of deploying, or if it is ready or in an error state

## Example Usage

```typescript
import { ReadyState } from "@simplesagar/vercel/models/listdeploymentbuildsop.js";

let value: ReadyState = "READY";
```

## Values

```typescript
"INITIALIZING" | "BUILDING" | "UPLOADING" | "DEPLOYING" | "READY" | "ARCHIVED" | "ERROR" | "QUEUED" | "CANCELED"
```