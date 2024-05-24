<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@vercel/edge-config";

const sdk = new SDK({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await sdk.edgeConfig.list("<value>", "<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->