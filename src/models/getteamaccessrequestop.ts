/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetTeamAccessRequestRequest = {
    teamId: string;
    userId: string;
};

export enum GetTeamAccessRequestOrigin {
    Mail = "mail",
    Link = "link",
    Import = "import",
    Teams = "teams",
    Github = "github",
    Gitlab = "gitlab",
    Bitbucket = "bitbucket",
    Saml = "saml",
    Dsync = "dsync",
    Feedback = "feedback",
    OrganizationTeams = "organization-teams",
}

export type GetTeamAccessRequestGitUserId = string | number;

/**
 * A map that describes the origin from where the user joined.
 */
export type GetTeamAccessRequestJoinedFrom = {
    origin: GetTeamAccessRequestOrigin;
    commitId?: string | undefined;
    repoId?: string | undefined;
    repoPath?: string | undefined;
    gitUserId?: string | number | undefined;
    gitUserLogin?: string | undefined;
    ssoUserId?: string | undefined;
    ssoConnectedAt?: number | undefined;
    idpUserId?: string | undefined;
    dsyncUserId?: string | undefined;
    dsyncConnectedAt?: number | undefined;
};

/**
 * Map of the connected GitHub account.
 */
export type GetTeamAccessRequestGithub = {
    login?: string | undefined;
};

/**
 * Map of the connected GitLab account.
 */
export type GetTeamAccessRequestGitlab = {
    login?: string | undefined;
};

/**
 * Map of the connected Bitbucket account.
 */
export type GetTeamAccessRequestBitbucket = {
    login?: string | undefined;
};

/**
 * Successfully
 */
export type GetTeamAccessRequestResponseBody = {
    /**
     * The slug of the team.
     */
    teamSlug: string;
    /**
     * The name of the team.
     */
    teamName: string;
    /**
     * Current status of the membership. Will be `true` if confirmed, if pending it'll be `false`.
     */
    confirmed: boolean;
    /**
     * A map that describes the origin from where the user joined.
     */
    joinedFrom: GetTeamAccessRequestJoinedFrom;
    /**
     * Timestamp in milliseconds when the user requested access to the team.
     */
    accessRequestedAt: number;
    /**
     * Map of the connected GitHub account.
     */
    github: GetTeamAccessRequestGithub | null;
    /**
     * Map of the connected GitLab account.
     */
    gitlab: GetTeamAccessRequestGitlab | null;
    /**
     * Map of the connected Bitbucket account.
     */
    bitbucket: GetTeamAccessRequestBitbucket | null;
};

/** @internal */
export const GetTeamAccessRequestRequest$inboundSchema: z.ZodType<
    GetTeamAccessRequestRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    teamId: z.string(),
    userId: z.string(),
});

/** @internal */
export type GetTeamAccessRequestRequest$Outbound = {
    teamId: string;
    userId: string;
};

/** @internal */
export const GetTeamAccessRequestRequest$outboundSchema: z.ZodType<
    GetTeamAccessRequestRequest$Outbound,
    z.ZodTypeDef,
    GetTeamAccessRequestRequest
