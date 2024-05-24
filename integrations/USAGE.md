<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";
import { View } from "openapi/models/operations";

const sdk = new SDK({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await sdk.integrations.list(View.Project, "<value>", "<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->