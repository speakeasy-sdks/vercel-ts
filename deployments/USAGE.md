<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@vercel/deployments";
import { Direction } from "@vercel/deployments/models/operations";

const sdk = new SDK({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await sdk.deployments.getDeploymentEvents({
        idOrUrl: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
        direction: Direction.Backward,
        follow: 1,
        limit: 100,
        name: "bld_cotnkcr76",
        since: 1540095775941,
        until: 1540106318643,
        statusCode: "5xx",
        delimiter: 1,
        builds: 1,
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->