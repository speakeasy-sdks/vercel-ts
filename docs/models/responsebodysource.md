# ResponseBodySource

Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.

## Example Usage

```typescript
import { ResponseBodySource } from "@simplesagar/vercel/models/getconfigurationsop.js";

let value: ResponseBodySource = "marketplace";
```

## Values

```typescript
"marketplace" | "deploy-button" | "external"
```