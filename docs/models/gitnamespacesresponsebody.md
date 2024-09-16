# GitNamespacesResponseBody

## Example Usage

```typescript
import { GitNamespacesResponseBody } from "@simplesagar/vercel/models/gitnamespacesop.js";

let value: GitNamespacesResponseBody = {
  provider: "<value>",
  slug: "<value>",
  id: 8987.6,
  ownerType: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `provider`           | *string*             | :heavy_check_mark:   | N/A                  |
| `slug`               | *string*             | :heavy_check_mark:   | N/A                  |
| `id`                 | *models.Id*          | :heavy_check_mark:   | N/A                  |
| `ownerType`          | *string*             | :heavy_check_mark:   | N/A                  |
| `name`               | *string*             | :heavy_minus_sign:   | N/A                  |
| `isAccessRestricted` | *boolean*            | :heavy_minus_sign:   | N/A                  |
| `installationId`     | *number*             | :heavy_minus_sign:   | N/A                  |
| `requireReauth`      | *boolean*            | :heavy_minus_sign:   | N/A                  |