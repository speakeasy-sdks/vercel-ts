# Encoding

The file content encoding, it could be either a base64 (useful for images, etc.) of the files or the plain text for source code.

## Example Usage

```typescript
import { Encoding } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: Encoding = "utf-8";
```

## Values

```typescript
"base64" | "utf-8"
```