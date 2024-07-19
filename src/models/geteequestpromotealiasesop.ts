/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Pagination,
    Pagination$inboundSchema,
    Pagination$Outbound,
    Pagination$outboundSchema,
} from "./pagination.js";
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
    pagination: Pagination;
};

export type GetEequestPromoteAliasesResponseBody1 = {};

export type GetEequestPromoteAliasesResponseBody =
    | GetEequestPromoteAliasesResponseBody1
    | GetEequestPromoteAliasesResponseBody2;

/** @internal */
export const GetEequestPromoteAliasesRequest$inboundSchema: z.ZodType<
    GetEequestPromoteAliasesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    projectId: z.string(),
    limit: z.number().optional(),
    since: z.number().optional(),
    until: z.number().optional(),
    failedOnly: z.boolean().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type GetEequestPromoteAliasesRequest$Outbound = {
    projectId: string;
    limit?: number | undefined;
    since?: number | undefined;
    until?: number | undefined;
    failedOnly?: boolean | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetEequestPromoteAliasesRequest$outboundSchema: z.ZodType<
    GetEequestPromoteAliasesRequest$Outbound,
    z.ZodTypeDef,
    GetEequestPromoteAliasesRequest
> = z.object({
    projectId: z.string(),
    limit: z.number().optional(),
    since: z.number().optional(),
    until: z.number().optional(),
    failedOnly: z.boolean().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEequestPromoteAliasesRequest$ {
    /** @deprecated use `GetEequestPromoteAliasesRequest$inboundSchema` instead. */
    export const inboundSchema = GetEequestPromoteAliasesRequest$inboundSchema;
    /** @deprecated use `GetEequestPromoteAliasesRequest$outboundSchema` instead. */
    export const outboundSchema = GetEequestPromoteAliasesRequest$outboundSchema;
    /** @deprecated use `GetEequestPromoteAliasesRequest$Outbound` instead. */
    export type Outbound = GetEequestPromoteAliasesRequest$Outbound;
}

/** @internal */
export const ResponseBodyAliases$inboundSchema: z.ZodType<
    ResponseBodyAliases,
    z.ZodTypeDef,
    unknown
> = z.object({
    status: z.string(),
    alias: z.string(),
    id: z.string(),
});

/** @internal */
export type ResponseBodyAliases$Outbound = {
    status: string;
    alias: string;
    id: string;
};

/** @internal */
export const ResponseBodyAliases$outboundSchema: z.ZodType<
    ResponseBodyAliases$Outbound,
    z.ZodTypeDef,
    ResponseBodyAliases
> = z.object({
    status: z.string(),
    alias: z.string(),
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyAliases$ {
    /** @deprecated use `ResponseBodyAliases$inboundSchema` instead. */
    export const inboundSchema = ResponseBodyAliases$inboundSchema;
    /** @deprecated use `ResponseBodyAliases$outboundSchema` instead. */
    export const outboundSchema = ResponseBodyAliases$outboundSchema;
    /** @deprecated use `ResponseBodyAliases$Outbound` instead. */
    export type Outbound = ResponseBodyAliases$Outbound;
}

/** @internal */
export const GetEequestPromoteAliasesResponseBody2$inboundSchema: z.ZodType<
    GetEequestPromoteAliasesResponseBody2,
    z.ZodTypeDef,
    unknown
> = z.object({
    aliases: z.array(z.lazy(() => ResponseBodyAliases$inboundSchema)),
    pagination: Pagination$inboundSchema,
});

/** @internal */
export type GetEequestPromoteAliasesResponseBody2$Outbound = {
    aliases: Array<ResponseBodyAliases$Outbound>;
    pagination: Pagination$Outbound;
};

/** @internal */
export const GetEequestPromoteAliasesResponseBody2$outboundSchema: z.ZodType<
    GetEequestPromoteAliasesResponseBody2$Outbound,
    z.ZodTypeDef,
    GetEequestPromoteAliasesResponseBody2
> = z.object({
    aliases: z.array(z.lazy(() => ResponseBodyAliases$outboundSchema)),
    pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEequestPromoteAliasesResponseBody2$ {
    /** @deprecated use `GetEequestPromoteAliasesResponseBody2$inboundSchema` instead. */
    export const inboundSchema = GetEequestPromoteAliasesResponseBody2$inboundSchema;
    /** @deprecated use `GetEequestPromoteAliasesResponseBody2$outboundSchema` instead. */
    export const outboundSchema = GetEequestPromoteAliasesResponseBody2$outboundSchema;
    /** @deprecated use `GetEequestPromoteAliasesResponseBody2$Outbound` instead. */
    export type Outbound = GetEequestPromoteAliasesResponseBody2$Outbound;
}

/** @internal */
export const GetEequestPromoteAliasesResponseBody1$inboundSchema: z.ZodType<
    GetEequestPromoteAliasesResponseBody1,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetEequestPromoteAliasesResponseBody1$Outbound = {};

/** @internal */
export const GetEequestPromoteAliasesResponseBody1$outboundSchema: z.ZodType<
    GetEequestPromoteAliasesResponseBody1$Outbound,
    z.ZodTypeDef,
    GetEequestPromoteAliasesResponseBody1
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEequestPromoteAliasesResponseBody1$ {
    /** @deprecated use `GetEequestPromoteAliasesResponseBody1$inboundSchema` instead. */
    export const inboundSchema = GetEequestPromoteAliasesResponseBody1$inboundSchema;
    /** @deprecated use `GetEequestPromoteAliasesResponseBody1$outboundSchema` instead. */
    export const outboundSchema = GetEequestPromoteAliasesResponseBody1$outboundSchema;
    /** @deprecated use `GetEequestPromoteAliasesResponseBody1$Outbound` instead. */
    export type Outbound = GetEequestPromoteAliasesResponseBody1$Outbound;
}

/** @internal */
export const GetEequestPromoteAliasesResponseBody$inboundSchema: z.ZodType<
    GetEequestPromoteAliasesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => GetEequestPromoteAliasesResponseBody1$inboundSchema),
    z.lazy(() => GetEequestPromoteAliasesResponseBody2$inboundSchema),
]);

/** @internal */
export type GetEequestPromoteAliasesResponseBody$Outbound =
    | GetEequestPromoteAliasesResponseBody1$Outbound
    | GetEequestPromoteAliasesResponseBody2$Outbound;

/** @internal */
export const GetEequestPromoteAliasesResponseBody$outboundSchema: z.ZodType<
    GetEequestPromoteAliasesResponseBody$Outbound,
    z.ZodTypeDef,
    GetEequestPromoteAliasesResponseBody
> = z.union([
    z.lazy(() => GetEequestPromoteAliasesResponseBody1$outboundSchema),
    z.lazy(() => GetEequestPromoteAliasesResponseBody2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEequestPromoteAliasesResponseBody$ {
    /** @deprecated use `GetEequestPromoteAliasesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetEequestPromoteAliasesResponseBody$inboundSchema;
    /** @deprecated use `GetEequestPromoteAliasesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetEequestPromoteAliasesResponseBody$outboundSchema;
    /** @deprecated use `GetEequestPromoteAliasesResponseBody$Outbound` instead. */
    export type Outbound = GetEequestPromoteAliasesResponseBody$Outbound;
}
