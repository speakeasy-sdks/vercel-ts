<!-- Start SDK Example Usage [usage] -->
```typescript
import { Vercel } from "vercel";

const vercel = new Vercel();

async function run() {
    const result = await vercel.getDeploymentBuilds("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->