> = z.object({
    teamId: z.string(),
    userId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamAccessRequestRequest$ {
    /** @deprecated use `GetTeamAccessRequestRequest$inboundSchema` instead. */
    export const inboundSchema = GetTeamAccessRequestRequest$inboundSchema;
    /** @deprecated use `GetTeamAccessRequestRequest$outboundSchema` instead. */
    export const outboundSchema = GetTeamAccessRequestRequest$outboundSchema;
    /** @deprecated use `GetTeamAccessRequestRequest$Outbound` instead. */
    export type Outbound = GetTeamAccessRequestRequest$Outbound;
}

/** @internal */
export const GetTeamAccessRequestOrigin$inboundSchema: z.ZodNativeEnum<
    typeof GetTeamAccessRequestOrigin
> = z.nativeEnum(GetTeamAccessRequestOrigin);

/** @internal */
export const GetTeamAccessRequestOrigin$outboundSchema: z.ZodNativeEnum<
    typeof GetTeamAccessRequestOrigin
> = GetTeamAccessRequestOrigin$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamAccessRequestOrigin$ {
    /** @deprecated use `GetTeamAccessRequestOrigin$inboundSchema` instead. */
    export const inboundSchema = GetTeamAccessRequestOrigin$inboundSchema;
    /** @deprecated use `GetTeamAccessRequestOrigin$outboundSchema` instead. */
    export const outboundSchema = GetTeamAccessRequestOrigin$outboundSchema;
}

/** @internal */
export const GetTeamAccessRequestGitUserId$inboundSchema: z.ZodType<
    GetTeamAccessRequestGitUserId,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type GetTeamAccessRequestGitUserId$Outbound = string | number;

/** @internal */
export const GetTeamAccessRequestGitUserId$outboundSchema: z.ZodType<
    GetTeamAccessRequestGitUserId$Outbound,
    z.ZodTypeDef,
    GetTeamAccessRequestGitUserId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamAccessRequestGitUserId$ {
    /** @deprecated use `GetTeamAccessRequestGitUserId$inboundSchema` instead. */
    export const inboundSchema = GetTeamAccessRequestGitUserId$inboundSchema;
    /** @deprecated use `GetTeamAccessRequestGitUserId$outboundSchema` instead. */
    export const outboundSchema = GetTeamAccessRequestGitUserId$outboundSchema;
    /** @deprecated use `GetTeamAccessRequestGitUserId$Outbound` instead. */
    export type Outbound = GetTeamAccessRequestGitUserId$Outbound;
}

/** @internal */
export const GetTeamAccessRequestJoinedFrom$inboundSchema: z.ZodType<
    GetTeamAccessRequestJoinedFrom,
    z.ZodTypeDef,
    unknown
> = z.object({
    origin: GetTeamAccessRequestOrigin$inboundSchema,
    commitId: z.string().optional(),
    repoId: z.string().optional(),
    repoPath: z.string().optional(),
    gitUserId: z.union([z.string(), z.number()]).optional(),
    gitUserLogin: z.string().optional(),
    ssoUserId: z.string().optional(),
    ssoConnectedAt: z.number().optional(),
    idpUserId: z.string().optional(),
    dsyncUserId: z.string().optional(),
    dsyncConnectedAt: z.number().optional(),
});

/** @internal */
export type GetTeamAccessRequestJoinedFrom$Outbound = {
    origin: string;
    commitId?: string | undefined;
    repoId?: string | undefined;
    repoPath?: string | undefined;
    gitUserId?: string | number | undefined;
    gitUserLogin?: string | undefined;
    ssoUserId?: string | undefined;
    ssoConnectedAt?: number | undefined;
    idpUserId?: string | undefined;
    dsyncUserId?: string | undefined;
    dsyncConnectedAt?: number | undefined;
};

/** @internal */
export const GetTeamAccessRequestJoinedFrom$outboundSchema: z.ZodType<
    GetTeamAccessRequestJoinedFrom$Outbound,
    z.ZodTypeDef,
    GetTeamAccessRequestJoinedFrom
> = z.object({
    origin: GetTeamAccessRequestOrigin$outboundSchema,
    commitId: z.string().optional(),
    repoId: z.string().optional(),
    repoPath: z.string().optional(),
    gitUserId: z.union([z.string(), z.number()]).optional(),
    gitUserLogin: z.string().optional(),
    ssoUserId: z.string().optional(),
    ssoConnectedAt: z.number().optional(),
    idpUserId: z.string().optional(),
    dsyncUserId: z.string().optional(),
    dsyncConnectedAt: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamAccessRequestJoinedFrom$ {
    /** @deprecated use `GetTeamAccessRequestJoinedFrom$inboundSchema` instead. */
    export const inboundSchema = GetTeamAccessRequestJoinedFrom$inboundSchema;
    /** @deprecated use `GetTeamAccessRequestJoinedFrom$outboundSchema` instead. */
    export const outboundSchema = GetTeamAccessRequestJoinedFrom$outboundSchema;
    /** @deprecated use `GetTeamAccessRequestJoinedFrom$Outbound` instead. */
    export type Outbound = GetTeamAccessRequestJoinedFrom$Outbound;
}

/** @internal */
export const GetTeamAccessRequestGithub$inboundSchema: z.ZodType<
    GetTeamAccessRequestGithub,
    z.ZodTypeDef,
    unknown
> = z.object({
    login: z.string().optional(),
});

/** @internal */
export type GetTeamAccessRequestGithub$Outbound = {
    login?: string | undefined;
};

/** @internal */
export const GetTeamAccessRequestGithub$outboundSchema: z.ZodType<
    GetTeamAccessRequestGithub$Outbound,
    z.ZodTypeDef,
    GetTeamAccessRequestGithub
> = z.object({
    login: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamAccessRequestGithub$ {
    /** @deprecated use `GetTeamAccessRequestGithub$inboundSchema` instead. */
    export const inboundSchema = GetTeamAccessRequestGithub$inboundSchema;
    /** @deprecated use `GetTeamAccessRequestGithub$outboundSchema` instead. */
    export const outboundSchema = GetTeamAccessRequestGithub$outboundSchema;
    /** @deprecated use `GetTeamAccessRequestGithub$Outbound` instead. */
    export type Outbound = GetTeamAccessRequestGithub$Outbound;
}

/** @internal */
export const GetTeamAccessRequestGitlab$inboundSchema: z.ZodType<
    GetTeamAccessRequestGitlab,
    z.ZodTypeDef,
    unknown
> = z.object({
    login: z.string().optional(),
});

/** @internal */
export type GetTeamAccessRequestGitlab$Outbound = {
    login?: string | undefined;
};

/** @internal */
export const GetTeamAccessRequestGitlab$outboundSchema: z.ZodType<
    GetTeamAccessRequestGitlab$Outbound,
    z.ZodTypeDef,
    GetTeamAccessRequestGitlab
> = z.object({
    login: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamAccessRequestGitlab$ {
    /** @deprecated use `GetTeamAccessRequestGitlab$inboundSchema` instead. */
    export const inboundSchema = GetTeamAccessRequestGitlab$inboundSchema;
    /** @deprecated use `GetTeamAccessRequestGitlab$outboundSchema` instead. */
    export const outboundSchema = GetTeamAccessRequestGitlab$outboundSchema;
    /** @deprecated use `GetTeamAccessRequestGitlab$Outbound` instead. */
    export type Outbound = GetTeamAccessRequestGitlab$Outbound;
}

/** @internal */
export const GetTeamAccessRequestBitbucket$inboundSchema: z.ZodType<
    GetTeamAccessRequestBitbucket,
    z.ZodTypeDef,
    unknown
> = z.object({
    login: z.string().optional(),
});

/** @internal */
export type GetTeamAccessRequestBitbucket$Outbound = {
    login?: string | undefined;
};

/** @internal */
export const GetTeamAccessRequestBitbucket$outboundSchema: z.ZodType<
    GetTeamAccessRequestBitbucket$Outbound,
    z.ZodTypeDef,
    GetTeamAccessRequestBitbucket
> = z.object({
    login: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamAccessRequestBitbucket$ {
    /** @deprecated use `GetTeamAccessRequestBitbucket$inboundSchema` instead. */
    export const inboundSchema = GetTeamAccessRequestBitbucket$inboundSchema;
    /** @deprecated use `GetTeamAccessRequestBitbucket$outboundSchema` instead. */
    export const outboundSchema = GetTeamAccessRequestBitbucket$outboundSchema;
    /** @deprecated use `GetTeamAccessRequestBitbucket$Outbound` instead. */
    export type Outbound = GetTeamAccessRequestBitbucket$Outbound;
}

/** @internal */
export const GetTeamAccessRequestResponseBody$inboundSchema: z.ZodType<
    GetTeamAccessRequestResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    teamSlug: z.string(),
    teamName: z.string(),
    confirmed: z.boolean(),
    joinedFrom: z.lazy(() => GetTeamAccessRequestJoinedFrom$inboundSchema),
    accessRequestedAt: z.number(),
    github: z.nullable(z.lazy(() => GetTeamAccessRequestGithub$inboundSchema)),
    gitlab: z.nullable(z.lazy(() => GetTeamAccessRequestGitlab$inboundSchema)),
    bitbucket: z.nullable(z.lazy(() => GetTeamAccessRequestBitbucket$inboundSchema)),
});

/** @internal */
export type GetTeamAccessRequestResponseBody$Outbound = {
    teamSlug: string;
    teamName: string;
    confirmed: boolean;
    joinedFrom: GetTeamAccessRequestJoinedFrom$Outbound;
    accessRequestedAt: number;
    github: GetTeamAccessRequestGithub$Outbound | null;
    gitlab: GetTeamAccessRequestGitlab$Outbound | null;
    bitbucket: GetTeamAccessRequestBitbucket$Outbound | null;
};

/** @internal */
export const GetTeamAccessRequestResponseBody$outboundSchema: z.ZodType<
    GetTeamAccessRequestResponseBody$Outbound,
    z.ZodTypeDef,
    GetTeamAccessRequestResponseBody
> = z.object({
    teamSlug: z.string(),
    teamName: z.string(),
    confirmed: z.boolean(),
    joinedFrom: z.lazy(() => GetTeamAccessRequestJoinedFrom$outboundSchema),
    accessRequestedAt: z.number(),
    github: z.nullable(z.lazy(() => GetTeamAccessRequestGithub$outboundSchema)),
    gitlab: z.nullable(z.lazy(() => GetTeamAccessRequestGitlab$outboundSchema)),
    bitbucket: z.nullable(z.lazy(() => GetTeamAccessRequestBitbucket$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamAccessRequestResponseBody$ {
    /** @deprecated use `GetTeamAccessRequestResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetTeamAccessRequestResponseBody$inboundSchema;
    /** @deprecated use `GetTeamAccessRequestResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetTeamAccessRequestResponseBody$outboundSchema;
    /** @deprecated use `GetTeamAccessRequestResponseBody$Outbound` instead. */
    export type Outbound = GetTeamAccessRequestResponseBody$Outbound;
}
