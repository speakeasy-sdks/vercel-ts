# Saml

When "Single Sign-On (SAML)" is configured, this object contains information that allows the client-side to identify whether or not this Team has SAML enforced.

## Example Usage

```typescript
import { Saml } from "@simplesagar/vercel/models/teamlimited.js";

let value: Saml = {
  enforced: false,
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connection`                                                                                                                                                    | [models.Connection](../models/connection.md)                                                                                                                    | :heavy_minus_sign:                                                                                                                                              | Information for the SAML Single Sign-On configuration.                                                                                                          |
| `directory`                                                                                                                                                     | [models.Directory](../models/directory.md)                                                                                                                      | :heavy_minus_sign:                                                                                                                                              | Information for the Directory Sync configuration.                                                                                                               |
| `enforced`                                                                                                                                                      | *boolean*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                              | When `true`, interactions with the Team **must** be done with an authentication token that has been authenticated with the Team's SAML Single Sign-On provider. |