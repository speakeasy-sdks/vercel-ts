/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetEdgeConfigRequest = {
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
 * Keeps track of the current state of the Edge Config while it gets transferred.
 */
export type GetEdgeConfigTransfer = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};

export type GetEdgeConfigSchema = {};

/**
 * The EdgeConfig.
 */
export type GetEdgeConfigResponseBody = {
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    id?: string | undefined;
    /**
     * Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).
     */
    slug?: string | undefined;
    ownerId?: string | undefined;
    digest?: string | undefined;
    /**
     * Keeps track of the current state of the Edge Config while it gets transferred.
     */
    transfer?: GetEdgeConfigTransfer | undefined;
    schema?: GetEdgeConfigSchema | undefined;
    sizeInBytes: number;
    itemCount: number;
};

/** @internal */
export const GetEdgeConfigRequest$inboundSchema: z.ZodType<
    GetEdgeConfigRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    edgeConfigId: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type GetEdgeConfigRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetEdgeConfigRequest$outboundSchema: z.ZodType<
    GetEdgeConfigRequest$Outbound,
    z.ZodTypeDef,
    GetEdgeConfigRequest
> = z.object({
    edgeConfigId: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigRequest$ {
    /** @deprecated use `GetEdgeConfigRequest$inboundSchema` instead. */
    export const inboundSchema = GetEdgeConfigRequest$inboundSchema;
    /** @deprecated use `GetEdgeConfigRequest$outboundSchema` instead. */
    export const outboundSchema = GetEdgeConfigRequest$outboundSchema;
    /** @deprecated use `GetEdgeConfigRequest$Outbound` instead. */
    export type Outbound = GetEdgeConfigRequest$Outbound;
}

/** @internal */
export const GetEdgeConfigTransfer$inboundSchema: z.ZodType<
    GetEdgeConfigTransfer,
    z.ZodTypeDef,
    unknown
> = z.object({
    fromAccountId: z.string(),
    startedAt: z.number(),
    doneAt: z.nullable(z.number()),
});

/** @internal */
export type GetEdgeConfigTransfer$Outbound = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};

/** @internal */
export const GetEdgeConfigTransfer$outboundSchema: z.ZodType<
    GetEdgeConfigTransfer$Outbound,
    z.ZodTypeDef,
    GetEdgeConfigTransfer
> = z.object({
    fromAccountId: z.string(),
    startedAt: z.number(),
    doneAt: z.nullable(z.number()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigTransfer$ {
    /** @deprecated use `GetEdgeConfigTransfer$inboundSchema` instead. */
    export const inboundSchema = GetEdgeConfigTransfer$inboundSchema;
    /** @deprecated use `GetEdgeConfigTransfer$outboundSchema` instead. */
    export const outboundSchema = GetEdgeConfigTransfer$outboundSchema;
    /** @deprecated use `GetEdgeConfigTransfer$Outbound` instead. */
    export type Outbound = GetEdgeConfigTransfer$Outbound;
}

/** @internal */
export const GetEdgeConfigSchema$inboundSchema: z.ZodType<
    GetEdgeConfigSchema,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetEdgeConfigSchema$Outbound = {};

/** @internal */
export const GetEdgeConfigSchema$outboundSchema: z.ZodType<
    GetEdgeConfigSchema$Outbound,
    z.ZodTypeDef,
    GetEdgeConfigSchema
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigSchema$ {
    /** @deprecated use `GetEdgeConfigSchema$inboundSchema` instead. */
    export const inboundSchema = GetEdgeConfigSchema$inboundSchema;
    /** @deprecated use `GetEdgeConfigSchema$outboundSchema` instead. */
    export const outboundSchema = GetEdgeConfigSchema$outboundSchema;
    /** @deprecated use `GetEdgeConfigSchema$Outbound` instead. */
    export type Outbound = GetEdgeConfigSchema$Outbound;
}

/** @internal */
export const GetEdgeConfigResponseBody$inboundSchema: z.ZodType<
    GetEdgeConfigResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    id: z.string().optional(),
    slug: z.string().optional(),
    ownerId: z.string().optional(),
    digest: z.string().optional(),
    transfer: z.lazy(() => GetEdgeConfigTransfer$inboundSchema).optional(),
    schema: z.lazy(() => GetEdgeConfigSchema$inboundSchema).optional(),
    sizeInBytes: z.number(),
    itemCount: z.number(),
});

/** @internal */
export type GetEdgeConfigResponseBody$Outbound = {
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    id?: string | undefined;
    slug?: string | undefined;
    ownerId?: string | undefined;
    digest?: string | undefined;
    transfer?: GetEdgeConfigTransfer$Outbound | undefined;
    schema?: GetEdgeConfigSchema$Outbound | undefined;
    sizeInBytes: number;
    itemCount: number;
};

/** @internal */
export const GetEdgeConfigResponseBody$outboundSchema: z.ZodType<
    GetEdgeConfigResponseBody$Outbound,
    z.ZodTypeDef,
    GetEdgeConfigResponseBody
> = z.object({
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    id: z.string().optional(),
    slug: z.string().optional(),
    ownerId: z.string().optional(),
    digest: z.string().optional(),
    transfer: z.lazy(() => GetEdgeConfigTransfer$outboundSchema).optional(),
    schema: z.lazy(() => GetEdgeConfigSchema$outboundSchema).optional(),
    sizeInBytes: z.number(),
    itemCount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigResponseBody$ {
    /** @deprecated use `GetEdgeConfigResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetEdgeConfigResponseBody$inboundSchema;
    /** @deprecated use `GetEdgeConfigResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetEdgeConfigResponseBody$outboundSchema;
    /** @deprecated use `GetEdgeConfigResponseBody$Outbound` instead. */
    export type Outbound = GetEdgeConfigResponseBody$Outbound;
}
