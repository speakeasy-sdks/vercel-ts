<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@vercel/user";

const sdk = new SDK({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await sdk.user.listEvent({
        limit: 20,
        since: "2019-12-08T10:00:38.976Z",
        until: "2019-12-09T23:00:38.976Z",
        types: "login,team-member-join,domain-buy",
        userId: "aeIInYVk59zbFF2SxfyxxmuO",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->