/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetEequestPromoteAliasesRequest = {
    projectId: string;
    /**
     * Maximum number of aliases to list from a request (max 100).
     */
    limit?: number | undefined;
    /**
     * Get aliases created after this epoch timestamp.
     */
    since?: number | undefined;
    /**
     * Get aliases created before this epoch timestamp.
     */
    until?: number | undefined;
    /**
     * Filter results down to aliases that failed to map to the requested deployment
     */
    failedOnly?: boolean | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export type ResponseBodyAliases = {
    status: string;
    alias: string;
    id: string;
};

export type GetEequestPromoteAliasesResponseBody2 = {
    aliases: Array<ResponseBodyAliases>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: components.Pagination;
};

export type GetEequestPromoteAliasesResponseBody1 = {};

export type GetEequestPromoteAliasesResponseBody =
    | GetEequestPromoteAliasesResponseBody1
    | GetEequestPromoteAliasesResponseBody2;

export type GetEequestPromoteAliasesResponse = {
    httpMeta: components.HTTPMetadata;
    oneOf?:
        | GetEequestPromoteAliasesResponseBody1
        | GetEequestPromoteAliasesResponseBody2
        | undefined;
};

/** @internal */
export namespace GetEequestPromoteAliasesRequest$ {
    export const inboundSchema: z.ZodType<GetEequestPromoteAliasesRequest, z.ZodTypeDef, unknown> =
        z
            .object({
                projectId: z.string(),
                limit: z.number().optional(),
                since: z.number().optional(),
                until: z.number().optional(),
                failedOnly: z.boolean().optional(),
                teamId: z.string().optional(),
                slug: z.string().optional(),
            })
            .transform((v) => {
                return {
                    projectId: v.projectId,
                    ...(v.limit === undefined ? null : { limit: v.limit }),
                    ...(v.since === undefined ? null : { since: v.since }),
                    ...(v.until === undefined ? null : { until: v.until }),
                    ...(v.failedOnly === undefined ? null : { failedOnly: v.failedOnly }),
                    ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                    ...(v.slug === undefined ? null : { slug: v.slug }),
                };
            });

    export type Outbound = {
        projectId: string;
        limit?: number | undefined;
        since?: number | undefined;
        until?: number | undefined;
        failedOnly?: boolean | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetEequestPromoteAliasesRequest
    > = z
        .object({
            projectId: z.string(),
            limit: z.number().optional(),
            since: z.number().optional(),
            until: z.number().optional(),
            failedOnly: z.boolean().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                projectId: v.projectId,
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.since === undefined ? null : { since: v.since }),
                ...(v.until === undefined ? null : { until: v.until }),
                ...(v.failedOnly === undefined ? null : { failedOnly: v.failedOnly }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace ResponseBodyAliases$ {
    export const inboundSchema: z.ZodType<ResponseBodyAliases, z.ZodTypeDef, unknown> = z
        .object({
            status: z.string(),
            alias: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                status: v.status,
                alias: v.alias,
                id: v.id,
            };
        });

    export type Outbound = {
        status: string;
        alias: string;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResponseBodyAliases> = z
        .object({
            status: z.string(),
            alias: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                status: v.status,
                alias: v.alias,
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetEequestPromoteAliasesResponseBody2$ {
    export const inboundSchema: z.ZodType<
        GetEequestPromoteAliasesResponseBody2,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            aliases: z.array(z.lazy(() => ResponseBodyAliases$.inboundSchema)),
            pagination: components.Pagination$.inboundSchema,
        })
        .transform((v) => {
            return {
                aliases: v.aliases,
                pagination: v.pagination,
            };
        });

    export type Outbound = {
        aliases: Array<ResponseBodyAliases$.Outbound>;
        pagination: components.Pagination$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetEequestPromoteAliasesResponseBody2
    > = z
        .object({
            aliases: z.array(z.lazy(() => ResponseBodyAliases$.outboundSchema)),
            pagination: components.Pagination$.outboundSchema,
        })
        .transform((v) => {
            return {
                aliases: v.aliases,
                pagination: v.pagination,
            };
        });
}

/** @internal */
export namespace GetEequestPromoteAliasesResponseBody1$ {
    export const inboundSchema: z.ZodType<
        GetEequestPromoteAliasesResponseBody1,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetEequestPromoteAliasesResponseBody1
    > = z.object({});
}

/** @internal */
export namespace GetEequestPromoteAliasesResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetEequestPromoteAliasesResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => GetEequestPromoteAliasesResponseBody1$.inboundSchema),
        z.lazy(() => GetEequestPromoteAliasesResponseBody2$.inboundSchema),
    ]);

    export type Outbound =
        | GetEequestPromoteAliasesResponseBody1$.Outbound
        | GetEequestPromoteAliasesResponseBody2$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetEequestPromoteAliasesResponseBody
    > = z.union([
        z.lazy(() => GetEequestPromoteAliasesResponseBody1$.outboundSchema),
        z.lazy(() => GetEequestPromoteAliasesResponseBody2$.outboundSchema),
    ]);
}

/** @internal */
export namespace GetEequestPromoteAliasesResponse$ {
    export const inboundSchema: z.ZodType<GetEequestPromoteAliasesResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                oneOf: z
                    .union([
                        z.lazy(() => GetEequestPromoteAliasesResponseBody1$.inboundSchema),
                        z.lazy(() => GetEequestPromoteAliasesResponseBody2$.inboundSchema),
                    ])
                    .optional(),
            })
            .transform((v) => {
                return {
                    httpMeta: v.HttpMeta,
                    ...(v.oneOf === undefined ? null : { oneOf: v.oneOf }),
                };
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        oneOf?:
            | GetEequestPromoteAliasesResponseBody1$.Outbound
            | GetEequestPromoteAliasesResponseBody2$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetEequestPromoteAliasesResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            oneOf: z
                .union([
                    z.lazy(() => GetEequestPromoteAliasesResponseBody1$.outboundSchema),
                    z.lazy(() => GetEequestPromoteAliasesResponseBody2$.outboundSchema),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.oneOf === undefined ? null : { oneOf: v.oneOf }),
            };
        });
}