/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RemoveTeamMemberRequest = {
    teamId: string;
    /**
     * The user ID of the member.
     */
    uid: string;
    /**
     * The ID of the team to set as the new default team for the Northstar user.
     */
    newDefaultTeamId?: string | undefined;
};

/**
 * Successfully removed a member of the team.
 */
export type RemoveTeamMemberResponseBody = {
    /**
     * ID of the team.
     */
    id: string;
};

/** @internal */
export namespace RemoveTeamMemberRequest$ {
    export const inboundSchema: z.ZodType<RemoveTeamMemberRequest, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string(),
            uid: z.string(),
            newDefaultTeamId: z.string().optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                uid: v.uid,
                ...(v.newDefaultTeamId === undefined
                    ? null
                    : { newDefaultTeamId: v.newDefaultTeamId }),
            };
        });

    export type Outbound = {
        teamId: string;
        uid: string;
        newDefaultTeamId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveTeamMemberRequest> = z
        .object({
            teamId: z.string(),
            uid: z.string(),
            newDefaultTeamId: z.string().optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                uid: v.uid,
                ...(v.newDefaultTeamId === undefined
                    ? null
                    : { newDefaultTeamId: v.newDefaultTeamId }),
            };
        });
}

/** @internal */
export namespace RemoveTeamMemberResponseBody$ {
    export const inboundSchema: z.ZodType<RemoveTeamMemberResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveTeamMemberResponseBody> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}
