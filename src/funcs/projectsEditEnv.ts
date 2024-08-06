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
    EditProjectEnvRequest,
    EditProjectEnvRequest$outboundSchema,
    EditProjectEnvResponseBody,
    EditProjectEnvResponseBody$inboundSchema,
} from "../models/editprojectenvop.js";
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
 * Edit an environment variable
 *
 * @remarks
 * Edit a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.
 */
export async function projectsEditEnv(
    client$: VercelCore,
    request: EditProjectEnvRequest,
    options?: RequestOptions
): Promise<
    Result<
        EditProjectEnvResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => EditProjectEnvRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

    const pathParams$ = {
        id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        idOrName: encodeSimple$("idOrName", payload$.idOrName, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/v9/projects/{idOrName}/env/{id}")(pathParams$);

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
        operationID: "editProjectEnv",
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
        errorCodes: ["400", "401", "403", "409", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        EditProjectEnvResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, EditProjectEnvResponseBody$inboundSchema),
        m$.fail([400, 401, 403, 409, "4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
