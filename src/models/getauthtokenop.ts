/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AuthToken, AuthToken$ } from "./authtoken";
import * as z from "zod";

export type GetAuthTokenRequest = {
    /**
     * The identifier of the token to retrieve. The special value \"current\" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.
     */
    tokenId: string;
};

/**
 * Successful response.
 */
export type GetAuthTokenResponseBody = {
    /**
     * Authentication token metadata.
     */
    token: AuthToken;
};

/** @internal */
export namespace GetAuthTokenRequest$ {
    export const inboundSchema: z.ZodType<GetAuthTokenRequest, z.ZodTypeDef, unknown> = z
        .object({
            tokenId: z.string(),
        })
        .transform((v) => {
            return {
                tokenId: v.tokenId,
            };
        });

    export type Outbound = {
        tokenId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAuthTokenRequest> = z
        .object({
            tokenId: z.string(),
        })
        .transform((v) => {
            return {
                tokenId: v.tokenId,
            };
        });
}

/** @internal */
export namespace GetAuthTokenResponseBody$ {
    export const inboundSchema: z.ZodType<GetAuthTokenResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            token: AuthToken$.inboundSchema,
        })
        .transform((v) => {
            return {
                token: v.token,
            };
        });

    export type Outbound = {
        token: AuthToken$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAuthTokenResponseBody> = z
        .object({
            token: AuthToken$.outboundSchema,
        })
        .transform((v) => {
            return {
                token: v.token,
            };
        });
}
