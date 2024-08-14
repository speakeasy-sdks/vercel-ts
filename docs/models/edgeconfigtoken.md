# EdgeConfigToken

The EdgeConfig.

## Example Usage

```typescript
import { EdgeConfigToken } from "@simplesagar/vercel/models/edgeconfigtoken.js";

let value: EdgeConfigToken = {
    token: "<value>",
    label: "<value>",
    id: "<id>",
    edgeConfigId: "<value>",
    createdAt: 4565.2,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `token`                                                                 | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `label`                                                                 | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | This is not the token itself, but rather an id to identify the token by |
| `edgeConfigId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `createdAt`                                                             | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |