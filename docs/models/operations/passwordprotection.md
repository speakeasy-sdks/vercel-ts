# PasswordProtection

Allows to protect project deployments with a password


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `deploymentType`                                                              | [operations.DeploymentType](../../models/operations/deploymenttype.md)        | :heavy_check_mark:                                                            | Specify if the password will apply to every Deployment Target or just Preview |
| `password`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | The password that will be used to protect Project Deployments                 |