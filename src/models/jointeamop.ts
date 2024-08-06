/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
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
export const JoinTeamRequestBody$inboundSchema: z.ZodType<
    JoinTeamRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    inviteCode: z.string().optional(),
});

/** @internal */
export type JoinTeamRequestBody$Outbound = {
    inviteCode?: string | undefined;
};

/** @internal */
export const JoinTeamRequestBody$outboundSchema: z.ZodType<
    JoinTeamRequestBody$Outbound,
    z.ZodTypeDef,
    JoinTeamRequestBody
> = z.object({
    inviteCode: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JoinTeamRequestBody$ {
    /** @deprecated use `JoinTeamRequestBody$inboundSchema` instead. */
    export const inboundSchema = JoinTeamRequestBody$inboundSchema;
    /** @deprecated use `JoinTeamRequestBody$outboundSchema` instead. */
    export const outboundSchema = JoinTeamRequestBody$outboundSchema;
    /** @deprecated use `JoinTeamRequestBody$Outbound` instead. */
    export type Outbound = JoinTeamRequestBody$Outbound;
}

/** @internal */
export const JoinTeamRequest$inboundSchema: z.ZodType<JoinTeamRequest, z.ZodTypeDef, unknown> = z
    .object({
        teamId: z.string(),
        RequestBody: z.lazy(() => JoinTeamRequestBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type JoinTeamRequest$Outbound = {
    teamId: string;
    RequestBody?: JoinTeamRequestBody$Outbound | undefined;
};

/** @internal */
export const JoinTeamRequest$outboundSchema: z.ZodType<
    JoinTeamRequest$Outbound,
    z.ZodTypeDef,
    JoinTeamRequest
> = z
    .object({
        teamId: z.string(),
        requestBody: z.lazy(() => JoinTeamRequestBody$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JoinTeamRequest$ {
    /** @deprecated use `JoinTeamRequest$inboundSchema` instead. */
    export const inboundSchema = JoinTeamRequest$inboundSchema;
    /** @deprecated use `JoinTeamRequest$outboundSchema` instead. */
    export const outboundSchema = JoinTeamRequest$outboundSchema;
    /** @deprecated use `JoinTeamRequest$Outbound` instead. */
    export type Outbound = JoinTeamRequest$Outbound;
}

/** @internal */
export const JoinTeamResponseBody$inboundSchema: z.ZodType<
    JoinTeamResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    teamId: z.string(),
    slug: z.string(),
    name: z.string(),
    from: z.string(),
});

/** @internal */
export type JoinTeamResponseBody$Outbound = {
    teamId: string;
    slug: string;
    name: string;
    from: string;
};

/** @internal */
export const JoinTeamResponseBody$outboundSchema: z.ZodType<
    JoinTeamResponseBody$Outbound,
    z.ZodTypeDef,
    JoinTeamResponseBody
> = z.object({
    teamId: z.string(),
    slug: z.string(),
    name: z.string(),
    from: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JoinTeamResponseBody$ {
    /** @deprecated use `JoinTeamResponseBody$inboundSchema` instead. */
    export const inboundSchema = JoinTeamResponseBody$inboundSchema;
    /** @deprecated use `JoinTeamResponseBody$outboundSchema` instead. */
    export const outboundSchema = JoinTeamResponseBody$outboundSchema;
    /** @deprecated use `JoinTeamResponseBody$Outbound` instead. */
    export type Outbound = JoinTeamResponseBody$Outbound;
}
