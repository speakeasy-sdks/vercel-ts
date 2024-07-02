/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteConfigurationRequest = {
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

/** @internal */
export namespace DeleteConfigurationRequest$ {
    export const inboundSchema: z.ZodType<DeleteConfigurationRequest, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        });

    export type Outbound = {
        id: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteConfigurationRequest> =
        z.object({
            id: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        });
}
