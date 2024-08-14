# EmailLoginRequestBody

## Example Usage

```typescript
import { EmailLoginRequestBody } from "@simplesagar/vercel/models/emailloginop.js";

let value: EmailLoginRequestBody = {
    email: "user@mail.com",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `email`                                                                           | *string*                                                                          | :heavy_check_mark:                                                                | The user email.                                                                   | user@mail.com                                                                     |
| `tokenName`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | The desired name for the token. It will be displayed on the user account details. | Your Client App Name                                                              |