/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetTeamRequest = {
    teamId: string;
};

/** @internal */
export const GetTeamRequest$inboundSchema: z.ZodType<GetTeamRequest, z.ZodTypeDef, unknown> =
    z.object({
        teamId: z.string(),
    });

/** @internal */
export type GetTeamRequest$Outbound = {
    teamId: string;
};

/** @internal */
export const GetTeamRequest$outboundSchema: z.ZodType<
    GetTeamRequest$Outbound,
    z.ZodTypeDef,
    GetTeamRequest
> = z.object({
    teamId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamRequest$ {
    /** @deprecated use `GetTeamRequest$inboundSchema` instead. */
    export const inboundSchema = GetTeamRequest$inboundSchema;
    /** @deprecated use `GetTeamRequest$outboundSchema` instead. */
    export const outboundSchema = GetTeamRequest$outboundSchema;
    /** @deprecated use `GetTeamRequest$Outbound` instead. */
    export type Outbound = GetTeamRequest$Outbound;
}
