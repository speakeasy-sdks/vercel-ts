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
import * as z from "zod";

export class Artifacts extends ClientSDK {
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
     * Record an artifacts cache usage event
     *
     * @remarks
     * Records an artifacts cache usage event. The body of this request is an array of cache usage events. The supported event types are `HIT` and `MISS`. The source is either `LOCAL` the cache event was on the users filesystem cache or `REMOTE` if the cache event is for a remote cache. When the event is a `HIT` the request also accepts a number `duration` which is the time taken to generate the artifact in the cache.
     */
    async recordEvents(
        request: models.RecordEventsRequest,
        options?: RequestOptions
    ): Promise<models.RecordEventsResponse | void> {
        const input$ = typeof request === "undefined" ? {} : request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.RecordEventsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/v8/artifacts/events")();

        const query$ = [
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "x-artifact-client-ci",
            enc$.encodeSimple("x-artifact-client-ci", payload$["x-artifact-client-ci"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "x-artifact-client-interactive",
            enc$.encodeSimple(
                "x-artifact-client-interactive",
                payload$["x-artifact-client-interactive"],
                { explode: false, charEncoding: "none" }
            )
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "recordEvents",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "402", "403", "4XX", "5XX"] };
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

        if (this.matchStatusCode(response, 200)) {
            return;
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
     * Get status of Remote Caching for this principal
     *
     * @remarks
     * Check the status of Remote Caching for this principal. Returns a JSON-encoded status indicating if Remote Caching is enabled, disabled, or disabled due to usage limits.
     */
    async status(
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<models.StatusResponseBody> {
        const input$: models.StatusRequest = {
            teamId: teamId,
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.StatusRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v8/artifacts/status")();

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
            operationID: "status",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "402", "403", "4XX", "5XX"] };
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
                    return models.StatusResponseBody$.inboundSchema.parse(val$);
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
     * Upload a cache artifact
     *
     * @remarks
     * Uploads a cache artifact identified by the `hash` specified on the path. The cache artifact can then be downloaded with the provided `hash`.
     */
    async upload(
        request: models.UploadArtifactRequest,
        options?: RequestOptions
    ): Promise<models.UploadArtifactResponseBody> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/octet-stream");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.UploadArtifactRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = payload$.RequestBody;

        const pathParams$ = {
            hash: enc$.encodeSimple("hash", payload$.hash, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v8/artifacts/{hash}")(pathParams$);

        const query$ = [
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "Content-Length",
            enc$.encodeSimple("Content-Length", payload$["Content-Length"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "x-artifact-client-ci",
            enc$.encodeSimple("x-artifact-client-ci", payload$["x-artifact-client-ci"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "x-artifact-client-interactive",
            enc$.encodeSimple(
                "x-artifact-client-interactive",
                payload$["x-artifact-client-interactive"],
                { explode: false, charEncoding: "none" }
            )
        );
        headers$.set(
            "x-artifact-duration",
            enc$.encodeSimple("x-artifact-duration", payload$["x-artifact-duration"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "x-artifact-tag",
            enc$.encodeSimple("x-artifact-tag", payload$["x-artifact-tag"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "uploadArtifact",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "402", "403", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        if (this.matchResponse(response, 202, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return models.UploadArtifactResponseBody$.inboundSchema.parse(val$);
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
     * Download a cache artifact
     *
     * @remarks
     * Downloads a cache artifact indentified by its `hash` specified on the request path. The artifact is downloaded as an octet-stream. The client should verify the content-length header and response body.
     */
    async download(
        request: models.DownloadArtifactRequest,
        options?: RequestOptions
    ): Promise<ReadableStream<Uint8Array>> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.DownloadArtifactRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            hash: enc$.encodeSimple("hash", payload$.hash, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v8/artifacts/{hash}")(pathParams$);

        const query$ = [
            enc$.encodeForm("slug", payload$.slug, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("teamId", payload$.teamId, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "x-artifact-client-ci",
            enc$.encodeSimple("x-artifact-client-ci", payload$["x-artifact-client-ci"], {
                explode: false,
                charEncoding: "none",
            })
        );
        headers$.set(
            "x-artifact-client-interactive",
            enc$.encodeSimple(
                "x-artifact-client-interactive",
                payload$["x-artifact-client-interactive"],
                { explode: false, charEncoding: "none" }
            )
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "downloadArtifact",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "401", "402", "403", "404", "4XX", "5XX"],
        };
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
            const responseBody = response.body ?? undefined;
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return z.instanceof(ReadableStream<Uint8Array>).parse(val$);
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
     * Check if a cache artifact exists
     *
     * @remarks
     * Check that a cache artifact with the given `hash` exists. This request returns response headers only and is equivalent to a `GET` request to this endpoint where the response contains no body.
     */
    async exists(
        hash: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<models.ArtifactExistsResponse | void> {
        const input$: models.ArtifactExistsRequest = {
            hash: hash,
            teamId: teamId,
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.ArtifactExistsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            hash: enc$.encodeSimple("hash", payload$.hash, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v8/artifacts/{hash}")(pathParams$);

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
            operationID: "artifactExists",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "401", "402", "403", "404", "4XX", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "HEAD",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        if (this.matchStatusCode(response, 200)) {
            return;
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
     * Query information about an artifact
     *
     * @remarks
     * Query information about an array of artifacts.
     */
    async query(
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: models.ArtifactQueryRequestBody | undefined,
        options?: RequestOptions
    ): Promise<Record<string, models.ResponseBody>> {
        const input$: models.ArtifactQueryRequest = {
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
            (value$) => models.ArtifactQueryRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/v8/artifacts")();

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
            operationID: "artifactQuery",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "401", "402", "403", "4XX", "5XX"] };
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
                    return z.record(models.ResponseBody$.inboundSchema).parse(val$);
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
