# UpdateCheckRequestBody

## Example Usage

```typescript
import { UpdateCheckRequestBody } from "@simplesagar/vercel/models/updatecheckop.js";

let value: UpdateCheckRequestBody = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | The name of the check being created                            | Performance Check                                              |
| `path`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Path of the page that is being checked                         | /                                                              |
| `status`                                                       | [models.UpdateCheckStatus](../models/updatecheckstatus.md)     | :heavy_minus_sign:                                             | The current status of the check                                |                                                                |
| `conclusion`                                                   | [models.Conclusion](../models/conclusion.md)                   | :heavy_minus_sign:                                             | The result of the check being run                              |                                                                |
| `detailsUrl`                                                   | *string*                                                       | :heavy_minus_sign:                                             | A URL a user may visit to see more information about the check | https://example.com/check/run/1234abc                          |
| `output`                                                       | [models.Output](../models/output.md)                           | :heavy_minus_sign:                                             | The results of the check Run                                   |                                                                |
| `externalId`                                                   | *string*                                                       | :heavy_minus_sign:                                             | An identifier that can be used as an external reference        | 1234abc                                                        |