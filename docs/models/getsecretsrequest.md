# GetSecretsRequest

## Example Usage

```typescript
import { GetSecretsRequest } from "@simplesagar/vercel/models/getsecretsop.js";

let value: GetSecretsRequest = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `id`                                                      | *string*                                                  | :heavy_minus_sign:                                        | Filter out secrets based on comma separated secret ids.   | sec_RKc5iV0rV3ZSrFrHiruRno7k,sec_fGc5iV0rV3ZSrFrHiruRnouQ |
| `projectId`                                               | *string*                                                  | :heavy_minus_sign:                                        | Filter out secrets that belong to a project.              | prj_2WjyKQmM8ZnGcJsPWMrHRHrE                              |
| `teamId`                                                  | *string*                                                  | :heavy_minus_sign:                                        | The Team identifier to perform the request on behalf of.  |                                                           |
| `slug`                                                    | *string*                                                  | :heavy_minus_sign:                                        | The Team slug to perform the request on behalf of.        |                                                           |