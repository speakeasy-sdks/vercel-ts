/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as models from "../models";

export class ProjectMembers extends ClientSDK {
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
     * List project members
     *
     * @remarks
     * Lists all members of a project.
     */
    async list(
        request: models.GetProjectMembersRequest,
        options?: RequestOptions
    ): Promise<models.GetProjectMembersResponseBody> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.GetProjectMembersRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            idOrName: enc$.encodeSimple("idOrName", payload$.idOrName, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/projects/{idOrName}/members")(pathParams$);

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("search", payload$.search, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("since", payload$.since, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("until", payload$.until, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "getProjectMembers",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
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

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.GetProjectMembersResponseBody$.inboundSchema.parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Adds a new member to a project.
     *
     * @remarks
     * Adds a new member to the project.
     */
    async create(
        idOrName: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: models.AddProjectMemberRequestBody | undefined,
        options?: RequestOptions
    ): Promise<models.AddProjectMemberResponseBody> {
        const input$: models.AddProjectMemberRequest = {
            idOrName: idOrName,
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
            (value$) => models.AddProjectMemberRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            idOrName: enc$.encodeSimple("idOrName", payload$.idOrName, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/projects/{idOrName}/members")(pathParams$);

        const query$ = [
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "addProjectMember",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "4XX", "500", "5XX"] };
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

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.AddProjectMemberResponseBody$.inboundSchema.parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }

    /**
     * Remove a Project Member
     *
     * @remarks
     * Remove a member from a specific project
     */
    async delete(
        idOrName: string,
        uid: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<models.RemoveProjectMemberResponseBody> {
        const input$: models.RemoveProjectMemberRequest = {
            idOrName: idOrName,
            uid: uid,
            teamId: teamId,
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.RemoveProjectMemberRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            idOrName: enc$.encodeSimple("idOrName", payload$.idOrName, {
                explode: false,
                charEncoding: "percent",
            }),
            uid: enc$.encodeSimple("uid", payload$.uid, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/projects/{idOrName}/members/{uid}")(
            pathParams$
        );

        const query$ = [
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "removeProjectMember",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
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

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.RemoveProjectMemberResponseBody$.inboundSchema.parse(val$);
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new models.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }
}
