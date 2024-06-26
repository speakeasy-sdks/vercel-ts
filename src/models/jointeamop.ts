/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type JoinTeamRequestBody = {
    /**
     * The invite code to join the team.
     */
    inviteCode?: string | undefined;
};

export type JoinTeamRequest = {
    teamId: string;
    requestBody?: JoinTeamRequestBody | undefined;
};

/**
 * Successfully joined a team.
 */
export type JoinTeamResponseBody = {
    /**
     * The ID of the team the user joined.
     */
    teamId: string;
    /**
     * The slug of the team the user joined.
     */
    slug: string;
    /**
     * The name of the team the user joined.
     */
    name: string;
    /**
     * The origin of how the user joined.
     */
    from: string;
};

/** @internal */
export namespace JoinTeamRequestBody$ {
    export const inboundSchema: z.ZodType<JoinTeamRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            inviteCode: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.inviteCode === undefined ? null : { inviteCode: v.inviteCode }),
            };
        });

    export type Outbound = {
        inviteCode?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JoinTeamRequestBody> = z
        .object({
            inviteCode: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.inviteCode === undefined ? null : { inviteCode: v.inviteCode }),
            };
        });
}

/** @internal */
export namespace JoinTeamRequest$ {
    export const inboundSchema: z.ZodType<JoinTeamRequest, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string(),
            RequestBody: z.lazy(() => JoinTeamRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        teamId: string;
        RequestBody?: JoinTeamRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JoinTeamRequest> = z
        .object({
            teamId: z.string(),
            requestBody: z.lazy(() => JoinTeamRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace JoinTeamResponseBody$ {
    export const inboundSchema: z.ZodType<JoinTeamResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string(),
            slug: z.string(),
            name: z.string(),
            from: z.string(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                slug: v.slug,
                name: v.name,
                from: v.from,
            };
        });

    export type Outbound = {
        teamId: string;
        slug: string;
        name: string;
        from: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JoinTeamResponseBody> = z
        .object({
            teamId: z.string(),
            slug: z.string(),
            name: z.string(),
            from: z.string(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                slug: v.slug,
                name: v.name,
                from: v.from,
            };
        });
}
