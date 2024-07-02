/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The EdgeConfig.
 */
export type EdgeConfigToken = {
    token: string;
    label: string;
    /**
     * This is not the token itself, but rather an id to identify the token by
     */
    id: string;
    edgeConfigId: string;
    createdAt: number;
};

/** @internal */
export namespace EdgeConfigToken$ {
    export const inboundSchema: z.ZodType<EdgeConfigToken, z.ZodTypeDef, unknown> = z.object({
        token: z.string(),
        label: z.string(),
        id: z.string(),
        edgeConfigId: z.string(),
        createdAt: z.number(),
    });

    export type Outbound = {
        token: string;
        label: string;
        id: string;
        edgeConfigId: string;
        createdAt: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EdgeConfigToken> = z.object({
        token: z.string(),
        label: z.string(),
        id: z.string(),
        edgeConfigId: z.string(),
        createdAt: z.number(),
    });
}
