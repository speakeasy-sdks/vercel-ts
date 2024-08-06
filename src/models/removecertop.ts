/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RemoveCertRequest = {
    /**
     * The cert id to remove
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

export type RemoveCertResponseBody = {};

/** @internal */
export const RemoveCertRequest$inboundSchema: z.ZodType<RemoveCertRequest, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });

/** @internal */
export type RemoveCertRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const RemoveCertRequest$outboundSchema: z.ZodType<
    RemoveCertRequest$Outbound,
    z.ZodTypeDef,
    RemoveCertRequest
> = z.object({
    id: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveCertRequest$ {
    /** @deprecated use `RemoveCertRequest$inboundSchema` instead. */
    export const inboundSchema = RemoveCertRequest$inboundSchema;
    /** @deprecated use `RemoveCertRequest$outboundSchema` instead. */
    export const outboundSchema = RemoveCertRequest$outboundSchema;
    /** @deprecated use `RemoveCertRequest$Outbound` instead. */
    export type Outbound = RemoveCertRequest$Outbound;
}

/** @internal */
export const RemoveCertResponseBody$inboundSchema: z.ZodType<
    RemoveCertResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type RemoveCertResponseBody$Outbound = {};

/** @internal */
export const RemoveCertResponseBody$outboundSchema: z.ZodType<
    RemoveCertResponseBody$Outbound,
    z.ZodTypeDef,
    RemoveCertResponseBody
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoveCertResponseBody$ {
    /** @deprecated use `RemoveCertResponseBody$inboundSchema` instead. */
    export const inboundSchema = RemoveCertResponseBody$inboundSchema;
    /** @deprecated use `RemoveCertResponseBody$outboundSchema` instead. */
    export const outboundSchema = RemoveCertResponseBody$outboundSchema;
    /** @deprecated use `RemoveCertResponseBody$Outbound` instead. */
    export type Outbound = RemoveCertResponseBody$Outbound;
}
