# Type

String indicating the type of file tree entry.

## Example Usage

```typescript
import { Type } from "@simplesagar/vercel/models/filetree.js";

let value: Type = "file";
```

## Values

```typescript
"directory" | "file" | "symlink" | "lambda" | "middleware" | "invalid"
```