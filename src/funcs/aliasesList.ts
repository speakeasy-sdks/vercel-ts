/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/httpclienterrors.js";
import {
  ListAliasesRequest,
  ListAliasesRequest$outboundSchema,
  ListAliasesResponse,
  ListAliasesResponse$inboundSchema,
} from "../models/listaliasesop.js";
import { SDKError } from "../models/sdkerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { Result } from "../types/fp.js";
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * List aliases
 *
 * @remarks
 * Retrieves a list of aliases for the authenticated User or Team. When `domain` is provided, only aliases for that domain will be returned. When `projectId` is provided, it will only return the given project aliases.
 */
export async function aliasesList(
  client$: VercelCore,
  request: ListAliasesRequest,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      ListAliasesResponse,
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => ListAliasesRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return haltIterator(parsed$);
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const path$ = pathToFunc("/v4/aliases")();

  const query$ = encodeFormQuery$({
    "domain": payload$.domain,
    "from": payload$.from,
    "limit": payload$.limit,
    "projectId": payload$.projectId,
    "rollbackDeploymentId": payload$.rollbackDeploymentId,
    "since": payload$.since,
    "slug": payload$.slug,
    "teamId": payload$.teamId,
    "until": payload$.until,
  });

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const bearerToken$ = await extractSecurity(client$.options$.bearerToken);
  const security$ = bearerToken$ == null ? {} : { bearerToken: bearerToken$ };
  const context = {
    operationID: "listAliases",
    oAuth2Scopes: [],
    securitySource: client$.options$.bearerToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    path: path$,
    headers: headers$,
    query: query$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return haltIterator(requestRes);
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["400", "401", "403", "404", "4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields$ = {
    HttpMeta: { Response: response, Request: request$ },
  };

  const [result$, raw$] = await m$.match<
    ListAliasesResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, ListAliasesResponse$inboundSchema, { key: "Result" }),
    m$.fail([400, 401, 403, 404, "4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return haltIterator(result$);
  }

  const nextFunc = (
    responseData: unknown,
  ): Paginator<
    Result<
      ListAliasesResponse,
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >
  > => {
    const nextCursor = dlv(responseData, "pagination.since");

    if (nextCursor == null) {
      return () => null;
    }

    return () =>
      aliasesList(
        client$,
        {
          ...input$,
          since: nextCursor,
        },
        options,
      );
  };

  const page$ = { ...result$, next: nextFunc(raw$) };
  return { ...page$, ...createPageIterator(page$, (v) => !v.ok) };
}
