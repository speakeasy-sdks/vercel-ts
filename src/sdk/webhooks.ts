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

export class Webhooks extends ClientSDK {
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
     * Creates a webhook
     *
     * @remarks
     * Creates a webhook
     */
    async createWebhook(
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: operations.CreateWebhookRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateWebhookResponse> {
        const input$: operations.CreateWebhookRequest = {
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
            (value$) => operations.CreateWebhookRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/v1/webhooks")();

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
            operationID: "createWebhook",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "4XX", "5XX"] };
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
                    return operations.CreateWebhookResponse$.inboundSchema.parse({
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
     * Get a list of webhooks
     *
     * @remarks
     * Get a list of webhooks
     */
    async getWebhooks(
        projectId?: string | undefined,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetWebhooksResponse> {
        const input$: operations.GetWebhooksRequest = {
            projectId: projectId,
            teamId: teamId,
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetWebhooksRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v1/webhooks")();

        const query$ = [
            enc$.encodeForm("projectId", payload$.projectId, {
                explode: true,
                charEncoding: "percent",
            }),
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
            operationID: "getWebhooks",
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
                    return operations.GetWebhooksResponse$.inboundSchema.parse({
                        ...responseFields$,
                        responseBodies: val$,
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
     * Get a webhook
     *
     * @remarks
     * Get a webhook
     */
    async getWebhook(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetWebhookResponse> {
        const input$: operations.GetWebhookRequest = {
            id: id,
            teamId: teamId,
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetWebhookRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v1/webhooks/{id}")(pathParams$);

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
            operationID: "getWebhook",
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
                    return operations.GetWebhookResponse$.inboundSchema.parse({
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
     * Deletes a webhook
     *
     * @remarks
     * Deletes a webhook
     */
    async deleteWebhook(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.DeleteWebhookResponse> {
        const input$: operations.DeleteWebhookRequest = {
            id: id,
            teamId: teamId,
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteWebhookRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v1/webhooks/{id}")(pathParams$);

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
            operationID: "deleteWebhook",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerToken,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "4XX", "5XX"] };
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

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
        } else {
            throw new errors.SDKError("Unexpected API response status or content-type", {
                response,
                request: request$,
            });
        }

        return schemas$.parse(
            undefined,
            () => operations.DeleteWebhookResponse$.inboundSchema.parse(responseFields$),
            "Response validation failed"
        );
    }
}