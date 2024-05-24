/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetRecordsRequest = {
    domain: string;
    /**
     * Maximum number of records to list from a request.
     */
    limit?: string | undefined;
    /**
     * Get records created after this JavaScript timestamp.
     */
    since?: string | undefined;
    /**
     * Get records created before this JavaScript timestamp.
     */
    until?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export enum ResponseBodyType {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type ResponseBodyRecords = {
    id: string;
    slug: string;
    name: string;
    type: ResponseBodyType;
    value: string;
    mxPriority?: number | undefined;
    priority?: number | undefined;
    creator: string;
    created: number | null;
    updated: number | null;
    createdAt: number | null;
    updatedAt: number | null;
};

/**
 * Successful response retrieving a list of paginated DNS records.
 */
export type ResponseBody3 = {
    records: Array<ResponseBodyRecords>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: components.Pagination;
};

export enum GetRecordsResponseBodyType {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type Records = {
    id: string;
    slug: string;
    name: string;
    type: GetRecordsResponseBodyType;
    value: string;
    mxPriority?: number | undefined;
    priority?: number | undefined;
    creator: string;
    created: number | null;
    updated: number | null;
    createdAt: number | null;
    updatedAt: number | null;
};

export type ResponseBody2 = {
    records: Array<Records>;
};

/**
 * Successful response retrieving a list of paginated DNS records.
 */
export type GetRecordsResponseBody = ResponseBody2 | ResponseBody3 | string;

export type GetRecordsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful response retrieving a list of paginated DNS records.
     */
    oneOf?: ResponseBody2 | ResponseBody3 | string | undefined;
};

/** @internal */
export namespace GetRecordsRequest$ {
    export const inboundSchema: z.ZodType<GetRecordsRequest, z.ZodTypeDef, unknown> = z
        .object({
            domain: z.string(),
            limit: z.string().optional(),
            since: z.string().optional(),
            until: z.string().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.since === undefined ? null : { since: v.since }),
                ...(v.until === undefined ? null : { until: v.until }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        domain: string;
        limit?: string | undefined;
        since?: string | undefined;
        until?: string | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecordsRequest> = z
        .object({
            domain: z.string(),
            limit: z.string().optional(),
            since: z.string().optional(),
            until: z.string().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.since === undefined ? null : { since: v.since }),
                ...(v.until === undefined ? null : { until: v.until }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace ResponseBodyType$ {
    export const inboundSchema = z.nativeEnum(ResponseBodyType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ResponseBodyRecords$ {
    export const inboundSchema: z.ZodType<ResponseBodyRecords, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            slug: z.string(),
            name: z.string(),
            type: ResponseBodyType$.inboundSchema,
            value: z.string(),
            mxPriority: z.number().optional(),
            priority: z.number().optional(),
            creator: z.string(),
            created: z.nullable(z.number()),
            updated: z.nullable(z.number()),
            createdAt: z.nullable(z.number()),
            updatedAt: z.nullable(z.number()),
        })
        .transform((v) => {
            return {
                id: v.id,
                slug: v.slug,
                name: v.name,
                type: v.type,
                value: v.value,
                ...(v.mxPriority === undefined ? null : { mxPriority: v.mxPriority }),
                ...(v.priority === undefined ? null : { priority: v.priority }),
                creator: v.creator,
                created: v.created,
                updated: v.updated,
                createdAt: v.createdAt,
                updatedAt: v.updatedAt,
            };
        });

    export type Outbound = {
        id: string;
        slug: string;
        name: string;
        type: string;
        value: string;
        mxPriority?: number | undefined;
        priority?: number | undefined;
        creator: string;
        created: number | null;
        updated: number | null;
        createdAt: number | null;
        updatedAt: number | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResponseBodyRecords> = z
        .object({
            id: z.string(),
            slug: z.string(),
            name: z.string(),
            type: ResponseBodyType$.outboundSchema,
            value: z.string(),
            mxPriority: z.number().optional(),
            priority: z.number().optional(),
            creator: z.string(),
            created: z.nullable(z.number()),
            updated: z.nullable(z.number()),
            createdAt: z.nullable(z.number()),
            updatedAt: z.nullable(z.number()),
        })
        .transform((v) => {
            return {
                id: v.id,
                slug: v.slug,
                name: v.name,
                type: v.type,
                value: v.value,
                ...(v.mxPriority === undefined ? null : { mxPriority: v.mxPriority }),
                ...(v.priority === undefined ? null : { priority: v.priority }),
                creator: v.creator,
                created: v.created,
                updated: v.updated,
                createdAt: v.createdAt,
                updatedAt: v.updatedAt,
            };
        });
}

/** @internal */
export namespace ResponseBody3$ {
    export const inboundSchema: z.ZodType<ResponseBody3, z.ZodTypeDef, unknown> = z
        .object({
            records: z.array(z.lazy(() => ResponseBodyRecords$.inboundSchema)),
            pagination: components.Pagination$.inboundSchema,
        })
        .transform((v) => {
            return {
                records: v.records,
                pagination: v.pagination,
            };
        });

    export type Outbound = {
        records: Array<ResponseBodyRecords$.Outbound>;
        pagination: components.Pagination$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResponseBody3> = z
        .object({
            records: z.array(z.lazy(() => ResponseBodyRecords$.outboundSchema)),
            pagination: components.Pagination$.outboundSchema,
        })
        .transform((v) => {
            return {
                records: v.records,
                pagination: v.pagination,
            };
        });
}

/** @internal */
export namespace GetRecordsResponseBodyType$ {
    export const inboundSchema = z.nativeEnum(GetRecordsResponseBodyType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Records$ {
    export const inboundSchema: z.ZodType<Records, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            slug: z.string(),
            name: z.string(),
            type: GetRecordsResponseBodyType$.inboundSchema,
            value: z.string(),
            mxPriority: z.number().optional(),
            priority: z.number().optional(),
            creator: z.string(),
            created: z.nullable(z.number()),
            updated: z.nullable(z.number()),
            createdAt: z.nullable(z.number()),
            updatedAt: z.nullable(z.number()),
        })
        .transform((v) => {
            return {
                id: v.id,
                slug: v.slug,
                name: v.name,
                type: v.type,
                value: v.value,
                ...(v.mxPriority === undefined ? null : { mxPriority: v.mxPriority }),
                ...(v.priority === undefined ? null : { priority: v.priority }),
                creator: v.creator,
                created: v.created,
                updated: v.updated,
                createdAt: v.createdAt,
                updatedAt: v.updatedAt,
            };
        });

    export type Outbound = {
        id: string;
        slug: string;
        name: string;
        type: string;
        value: string;
        mxPriority?: number | undefined;
        priority?: number | undefined;
        creator: string;
        created: number | null;
        updated: number | null;
        createdAt: number | null;
        updatedAt: number | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Records> = z
        .object({
            id: z.string(),
            slug: z.string(),
            name: z.string(),
            type: GetRecordsResponseBodyType$.outboundSchema,
            value: z.string(),
            mxPriority: z.number().optional(),
            priority: z.number().optional(),
            creator: z.string(),
            created: z.nullable(z.number()),
            updated: z.nullable(z.number()),
            createdAt: z.nullable(z.number()),
            updatedAt: z.nullable(z.number()),
        })
        .transform((v) => {
            return {
                id: v.id,
                slug: v.slug,
                name: v.name,
                type: v.type,
                value: v.value,
                ...(v.mxPriority === undefined ? null : { mxPriority: v.mxPriority }),
                ...(v.priority === undefined ? null : { priority: v.priority }),
                creator: v.creator,
                created: v.created,
                updated: v.updated,
                createdAt: v.createdAt,
                updatedAt: v.updatedAt,
            };
        });
}

/** @internal */
export namespace ResponseBody2$ {
    export const inboundSchema: z.ZodType<ResponseBody2, z.ZodTypeDef, unknown> = z
        .object({
            records: z.array(z.lazy(() => Records$.inboundSchema)),
        })
        .transform((v) => {
            return {
                records: v.records,
            };
        });

    export type Outbound = {
        records: Array<Records$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResponseBody2> = z
        .object({
            records: z.array(z.lazy(() => Records$.outboundSchema)),
        })
        .transform((v) => {
            return {
                records: v.records,
            };
        });
}

/** @internal */
export namespace GetRecordsResponseBody$ {
    export const inboundSchema: z.ZodType<GetRecordsResponseBody, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => ResponseBody2$.inboundSchema),
        z.lazy(() => ResponseBody3$.inboundSchema),
        z.string(),
    ]);

    export type Outbound = ResponseBody2$.Outbound | ResponseBody3$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecordsResponseBody> =
        z.union([
            z.lazy(() => ResponseBody2$.outboundSchema),
            z.lazy(() => ResponseBody3$.outboundSchema),
            z.string(),
        ]);
}

/** @internal */
export namespace GetRecordsResponse$ {
    export const inboundSchema: z.ZodType<GetRecordsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            oneOf: z
                .union([
                    z.lazy(() => ResponseBody2$.inboundSchema),
                    z.lazy(() => ResponseBody3$.inboundSchema),
                    z.string(),
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
        oneOf?: ResponseBody2$.Outbound | ResponseBody3$.Outbound | string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRecordsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            oneOf: z
                .union([
                    z.lazy(() => ResponseBody2$.outboundSchema),
                    z.lazy(() => ResponseBody3$.outboundSchema),
                    z.string(),
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
