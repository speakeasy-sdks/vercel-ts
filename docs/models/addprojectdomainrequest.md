# AddProjectDomainRequest

## Example Usage

```typescript
import { AddProjectDomainRequest } from "@simplesagar/vercel/models/addprojectdomainop.js";

let value: AddProjectDomainRequest = {
    idOrName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `idOrName`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | The unique project identifier or the project name                              |
| `teamId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The Team identifier to perform the request on behalf of.                       |
| `slug`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The Team slug to perform the request on behalf of.                             |
| `requestBody`                                                                  | [models.AddProjectDomainRequestBody](../models/addprojectdomainrequestbody.md) | :heavy_minus_sign:                                                             | N/A                                                                            |