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
    GetSecretsRequest,
    GetSecretsRequest$outboundSchema,
    GetSecretsResponseBody,
    GetSecretsResponseBody$inboundSchema,
} from "../models/getsecretsop.js";
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
 * List secrets
 *
 * @remarks
 * Retrieves the active Vercel secrets for the authenticated user or team. By default it returns 20 secrets. The rest can be retrieved using the pagination options. The body will contain an entry for each secret.
 */
export async function secretsList(
    client$: VercelCore,
    id?: string | undefined,
    projectId?: string | undefined,
    teamId?: string | undefined,
    slug?: string | undefined,
    options?: RequestOptions
): Promise<
    Result<
        GetSecretsResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: GetSecretsRequest = {
        id: id,
        projectId: projectId,
        teamId: teamId,
        slug: slug,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => GetSecretsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const path$ = pathToFunc("/v3/secrets")();

    const query$ = encodeFormQuery$({
        id: payload$.id,
        projectId: payload$.projectId,
        slug: payload$.slug,
        teamId: payload$.teamId,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const bearerToken$ = await extractSecurity(client$.options$.bearerToken);
    const security$ = bearerToken$ == null ? {} : { bearerToken: bearerToken$ };
    const context = {
        operationID: "getSecrets",
        oAuth2Scopes: [],
        securitySource: client$.options$.bearerToken,
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
        errorCodes: ["400", "401", "403", "410", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        GetSecretsResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, GetSecretsResponseBody$inboundSchema),
        m$.fail([400, 401, 403, 410, "4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
