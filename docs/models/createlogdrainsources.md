# CreateLogDrainSources

The sources from which logs are currently being delivered to this log drain.

## Example Usage

```typescript
import { CreateLogDrainSources } from "@simplesagar/vercel/models/createlogdrainop.js";

let value: CreateLogDrainSources = "lambda";
```

## Values

```typescript
"build" | "edge" | "lambda" | "static" | "external" | "firewall"
```