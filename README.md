# Vercel TypeScript SDK

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel();

async function run() {
    const result = await vercel.getDeploymentBuilds("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [Vercel SDK](docs/sdks/vercel/README.md)

* [getDeploymentBuilds](docs/sdks/vercel/README.md#getdeploymentbuilds) - Retrieves the list of builds given their deployment's unique identifier. No longer listed as public API as of May 2023.
* [purgeDataCache](docs/sdks/vercel/README.md#purgedatacache)
* [updateBillingSettings](docs/sdks/vercel/README.md#updatebillingsettings)

### [artifacts](docs/sdks/artifacts/README.md)

* [recordEvents](docs/sdks/artifacts/README.md#recordevents) - Record an artifacts cache usage event
* [status](docs/sdks/artifacts/README.md#status) - Get status of Remote Caching for this principal
* [uploadArtifact](docs/sdks/artifacts/README.md#uploadartifact) - Upload a cache artifact
* [downloadArtifact](docs/sdks/artifacts/README.md#downloadartifact) - Download a cache artifact
* [artifactExists](docs/sdks/artifacts/README.md#artifactexists) - Check if a cache artifact exists
* [artifactQuery](docs/sdks/artifacts/README.md#artifactquery) - Query information about an artifact

### [checks](docs/sdks/checks/README.md)

* [createCheck](docs/sdks/checks/README.md#createcheck) - Creates a new Check
* [getAllChecks](docs/sdks/checks/README.md#getallchecks) - Retrieve a list of all checks
* [getCheck](docs/sdks/checks/README.md#getcheck) - Get a single check
* [updateCheck](docs/sdks/checks/README.md#updatecheck) - Update a check
* [rerequestCheck](docs/sdks/checks/README.md#rerequestcheck) - Rerequest a check

### [projects](docs/sdks/projects/README.md)

* [updateProjectDataCache](docs/sdks/projects/README.md#updateprojectdatacache) - Update the data cache feature
* [getProjects](docs/sdks/projects/README.md#getprojects) - Retrieve a list of projects
* [createProject](docs/sdks/projects/README.md#createproject) - Create a new project
* [updateProject](docs/sdks/projects/README.md#updateproject) - Update an existing project
* [deleteProject](docs/sdks/projects/README.md#deleteproject) - Delete a Project
* [getProjectDomain](docs/sdks/projects/README.md#getprojectdomain) - Get a project domain
* [updateProjectDomain](docs/sdks/projects/README.md#updateprojectdomain) - Update a project domain
* [removeProjectDomain](docs/sdks/projects/README.md#removeprojectdomain) - Remove a domain from a project
* [addProjectDomain](docs/sdks/projects/README.md#addprojectdomain) - Add a domain to a project
* [verifyProjectDomain](docs/sdks/projects/README.md#verifyprojectdomain) - Verify project domain
* [filterProjectEnvs](docs/sdks/projects/README.md#filterprojectenvs) - Retrieve the environment variables of a project by id or name
* [getProjectEnv](docs/sdks/projects/README.md#getprojectenv) - Retrieve the decrypted value of an environment variable of a project by id
* [createProjectEnv](docs/sdks/projects/README.md#createprojectenv) - Create one or more environment variables
* [removeProjectEnv](docs/sdks/projects/README.md#removeprojectenv) - Remove an environment variable
* [editProjectEnv](docs/sdks/projects/README.md#editprojectenv) - Edit an environment variable
* [requestPromote](docs/sdks/projects/README.md#requestpromote) - Points all production domains for a project to the given deploy
* [getEequestPromoteAliases](docs/sdks/projects/README.md#geteequestpromotealiases) - Gets a list of aliases with status for the current promote
* [pauseProject](docs/sdks/projects/README.md#pauseproject) - Pause a project
* [unpauseProject](docs/sdks/projects/README.md#unpauseproject) - Unpause a project

### [deployments](docs/sdks/deployments/README.md)

* [getDeploymentEvents](docs/sdks/deployments/README.md#getdeploymentevents) - Get deployment events
* [getDeployment](docs/sdks/deployments/README.md#getdeployment) - Get a deployment by ID or URL
* [createDeployment](docs/sdks/deployments/README.md#createdeployment) - Create a new deployment
* [cancelDeployment](docs/sdks/deployments/README.md#canceldeployment) - Cancel a deployment
* [uploadFile](docs/sdks/deployments/README.md#uploadfile) - Upload Deployment Files
* [listDeploymentFiles](docs/sdks/deployments/README.md#listdeploymentfiles) - List Deployment Files
* [getDeploymentFileContents](docs/sdks/deployments/README.md#getdeploymentfilecontents) - Get Deployment File Contents
* [getDeployments](docs/sdks/deployments/README.md#getdeployments) - List deployments
* [deleteDeployment](docs/sdks/deployments/README.md#deletedeployment) - Delete a Deployment

### [domains](docs/sdks/domains/README.md)

* [buyDomain](docs/sdks/domains/README.md#buydomain) - Purchase a domain
* [checkDomainPrice](docs/sdks/domains/README.md#checkdomainprice) - Check the price for a domain
* [checkDomainStatus](docs/sdks/domains/README.md#checkdomainstatus) - Check a Domain Availability
* [getDomainTransfer](docs/sdks/domains/README.md#getdomaintransfer) - Get domain transfer info.
* [getDomainConfig](docs/sdks/domains/README.md#getdomainconfig) - Get a Domain's configuration
* [getDomain](docs/sdks/domains/README.md#getdomain) - Get Information for a Single Domain
* [getDomains](docs/sdks/domains/README.md#getdomains) - List all the domains
* [createOrTransferDomain](docs/sdks/domains/README.md#createortransferdomain) - Register or transfer-in a new Domain
* [patchDomain](docs/sdks/domains/README.md#patchdomain) - Update or move apex domain
* [deleteDomain](docs/sdks/domains/README.md#deletedomain) - Remove a domain by name

### [dns](docs/sdks/dns/README.md)

* [getRecords](docs/sdks/dns/README.md#getrecords) - List existing DNS records
* [createRecord](docs/sdks/dns/README.md#createrecord) - Create a DNS record
* [updateRecord](docs/sdks/dns/README.md#updaterecord) - Update an existing DNS record
* [removeRecord](docs/sdks/dns/README.md#removerecord) - Delete a DNS record

### [edgeConfig](docs/sdks/edgeconfig/README.md)

* [getEdgeConfigs](docs/sdks/edgeconfig/README.md#getedgeconfigs) - Get Edge Configs
* [createEdgeConfig](docs/sdks/edgeconfig/README.md#createedgeconfig) - Create an Edge Config
* [getEdgeConfig](docs/sdks/edgeconfig/README.md#getedgeconfig) - Get an Edge Config
* [updateEdgeConfig](docs/sdks/edgeconfig/README.md#updateedgeconfig) - Update an Edge Config
* [deleteEdgeConfig](docs/sdks/edgeconfig/README.md#deleteedgeconfig) - Delete an Edge Config
* [getEdgeConfigItems](docs/sdks/edgeconfig/README.md#getedgeconfigitems) - Get Edge Config items
* [getEdgeConfigSchema](docs/sdks/edgeconfig/README.md#getedgeconfigschema) - Get Edge Config schema
* [patchEdgeConfigSchema](docs/sdks/edgeconfig/README.md#patchedgeconfigschema) - Update Edge Config schema
* [deleteEdgeConfigSchema](docs/sdks/edgeconfig/README.md#deleteedgeconfigschema) - Delete an Edge Config's schema
* [getEdgeConfigItem](docs/sdks/edgeconfig/README.md#getedgeconfigitem) - Get an Edge Config item
* [getEdgeConfigTokens](docs/sdks/edgeconfig/README.md#getedgeconfigtokens) - Get all tokens of an Edge Config
* [deleteEdgeConfigTokens](docs/sdks/edgeconfig/README.md#deleteedgeconfigtokens) - Delete one or more Edge Config tokens
* [getEdgeConfigToken](docs/sdks/edgeconfig/README.md#getedgeconfigtoken) - Get Edge Config token meta data
* [createEdgeConfigToken](docs/sdks/edgeconfig/README.md#createedgeconfigtoken) - Create an Edge Config token

### [user](docs/sdks/user/README.md)

* [listUserEvents](docs/sdks/user/README.md#listuserevents) - List User Events
* [getAuthUser](docs/sdks/user/README.md#getauthuser) - Get the User
* [requestDelete](docs/sdks/user/README.md#requestdelete) - Delete User Account

### [integrations](docs/sdks/integrations/README.md)

* [getConfigurations](docs/sdks/integrations/README.md#getconfigurations) - Get configurations for the authenticated user or team
* [getConfiguration](docs/sdks/integrations/README.md#getconfiguration) - Retrieve an integration configuration
* [deleteConfiguration](docs/sdks/integrations/README.md#deleteconfiguration) - Delete an integration configuration
* [gitNamespaces](docs/sdks/integrations/README.md#gitnamespaces) - List git namespaces by provider
* [listGitRepos](docs/sdks/integrations/README.md#listgitrepos) - List git repositories linked to namespace by provider

### [logDrains](docs/sdks/logdrains/README.md)

* [getIntegrationLogDrains](docs/sdks/logdrains/README.md#getintegrationlogdrains) - Retrieves a list of Integration log drains
* [createLogDrain](docs/sdks/logdrains/README.md#createlogdrain) - Creates a new Integration Log Drain
* [deleteIntegrationLogDrain](docs/sdks/logdrains/README.md#deleteintegrationlogdrain) - Deletes the Integration log drain with the provided `id`
* [getConfigurableLogDrain](docs/sdks/logdrains/README.md#getconfigurablelogdrain) - Retrieves a Configurable Log Drain
* [deleteConfigurableLogDrain](docs/sdks/logdrains/README.md#deleteconfigurablelogdrain) - Deletes a Configurable Log Drain
* [getAllLogDrains](docs/sdks/logdrains/README.md#getalllogdrains) - Retrieves a list of all the Log Drains
* [createConfigurableLogDrain](docs/sdks/logdrains/README.md#createconfigurablelogdrain) - Creates a Configurable Log Drain

### [projectMembers](docs/sdks/projectmembers/README.md)

* [getProjectMembers](docs/sdks/projectmembers/README.md#getprojectmembers) - List project members
* [addProjectMember](docs/sdks/projectmembers/README.md#addprojectmember) - Adds a new member to a project.
* [removeProjectMember](docs/sdks/projectmembers/README.md#removeprojectmember) - Remove a Project Member

### [teams](docs/sdks/teams/README.md)

* [getTeamMembers](docs/sdks/teams/README.md#getteammembers) - List team members
* [inviteUserToTeam](docs/sdks/teams/README.md#inviteusertoteam) - Invite a user
* [requestAccessToTeam](docs/sdks/teams/README.md#requestaccesstoteam) - Request access to a team
* [getTeamAccessRequest](docs/sdks/teams/README.md#getteamaccessrequest) - Get access request status
* [joinTeam](docs/sdks/teams/README.md#jointeam) - Join a team
* [updateTeamMember](docs/sdks/teams/README.md#updateteammember) - Update a Team Member
* [removeTeamMember](docs/sdks/teams/README.md#removeteammember) - Remove a Team Member
* [getTeam](docs/sdks/teams/README.md#getteam) - Get a Team
* [patchTeam](docs/sdks/teams/README.md#patchteam) - Update a Team
* [getTeams](docs/sdks/teams/README.md#getteams) - List all teams
* [createTeam](docs/sdks/teams/README.md#createteam) - Create a Team
* [deleteTeam](docs/sdks/teams/README.md#deleteteam) - Delete a Team
* [deleteTeamInviteCode](docs/sdks/teams/README.md#deleteteaminvitecode) - Delete a Team invite code

### [authentication](docs/sdks/authentication/README.md)

* [listAuthTokens](docs/sdks/authentication/README.md#listauthtokens) - List Auth Tokens
* [createAuthToken](docs/sdks/authentication/README.md#createauthtoken) - Create an Auth Token
* [getAuthToken](docs/sdks/authentication/README.md#getauthtoken) - Get Auth Token Metadata
* [deleteAuthToken](docs/sdks/authentication/README.md#deleteauthtoken) - Delete an authentication token
* [verifyToken](docs/sdks/authentication/README.md#verifytoken) - Verify a login request to get an authentication token
* [emailLogin](docs/sdks/authentication/README.md#emaillogin) - Login with email

### [webhooks](docs/sdks/webhooks/README.md)

* [createWebhook](docs/sdks/webhooks/README.md#createwebhook) - Creates a webhook
* [getWebhooks](docs/sdks/webhooks/README.md#getwebhooks) - Get a list of webhooks
* [getWebhook](docs/sdks/webhooks/README.md#getwebhook) - Get a webhook
* [deleteWebhook](docs/sdks/webhooks/README.md#deletewebhook) - Deletes a webhook

### [aliases](docs/sdks/aliases/README.md)

* [listAliases](docs/sdks/aliases/README.md#listaliases) - List aliases
* [getAlias](docs/sdks/aliases/README.md#getalias) - Get an Alias
* [deleteAlias](docs/sdks/aliases/README.md#deletealias) - Delete an Alias
* [listDeploymentAliases](docs/sdks/aliases/README.md#listdeploymentaliases) - List Deployment Aliases
* [assignAlias](docs/sdks/aliases/README.md#assignalias) - Assign an Alias

### [certs](docs/sdks/certs/README.md)

* [getCertById](docs/sdks/certs/README.md#getcertbyid) - Get cert by id
* [removeCert](docs/sdks/certs/README.md#removecert) - Remove cert
* [issueCert](docs/sdks/certs/README.md#issuecert) - Issue a new cert
* [uploadCert](docs/sdks/certs/README.md#uploadcert) - Upload a cert

### [secrets](docs/sdks/secrets/README.md)

* [getSecrets](docs/sdks/secrets/README.md#getsecrets) - List secrets
* [createSecret](docs/sdks/secrets/README.md#createsecret) - Create a new secret
* [renameSecret](docs/sdks/secrets/README.md#renamesecret) - Change secret name
* [getSecret](docs/sdks/secrets/README.md#getsecret) - Get a single secret
* [deleteSecret](docs/sdks/secrets/README.md#deletesecret) - Delete a secret
<!-- End Available Resources and Operations [operations] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await vercel.artifacts.uploadArtifact({
        contentLength: 4504.13,
        xArtifactDuration: 400,
        xArtifactClientCi: "VERCEL",
        xArtifactClientInteractive: 0,
        xArtifactTag: "Tc0BmHvJYMIYJ62/zx87YqO0Flxk+5Ovip25NY825CQ=",
        hash: "12HKQaOmR5t5Uy6vdcQsNIiZgHGB",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Vercel } from "vercel";
import * as errors from "vercel/models/errors";

const vercel = new Vercel();

async function run() {
    let result;
    try {
        result = await vercel.getDeploymentBuilds("<value>");
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.vercel.com` | None |

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
    serverIdx: 0,
});

async function run() {
    const result = await vercel.getDeploymentBuilds("<value>");

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
    serverURL: "https://api.vercel.com",
});

async function run() {
    const result = await vercel.getDeploymentBuilds("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Vercel } from "vercel";
import { HTTPClient } from "vercel/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Vercel({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name          | Type          | Scheme        |
| ------------- | ------------- | ------------- |
| `bearerToken` | http          | HTTP Bearer   |
| `oauth2`      | oauth2        | OAuth2 token  |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
    security: {
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    },
});

async function run() {
    const result = await vercel.getDeploymentBuilds("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
