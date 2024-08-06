/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import {
    GetDeploymentBuildsRequest,
    GetDeploymentBuildsRequest$outboundSchema,
    GetDeploymentBuildsResponseBody,
    GetDeploymentBuildsResponseBody$inboundSchema,
} from "../models/getdeploymentbuildsop.js";
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
 * Retrieves the list of builds given their deployment's unique identifier. No longer listed as public API as of May 2023.
 */
export async function getDeploymentBuilds(
    client$: VercelCore,
    deploymentId: string,
    options?: RequestOptions
): Promise<
    Result<
        GetDeploymentBuildsResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: GetDeploymentBuildsRequest = {
        deploymentId: deploymentId,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => GetDeploymentBuildsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        deploymentId: encodeSimple$("deploymentId", payload$.deploymentId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/deployments/{deploymentId}/builds")(pathParams$);

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const context = { operationID: "getDeploymentBuilds", oAuth2Scopes: [], securitySource: null };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "GET",
            path: path$,
            headers: headers$,
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
        GetDeploymentBuildsResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, GetDeploymentBuildsResponseBody$inboundSchema),
        m$.fail([400, 401, 403, 404, "4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
