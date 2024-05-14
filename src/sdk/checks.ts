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

export class Checks extends ClientSDK {
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
     * Creates a new Check
     *
     * @remarks
     * Creates a new check. This endpoint must be called with an OAuth2 or it will produce a 400 error.
     */
    async createCheck(
        deploymentId: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: operations.CreateCheckRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateCheckResponse> {
        const input$: operations.CreateCheckRequest = {
            deploymentId: deploymentId,
            teamId: teamId,
            slug: slug,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateCheckRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            deploymentId: enc$.encodeSimple("deploymentId", payload$.deploymentId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/deployments/{deploymentId}/checks")(
            pathParams$
        );

        const query$ = [
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
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
            operationID: "createCheck",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
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
                    return operations.CreateCheckResponse$.inboundSchema.parse({
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
     * Retrieve a list of all checks
     *
     * @remarks
     * List all of the checks created for a deployment.
     */
    async getAllChecks(
        deploymentId: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetAllChecksResponse> {
        const input$: operations.GetAllChecksRequest = {
            deploymentId: deploymentId,
            teamId: teamId,
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAllChecksRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            deploymentId: enc$.encodeSimple("deploymentId", payload$.deploymentId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/deployments/{deploymentId}/checks")(
            pathParams$
        );

        const query$ = [
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
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
            operationID: "getAllChecks",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "404", "4XX", "5XX"] };
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
                    return operations.GetAllChecksResponse$.inboundSchema.parse({
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
     * Get a single check
     *
     * @remarks
     * Return a detailed response for a single check.
     */
    async getCheck(
        deploymentId: string,
        checkId: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetCheckResponse> {
        const input$: operations.GetCheckRequest = {
            deploymentId: deploymentId,
            checkId: checkId,
            teamId: teamId,
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetCheckRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            checkId: enc$.encodeSimple("checkId", payload$.checkId, {
                explode: false,
                charEncoding: "percent",
            }),
            deploymentId: enc$.encodeSimple("deploymentId", payload$.deploymentId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/deployments/{deploymentId}/checks/{checkId}")(
            pathParams$
        );

        const query$ = [
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
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
            operationID: "getCheck",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "404", "4XX", "5XX"] };
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
                    return operations.GetCheckResponse$.inboundSchema.parse({
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
     * Update a check
     *
     * @remarks
     * Update an existing check. This endpoint must be called with an OAuth2 or it will produce a 400 error.
     */
    async updateCheck(
        request: operations.UpdateCheckRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateCheckResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateCheckRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            checkId: enc$.encodeSimple("checkId", payload$.checkId, {
                explode: false,
                charEncoding: "percent",
            }),
            deploymentId: enc$.encodeSimple("deploymentId", payload$.deploymentId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/deployments/{deploymentId}/checks/{checkId}")(
            pathParams$
        );

        const query$ = [
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
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
            operationID: "updateCheck",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "401", "403", "404", "413", "4XX", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
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
                    return operations.UpdateCheckResponse$.inboundSchema.parse({
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
     * Rerequest a check
     *
     * @remarks
     * Rerequest a selected check that has failed.
     */
    async rerequestCheck(
        deploymentId: string,
        checkId: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.RerequestCheckResponse> {
        const input$: operations.RerequestCheckRequest = {
            deploymentId: deploymentId,
            checkId: checkId,
            teamId: teamId,
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RerequestCheckRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            checkId: enc$.encodeSimple("checkId", payload$.checkId, {
                explode: false,
                charEncoding: "percent",
            }),
            deploymentId: enc$.encodeSimple("deploymentId", payload$.deploymentId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/deployments/{deploymentId}/checks/{checkId}/rerequest"
        )(pathParams$);

        const query$ = [
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
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
            operationID: "rerequestCheck",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
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
                    return operations.RerequestCheckResponse$.inboundSchema.parse({
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
