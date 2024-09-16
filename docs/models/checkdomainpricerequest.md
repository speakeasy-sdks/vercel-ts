# CheckDomainPriceRequest

## Example Usage

```typescript
import { CheckDomainPriceRequest } from "@simplesagar/vercel/models/checkdomainpriceop.js";

let value: CheckDomainPriceRequest = {
  name: "example.com",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | The name of the domain for which the price needs to be checked. | example.com                                                     |
| `type`                                                          | [models.QueryParamType](../models/queryparamtype.md)            | :heavy_minus_sign:                                              | In which status of the domain the price needs to be checked.    | new                                                             |
| `teamId`                                                        | *string*                                                        | :heavy_minus_sign:                                              | The Team identifier to perform the request on behalf of.        |                                                                 |
| `slug`                                                          | *string*                                                        | :heavy_minus_sign:                                              | The Team slug to perform the request on behalf of.              |                                                                 |