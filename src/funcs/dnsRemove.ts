/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
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
import {
    RemoveRecordRequest,
    RemoveRecordRequest$outboundSchema,
    RemoveRecordResponseBody,
    RemoveRecordResponseBody$inboundSchema,
} from "../models/removerecordop.js";
import { SDKError } from "../models/sdkerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { Result } from "../types/fp.js";

/**
 * Delete a DNS record
 *
 * @remarks
 * Removes an existing DNS record from a domain name.
 */
export async function dnsRemove(
    client$: VercelCore,
    domain: string,
    recordId: string,
    teamId?: string | undefined,
    slug?: string | undefined,
    options?: RequestOptions
): Promise<
    Result<
        RemoveRecordResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: RemoveRecordRequest = {
        domain: domain,
        recordId: recordId,
        teamId: teamId,
        slug: slug,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => RemoveRecordRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        domain: encodeSimple$("domain", payload$.domain, {
            explode: false,
            charEncoding: "percent",
        }),
        recordId: encodeSimple$("recordId", payload$.recordId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/v2/domains/{domain}/records/{recordId}")(pathParams$);

    const query$ = encodeFormQuery$({
        slug: payload$.slug,
        teamId: payload$.teamId,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const security$ = await extractSecurity(client$.options$.security);
    const context = {
        operationID: "removeRecord",
        oAuth2Scopes: [],
        securitySource: client$.options$.security,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "DELETE",
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
        errorCodes: ["400", "401", "403", "404", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        RemoveRecordResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, RemoveRecordResponseBody$inboundSchema),
        m$.fail([400, 401, 403, 404, "4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
