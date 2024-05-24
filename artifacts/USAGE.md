<!-- Start SDK Example Usage [usage] -->
```typescript
import { Event, SDK, Source } from "@vercel/artifacts";

const sdk = new SDK({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    await sdk.artifacts.recordEvents({
        xArtifactClientCi: "VERCEL",
        xArtifactClientInteractive: 0,
        requestBody: [
            {
                sessionId: "<value>",
                source: Source.Local,
                event: Event.Miss,
                hash: "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
                duration: 400,
            },
        ],
    });
}

run();

```
<!-- End SDK Example Usage [usage] -->