/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import {
  encodeFormQuery as encodeFormQuery$,
  encodeJSON as encodeJSON$,
} from "../lib/encodings.js";
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
import { SDKError } from "../models/sdkerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import {
  UploadCertRequest,
  UploadCertRequest$outboundSchema,
  UploadCertRequestBody,
  UploadCertResponseBody,
  UploadCertResponseBody$inboundSchema,
} from "../models/uploadcertop.js";
import { Result } from "../types/fp.js";

/**
 * Upload a cert
 *
 * @remarks
 * Upload a cert
 */
export async function certsUpload(
  client$: VercelCore,
  teamId?: string | undefined,
  slug?: string | undefined,
  requestBody?: UploadCertRequestBody | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    UploadCertResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: UploadCertRequest = {
    teamId: teamId,
    slug: slug,
    requestBody: requestBody,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => UploadCertRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

  const path$ = pathToFunc("/v7/certs")();

  const query$ = encodeFormQuery$({
    "slug": payload$.slug,
    "teamId": payload$.teamId,
  });

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const bearerToken$ = await extractSecurity(client$.options$.bearerToken);
  const security$ = bearerToken$ == null ? {} : { bearerToken: bearerToken$ };
  const context = {
    operationID: "uploadCert",
    oAuth2Scopes: [],
    securitySource: client$.options$.bearerToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "PUT",
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
    errorCodes: ["400", "401", "402", "403", "4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result$] = await m$.match<
    UploadCertResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, UploadCertResponseBody$inboundSchema),
    m$.fail([400, 401, 402, 403, "4XX", "5XX"]),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
