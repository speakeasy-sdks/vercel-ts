# GetDeploymentsState

In which state is the deployment.

## Example Usage

```typescript
import { GetDeploymentsState } from "@simplesagar/vercel/models/getdeploymentsop.js";

let value: GetDeploymentsState = "READY";
```

## Values

```typescript
"BUILDING" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY" | "CANCELED" | "DELETED"
```