# CreateWebhookEvents

The webhooks events


## Values

| Name                                               | Value                                              |
| -------------------------------------------------- | -------------------------------------------------- |
| `BudgetReached`                                    | budget.reached                                     |
| `BudgetReset`                                      | budget.reset                                       |
| `BudgetCreated`                                    | domain.created                                     |
| `DomainCreated`                                    | deployment.created                                 |
| `DeploymentCreated`                                | deployment.error                                   |
| `DeploymentError`                                  | deployment.canceled                                |
| `DeploymentCanceled`                               | deployment.succeeded                               |
| `DeploymentSucceeded`                              | deployment.ready                                   |
| `DeploymentReady`                                  | deployment.check-rerequested                       |
| `DeploymentCheckRerequested`                       | integration-configuration.permission-upgraded      |
| `IntegrationConfigurationPermissionUpgraded`       | integration-configuration.removed                  |
| `IntegrationConfigurationRemoved`                  | integration-configuration.scope-change-confirmed   |
| `IntegrationConfigurationScopeChangeConfirmed`     | project.created                                    |
| `ProjectCreated`                                   | project.removed                                    |
| `ProjectRemoved`                                   | deployment-checks-completed                        |
| `DeploymentChecksCompleted`                        | deployment-ready                                   |
| `DeploymentDashReady`                              | deployment-prepared                                |
| `DeploymentDashPrepared`                           | deployment-error                                   |
| `DeploymentDashError`                              | deployment-check-rerequested                       |
| `DeploymentDashCheckRerequested`                   | deployment-canceled                                |
| `DeploymentDashCanceled`                           | project-created                                    |
| `ProjectDashCreated`                               | project-removed                                    |
| `ProjectDashRemoved`                               | domain-created                                     |
| `DomainDashCreated`                                | deployment                                         |
| `Deployment`                                       | integration-configuration-permission-updated       |
| `IntegrationConfigurationDashPermissionUpdated`    | integration-configuration-removed                  |
| `IntegrationConfigurationDashRemoved`              | integration-configuration-scope-change-confirmed   |
| `IntegrationConfigurationDashScopeChangeConfirmed` | test-webhook                                       |