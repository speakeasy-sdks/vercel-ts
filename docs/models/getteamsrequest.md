# GetTeamsRequest

## Example Usage

```typescript
import { GetTeamsRequest } from "@simplesagar/vercel/models/getteamsop.js";

let value: GetTeamsRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Maximum number of Teams which may be returned.                        | 20                                                                    |
| `since`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp (in milliseconds) to only include Teams created since then. | 1540095775951                                                         |
| `until`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp (in milliseconds) to only include Teams created until then. | 1540095775951                                                         |