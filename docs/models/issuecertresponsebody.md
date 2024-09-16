# IssueCertResponseBody

## Example Usage

```typescript
import { IssueCertResponseBody } from "@simplesagar/vercel/models/issuecertop.js";

let value: IssueCertResponseBody = {
  id: "<id>",
  createdAt: 5823.2,
  expiresAt: 5398.13,
  autoRenew: false,
  cns: [
    "<value>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `createdAt`        | *number*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *number*           | :heavy_check_mark: | N/A                |
| `autoRenew`        | *boolean*          | :heavy_check_mark: | N/A                |
| `cns`              | *string*[]         | :heavy_check_mark: | N/A                |