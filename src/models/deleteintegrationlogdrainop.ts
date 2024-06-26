/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteIntegrationLogDrainRequest = {
    /**
     * ID of the log drain to be deleted
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

export type DeleteIntegrationLogDrainResponse = {};

/** @internal */
export namespace DeleteIntegrationLogDrainRequest$ {
    export const inboundSchema: z.ZodType<DeleteIntegrationLogDrainRequest, z.ZodTypeDef, unknown> =
        z
            .object({
                id: z.string(),
                teamId: z.string().optional(),
                slug: z.string().optional(),
            })
            .transform((v) => {
                return {
                    id: v.id,
                    ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                    ...(v.slug === undefined ? null : { slug: v.slug }),
                };
            });

    export type Outbound = {
        id: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteIntegrationLogDrainRequest
    > = z
        .object({
            id: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace DeleteIntegrationLogDrainResponse$ {
    export const inboundSchema: z.ZodType<
        DeleteIntegrationLogDrainResponse,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteIntegrationLogDrainResponse
    > = z.object({});
}
