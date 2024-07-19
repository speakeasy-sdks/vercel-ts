/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as z from "zod";

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
    async create(
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: models.CreateWebhookRequestBody | undefined,
        options?: RequestOptions
    ): Promise<models.CreateWebhookResponseBody> {
        const input$: models.CreateWebhookRequest = {
            teamId: teamId,
            slug: slug,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.CreateWebhookRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/v1/webhooks")();

        const query$ = encodeFormQuery$({
            slug: payload$.slug,
            teamId: payload$.teamId,
        });

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "createWebhook",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
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

        const [result$] = await this.matcher<models.CreateWebhookResponseBody>()
            .json(200, models.CreateWebhookResponseBody$inboundSchema)
            .fail([400, 401, 403, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Get a list of webhooks
     *
     * @remarks
     * Get a list of webhooks
     */
    async list(
        projectId?: string | undefined,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<Array<models.GetWebhooksResponseBody>> {
        const input$: models.GetWebhooksRequest = {
            projectId: projectId,
            teamId: teamId,
            slug: slug,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.GetWebhooksRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v1/webhooks")();

        const query$ = encodeFormQuery$({
            projectId: payload$.projectId,
            slug: payload$.slug,
            teamId: payload$.teamId,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "getWebhooks",
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

        const [result$] = await this.matcher<Array<models.GetWebhooksResponseBody>>()
            .json(200, z.array(models.GetWebhooksResponseBody$inboundSchema))
            .fail([400, 401, 403, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Get a webhook
     *
     * @remarks
     * Get a webhook
     */
    async get(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<models.GetWebhookResponseBody> {
        const input$: models.GetWebhookRequest = {
            id: id,
            teamId: teamId,
            slug: slug,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.GetWebhookRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v1/webhooks/{id}")(pathParams$);

        const query$ = encodeFormQuery$({
            slug: payload$.slug,
            teamId: payload$.teamId,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "getWebhook",
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

        const [result$] = await this.matcher<models.GetWebhookResponseBody>()
            .json(200, models.GetWebhookResponseBody$inboundSchema)
            .fail([400, 401, 403, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Deletes a webhook
     *
     * @remarks
     * Deletes a webhook
     */
    async delete(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<void> {
        const input$: models.DeleteWebhookRequest = {
            id: id,
            teamId: teamId,
            slug: slug,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.DeleteWebhookRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v1/webhooks/{id}")(pathParams$);

        const query$ = encodeFormQuery$({
            slug: payload$.slug,
            teamId: payload$.teamId,
        });

        const headers$ = new Headers({
            Accept: "*/*",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "deleteWebhook",
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
            errorCodes: ["400", "401", "403", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .fail([400, 401, 403, "4XX", "5XX"])
            .match(response);

        return result$;
    }
}
