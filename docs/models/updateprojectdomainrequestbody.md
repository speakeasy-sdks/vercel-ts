# UpdateProjectDomainRequestBody


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `gitBranch`                                                  | *string*                                                     | :heavy_minus_sign:                                           | Git branch to link the project domain                        | <nil>                                                        |
| `redirect`                                                   | *string*                                                     | :heavy_minus_sign:                                           | Target destination domain for redirect                       | foobar.com                                                   |
| `redirectStatusCode`                                         | [models.RedirectStatusCode](../models/redirectstatuscode.md) | :heavy_minus_sign:                                           | Status code for domain redirect                              | 307                                                          |