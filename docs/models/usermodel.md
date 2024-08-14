# UserModel

Metadata for the User who generated the event.

## Example Usage

```typescript
import { UserModel } from "@simplesagar/vercel/models/userevent.js";

let value: UserModel = {
    avatar: "https://loremflickr.com/640/480",
    email: "Eudora_Kemmer13@yahoo.com",
    uid: "<value>",
    username: "Filiberto.Boyer",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `avatar`           | *string*           | :heavy_check_mark: | N/A                |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `slug`             | *string*           | :heavy_minus_sign: | N/A                |
| `uid`              | *string*           | :heavy_check_mark: | N/A                |
| `username`         | *string*           | :heavy_check_mark: | N/A                |