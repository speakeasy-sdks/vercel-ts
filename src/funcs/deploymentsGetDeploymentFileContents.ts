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
    GetDeploymentFileContentsRequest,
    GetDeploymentFileContentsRequest$outboundSchema,
} from "../models/getdeploymentfilecontentsop.js";
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
 * Get Deployment File Contents
 *
 * @remarks
 * Allows to retrieve the content of a file by supplying the file identifier and the deployment unique identifier. The response body will contain a JSON response containing the contents of the file encoded as base64.
 */
export async function deploymentsGetDeploymentFileContents(
    client$: VercelCore,
    request: GetDeploymentFileContentsRequest,
    options?: RequestOptions
): Promise<
    Result<
        void,
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
        (value$) => GetDeploymentFileContentsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        fileId: encodeSimple$("fileId", payload$.fileId, {
            explode: false,
            charEncoding: "percent",
        }),
        id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
    };

    const path$ = pathToFunc("/v7/deployments/{id}/files/{fileId}")(pathParams$);

    const query$ = encodeFormQuery$({
        path: payload$.path,
        slug: payload$.slug,
        teamId: payload$.teamId,
    });

    const headers$ = new Headers({
        Accept: "*/*",
    });

    const security$ = await extractSecurity(client$.options$.security);
    const context = {
        operationID: "getDeploymentFileContents",
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
        errorCodes: ["400", "401", "403", "404", "410", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        void,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.fail([400, 401, 403, 404, 410, "4XX", "5XX"]),
        m$.nil("2XX", z.void())
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
