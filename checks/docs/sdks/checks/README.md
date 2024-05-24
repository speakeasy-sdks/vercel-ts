# Checks
(*checks*)

### Available Operations

* [create](#create) - Creates a new Check
* [getAll](#getall) - Retrieve a list of all checks
* [get](#get) - Get a single check
* [update](#update) - Update a check
* [rerequest](#rerequest) - Rerequest a check

## create

Creates a new check. This endpoint must be called with an OAuth2 or it will produce a 400 error.

### Example Usage

```typescript
import { SDK } from "@vercel/checks";

const sdk = new SDK({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await sdk.checks.create("dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6", "<value>", "<value>", {
    name: "Performance Check",
    path: "/",
    blocking: true,
    detailsUrl: "http://example.com",
    externalId: "1234abc",
    rerequestable: true,
  });

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
| `requestBody`                                                                                                                                                                  | [operations.CreateCheckRequestBody](../../models/operations/createcheckrequestbody.md)                                                                                         | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<[operations.CreateCheckResponse](../../models/operations/createcheckresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAll

List all of the checks created for a deployment.

### Example Usage

```typescript
import { SDK } from "@vercel/checks";

const sdk = new SDK({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await sdk.checks.getAll("dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6", "<value>", "<value>");

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


### Response

**Promise\<[operations.GetAllChecksResponse](../../models/operations/getallchecksresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Return a detailed response for a single check.

### Example Usage

```typescript
import { SDK } from "@vercel/checks";

const sdk = new SDK({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await sdk.checks.get("dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6", "check_2qn7PZrx89yxY34vEZPD31Y9XVj6", "<value>", "<value>");

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


### Response

**Promise\<[operations.GetCheckResponse](../../models/operations/getcheckresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update an existing check. This endpoint must be called with an OAuth2 or it will produce a 400 error.

### Example Usage

```typescript
import { SDK } from "@vercel/checks";
import {
  Source,
  UpdateCheckChecksRequestRequestBodySource,
  UpdateCheckChecksRequestSource,
  UpdateCheckChecksSource,
  UpdateCheckSource,
} from "@vercel/checks/models/operations";

const sdk = new SDK({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await sdk.checks.update({
    deploymentId: "dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    checkId: "check_2qn7PZrx89yxY34vEZPD31Y9XVj6",
    requestBody: {
      name: "Performance Check",
      path: "/",
      detailsUrl: "https://example.com/check/run/1234abc",
      output: {
        metrics: {
          fcp: {
            value: 1200,
            previousValue: 900,
            source: Source.WebVitals,
          },
          lcp: {
            value: 1200,
            previousValue: 1000,
            source: UpdateCheckSource.WebVitals,
          },
          cls: {
            value: 4,
            previousValue: 2,
            source: UpdateCheckChecksSource.WebVitals,
          },
          tbt: {
            value: 3000,
            previousValue: 3500,
            source: UpdateCheckChecksRequestSource.WebVitals,
          },
          virtualExperienceScore: {
            value: 30,
            previousValue: 35,
            source: UpdateCheckChecksRequestRequestBodySource.WebVitals,
          },
        },
      },
      externalId: "1234abc",
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
| `request`                                                                                                                                                                      | [operations.UpdateCheckRequest](../../models/operations/updatecheckrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.UpdateCheckResponse](../../models/operations/updatecheckresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## rerequest

Rerequest a selected check that has failed.

### Example Usage

```typescript
import { SDK } from "@vercel/checks";

const sdk = new SDK({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await sdk.checks.rerequest("dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6", "check_2qn7PZrx89yxY34vEZPD31Y9XVj6", "<value>", "<value>");

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


### Response

**Promise\<[operations.RerequestCheckResponse](../../models/operations/rerequestcheckresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
