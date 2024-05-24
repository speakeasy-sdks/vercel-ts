<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@vercel/projects";

const sdk = new SDK({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await sdk.projects.updateProjectDataCache(
        "prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
        "<value>",
        "<value>",
        {
            disabled: true,
        }
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->