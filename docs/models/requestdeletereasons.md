# RequestDeleteReasons

An object describing the reason why the User account is being deleted.

## Example Usage

```typescript
import { RequestDeleteReasons } from "@simplesagar/vercel/models/requestdeleteop.js";

let value: RequestDeleteReasons = {
    slug: "<value>",
    description: "Up-sized 24 hour projection",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `slug`                                                                | *string*                                                              | :heavy_check_mark:                                                    | Idenitifier slug of the reason why the User account is being deleted. |
| `description`                                                         | *string*                                                              | :heavy_check_mark:                                                    | Description of the reason why the User account is being deleted.      |