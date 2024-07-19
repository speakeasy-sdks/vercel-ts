/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteAuthTokenRequest = {
    /**
     * The identifier of the token to invalidate. The special value \"current\" may be supplied, which invalidates the token that the HTTP request was authenticated with.
     */
    tokenId: string;
};

/**
 * Authentication token successfully deleted.
 */
export type DeleteAuthTokenResponseBody = {
    /**
     * The unique identifier of the token that was deleted.
     */
    tokenId: string;
};

/** @internal */
export const DeleteAuthTokenRequest$inboundSchema: z.ZodType<
    DeleteAuthTokenRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    tokenId: z.string(),
});

/** @internal */
export type DeleteAuthTokenRequest$Outbound = {
    tokenId: string;
};

/** @internal */
export const DeleteAuthTokenRequest$outboundSchema: z.ZodType<
    DeleteAuthTokenRequest$Outbound,
    z.ZodTypeDef,
    DeleteAuthTokenRequest
> = z.object({
    tokenId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAuthTokenRequest$ {
    /** @deprecated use `DeleteAuthTokenRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteAuthTokenRequest$inboundSchema;
    /** @deprecated use `DeleteAuthTokenRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteAuthTokenRequest$outboundSchema;
    /** @deprecated use `DeleteAuthTokenRequest$Outbound` instead. */
    export type Outbound = DeleteAuthTokenRequest$Outbound;
}

/** @internal */
export const DeleteAuthTokenResponseBody$inboundSchema: z.ZodType<
    DeleteAuthTokenResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    tokenId: z.string(),
});

/** @internal */
export type DeleteAuthTokenResponseBody$Outbound = {
    tokenId: string;
};

/** @internal */
export const DeleteAuthTokenResponseBody$outboundSchema: z.ZodType<
    DeleteAuthTokenResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteAuthTokenResponseBody
> = z.object({
    tokenId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAuthTokenResponseBody$ {
    /** @deprecated use `DeleteAuthTokenResponseBody$inboundSchema` instead. */
    export const inboundSchema = DeleteAuthTokenResponseBody$inboundSchema;
    /** @deprecated use `DeleteAuthTokenResponseBody$outboundSchema` instead. */
    export const outboundSchema = DeleteAuthTokenResponseBody$outboundSchema;
    /** @deprecated use `DeleteAuthTokenResponseBody$Outbound` instead. */
    export type Outbound = DeleteAuthTokenResponseBody$Outbound;
}
