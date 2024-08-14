# CreateEdgeConfigTransfer

Keeps track of the current state of the Edge Config while it gets transferred.

## Example Usage

```typescript
import { CreateEdgeConfigTransfer } from "@simplesagar/vercel/models/createedgeconfigop.js";

let value: CreateEdgeConfigTransfer = {
    fromAccountId: "<value>",
    startedAt: 3279.88,
    doneAt: 2931.44,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fromAccountId`    | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `doneAt`           | *number*           | :heavy_check_mark: | N/A                |