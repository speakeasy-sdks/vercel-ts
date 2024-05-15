/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export enum Roles {
    Owner = "OWNER",
    Member = "MEMBER",
    Developer = "DEVELOPER",
    Billing = "BILLING",
    Viewer = "VIEWER",
    Contributor = "CONTRIBUTOR",
}

export type Saml = {
    /**
     * Require that members of the team use SAML Single Sign-On.
     */
    enforced?: boolean | undefined;
    roles?: Record<string, Roles> | undefined;
};

/**
 * Whether or not remote caching is enabled for the team
 */
export type RemoteCaching = {
    /**
     * Enable or disable remote caching for the team.
     */
    enabled?: boolean | undefined;
};

export type PatchTeamRequestBody = {
    /**
     * The hash value of an uploaded image.
     */
    avatar?: string | undefined;
    /**
     * A short text that describes the team.
     */
    description?: string | undefined;
    emailDomain?: string | null | undefined;
    /**
     * The name of the team.
     */
    name?: string | undefined;
    /**
     * Suffix that will be used for all preview deployments.
     */
    previewDeploymentSuffix?: string | null | undefined;
    /**
     * Create a new invite code and replace the current one.
     */
    regenerateInviteCode?: boolean | undefined;
    saml?: Saml | undefined;
    /**
     * A new slug for the team.
     */
    slug?: string | undefined;
    /**
     * Enable preview comments: one of on, off or default.
     */
    enablePreviewFeedback?: string | undefined;
    /**
     * Sensitive environment variable policy: one of on, off or default.
     */
    sensitiveEnvironmentVariablePolicy?: string | undefined;
    /**
     * Whether or not remote caching is enabled for the team
     */
    remoteCaching?: RemoteCaching | undefined;
    /**
     * Display or hide IP addresses in Monitoring queries.
     */
    hideIpAddresses?: boolean | undefined;
};

export type PatchTeamRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId: string;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: PatchTeamRequestBody | undefined;
};

export type PatchTeamResponse = {
    httpMeta: components.HTTPMetadata;
    team?: components.Team | undefined;
};

/** @internal */
export namespace Roles$ {
    export const inboundSchema = z.nativeEnum(Roles);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Saml$ {
    export const inboundSchema: z.ZodType<Saml, z.ZodTypeDef, unknown> = z
        .object({
            enforced: z.boolean().optional(),
            roles: z.record(Roles$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.enforced === undefined ? null : { enforced: v.enforced }),
                ...(v.roles === undefined ? null : { roles: v.roles }),
            };
        });

    export type Outbound = {
        enforced?: boolean | undefined;
        roles?: Record<string, string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Saml> = z
        .object({
            enforced: z.boolean().optional(),
            roles: z.record(Roles$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.enforced === undefined ? null : { enforced: v.enforced }),
                ...(v.roles === undefined ? null : { roles: v.roles }),
            };
        });
}

/** @internal */
export namespace RemoteCaching$ {
    export const inboundSchema: z.ZodType<RemoteCaching, z.ZodTypeDef, unknown> = z
        .object({
            enabled: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.enabled === undefined ? null : { enabled: v.enabled }),
            };
        });

    export type Outbound = {
        enabled?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoteCaching> = z
        .object({
            enabled: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.enabled === undefined ? null : { enabled: v.enabled }),
            };
        });
}

