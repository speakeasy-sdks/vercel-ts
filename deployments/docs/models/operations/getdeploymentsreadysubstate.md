# GetDeploymentsReadySubstate

Since June 2023 Substate of deployment when readyState is 'READY' Tracks whether or not deployment has seen production traffic: - STAGED: never seen production traffic - PROMOTED: has seen production traffic


## Values

| Name       | Value      |
| ---------- | ---------- |
| `Staged`   | STAGED     |
| `Promoted` | PROMOTED   |