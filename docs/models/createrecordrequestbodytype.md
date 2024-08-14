# CreateRecordRequestBodyType

The type of record, it could be one of the valid DNS records.

## Example Usage

```typescript
import { CreateRecordRequestBodyType } from "@simplesagar/vercel/models/createrecordop.js";

let value: CreateRecordRequestBodyType = "HTTPS";
```

## Values

```typescript
"A" | "AAAA" | "ALIAS" | "CAA" | "CNAME" | "HTTPS" | "MX" | "SRV" | "TXT" | "NS"
```