/** @internal */
export namespace PatchTeamRequestBody$ {
    export const inboundSchema: z.ZodType<PatchTeamRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            avatar: z.string().optional(),
            description: z.string().optional(),
            emailDomain: z.nullable(z.string()).optional(),
            name: z.string().optional(),
            previewDeploymentSuffix: z.nullable(z.string()).optional(),
            regenerateInviteCode: z.boolean().optional(),
            saml: z.lazy(() => Saml$.inboundSchema).optional(),
            slug: z.string().optional(),
            enablePreviewFeedback: z.string().optional(),
            sensitiveEnvironmentVariablePolicy: z.string().optional(),
            remoteCaching: z.lazy(() => RemoteCaching$.inboundSchema).optional(),
            hideIpAddresses: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.avatar === undefined ? null : { avatar: v.avatar }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.emailDomain === undefined ? null : { emailDomain: v.emailDomain }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.previewDeploymentSuffix === undefined
                    ? null
                    : { previewDeploymentSuffix: v.previewDeploymentSuffix }),
                ...(v.regenerateInviteCode === undefined
                    ? null
                    : { regenerateInviteCode: v.regenerateInviteCode }),
                ...(v.saml === undefined ? null : { saml: v.saml }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.enablePreviewFeedback === undefined
                    ? null
                    : { enablePreviewFeedback: v.enablePreviewFeedback }),
                ...(v.sensitiveEnvironmentVariablePolicy === undefined
                    ? null
                    : { sensitiveEnvironmentVariablePolicy: v.sensitiveEnvironmentVariablePolicy }),
                ...(v.remoteCaching === undefined ? null : { remoteCaching: v.remoteCaching }),
                ...(v.hideIpAddresses === undefined
                    ? null
                    : { hideIpAddresses: v.hideIpAddresses }),
            };
        });

    export type Outbound = {
        avatar?: string | undefined;
        description?: string | undefined;
        emailDomain?: string | null | undefined;
        name?: string | undefined;
        previewDeploymentSuffix?: string | null | undefined;
        regenerateInviteCode?: boolean | undefined;
        saml?: Saml$.Outbound | undefined;
        slug?: string | undefined;
        enablePreviewFeedback?: string | undefined;
        sensitiveEnvironmentVariablePolicy?: string | undefined;
        remoteCaching?: RemoteCaching$.Outbound | undefined;
        hideIpAddresses?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchTeamRequestBody> = z
        .object({
            avatar: z.string().optional(),
            description: z.string().optional(),
            emailDomain: z.nullable(z.string()).optional(),
            name: z.string().optional(),
            previewDeploymentSuffix: z.nullable(z.string()).optional(),
            regenerateInviteCode: z.boolean().optional(),
            saml: z.lazy(() => Saml$.outboundSchema).optional(),
            slug: z.string().optional(),
            enablePreviewFeedback: z.string().optional(),
            sensitiveEnvironmentVariablePolicy: z.string().optional(),
            remoteCaching: z.lazy(() => RemoteCaching$.outboundSchema).optional(),
            hideIpAddresses: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.avatar === undefined ? null : { avatar: v.avatar }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.emailDomain === undefined ? null : { emailDomain: v.emailDomain }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.previewDeploymentSuffix === undefined
                    ? null
                    : { previewDeploymentSuffix: v.previewDeploymentSuffix }),
                ...(v.regenerateInviteCode === undefined
                    ? null
                    : { regenerateInviteCode: v.regenerateInviteCode }),
                ...(v.saml === undefined ? null : { saml: v.saml }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.enablePreviewFeedback === undefined
                    ? null
                    : { enablePreviewFeedback: v.enablePreviewFeedback }),
                ...(v.sensitiveEnvironmentVariablePolicy === undefined
                    ? null
                    : { sensitiveEnvironmentVariablePolicy: v.sensitiveEnvironmentVariablePolicy }),
                ...(v.remoteCaching === undefined ? null : { remoteCaching: v.remoteCaching }),
                ...(v.hideIpAddresses === undefined
                    ? null
                    : { hideIpAddresses: v.hideIpAddresses }),
            };
        });
}

/** @internal */
export namespace PatchTeamRequest$ {
    export const inboundSchema: z.ZodType<PatchTeamRequest, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => PatchTeamRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        teamId: string;
        slug?: string | undefined;
        RequestBody?: PatchTeamRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchTeamRequest> = z
        .object({
            teamId: z.string(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => PatchTeamRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace PatchTeamResponse$ {
    export const inboundSchema: z.ZodType<PatchTeamResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Team: components.Team$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Team === undefined ? null : { team: v.Team }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Team?: components.Team$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchTeamResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            team: components.Team$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.team === undefined ? null : { Team: v.team }),
            };
        });
}
