# Dns
(*dns*)

### Available Operations

* [get](#get) - List existing DNS records
* [create](#create) - Create a DNS record
* [update](#update) - Update an existing DNS record
* [remove](#remove) - Delete a DNS record

## get

Retrieves a list of DNS records created for a domain name. By default it returns 20 records if no limit is provided. The rest can be retrieved using the pagination options.

### Example Usage

```typescript
import { SDK } from "@vercel/dns";

const sdk = new SDK({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await sdk.dns.get({
    domain: "example.com",
    limit: "20",
    since: "1609499532000",
    until: "1612264332000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRecordsRequest](../../models/operations/getrecordsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetRecordsResponse](../../models/operations/getrecordsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

Creates a DNS record for a domain.

### Example Usage

```typescript
import { SDK } from "@vercel/dns";
import { CreateRecordRequestBodyDnsRequestType } from "@vercel/dns/models/operations";

const sdk = new SDK({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await sdk.dns.create("example.com", "<value>", "<value>", {
      name: "subdomain",
      type: CreateRecordRequestBodyDnsRequestType.Cname,
      ttl: 60,
      value: "cname.vercel-dns.com",
      comment: "used to verify ownership of domain",
    });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `domain`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The domain used to create the DNS record.                                                                                                                                      | [object Object]                                                                                                                                                                |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |                                                                                                                                                                                |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |                                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | *operations.CreateRecordRequestBody*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<[operations.CreateRecordResponse](../../models/operations/createrecordresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Updates an existing DNS record for a domain name.

### Example Usage

```typescript
import { SDK } from "@vercel/dns";
import { Type } from "@vercel/dns/models/operations";

const sdk = new SDK({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await sdk.dns.update("rec_2qn7pzrx89yxy34vezpd31y9", "<value>", "<value>", {
    name: "example-1",
    value: "google.com",
    type: Type.A,
    ttl: 60,
    srv: {
      target: "example2.com.",
      weight: 857478,
      port: 24555,
      priority: 597129,
    },
    https: {
      priority: 15652,
      target: "example2.com.",
    },
    comment: "used to verify ownership of domain",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recordId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The id of the DNS record                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |                                                                                                                                                                                |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |                                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.UpdateRecordRequestBody](../../models/operations/updaterecordrequestbody.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<[operations.UpdateRecordResponse](../../models/operations/updaterecordresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## remove

Removes an existing DNS record from a domain name.

### Example Usage

```typescript
import { SDK } from "@vercel/dns";

const sdk = new SDK({
  security: {
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  },
});

async function run() {
  const result = await sdk.dns.remove("example.com", "rec_V0fra8eEgQwEpFhYG2vTzC3K", "<value>", "<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `domain`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `recordId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `teamId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team identifier to perform the request on behalf of.                                                                                                                       |                                                                                                                                                                                |
| `slug`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The Team slug to perform the request on behalf of.                                                                                                                             |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise\<[operations.RemoveRecordResponse](../../models/operations/removerecordresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
