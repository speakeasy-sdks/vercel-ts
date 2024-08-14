# GetDomainsServiceType

The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.

## Example Usage

```typescript
import { GetDomainsServiceType } from "@simplesagar/vercel/models/getdomainsop.js";

let value: GetDomainsServiceType = "zeit.world";
```

## Values

```typescript
"zeit.world" | "external" | "na"
```