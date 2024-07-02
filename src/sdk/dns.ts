/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";

export class Dns extends ClientSDK {
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
     * List existing DNS records
     *
     * @remarks
     * Retrieves a list of DNS records created for a domain name. By default it returns 20 records if no limit is provided. The rest can be retrieved using the pagination options.
     */
    async get(
        request: models.GetRecordsRequest,
        options?: RequestOptions
    ): Promise<models.GetRecordsResponseBody> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.GetRecordsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            domain: encodeSimple$("domain", payload$.domain, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v4/domains/{domain}/records")(pathParams$);

        const query$ = encodeFormQuery$({
            limit: payload$.limit,
            since: payload$.since,
            slug: payload$.slug,
            teamId: payload$.teamId,
            until: payload$.until,
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "getRecords",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
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

        const [result$] = await this.matcher<models.GetRecordsResponseBody>()
            .json(200, models.GetRecordsResponseBody$)
            .fail([400, 401, 403, 404, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Create a DNS record
     *
     * @remarks
     * Creates a DNS record for a domain.
     */
    async create(
        domain: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: models.CreateRecordRequestBody | undefined,
        options?: RequestOptions
    ): Promise<models.CreateRecordResponseBody> {
        const input$: models.CreateRecordRequest = {
            domain: domain,
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
            (value$) => models.CreateRecordRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            domain: encodeSimple$("domain", payload$.domain, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v2/domains/{domain}/records")(pathParams$);

        const query$ = encodeFormQuery$({
            slug: payload$.slug,
            teamId: payload$.teamId,
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "createRecord",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "401", "402", "403", "404", "409", "4XX", "5XX"],
        };
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

        const [result$] = await this.matcher<models.CreateRecordResponseBody>()
            .json(200, models.CreateRecordResponseBody$)
            .fail([400, 401, 402, 403, 404, 409, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Update an existing DNS record
     *
     * @remarks
     * Updates an existing DNS record for a domain name.
     */
    async update(
        recordId: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: models.UpdateRecordRequestBody | undefined,
        options?: RequestOptions
    ): Promise<models.UpdateRecordResponseBody> {
        const input$: models.UpdateRecordRequest = {
            recordId: recordId,
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
            (value$) => models.UpdateRecordRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            recordId: encodeSimple$("recordId", payload$.recordId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/domains/records/{recordId}")(pathParams$);

        const query$ = encodeFormQuery$({
            slug: payload$.slug,
            teamId: payload$.teamId,
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "updateRecord",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "401", "402", "403", "404", "409", "4XX", "5XX"],
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

        const [result$] = await this.matcher<models.UpdateRecordResponseBody>()
            .json(200, models.UpdateRecordResponseBody$)
            .fail([400, 401, 402, 403, 404, 409, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Delete a DNS record
     *
     * @remarks
     * Removes an existing DNS record from a domain name.
     */
    async remove(
        domain: string,
        recordId: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<models.RemoveRecordResponseBody> {
        const input$: models.RemoveRecordRequest = {
            domain: domain,
            recordId: recordId,
            teamId: teamId,
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.RemoveRecordRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            domain: encodeSimple$("domain", payload$.domain, {
                explode: false,
                charEncoding: "percent",
            }),
            recordId: encodeSimple$("recordId", payload$.recordId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v2/domains/{domain}/records/{recordId}")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            slug: payload$.slug,
            teamId: payload$.teamId,
        });

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "removeRecord",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "403", "404", "4XX", "5XX"] };
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

        const [result$] = await this.matcher<models.RemoveRecordResponseBody>()
            .json(200, models.RemoveRecordResponseBody$)
            .fail([400, 401, 403, 404, "4XX", "5XX"])
            .match(response);

        return result$;
    }
}
