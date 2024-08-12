/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
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
    UpdateTeamMemberRequest,
    UpdateTeamMemberRequest$outboundSchema,
    UpdateTeamMemberRequestBody,
    UpdateTeamMemberResponseBody,
    UpdateTeamMemberResponseBody$inboundSchema,
} from "../models/updateteammemberop.js";
import { Result } from "../types/fp.js";

/**
 * Update a Team Member
 *
 * @remarks
 * Update the membership of a Team Member on the Team specified by `teamId`, such as changing the _role_ of the member, or confirming a request to join the Team for an unconfirmed member. The authenticated user must be an `OWNER` of the Team.
 */
export async function teamsUpdateMember(
    client$: VercelCore,
    teamId: string,
    uid: string,
    requestBody?: UpdateTeamMemberRequestBody | undefined,
    options?: RequestOptions
): Promise<
    Result<
        UpdateTeamMemberResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: UpdateTeamMemberRequest = {
        teamId: teamId,
        uid: uid,
        requestBody: requestBody,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => UpdateTeamMemberRequest$outboundSchema.parse(value$),
        "Input validation failed"
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
        uid: encodeSimple$("uid", payload$.uid, { explode: false, charEncoding: "percent" }),
    };

    const path$ = pathToFunc("/v1/teams/{teamId}/members/{uid}")(pathParams$);

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    const bearerToken$ = await extractSecurity(client$.options$.bearerToken);
    const security$ = bearerToken$ == null ? {} : { bearerToken: bearerToken$ };
    const context = {
        operationID: "updateTeamMember",
        oAuth2Scopes: [],
        securitySource: client$.options$.bearerToken,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
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
        errorCodes: ["400", "401", "402", "403", "404", "4XX", "500", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        UpdateTeamMemberResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, UpdateTeamMemberResponseBody$inboundSchema),
        m$.fail([400, 401, 402, 403, 404, "4XX", 500, "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
