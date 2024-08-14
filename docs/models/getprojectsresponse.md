# GetProjectsResponse

## Example Usage

```typescript
import { GetProjectsResponse } from "@simplesagar/vercel/models/getprojectsop.js";

let value: GetProjectsResponse = {
    result: {
        projects: [],
        pagination: {
            count: 20,
            next: 1540095775951,
            prev: 1540095775951,
        },
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `result`                                                               | [models.GetProjectsResponseBody](../models/getprojectsresponsebody.md) | :heavy_check_mark:                                                     | N/A                                                                    |