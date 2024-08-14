# UpdateEdgeConfigTransfer

Keeps track of the current state of the Edge Config while it gets transferred.

## Example Usage

```typescript
import { UpdateEdgeConfigTransfer } from "@simplesagar/vercel/models/updateedgeconfigop.js";

let value: UpdateEdgeConfigTransfer = {
    fromAccountId: "<value>",
    startedAt: 9704.94,
    doneAt: 5927.8,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |