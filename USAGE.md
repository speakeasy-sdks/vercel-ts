<!-- Start SDK Example Usage [usage] -->
```typescript
import { Vercel } from "@simplesagar/vercel";

const vercel = new Vercel();

async function run() {
    const result = await vercel.listDeploymentBuilds("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->