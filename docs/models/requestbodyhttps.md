# RequestBodyHttps

## Example Usage

```typescript
import { RequestBodyHttps } from "@simplesagar/vercel/models/createrecordop.js";

let value: RequestBodyHttps = {
    priority: 10,
    target: "host.example.com",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `priority`         | *number*           | :heavy_check_mark: | N/A                | 10                 |
| `target`           | *string*           | :heavy_check_mark: | N/A                | host.example.com   |
| `params`           | *string*           | :heavy_minus_sign: | N/A                | alpn=h2,h3         |