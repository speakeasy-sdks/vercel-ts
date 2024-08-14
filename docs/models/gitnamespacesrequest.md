# GitNamespacesRequest

## Example Usage

```typescript
import { GitNamespacesRequest } from "@simplesagar/vercel/models/gitnamespacesop.js";

let value: GitNamespacesRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `host`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The custom Git host if using a custom Git provider, like GitHub Enterprise Server | ghes-test.now.systems                                                             |
| `provider`                                                                        | [models.Provider](../models/provider.md)                                          | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `teamId`                                                                          | *string*                                                                          | :heavy_minus_sign:                                                                | The Team identifier to perform the request on behalf of.                          |                                                                                   |
| `slug`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The Team slug to perform the request on behalf of.                                |                                                                                   |