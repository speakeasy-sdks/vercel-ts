<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@vercel/dns";

const sdk = new SDK({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await sdk.dns.get({
        domain: "example.com",
        limit: "20",
        since: "1609499532000",
        until: "1612264332000",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->