# UpdateProjectDomainRequest

## Example Usage

```typescript
import { UpdateProjectDomainRequest } from "@simplesagar/vercel/models/updateprojectdomainop.js";

let value: UpdateProjectDomainRequest = {
    idOrName: "<value>",
    domain: "www.example.com",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `idOrName`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | The unique project identifier or the project name                                    |                                                                                      |
| `domain`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | The project domain name                                                              | www.example.com                                                                      |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team identifier to perform the request on behalf of.                             |                                                                                      |
| `slug`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team slug to perform the request on behalf of.                                   |                                                                                      |
| `requestBody`                                                                        | [models.UpdateProjectDomainRequestBody](../models/updateprojectdomainrequestbody.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |