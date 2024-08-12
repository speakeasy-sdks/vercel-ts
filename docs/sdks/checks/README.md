# Checks
(*checks*)

### Available Operations

* [create](#create) - Creates a new Check
* [list](#list) - Retrieve a list of all checks
* [get](#get) - Get a single check
* [update](#update) - Update a check
* [rerequest](#rerequest) - Rerequest a check

## create

Creates a new check. This endpoint must be called with an OAuth2 or it will produce a 400 error.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.create("dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6");

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "vercel/core.js";
import { checksCreate } from "vercel/funcs/checksCreate.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await checksCreate(vercel, "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `deploymentId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The deployment to create the check for.                                                                                                                                        | [object Object]                                                                                                                                                                |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |                                                                                                                                                                                |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |                                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [models.CreateCheckRequestBody](../../models/createcheckrequestbody.md)                                                                                                        | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise\<[models.CreateCheckResponseBody](../../models/createcheckresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## list

List all of the checks created for a deployment.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.list("dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6");

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "vercel/core.js";
import { checksList } from "vercel/funcs/checksList.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await checksList(vercel, "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `deploymentId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The deployment to get all checks for                                                                                                                                           | [object Object]                                                                                                                                                                |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |                                                                                                                                                                                |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise\<[models.GetAllChecksResponseBody](../../models/getallchecksresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## get

Return a detailed response for a single check.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.get("dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6", "check_2qn7PZrx89yxY34vEZPD31Y9XVj6");

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "vercel/core.js";
import { checksGet } from "vercel/funcs/checksGet.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await checksGet(vercel, "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6", "check_2qn7PZrx89yxY34vEZPD31Y9XVj6");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `deploymentId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The deployment to get the check for.                                                                                                                                           | [object Object]                                                                                                                                                                |
| `checkId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The check to fetch                                                                                                                                                             | [object Object]                                                                                                                                                                |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |                                                                                                                                                                                |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise\<[models.GetCheckResponseBody](../../models/getcheckresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## update

Update an existing check. This endpoint must be called with an OAuth2 or it will produce a 400 error.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.update({
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    checkId: "check_2qn7PZrx89yxY34vEZPD31Y9XVj6",
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "vercel/core.js";
import { checksUpdate } from "vercel/funcs/checksUpdate.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await checksUpdate(vercel, {
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    checkId: "check_2qn7PZrx89yxY34vEZPD31Y9XVj6",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.UpdateCheckRequest](../../models/updatecheckrequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[models.UpdateCheckResponseBody](../../models/updatecheckresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## rerequest

Rerequest a selected check that has failed.

### Example Usage

```typescript
import { Vercel } from "vercel";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.checks.rerequest("dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6", "check_2qn7PZrx89yxY34vEZPD31Y9XVj6");

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { VercelCore } from "vercel/core.js";
import { checksRerequest } from "vercel/funcs/checksRerequest.js";

// Use `VercelCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vercel = new VercelCore({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await checksRerequest(vercel, "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6", "check_2qn7PZrx89yxY34vEZPD31Y9XVj6");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `deploymentId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The deployment to rerun the check for.                                                                                                                                         | [object Object]                                                                                                                                                                |
| `checkId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The check to rerun                                                                                                                                                             | [object Object]                                                                                                                                                                |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |                                                                                                                                                                                |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |


### Response

**Promise\<[models.RerequestCheckResponseBody](../../models/rerequestcheckresponsebody.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |
