/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The user's version. Will either be unset or `northstar`.
 */
export enum AuthUserLimitedVersion {
    Northstar = "northstar",
}

/**
 * A limited form of data for the currently authenticated User, due to the authentication token missing privileges to read the full User data.
 */
export type AuthUserLimited = {
    /**
     * Property indicating that this User data contains only limited information, due to the authentication token missing privileges to read the full User data. Re-login with email, GitHub, GitLab or Bitbucket in order to upgrade the authentication token with the necessary privileges.
     */
    limited: boolean;
    /**
     * The User's unique identifier.
     */
    id: string;
    /**
     * Email address associated with the User account.
     */
    email: string;
    /**
     * Name associated with the User account, or `null` if none has been provided.
     */
    name: string | null;
    /**
     * Unique username associated with the User account.
     */
    username: string;
    /**
     * SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image.
     */
    avatar: string | null;
    /**
     * The user's default team. Only applies if the user's `version` is `'northstar'`.
     */
    defaultTeamId: string | null;
    /**
     * The user's version. Will either be unset or `northstar`.
     */
    version: AuthUserLimitedVersion | null;
};

/** @internal */
export namespace AuthUserLimitedVersion$ {
    export const inboundSchema = z.nativeEnum(AuthUserLimitedVersion);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AuthUserLimited$ {
    export const inboundSchema: z.ZodType<AuthUserLimited, z.ZodTypeDef, unknown> = z
        .object({
            limited: z.boolean(),
            id: z.string(),
            email: z.string(),
            name: z.nullable(z.string()),
            username: z.string(),
            avatar: z.nullable(z.string()),
            defaultTeamId: z.nullable(z.string()),
            version: z.nullable(AuthUserLimitedVersion$.inboundSchema),
        })
        .transform((v) => {
            return {
                limited: v.limited,
                id: v.id,
                email: v.email,
                name: v.name,
                username: v.username,
                avatar: v.avatar,
                defaultTeamId: v.defaultTeamId,
                version: v.version,
            };
        });

    export type Outbound = {
        limited: boolean;
        id: string;
        email: string;
        name: string | null;
        username: string;
        avatar: string | null;
        defaultTeamId: string | null;
        version: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthUserLimited> = z
        .object({
            limited: z.boolean(),
            id: z.string(),
            email: z.string(),
            name: z.nullable(z.string()),
            username: z.string(),
            avatar: z.nullable(z.string()),
            defaultTeamId: z.nullable(z.string()),
            version: z.nullable(AuthUserLimitedVersion$.outboundSchema),
        })
        .transform((v) => {
            return {
                limited: v.limited,
                id: v.id,
                email: v.email,
                name: v.name,
                username: v.username,
                avatar: v.avatar,
                defaultTeamId: v.defaultTeamId,
                version: v.version,
            };
        });
}