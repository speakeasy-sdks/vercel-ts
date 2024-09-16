# OptionsAllowlist

Specify a list of paths that should not be protected by Deployment Protection to enable Cors preflight requests

## Example Usage

```typescript
import { OptionsAllowlist } from "@simplesagar/vercel/models/updateprojectop.js";

let value: OptionsAllowlist = {
  paths: [
    {
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `paths`                              | [models.Paths](../models/paths.md)[] | :heavy_check_mark:                   | N/A                                  |