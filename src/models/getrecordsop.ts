/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../types/enums.js";
import {
    Pagination,
    Pagination$inboundSchema,
    Pagination$Outbound,
    Pagination$outboundSchema,
} from "./pagination.js";
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

export const GetRecordsResponseBodyDnsType = {
    A: "A",
    Aaaa: "AAAA",
    Alias: "ALIAS",
    Caa: "CAA",
    Cname: "CNAME",
    Https: "HTTPS",
    Mx: "MX",
    Srv: "SRV",
    Txt: "TXT",
    Ns: "NS",
} as const;
export type GetRecordsResponseBodyDnsType = ClosedEnum<typeof GetRecordsResponseBodyDnsType>;

export type ResponseBodyRecords = {
    id: string;
    slug: string;
    name: string;
    type: GetRecordsResponseBodyDnsType;
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
export type GetRecordsResponseBody3 = {
    records: Array<ResponseBodyRecords>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};

export const GetRecordsResponseBodyType = {
    A: "A",
    Aaaa: "AAAA",
    Alias: "ALIAS",
    Caa: "CAA",
    Cname: "CNAME",
    Https: "HTTPS",
    Mx: "MX",
    Srv: "SRV",
    Txt: "TXT",
    Ns: "NS",
} as const;
export type GetRecordsResponseBodyType = ClosedEnum<typeof GetRecordsResponseBodyType>;

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

export type GetRecordsResponseBody2 = {
    records: Array<Records>;
};

/**
 * Successful response retrieving a list of paginated DNS records.
 */
export type GetRecordsResponseBody = GetRecordsResponseBody2 | GetRecordsResponseBody3 | string;

/** @internal */
export const GetRecordsRequest$inboundSchema: z.ZodType<GetRecordsRequest, z.ZodTypeDef, unknown> =
    z.object({
        domain: z.string(),
        limit: z.string().optional(),
        since: z.string().optional(),
        until: z.string().optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });

/** @internal */
export type GetRecordsRequest$Outbound = {
    domain: string;
    limit?: string | undefined;
    since?: string | undefined;
    until?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetRecordsRequest$outboundSchema: z.ZodType<
    GetRecordsRequest$Outbound,
    z.ZodTypeDef,
    GetRecordsRequest
> = z.object({
    domain: z.string(),
    limit: z.string().optional(),
    since: z.string().optional(),
    until: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecordsRequest$ {
    /** @deprecated use `GetRecordsRequest$inboundSchema` instead. */
    export const inboundSchema = GetRecordsRequest$inboundSchema;
    /** @deprecated use `GetRecordsRequest$outboundSchema` instead. */
    export const outboundSchema = GetRecordsRequest$outboundSchema;
    /** @deprecated use `GetRecordsRequest$Outbound` instead. */
    export type Outbound = GetRecordsRequest$Outbound;
}

/** @internal */
export const GetRecordsResponseBodyDnsType$inboundSchema: z.ZodNativeEnum<
    typeof GetRecordsResponseBodyDnsType
> = z.nativeEnum(GetRecordsResponseBodyDnsType);

/** @internal */
export const GetRecordsResponseBodyDnsType$outboundSchema: z.ZodNativeEnum<
    typeof GetRecordsResponseBodyDnsType
> = GetRecordsResponseBodyDnsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecordsResponseBodyDnsType$ {
    /** @deprecated use `GetRecordsResponseBodyDnsType$inboundSchema` instead. */
    export const inboundSchema = GetRecordsResponseBodyDnsType$inboundSchema;
    /** @deprecated use `GetRecordsResponseBodyDnsType$outboundSchema` instead. */
    export const outboundSchema = GetRecordsResponseBodyDnsType$outboundSchema;
}

/** @internal */
export const ResponseBodyRecords$inboundSchema: z.ZodType<
    ResponseBodyRecords,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    type: GetRecordsResponseBodyDnsType$inboundSchema,
    value: z.string(),
    mxPriority: z.number().optional(),
    priority: z.number().optional(),
    creator: z.string(),
    created: z.nullable(z.number()),
    updated: z.nullable(z.number()),
    createdAt: z.nullable(z.number()),
    updatedAt: z.nullable(z.number()),
});

/** @internal */
export type ResponseBodyRecords$Outbound = {
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

/** @internal */
export const ResponseBodyRecords$outboundSchema: z.ZodType<
    ResponseBodyRecords$Outbound,
    z.ZodTypeDef,
    ResponseBodyRecords
> = z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    type: GetRecordsResponseBodyDnsType$outboundSchema,
    value: z.string(),
    mxPriority: z.number().optional(),
    priority: z.number().optional(),
    creator: z.string(),
    created: z.nullable(z.number()),
    updated: z.nullable(z.number()),
    createdAt: z.nullable(z.number()),
    updatedAt: z.nullable(z.number()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyRecords$ {
    /** @deprecated use `ResponseBodyRecords$inboundSchema` instead. */
    export const inboundSchema = ResponseBodyRecords$inboundSchema;
    /** @deprecated use `ResponseBodyRecords$outboundSchema` instead. */
    export const outboundSchema = ResponseBodyRecords$outboundSchema;
    /** @deprecated use `ResponseBodyRecords$Outbound` instead. */
    export type Outbound = ResponseBodyRecords$Outbound;
}

/** @internal */
export const GetRecordsResponseBody3$inboundSchema: z.ZodType<
    GetRecordsResponseBody3,
    z.ZodTypeDef,
    unknown
> = z.object({
    records: z.array(z.lazy(() => ResponseBodyRecords$inboundSchema)),
    pagination: Pagination$inboundSchema,
});

/** @internal */
export type GetRecordsResponseBody3$Outbound = {
    records: Array<ResponseBodyRecords$Outbound>;
    pagination: Pagination$Outbound;
};

/** @internal */
export const GetRecordsResponseBody3$outboundSchema: z.ZodType<
    GetRecordsResponseBody3$Outbound,
    z.ZodTypeDef,
    GetRecordsResponseBody3
> = z.object({
    records: z.array(z.lazy(() => ResponseBodyRecords$outboundSchema)),
    pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecordsResponseBody3$ {
    /** @deprecated use `GetRecordsResponseBody3$inboundSchema` instead. */
    export const inboundSchema = GetRecordsResponseBody3$inboundSchema;
    /** @deprecated use `GetRecordsResponseBody3$outboundSchema` instead. */
    export const outboundSchema = GetRecordsResponseBody3$outboundSchema;
    /** @deprecated use `GetRecordsResponseBody3$Outbound` instead. */
    export type Outbound = GetRecordsResponseBody3$Outbound;
}

/** @internal */
export const GetRecordsResponseBodyType$inboundSchema: z.ZodNativeEnum<
    typeof GetRecordsResponseBodyType
> = z.nativeEnum(GetRecordsResponseBodyType);

/** @internal */
export const GetRecordsResponseBodyType$outboundSchema: z.ZodNativeEnum<
    typeof GetRecordsResponseBodyType
> = GetRecordsResponseBodyType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecordsResponseBodyType$ {
    /** @deprecated use `GetRecordsResponseBodyType$inboundSchema` instead. */
    export const inboundSchema = GetRecordsResponseBodyType$inboundSchema;
    /** @deprecated use `GetRecordsResponseBodyType$outboundSchema` instead. */
    export const outboundSchema = GetRecordsResponseBodyType$outboundSchema;
}

/** @internal */
export const Records$inboundSchema: z.ZodType<Records, z.ZodTypeDef, unknown> = z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    type: GetRecordsResponseBodyType$inboundSchema,
    value: z.string(),
    mxPriority: z.number().optional(),
    priority: z.number().optional(),
    creator: z.string(),
    created: z.nullable(z.number()),
    updated: z.nullable(z.number()),
    createdAt: z.nullable(z.number()),
    updatedAt: z.nullable(z.number()),
});

/** @internal */
export type Records$Outbound = {
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

/** @internal */
export const Records$outboundSchema: z.ZodType<Records$Outbound, z.ZodTypeDef, Records> = z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    type: GetRecordsResponseBodyType$outboundSchema,
    value: z.string(),
    mxPriority: z.number().optional(),
    priority: z.number().optional(),
    creator: z.string(),
    created: z.nullable(z.number()),
    updated: z.nullable(z.number()),
    createdAt: z.nullable(z.number()),
    updatedAt: z.nullable(z.number()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Records$ {
    /** @deprecated use `Records$inboundSchema` instead. */
    export const inboundSchema = Records$inboundSchema;
    /** @deprecated use `Records$outboundSchema` instead. */
    export const outboundSchema = Records$outboundSchema;
    /** @deprecated use `Records$Outbound` instead. */
    export type Outbound = Records$Outbound;
}

/** @internal */
export const GetRecordsResponseBody2$inboundSchema: z.ZodType<
    GetRecordsResponseBody2,
    z.ZodTypeDef,
    unknown
> = z.object({
    records: z.array(z.lazy(() => Records$inboundSchema)),
});

/** @internal */
export type GetRecordsResponseBody2$Outbound = {
    records: Array<Records$Outbound>;
};

/** @internal */
export const GetRecordsResponseBody2$outboundSchema: z.ZodType<
    GetRecordsResponseBody2$Outbound,
    z.ZodTypeDef,
    GetRecordsResponseBody2
> = z.object({
    records: z.array(z.lazy(() => Records$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecordsResponseBody2$ {
    /** @deprecated use `GetRecordsResponseBody2$inboundSchema` instead. */
    export const inboundSchema = GetRecordsResponseBody2$inboundSchema;
    /** @deprecated use `GetRecordsResponseBody2$outboundSchema` instead. */
    export const outboundSchema = GetRecordsResponseBody2$outboundSchema;
    /** @deprecated use `GetRecordsResponseBody2$Outbound` instead. */
    export type Outbound = GetRecordsResponseBody2$Outbound;
}

/** @internal */
export const GetRecordsResponseBody$inboundSchema: z.ZodType<
    GetRecordsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => GetRecordsResponseBody2$inboundSchema),
    z.lazy(() => GetRecordsResponseBody3$inboundSchema),
    z.string(),
]);

/** @internal */
export type GetRecordsResponseBody$Outbound =
    | GetRecordsResponseBody2$Outbound
    | GetRecordsResponseBody3$Outbound
    | string;

/** @internal */
export const GetRecordsResponseBody$outboundSchema: z.ZodType<
    GetRecordsResponseBody$Outbound,
    z.ZodTypeDef,
    GetRecordsResponseBody
> = z.union([
    z.lazy(() => GetRecordsResponseBody2$outboundSchema),
    z.lazy(() => GetRecordsResponseBody3$outboundSchema),
    z.string(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecordsResponseBody$ {
    /** @deprecated use `GetRecordsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetRecordsResponseBody$inboundSchema;
    /** @deprecated use `GetRecordsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetRecordsResponseBody$outboundSchema;
    /** @deprecated use `GetRecordsResponseBody$Outbound` instead. */
    export type Outbound = GetRecordsResponseBody$Outbound;
}
