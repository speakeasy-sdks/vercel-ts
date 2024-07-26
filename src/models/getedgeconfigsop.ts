/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetEdgeConfigsRequest = {
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
export type Transfer = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};

export type Schema = {};

/**
 * List of all edge configs.
 */
export type GetEdgeConfigsResponseBody = {
    id?: string | undefined;
    createdAt?: number | undefined;
    ownerId?: string | undefined;
    /**
     * Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores).
     */
    slug?: string | undefined;
    updatedAt?: number | undefined;
    digest?: string | undefined;
    /**
     * Keeps track of the current state of the Edge Config while it gets transferred.
     */
    transfer?: Transfer | undefined;
    schema?: Schema | undefined;
    sizeInBytes: number;
    itemCount: number;
};

/** @internal */
export const GetEdgeConfigsRequest$inboundSchema: z.ZodType<
    GetEdgeConfigsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type GetEdgeConfigsRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetEdgeConfigsRequest$outboundSchema: z.ZodType<
    GetEdgeConfigsRequest$Outbound,
    z.ZodTypeDef,
    GetEdgeConfigsRequest
> = z.object({
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigsRequest$ {
    /** @deprecated use `GetEdgeConfigsRequest$inboundSchema` instead. */
    export const inboundSchema = GetEdgeConfigsRequest$inboundSchema;
    /** @deprecated use `GetEdgeConfigsRequest$outboundSchema` instead. */
    export const outboundSchema = GetEdgeConfigsRequest$outboundSchema;
    /** @deprecated use `GetEdgeConfigsRequest$Outbound` instead. */
    export type Outbound = GetEdgeConfigsRequest$Outbound;
}

/** @internal */
export const Transfer$inboundSchema: z.ZodType<Transfer, z.ZodTypeDef, unknown> = z.object({
    fromAccountId: z.string(),
    startedAt: z.number(),
    doneAt: z.nullable(z.number()),
});

/** @internal */
export type Transfer$Outbound = {
    fromAccountId: string;
    startedAt: number;
    doneAt: number | null;
};

/** @internal */
export const Transfer$outboundSchema: z.ZodType<Transfer$Outbound, z.ZodTypeDef, Transfer> =
    z.object({
        fromAccountId: z.string(),
        startedAt: z.number(),
        doneAt: z.nullable(z.number()),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Transfer$ {
    /** @deprecated use `Transfer$inboundSchema` instead. */
    export const inboundSchema = Transfer$inboundSchema;
    /** @deprecated use `Transfer$outboundSchema` instead. */
    export const outboundSchema = Transfer$outboundSchema;
    /** @deprecated use `Transfer$Outbound` instead. */
    export type Outbound = Transfer$Outbound;
}

/** @internal */
export const Schema$inboundSchema: z.ZodType<Schema, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Schema$Outbound = {};

/** @internal */
export const Schema$outboundSchema: z.ZodType<Schema$Outbound, z.ZodTypeDef, Schema> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Schema$ {
    /** @deprecated use `Schema$inboundSchema` instead. */
    export const inboundSchema = Schema$inboundSchema;
    /** @deprecated use `Schema$outboundSchema` instead. */
    export const outboundSchema = Schema$outboundSchema;
    /** @deprecated use `Schema$Outbound` instead. */
    export type Outbound = Schema$Outbound;
}

/** @internal */
export const GetEdgeConfigsResponseBody$inboundSchema: z.ZodType<
    GetEdgeConfigsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string().optional(),
    createdAt: z.number().optional(),
    ownerId: z.string().optional(),
    slug: z.string().optional(),
    updatedAt: z.number().optional(),
    digest: z.string().optional(),
    transfer: z.lazy(() => Transfer$inboundSchema).optional(),
    schema: z.lazy(() => Schema$inboundSchema).optional(),
    sizeInBytes: z.number(),
    itemCount: z.number(),
});

/** @internal */
export type GetEdgeConfigsResponseBody$Outbound = {
    id?: string | undefined;
    createdAt?: number | undefined;
    ownerId?: string | undefined;
    slug?: string | undefined;
    updatedAt?: number | undefined;
    digest?: string | undefined;
    transfer?: Transfer$Outbound | undefined;
    schema?: Schema$Outbound | undefined;
    sizeInBytes: number;
    itemCount: number;
};

/** @internal */
export const GetEdgeConfigsResponseBody$outboundSchema: z.ZodType<
    GetEdgeConfigsResponseBody$Outbound,
    z.ZodTypeDef,
    GetEdgeConfigsResponseBody
> = z.object({
    id: z.string().optional(),
    createdAt: z.number().optional(),
    ownerId: z.string().optional(),
    slug: z.string().optional(),
    updatedAt: z.number().optional(),
    digest: z.string().optional(),
    transfer: z.lazy(() => Transfer$outboundSchema).optional(),
    schema: z.lazy(() => Schema$outboundSchema).optional(),
    sizeInBytes: z.number(),
    itemCount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEdgeConfigsResponseBody$ {
    /** @deprecated use `GetEdgeConfigsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetEdgeConfigsResponseBody$inboundSchema;
    /** @deprecated use `GetEdgeConfigsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetEdgeConfigsResponseBody$outboundSchema;
    /** @deprecated use `GetEdgeConfigsResponseBody$Outbound` instead. */
    export type Outbound = GetEdgeConfigsResponseBody$Outbound;
}
