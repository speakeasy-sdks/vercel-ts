# Deployments
(*deployments*)

### Available Operations

* [getDeploymentEvents](#getdeploymentevents) - Get deployment events
* [getDeployment](#getdeployment) - Get a deployment by ID or URL
* [create](#create) - Create a new deployment
* [cancel](#cancel) - Cancel a deployment
* [uploadFile](#uploadfile) - Upload Deployment Files
* [listDeploymentFiles](#listdeploymentfiles) - List Deployment Files
* [getDeploymentFileContents](#getdeploymentfilecontents) - Get Deployment File Contents
* [list](#list) - List deployments
* [delete](#delete) - Delete a Deployment

## getDeploymentEvents

Get the build logs of a deployment by deployment ID and build ID. It can work as an infinite stream of logs or as a JSON endpoint depending on the input parameters.

### Example Usage

```typescript
import { Vercel } from "vercel";
import { Direction } from "vercel/models";

const vercel = new Vercel({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await vercel.deployments.getDeploymentEvents({
    idOrUrl: "dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd",
    direction: Direction.Backward,
    follow: 1,
    limit: 100,
    name: "bld_cotnkcr76",
    since: 1540095775941,
    until: 1540106318643,
  statusCode: "5xx",
    delimiter: 1,
    builds: 1,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetDeploymentEventsRequest](../../models/getdeploymenteventsrequest.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[models.GetDeploymentEventsResponse](../../models/getdeploymenteventsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## getDeployment

Retrieves information for a deployment either by supplying its ID (`id` property) or Hostname (`url` property). Additional details will be included when the authenticated user or team is an owner of the deployment.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await vercel.deployments.getDeployment("dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ", "true", "<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `idOrUrl`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier or hostname of the deployment.                                                                                                                           | [object Object]                                                                                                                                                                |
| `withGitRepoInfo`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Whether to add in gitRepo information.                                                                                                                                         | [object Object]                                                                                                                                                                |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |                                                                                                                                                                                |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[models.GetDeploymentResponseBody](../../models/getdeploymentresponsebody.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## create

Create a new deployment with all the required and intended data. If the deployment is not a git deployment, all files must be provided with the request, either referenced or inlined. Additionally, a deployment id can be specified to redeploy a previous deployment.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await vercel.deployments.create({
    requestBody: {
      files: [
          {
            data: "<value>",
            file: "folder/file.js",
          },
      ],
      gitMetadata: {
        remoteUrl: "https://github.com/vercel/next.js",
        commitAuthorName: "kyliau",
        commitMessage: "add method to measure Interaction to Next Paint (INP) (#36490)",
        commitRef: "main",
        commitSha: "dc36199b2234c6586ebe05ec94078a895c707e29",
        dirty: true,
      },
      meta: {
        "foo": "bar",
      },
      name: "my-instant-deployment",
      project: "my-deployment-project",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateDeploymentRequest](../../models/createdeploymentrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[models.CreateDeploymentResponseBody](../../models/createdeploymentresponsebody.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## cancel

This endpoint allows you to cancel a deployment which is currently building, by supplying its `id` in the URL.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await vercel.deployments.cancel("dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd", "<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the deployment.                                                                                                                                       | [object Object]                                                                                                                                                                |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |                                                                                                                                                                                |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[models.CancelDeploymentResponseBody](../../models/canceldeploymentresponsebody.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## uploadFile

Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that's completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you'll receive a status code 200 with an empty body.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await vercel.deployments.uploadFile({});

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UploadFileRequest](../../models/uploadfilerequest.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[models.UploadFileResponseBody](../../models/uploadfileresponsebody.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## listDeploymentFiles

Allows to retrieve the file structure of a deployment by supplying the deployment unique identifier.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await vercel.deployments.listDeploymentFiles("<value>", "<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique deployment identifier                                                                                                                                               |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[models.FileTree[]](../../models/.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## getDeploymentFileContents

Allows to retrieve the content of a file by supplying the file identifier and the deployment unique identifier. The response body will contain a JSON response containing the contents of the file encoded as base64.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await vercel.deployments.getDeploymentFileContents({
    id: "<id>",
    fileId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetDeploymentFileContentsRequest](../../models/getdeploymentfilecontentsrequest.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[models.GetDeploymentFileContentsResponse](../../models/getdeploymentfilecontentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## list

List deployments under the authenticated user or team. If a deployment hasn't finished uploading (is incomplete), the `url` property will have a value of `null`.

### Example Usage

```typescript
import { Vercel } from "vercel";
import { QueryParamTarget } from "vercel/models";

const vercel = new Vercel({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await vercel.deployments.list({
    app: "docs",
    from: 1612948664566,
    limit: 10,
    projectId: "QmXGTs7mvAMMC7WW5ebrM33qKG32QK3h4vmQMjmY",
    target: QueryParamTarget.Production,
    to: 1612948664566,
    users: "kr1PsOIzqEL5Xg6M4VZcZosf,K4amb7K9dAt5R2vBJWF32bmY",
    since: 1540095775941,
    until: 1540095775951,
    state: "BUILDING,READY",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.GetDeploymentsRequest](../../models/getdeploymentsrequest.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[models.GetDeploymentsResponseBody](../../models/getdeploymentsresponsebody.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## delete

This API allows you to delete a deployment, either by supplying its `id` in the URL or the `url` of the deployment as a query parameter. You can obtain the ID, for example, by listing all deployments.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await vercel.deployments.delete("dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd", "https://files-orcin-xi.vercel.app/", "<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the deployment to be deleted                                                                                                                                         | [object Object]                                                                                                                                                                |
| `url`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A Deployment or Alias URL. In case it is passed, the ID will be ignored                                                                                                        | [object Object]                                                                                                                                                                |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |                                                                                                                                                                                |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[models.DeleteDeploymentResponseBody](../../models/deletedeploymentresponsebody.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |
