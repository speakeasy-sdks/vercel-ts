/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetEdgeConfigSchemaRequest = {
    edgeConfigId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

/**
 * The EdgeConfig.
 */
export type GetEdgeConfigSchemaResponseBody = {};

/** @internal */
export const GetEdgeConfigSchemaRequest$inboundSchema: z.ZodType<
    GetEdgeConfigSchemaRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    edgeConfigId: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type GetEdgeConfigSchemaRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetEdgeConfigSchemaRequest$outboundSchema: z.ZodType<
    GetEdgeConfigSchemaRequest$Outbound,
    z.ZodTypeDef,
    GetEdgeConfigSchemaRequest
> = z.object({
    edgeConfigId: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigSchemaRequest$ {
    /** @deprecated use `GetEdgeConfigSchemaRequest$inboundSchema` instead. */
    export const inboundSchema = GetEdgeConfigSchemaRequest$inboundSchema;
    /** @deprecated use `GetEdgeConfigSchemaRequest$outboundSchema` instead. */
    export const outboundSchema = GetEdgeConfigSchemaRequest$outboundSchema;
    /** @deprecated use `GetEdgeConfigSchemaRequest$Outbound` instead. */
    export type Outbound = GetEdgeConfigSchemaRequest$Outbound;
}

/** @internal */
export const GetEdgeConfigSchemaResponseBody$inboundSchema: z.ZodType<
    GetEdgeConfigSchemaResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetEdgeConfigSchemaResponseBody$Outbound = {};

/** @internal */
export const GetEdgeConfigSchemaResponseBody$outboundSchema: z.ZodType<
    GetEdgeConfigSchemaResponseBody$Outbound,
    z.ZodTypeDef,
    GetEdgeConfigSchemaResponseBody
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigSchemaResponseBody$ {
    /** @deprecated use `GetEdgeConfigSchemaResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetEdgeConfigSchemaResponseBody$inboundSchema;
    /** @deprecated use `GetEdgeConfigSchemaResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetEdgeConfigSchemaResponseBody$outboundSchema;
    /** @deprecated use `GetEdgeConfigSchemaResponseBody$Outbound` instead. */
    export type Outbound = GetEdgeConfigSchemaResponseBody$Outbound;
}
