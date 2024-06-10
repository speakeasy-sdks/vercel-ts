<div align="center">
        <img src="https://github.com/speakeasy-sdks/vercel-ts/assets/68016351/d64a32d7-acc1-497b-943f-caa3c994901e" width="500">
   <p>Vercel is the Frontend Cloud</p>
   <a href="https://vercel.com/docs/rest-api"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000000&style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add vercel
```

### Yarn

```bash
yarn add vercel
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
* [upload](docs/sdks/artifacts/README.md#upload) - Upload a cache artifact
* [download](docs/sdks/artifacts/README.md#download) - Download a cache artifact
* [exists](docs/sdks/artifacts/README.md#exists) - Check if a cache artifact exists
* [query](docs/sdks/artifacts/README.md#query) - Query information about an artifact

### [checks](docs/sdks/checks/README.md)

* [create](docs/sdks/checks/README.md#create) - Creates a new Check
* [getAll](docs/sdks/checks/README.md#getall) - Retrieve a list of all checks
* [get](docs/sdks/checks/README.md#get) - Get a single check
* [update](docs/sdks/checks/README.md#update) - Update a check
* [rerequest](docs/sdks/checks/README.md#rerequest) - Rerequest a check

### [projects](docs/sdks/projects/README.md)

* [updateProjectDataCache](docs/sdks/projects/README.md#updateprojectdatacache) - Update the data cache feature
* [get](docs/sdks/projects/README.md#get) - Retrieve a list of projects
* [create](docs/sdks/projects/README.md#create) - Create a new project
* [update](docs/sdks/projects/README.md#update) - Update an existing project
* [delete](docs/sdks/projects/README.md#delete) - Delete a Project
* [getDomain](docs/sdks/projects/README.md#getdomain) - Get a project domain
* [updateDomain](docs/sdks/projects/README.md#updatedomain) - Update a project domain
* [removeDomain](docs/sdks/projects/README.md#removedomain) - Remove a domain from a project
* [addDomain](docs/sdks/projects/README.md#adddomain) - Add a domain to a project
* [verifyDomain](docs/sdks/projects/README.md#verifydomain) - Verify project domain
* [filterEnvs](docs/sdks/projects/README.md#filterenvs) - Retrieve the environment variables of a project by id or name
* [getEnv](docs/sdks/projects/README.md#getenv) - Retrieve the decrypted value of an environment variable of a project by id
* [createEnv](docs/sdks/projects/README.md#createenv) - Create one or more environment variables
* [removeEnv](docs/sdks/projects/README.md#removeenv) - Remove an environment variable
* [editEnv](docs/sdks/projects/README.md#editenv) - Edit an environment variable
* [requestPromote](docs/sdks/projects/README.md#requestpromote) - Points all production domains for a project to the given deploy
* [getRequestPromoteAliases](docs/sdks/projects/README.md#getrequestpromotealiases) - Gets a list of aliases with status for the current promote
* [pause](docs/sdks/projects/README.md#pause) - Pause a project
* [unpause](docs/sdks/projects/README.md#unpause) - Unpause a project

### [deployments](docs/sdks/deployments/README.md)

* [getDeploymentEvents](docs/sdks/deployments/README.md#getdeploymentevents) - Get deployment events
* [getDeployment](docs/sdks/deployments/README.md#getdeployment) - Get a deployment by ID or URL
* [create](docs/sdks/deployments/README.md#create) - Create a new deployment
* [cancel](docs/sdks/deployments/README.md#cancel) - Cancel a deployment
* [uploadFile](docs/sdks/deployments/README.md#uploadfile) - Upload Deployment Files
* [listDeploymentFiles](docs/sdks/deployments/README.md#listdeploymentfiles) - List Deployment Files
* [getDeploymentFileContents](docs/sdks/deployments/README.md#getdeploymentfilecontents) - Get Deployment File Contents
* [list](docs/sdks/deployments/README.md#list) - List deployments
* [delete](docs/sdks/deployments/README.md#delete) - Delete a Deployment

### [domains](docs/sdks/domains/README.md)

* [buy](docs/sdks/domains/README.md#buy) - Purchase a domain
* [checkPrice](docs/sdks/domains/README.md#checkprice) - Check the price for a domain
* [checkStatus](docs/sdks/domains/README.md#checkstatus) - Check a Domain Availability
* [getTransfer](docs/sdks/domains/README.md#gettransfer) - Get domain transfer info.
* [getConfig](docs/sdks/domains/README.md#getconfig) - Get a Domain's configuration
* [getDomain](docs/sdks/domains/README.md#getdomain) - Get Information for a Single Domain
* [list](docs/sdks/domains/README.md#list) - List all the domains
* [createOrTransferDomain](docs/sdks/domains/README.md#createortransferdomain) - Register or transfer-in a new Domain
* [update](docs/sdks/domains/README.md#update) - Update or move apex domain
* [delete](docs/sdks/domains/README.md#delete) - Remove a domain by name

### [dns](docs/sdks/dns/README.md)

* [get](docs/sdks/dns/README.md#get) - List existing DNS records
* [create](docs/sdks/dns/README.md#create) - Create a DNS record
* [update](docs/sdks/dns/README.md#update) - Update an existing DNS record
* [remove](docs/sdks/dns/README.md#remove) - Delete a DNS record

### [edgeConfig](docs/sdks/edgeconfig/README.md)

* [list](docs/sdks/edgeconfig/README.md#list) - Get Edge Configs
* [create](docs/sdks/edgeconfig/README.md#create) - Create an Edge Config
* [get](docs/sdks/edgeconfig/README.md#get) - Get an Edge Config
* [update](docs/sdks/edgeconfig/README.md#update) - Update an Edge Config
* [delete](docs/sdks/edgeconfig/README.md#delete) - Delete an Edge Config
* [listItems](docs/sdks/edgeconfig/README.md#listitems) - Get Edge Config items
* [getSchema](docs/sdks/edgeconfig/README.md#getschema) - Get Edge Config schema
* [updateSchema](docs/sdks/edgeconfig/README.md#updateschema) - Update Edge Config schema
* [deleteSchema](docs/sdks/edgeconfig/README.md#deleteschema) - Delete an Edge Config's schema
* [getItem](docs/sdks/edgeconfig/README.md#getitem) - Get an Edge Config item
* [listTokens](docs/sdks/edgeconfig/README.md#listtokens) - Get all tokens of an Edge Config
* [deleteTokens](docs/sdks/edgeconfig/README.md#deletetokens) - Delete one or more Edge Config tokens
* [getTokenMetaData](docs/sdks/edgeconfig/README.md#gettokenmetadata) - Get Edge Config token meta data
* [createTokenMetaData](docs/sdks/edgeconfig/README.md#createtokenmetadata) - Create an Edge Config token

### [user](docs/sdks/user/README.md)

* [listEvent](docs/sdks/user/README.md#listevent) - List User Events
* [getAuthUser](docs/sdks/user/README.md#getauthuser) - Get the User
* [requestDelete](docs/sdks/user/README.md#requestdelete) - Delete User Account

### [integrations](docs/sdks/integrations/README.md)

* [list](docs/sdks/integrations/README.md#list) - Get configurations for the authenticated user or team
* [get](docs/sdks/integrations/README.md#get) - Retrieve an integration configuration
* [deleteConfiguration](docs/sdks/integrations/README.md#deleteconfiguration) - Delete an integration configuration
* [listGitNamespaces](docs/sdks/integrations/README.md#listgitnamespaces) - List git namespaces by provider
* [listGitRepos](docs/sdks/integrations/README.md#listgitrepos) - List git repositories linked to namespace by provider

### [logDrains](docs/sdks/logdrains/README.md)

* [getIntegrationLogDrains](docs/sdks/logdrains/README.md#getintegrationlogdrains) - Retrieves a list of Integration log drains
* [create](docs/sdks/logdrains/README.md#create) - Creates a new Integration Log Drain
* [delete](docs/sdks/logdrains/README.md#delete) - Deletes the Integration log drain with the provided `id`
* [get](docs/sdks/logdrains/README.md#get) - Retrieves a Configurable Log Drain
* [deleteConfigurableLogDrain](docs/sdks/logdrains/README.md#deleteconfigurablelogdrain) - Deletes a Configurable Log Drain
* [list](docs/sdks/logdrains/README.md#list) - Retrieves a list of all the Log Drains
* [createConfigurable](docs/sdks/logdrains/README.md#createconfigurable) - Creates a Configurable Log Drain

### [projectMembers](docs/sdks/projectmembers/README.md)

* [list](docs/sdks/projectmembers/README.md#list) - List project members
* [create](docs/sdks/projectmembers/README.md#create) - Adds a new member to a project.
* [delete](docs/sdks/projectmembers/README.md#delete) - Remove a Project Member

### [teams](docs/sdks/teams/README.md)

* [listMembers](docs/sdks/teams/README.md#listmembers) - List team members
* [inviteUser](docs/sdks/teams/README.md#inviteuser) - Invite a user
* [requestAccess](docs/sdks/teams/README.md#requestaccess) - Request access to a team
* [getAccess](docs/sdks/teams/README.md#getaccess) - Get access request status
* [joinTeam](docs/sdks/teams/README.md#jointeam) - Join a team
* [updateMember](docs/sdks/teams/README.md#updatemember) - Update a Team Member
* [removeMember](docs/sdks/teams/README.md#removemember) - Remove a Team Member
* [get](docs/sdks/teams/README.md#get) - Get a Team
* [update](docs/sdks/teams/README.md#update) - Update a Team
* [list](docs/sdks/teams/README.md#list) - List all teams
* [create](docs/sdks/teams/README.md#create) - Create a Team
* [delete](docs/sdks/teams/README.md#delete) - Delete a Team
* [deleteInviteCode](docs/sdks/teams/README.md#deleteinvitecode) - Delete a Team invite code

### [authentication](docs/sdks/authentication/README.md)

* [listTokens](docs/sdks/authentication/README.md#listtokens) - List Auth Tokens
* [createToken](docs/sdks/authentication/README.md#createtoken) - Create an Auth Token
* [getAuthToken](docs/sdks/authentication/README.md#getauthtoken) - Get Auth Token Metadata
* [deleteToken](docs/sdks/authentication/README.md#deletetoken) - Delete an authentication token
* [verifyToken](docs/sdks/authentication/README.md#verifytoken) - Verify a login request to get an authentication token
* [emailLogin](docs/sdks/authentication/README.md#emaillogin) - Login with email

### [webhooks](docs/sdks/webhooks/README.md)

* [create](docs/sdks/webhooks/README.md#create) - Creates a webhook
* [list](docs/sdks/webhooks/README.md#list) - Get a list of webhooks
* [get](docs/sdks/webhooks/README.md#get) - Get a webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Deletes a webhook

### [aliases](docs/sdks/aliases/README.md)

* [list](docs/sdks/aliases/README.md#list) - List aliases
* [getAlias](docs/sdks/aliases/README.md#getalias) - Get an Alias
* [delete](docs/sdks/aliases/README.md#delete) - Delete an Alias
* [listDeploymentAliases](docs/sdks/aliases/README.md#listdeploymentaliases) - List Deployment Aliases
* [assign](docs/sdks/aliases/README.md#assign) - Assign an Alias

### [certs](docs/sdks/certs/README.md)

* [get](docs/sdks/certs/README.md#get) - Get cert by id
* [remove](docs/sdks/certs/README.md#remove) - Remove cert
* [issue](docs/sdks/certs/README.md#issue) - Issue a new cert
* [upload](docs/sdks/certs/README.md#upload) - Upload a cert

### [secrets](docs/sdks/secrets/README.md)

* [list](docs/sdks/secrets/README.md#list) - List secrets
* [create](docs/sdks/secrets/README.md#create) - Create a new secret
* [rename](docs/sdks/secrets/README.md#rename) - Change secret name
* [get](docs/sdks/secrets/README.md#get) - Get a single secret
* [delete](docs/sdks/secrets/README.md#delete) - Delete a secret
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
    const result = await vercel.artifacts.upload({
        contentLength: 4036.54,
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
| models.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Vercel } from "vercel";
import * as errors from "vercel/models";

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

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `prod` | `https://api.vercel.com` | None |

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
    server: "prod",
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
