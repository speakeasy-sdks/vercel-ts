# ListDeploymentBuildsResponseBody

## Example Usage

```typescript
import { ListDeploymentBuildsResponseBody } from "@simplesagar/vercel/models/listdeploymentbuildsop.js";

let value: ListDeploymentBuildsResponseBody = {
    builds: [
        {
            id: "<id>",
            deploymentId: "<value>",
            entrypoint: "<value>",
            readyState: "QUEUED",
            output: [
                {
                    path: "/opt/sbin",
                    digest: "<value>",
                    mode: 6235.64,
                },
            ],
        },
    ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `builds`                               | [models.Builds](../models/builds.md)[] | :heavy_check_mark:                     | N/A                                    |