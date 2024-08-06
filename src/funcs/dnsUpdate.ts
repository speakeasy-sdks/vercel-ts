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
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/httpclienterrors.js";
import { SDKError } from "../models/sdkerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import {
    UpdateRecordRequest,
    UpdateRecordRequest$outboundSchema,
    UpdateRecordRequestBody,
    UpdateRecordResponseBody,
    UpdateRecordResponseBody$inboundSchema,
} from "../models/updaterecordop.js";
import { Result } from "../types/fp.js";

/**
 * Update an existing DNS record
 *
 * @remarks
 * Updates an existing DNS record for a domain name.
 */
export async function dnsUpdate(
    client$: VercelCore,
    recordId: string,
    teamId?: string | undefined,
    slug?: string | undefined,
    requestBody?: UpdateRecordRequestBody | undefined,
    options?: RequestOptions
): Promise<
    Result<
        UpdateRecordResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: UpdateRecordRequest = {
        recordId: recordId,
        teamId: teamId,
        slug: slug,
        requestBody: requestBody,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => UpdateRecordRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

    const pathParams$ = {
        recordId: encodeSimple$("recordId", payload$.recordId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/v1/domains/records/{recordId}")(pathParams$);

    const query$ = encodeFormQuery$({
        slug: payload$.slug,
        teamId: payload$.teamId,
    });

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    const security$ = await extractSecurity(client$.options$.security);
    const context = {
        operationID: "updateRecord",
        oAuth2Scopes: [],
        securitySource: client$.options$.security,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "PATCH",
            path: path$,
            headers: headers$,
            query: query$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "401", "402", "403", "404", "409", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        UpdateRecordResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, UpdateRecordResponseBody$inboundSchema),
        m$.fail([400, 401, 402, 403, 404, 409, "4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
