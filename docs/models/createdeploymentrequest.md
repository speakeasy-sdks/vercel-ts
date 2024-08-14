# CreateDeploymentRequest

## Example Usage

```typescript
import { CreateDeploymentRequest } from "@simplesagar/vercel/models/createdeploymentop.js";

let value: CreateDeploymentRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `forceNew`                                                                           | [models.ForceNew](../models/forcenew.md)                                             | :heavy_minus_sign:                                                                   | Forces a new deployment even if there is a previous similar deployment               |
| `skipAutoDetectionConfirmation`                                                      | [models.SkipAutoDetectionConfirmation](../models/skipautodetectionconfirmation.md)   | :heavy_minus_sign:                                                                   | Allows to skip framework detection so the API would not fail to ask for confirmation |
| `teamId`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team identifier to perform the request on behalf of.                             |
| `slug`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The Team slug to perform the request on behalf of.                                   |
| `requestBody`                                                                        | [models.CreateDeploymentRequestBody](../models/createdeploymentrequestbody.md)       | :heavy_minus_sign:                                                                   | N/A                                                                                  |