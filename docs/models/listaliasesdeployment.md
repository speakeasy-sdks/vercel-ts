# ListAliasesDeployment

A map with the deployment ID, URL and metadata

## Example Usage

```typescript
import { ListAliasesDeployment } from "@simplesagar/vercel/models/listaliasesop.js";

let value: ListAliasesDeployment = {
  id: "dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx",
  url: "my-instant-deployment-3ij3cxz9qr.now.sh",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | The deployment unique identifier        | dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx        |
| `url`                                   | *string*                                | :heavy_check_mark:                      | The deployment unique URL               | my-instant-deployment-3ij3cxz9qr.now.sh |
| `meta`                                  | *string*                                | :heavy_minus_sign:                      | The deployment metadata                 | {}                                      |