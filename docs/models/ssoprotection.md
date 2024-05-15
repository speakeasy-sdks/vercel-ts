# SsoProtection

Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team


## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                            | [models.UpdateProjectDeploymentType](../models/updateprojectdeploymenttype.md)                              | :heavy_minus_sign:                                                                                          | Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview |