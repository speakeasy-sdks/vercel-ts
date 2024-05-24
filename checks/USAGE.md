<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@vercel/checks";

const sdk = new SDK({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await sdk.checks.create(
        "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
        "<value>",
        "<value>",
        {
            name: "Performance Check",
            path: "/",
            blocking: true,
            detailsUrl: "http://example.com",
            externalId: "1234abc",
            rerequestable: true,
        }
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->