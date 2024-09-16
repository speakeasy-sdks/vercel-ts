/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import {
  encodeFormQuery as encodeFormQuery$,
  encodeJSON as encodeJSON$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  DeleteTeamRequest,
  DeleteTeamRequest$outboundSchema,
  DeleteTeamRequestBody,
  DeleteTeamResponseBody,
  DeleteTeamResponseBody$inboundSchema,
} from "../models/deleteteamop.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/httpclienterrors.js";
import { SDKError } from "../models/sdkerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { Result } from "../types/fp.js";

/**
 * Delete a Team
 *
 * @remarks
 * Delete a team under your account. You need to send a `DELETE` request with the desired team `id`. An optional array of reasons for deletion may also be sent.
 */
export async function teamsDelete(
  client$: VercelCore,
  teamId: string,
  newDefaultTeamId?: string | undefined,
  slug?: string | undefined,
  requestBody?: DeleteTeamRequestBody | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    DeleteTeamResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: DeleteTeamRequest = {
    teamId: teamId,
    newDefaultTeamId: newDefaultTeamId,
    slug: slug,
    requestBody: requestBody,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => DeleteTeamRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

  const pathParams$ = {
    teamId: encodeSimple$("teamId", payload$.teamId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/v1/teams/{teamId}")(pathParams$);

  const query$ = encodeFormQuery$({
    "newDefaultTeamId": payload$.newDefaultTeamId,
    "slug": payload$.slug,
  });

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const bearerToken$ = await extractSecurity(client$.options$.bearerToken);
  const security$ = bearerToken$ == null ? {} : { bearerToken: bearerToken$ };
  const context = {
    operationID: "deleteTeam",
    oAuth2Scopes: [],
    securitySource: client$.options$.bearerToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "DELETE",
    path: path$,
    headers: headers$,
    query: query$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["400", "401", "402", "403", "404", "409", "4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result$] = await m$.match<
    DeleteTeamResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, DeleteTeamResponseBody$inboundSchema),
    m$.fail([400, 401, 402, 403, 404, 409, "4XX", "5XX"]),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
