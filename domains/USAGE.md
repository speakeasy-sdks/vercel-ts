<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@vercel/domains";

const sdk = new SDK({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await sdk.domains.buy("<value>", "<value>", {
        name: "example.com",
        expectedPrice: 10,
        renew: true,
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->