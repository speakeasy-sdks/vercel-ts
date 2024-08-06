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
    AddProjectDomainRequest,
    AddProjectDomainRequest$outboundSchema,
    AddProjectDomainRequestBody,
    AddProjectDomainResponseBody,
    AddProjectDomainResponseBody$inboundSchema,
} from "../models/addprojectdomainop.js";
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
 * Add a domain to a project
 *
 * @remarks
 * Add a domain to the project by passing its domain name and by specifying the project by either passing the project `id` or `name` in the URL. If the domain is not yet verified to be used on this project, the request will return `verified = false`, and the domain will need to be verified according to the `verification` challenge via `POST /projects/:idOrName/domains/:domain/verify`. If the domain already exists on the project, the request will fail with a `400` status code.
 */
export async function projectsAddDomain(
    client$: VercelCore,
    idOrName: string,
    teamId?: string | undefined,
    slug?: string | undefined,
    requestBody?: AddProjectDomainRequestBody | undefined,
    options?: RequestOptions
): Promise<
    Result<
        AddProjectDomainResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: AddProjectDomainRequest = {
        idOrName: idOrName,
        teamId: teamId,
        slug: slug,
        requestBody: requestBody,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => AddProjectDomainRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

    const pathParams$ = {
        idOrName: encodeSimple$("idOrName", payload$.idOrName, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/v10/projects/{idOrName}/domains")(pathParams$);

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
        operationID: "addProjectDomain",
        oAuth2Scopes: [],
        securitySource: client$.options$.security,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "POST",
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
        errorCodes: ["400", "401", "402", "403", "409", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        AddProjectDomainResponseBody,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, AddProjectDomainResponseBody$inboundSchema),
        m$.fail([400, 401, 402, 403, 409, "4XX", "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}