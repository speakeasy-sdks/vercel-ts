/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetTeamRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId: string;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

/** @internal */
export namespace GetTeamRequest$ {
    export const inboundSchema: z.ZodType<GetTeamRequest, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        teamId: string;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamRequest> = z
        .object({
            teamId: z.string(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}