# DismissedToasts

A record of when, under a certain scopeId, a toast was dismissed

## Example Usage

```typescript
import { DismissedToasts } from "@simplesagar/vercel/models/authuser.js";

let value: DismissedToasts = {
  name: "<value>",
  dismissals: [
    {
      scopeId: "<value>",
      createdAt: 3041.73,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `dismissals`                                   | [models.Dismissals](../models/dismissals.md)[] | :heavy_check_mark:                             | N/A                                            |