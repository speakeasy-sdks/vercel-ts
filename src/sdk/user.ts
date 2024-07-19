/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";

export class User extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * List User Events
     *
     * @remarks
     * Retrieves a list of "events" generated by the User on Vercel. Events are generated when the User performs a particular action, such as logging in, creating a deployment, and joining a Team (just to name a few). When the `teamId` parameter is supplied, then the events that are returned will be in relation to the Team that was specified.
     */
    async listEvent(
        request: models.ListUserEventRequest,
        options?: RequestOptions
    ): Promise<models.ListUserEventResponseBody> {
        const input$ = typeof request === "undefined" ? {} : request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.ListUserEventRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v3/events")();

        const query$ = encodeFormQuery$({
            limit: payload$.limit,
            since: payload$.since,
            slug: payload$.slug,
            teamId: payload$.teamId,
            types: payload$.types,
            until: payload$.until,
            userId: payload$.userId,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "listUserEvent",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "403", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<models.ListUserEventResponseBody>()
            .json(200, models.ListUserEventResponseBody$inboundSchema)
            .fail([400, 401, 403, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Get the User
     *
     * @remarks
     * Retrieves information related to the currently authenticated User.
     */
    async getAuthUser(
        options?: RequestOptions
    ): Promise<models.GetAuthUserResponseBody | undefined> {
        const path$ = this.templateURLComponent("/v2/user")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "getAuthUser",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "403", "409", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<models.GetAuthUserResponseBody | undefined>()
            .json(200, models.GetAuthUserResponseBody$inboundSchema.optional())
            .void(302, models.GetAuthUserResponseBody$inboundSchema.optional())
            .fail([400, 401, 403, 409, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Delete User Account
     *
     * @remarks
     * Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email. The email contains a link that the user needs to visit in order to proceed with the deletion process.
     */
    async requestDelete(
        request?: models.RequestDeleteRequestBody | undefined,
        options?: RequestOptions
    ): Promise<models.RequestDeleteResponseBody> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.RequestDeleteRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v1/user")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "requestDelete",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "403", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<models.RequestDeleteResponseBody>()
            .json(202, models.RequestDeleteResponseBody$inboundSchema)
            .fail([400, 403, "4XX", "5XX"])
            .match(response);

        return result$;
    }
}
