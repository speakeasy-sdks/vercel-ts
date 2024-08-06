/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
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
    UpdateBillingSettingsRequestBody,
    UpdateBillingSettingsRequestBody$outboundSchema,
    UpdateBillingSettingsResponseBody,
    UpdateBillingSettingsResponseBody$inboundSchema,
} from "../models/updatebillingsettingsop.js";
import { Result } from "../types/fp.js";

export async function updateBillingSettings(
    client$: VercelCore,
    request?: UpdateBillingSettingsRequestBody | undefined,
    options?: RequestOptions
): Promise<
    Result<
        UpdateBillingSettingsResponseBody,
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
        (value$) => UpdateBillingSettingsRequestBody$outboundSchema.optional().parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

    const path$ = pathToFunc("/data-cache/billing-settings")();

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    const context = {
        operationID: "updateBillingSettings",
        oAuth2Scopes: [],
        securitySource: null,
    };

    const requestRes = client$.createRequest$(
        context,
        {
            method: "PATCH",
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
        UpdateBillingSettingsResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, UpdateBillingSettingsResponseBody$inboundSchema),
        m$.fail([400, 401, 403, 404, "4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
