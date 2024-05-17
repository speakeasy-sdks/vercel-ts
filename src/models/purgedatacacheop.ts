/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type PurgeDataCacheRequest = {
    projectIdOrName: string;
};

export type PurgeDataCacheResponse = {};

/** @internal */
export namespace PurgeDataCacheRequest$ {
    export const inboundSchema: z.ZodType<PurgeDataCacheRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectIdOrName: z.string(),
        })
        .transform((v) => {
            return {
                projectIdOrName: v.projectIdOrName,
            };
        });

    export type Outbound = {
        projectIdOrName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PurgeDataCacheRequest> = z
        .object({
            projectIdOrName: z.string(),
        })
        .transform((v) => {
            return {
                projectIdOrName: v.projectIdOrName,
            };
        });
}

/** @internal */
export namespace PurgeDataCacheResponse$ {
    export const inboundSchema: z.ZodType<PurgeDataCacheResponse, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PurgeDataCacheResponse> =
        z.object({});
}
