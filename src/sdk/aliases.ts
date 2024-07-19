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

export class Aliases extends ClientSDK {
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
     * List aliases
     *
     * @remarks
     * Retrieves a list of aliases for the authenticated User or Team. When `domain` is provided, only aliases for that domain will be returned. When `projectId` is provided, it will only return the given project aliases.
     */
    async list(
        request: models.ListAliasesRequest,
        options?: RequestOptions
    ): Promise<models.ListAliasesResponseBody> {
        const input$ = typeof request === "undefined" ? {} : request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.ListAliasesRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v4/aliases")();

        const query$ = encodeFormQuery$({
            domain: payload$.domain,
            from: payload$.from,
            limit: payload$.limit,
            projectId: payload$.projectId,
            rollbackDeploymentId: payload$.rollbackDeploymentId,
            since: payload$.since,
            slug: payload$.slug,
            teamId: payload$.teamId,
            until: payload$.until,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "listAliases",
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
            errorCodes: ["400", "401", "403", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<models.ListAliasesResponseBody>()
            .json(200, models.ListAliasesResponseBody$inboundSchema)
            .fail([400, 401, 403, 404, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Get an Alias
     *
     * @remarks
     * Retrieves an Alias for the given host name or alias ID.
     */
    async getAlias(
        request: models.GetAliasRequest,
        options?: RequestOptions
    ): Promise<models.GetAliasResponseBody> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.GetAliasRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            idOrAlias: encodeSimple$("idOrAlias", payload$.idOrAlias, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v4/aliases/{idOrAlias}")(pathParams$);

        const query$ = encodeFormQuery$({
            from: payload$.from,
            projectId: payload$.projectId,
            since: payload$.since,
            slug: payload$.slug,
            teamId: payload$.teamId,
            until: payload$.until,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "getAlias",
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
            errorCodes: ["400", "401", "403", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<models.GetAliasResponseBody>()
            .json(200, models.GetAliasResponseBody$inboundSchema)
            .fail([400, 401, 403, 404, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Delete an Alias
     *
     * @remarks
     * Delete an Alias with the specified ID.
     */
    async delete(
        aliasId: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<models.DeleteAliasResponseBody> {
        const input$: models.DeleteAliasRequest = {
            aliasId: aliasId,
            teamId: teamId,
            slug: slug,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.DeleteAliasRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            aliasId: encodeSimple$("aliasId", payload$.aliasId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v2/aliases/{aliasId}")(pathParams$);

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
            operationID: "deleteAlias",
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
            errorCodes: ["400", "401", "403", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<models.DeleteAliasResponseBody>()
            .json(200, models.DeleteAliasResponseBody$inboundSchema)
            .fail([400, 401, 403, 404, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * List Deployment Aliases
     *
     * @remarks
     * Retrieves all Aliases for the Deployment with the given ID. The authenticated user or team must own the deployment.
     */
    async listDeploymentAliases(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<models.ListDeploymentAliasesResponseBody> {
        const input$: models.ListDeploymentAliasesRequest = {
            id: id,
            teamId: teamId,
            slug: slug,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.ListDeploymentAliasesRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v2/deployments/{id}/aliases")(pathParams$);

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
            operationID: "listDeploymentAliases",
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
            errorCodes: ["400", "401", "403", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<models.ListDeploymentAliasesResponseBody>()
            .json(200, models.ListDeploymentAliasesResponseBody$inboundSchema)
            .fail([400, 401, 403, 404, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Assign an Alias
     *
     * @remarks
     * Creates a new alias for the deployment with the given deployment ID. The authenticated user or team must own this deployment. If the desired alias is already assigned to another deployment, then it will be removed from the old deployment and assigned to the new one.
     */
    async assign(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: models.AssignAliasRequestBody | undefined,
        options?: RequestOptions
    ): Promise<models.AssignAliasResponseBody> {
        const input$: models.AssignAliasRequest = {
            id: id,
            teamId: teamId,
            slug: slug,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.AssignAliasRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v2/deployments/{id}/aliases")(pathParams$);

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
            operationID: "assignAlias",
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
            errorCodes: ["400", "401", "402", "403", "404", "409", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<models.AssignAliasResponseBody>()
            .json(200, models.AssignAliasResponseBody$inboundSchema)
            .fail([400, 401, 402, 403, 404, 409, "4XX", "5XX"])
            .match(response);

        return result$;
    }
}
