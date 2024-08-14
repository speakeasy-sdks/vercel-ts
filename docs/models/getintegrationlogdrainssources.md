# GetIntegrationLogDrainsSources

The sources from which logs are currently being delivered to this log drain.

## Example Usage

```typescript
import { GetIntegrationLogDrainsSources } from "@simplesagar/vercel/models/getintegrationlogdrainsop.js";

let value: GetIntegrationLogDrainsSources = "build";
```

## Values

```typescript
"build" | "edge" | "lambda" | "static" | "external" | "firewall"
```