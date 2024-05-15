/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

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
    async listUserEvents(
        request: operations.ListUserEventsRequest,
        options?: RequestOptions
    ): Promise<operations.ListUserEventsResponse> {
        const input$ = typeof request === "undefined" ? {} : request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListUserEventsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v3/events")();

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("since", payload$.since, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("types", payload$.types, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("until", payload$.until, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("userId", payload$.userId, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.bearerToken === "function") {
            security$ = { bearerToken: await this.options$.bearerToken() };
        } else if (this.options$.bearerToken) {
            security$ = { bearerToken: this.options$.bearerToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "listUserEvents",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request$,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.ListUserEventsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response status or content-type", {
                response,
                request: request$,
            });
        }
    }

    /**
     * Get the User
     *
     * @remarks
     * Retrieves information related to the currently authenticated User.
     */
    async getAuthUser(options?: RequestOptions): Promise<operations.GetAuthUserResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/v2/user")();

        const query$ = "";

        let security$;
        if (typeof this.options$.bearerToken === "function") {
            security$ = { bearerToken: await this.options$.bearerToken() };
        } else if (this.options$.bearerToken) {
            security$ = { bearerToken: this.options$.bearerToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getAuthUser",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "409", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request$,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetAuthUserResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchStatusCode(response, 302)) {
            // fallthrough
        } else {
            throw new errors.SDKError("Unexpected API response status or content-type", {
                response,
                request: request$,
            });
        }

        return schemas$.parse(
            undefined,
            () => operations.GetAuthUserResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }

    /**
     * Delete User Account
     *
     * @remarks
     * Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email. The email contains a link that the user needs to visit in order to proceed with the deletion process.
     */
    async requestDelete(
        request?: operations.RequestDeleteRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.RequestDeleteResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.RequestDeleteRequestBody$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v1/user")();

        const query$ = "";

        let security$;
        if (typeof this.options$.bearerToken === "function") {
            security$ = { bearerToken: await this.options$.bearerToken() };
        } else if (this.options$.bearerToken) {
            security$ = { bearerToken: this.options$.bearerToken };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "requestDelete",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "403", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request$,
            },
        };

        if (this.matchResponse(response, 202, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.RequestDeleteResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response status or content-type", {
                response,
                request: request$,
            });
        }
    }
}
