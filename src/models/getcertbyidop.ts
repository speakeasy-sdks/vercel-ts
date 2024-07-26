/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCertByIdRequest = {
    /**
     * The cert id
     */
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export type GetCertByIdResponseBody = {
    id: string;
    createdAt: number;
    expiresAt: number;
    autoRenew: boolean;
    cns: Array<string>;
};

/** @internal */
export const GetCertByIdRequest$inboundSchema: z.ZodType<
    GetCertByIdRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type GetCertByIdRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetCertByIdRequest$outboundSchema: z.ZodType<
    GetCertByIdRequest$Outbound,
    z.ZodTypeDef,
    GetCertByIdRequest
> = z.object({
    id: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCertByIdRequest$ {
    /** @deprecated use `GetCertByIdRequest$inboundSchema` instead. */
    export const inboundSchema = GetCertByIdRequest$inboundSchema;
    /** @deprecated use `GetCertByIdRequest$outboundSchema` instead. */
    export const outboundSchema = GetCertByIdRequest$outboundSchema;
    /** @deprecated use `GetCertByIdRequest$Outbound` instead. */
    export type Outbound = GetCertByIdRequest$Outbound;
}

/** @internal */
export const GetCertByIdResponseBody$inboundSchema: z.ZodType<
    GetCertByIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    createdAt: z.number(),
    expiresAt: z.number(),
    autoRenew: z.boolean(),
    cns: z.array(z.string()),
});

/** @internal */
export type GetCertByIdResponseBody$Outbound = {
    id: string;
    createdAt: number;
    expiresAt: number;
    autoRenew: boolean;
    cns: Array<string>;
};

/** @internal */
export const GetCertByIdResponseBody$outboundSchema: z.ZodType<
    GetCertByIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetCertByIdResponseBody
> = z.object({
    id: z.string(),
    createdAt: z.number(),
    expiresAt: z.number(),
    autoRenew: z.boolean(),
    cns: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCertByIdResponseBody$ {
    /** @deprecated use `GetCertByIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetCertByIdResponseBody$inboundSchema;
    /** @deprecated use `GetCertByIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetCertByIdResponseBody$outboundSchema;
    /** @deprecated use `GetCertByIdResponseBody$Outbound` instead. */
    export type Outbound = GetCertByIdResponseBody$Outbound;
}
