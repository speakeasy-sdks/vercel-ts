# CancelDeploymentCrons

The cron jobs associated with this deployment. Note that preview deployments are also allowed to have this property, but only production deployments create cron jobs. If a preview deployment is promoted to production, only then they'll take effect.


## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `schedule`         | *string*           | :heavy_check_mark: | N/A                |
| `path`             | *string*           | :heavy_check_mark: | N/A                |