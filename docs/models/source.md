# Source

One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.

## Example Usage

```typescript
import { Source } from "@simplesagar/vercel/models/recordeventsop.js";

let value: Source = "REMOTE";
```

## Values

```typescript
"LOCAL" | "REMOTE"
```