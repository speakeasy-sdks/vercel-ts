/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    GetIntegrationLogDrainsRequest,
    GetIntegrationLogDrainsRequest$outboundSchema,
    GetIntegrationLogDrainsResponseBody,
    GetIntegrationLogDrainsResponseBody$inboundSchema,
} from "../models/getintegrationlogdrainsop.js";
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
import * as z from "zod";

/**
 * Retrieves a list of Integration log drains
 *
 * @remarks
 * Retrieves a list of all Integration log drains that are defined for the authenticated user or team. When using an OAuth2 token, the list is limited to log drains created by the authenticated integration.
 */
export async function logDrainsGetIntegrationLogDrains(
    client$: VercelCore,
    teamId?: string | undefined,
    slug?: string | undefined,
    options?: RequestOptions
): Promise<
    Result<
        Array<GetIntegrationLogDrainsResponseBody>,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: GetIntegrationLogDrainsRequest = {
        teamId: teamId,
        slug: slug,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => GetIntegrationLogDrainsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const path$ = pathToFunc("/v2/integrations/log-drains")();

    const query$ = encodeFormQuery$({
        slug: payload$.slug,
        teamId: payload$.teamId,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const security$ = await extractSecurity(client$.options$.security);
    const context = {
        operationID: "getIntegrationLogDrains",
        oAuth2Scopes: [],
        securitySource: client$.options$.security,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
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
        errorCodes: ["400", "401", "403", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        Array<GetIntegrationLogDrainsResponseBody>,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, z.array(GetIntegrationLogDrainsResponseBody$inboundSchema)),
        m$.fail([400, 401, 403, "4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}