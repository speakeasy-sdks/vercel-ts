# CreateProjectEnvRequest

## Example Usage

```typescript
import { CreateProjectEnvRequest } from "@simplesagar/vercel/models/createprojectenvop.js";

let value: CreateProjectEnvRequest = {
  idOrName: "prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `idOrName`                                                  | *string*                                                    | :heavy_check_mark:                                          | The unique project identifier or the project name           | prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA                            |
| `upsert`                                                    | *string*                                                    | :heavy_minus_sign:                                          | Allow override of environment variable if it already exists | true                                                        |
| `teamId`                                                    | *string*                                                    | :heavy_minus_sign:                                          | The Team identifier to perform the request on behalf of.    |                                                             |
| `slug`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The Team slug to perform the request on behalf of.          |                                                             |
| `requestBody`                                               | *models.CreateProjectEnvRequestBody*                        | :heavy_minus_sign:                                          | N/A                                                         |                                                             |