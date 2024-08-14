# ReadySubstate

Since June 2023 Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - PROMOTED: has seen production traffic

## Example Usage

```typescript
import { ReadySubstate } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: ReadySubstate = "STAGED";
```

## Values

```typescript
"STAGED" | "PROMOTED"
```