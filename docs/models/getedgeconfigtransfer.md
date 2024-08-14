# GetEdgeConfigTransfer

Keeps track of the current state of the Edge Config while it gets transferred.

## Example Usage

```typescript
import { GetEdgeConfigTransfer } from "@simplesagar/vercel/models/getedgeconfigop.js";

let value: GetEdgeConfigTransfer = {
    fromAccountId: "<value>",
    startedAt: 632.07,
    doneAt: 9257.03,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |