/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Only return members with the specified team role.
 */
export enum QueryParamRole {
    Owner = "OWNER",
    Member = "MEMBER",
    Developer = "DEVELOPER",
    Viewer = "VIEWER",
    Billing = "BILLING",
    Contributor = "CONTRIBUTOR",
}

export type GetTeamMembersRequest = {
    /**
     * Limit how many teams should be returned
     */
    limit?: number | undefined;
    /**
     * Timestamp in milliseconds to only include members added since then.
     */
    since?: number | undefined;
    /**
     * Timestamp in milliseconds to only include members added until then.
     */
    until?: number | undefined;
    /**
     * Search team members by their name, username, and email.
     */
    search?: string | undefined;
    /**
     * Only return members with the specified team role.
     */
    role?: QueryParamRole | undefined;
    /**
     * Exclude members who belong to the specified project.
     */
    excludeProject?: string | undefined;
    /**
     * Include team members who are eligible to be members of the specified project.
     */
    eligibleMembersForProjectId?: string | undefined;
    teamId: string;
};

/**
 * Information about the GitHub account for this user.
 */
export type GetTeamMembersGithub = {
    login?: string | undefined;
};

/**
 * Information about the GitLab account of this user.
 */
export type GetTeamMembersGitlab = {
    login?: string | undefined;
};

/**
 * Information about the Bitbucket account of this user.
 */
export type GetTeamMembersBitbucket = {
    login?: string | undefined;
};

/**
 * Role of this user in the team.
 */
export enum GetTeamMembersRole {
    Owner = "OWNER",
    Member = "MEMBER",
    Developer = "DEVELOPER",
    Billing = "BILLING",
    Viewer = "VIEWER",
    Contributor = "CONTRIBUTOR",
}

export enum GetTeamMembersOrigin {
    Teams = "teams",
    Link = "link",
    Mail = "mail",
    Import = "import",
    Github = "github",
    Gitlab = "gitlab",
    Bitbucket = "bitbucket",
    Saml = "saml",
    Dsync = "dsync",
    Feedback = "feedback",
    OrganizationTeams = "organization-teams",
}

export type GetTeamMembersGitUserId = string | number;

/**
 * Map with information about the members origin if they joined by requesting access.
 */
export type GetTeamMembersJoinedFrom = {
    origin: GetTeamMembersOrigin;
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

export enum GetTeamMembersTeamsRole {
    Admin = "ADMIN",
    ProjectDeveloper = "PROJECT_DEVELOPER",
    ProjectViewer = "PROJECT_VIEWER",
}

/**
 * Array of project memberships
 */
export type GetTeamMembersProjects = {
    name?: string | undefined;
    id?: string | undefined;
    role?: GetTeamMembersTeamsRole | undefined;
};

export type Members = {
    /**
     * ID of the file for the Avatar of this member.
     */
    avatar?: string | undefined;
    /**
     * Boolean that indicates if this member was confirmed by an owner.
     */
    confirmed: boolean;
    /**
     * The email of this member.
     */
    email: string;
    /**
     * Information about the GitHub account for this user.
     */
    github?: GetTeamMembersGithub | undefined;
    /**
     * Information about the GitLab account of this user.
     */
    gitlab?: GetTeamMembersGitlab | undefined;
    /**
     * Information about the Bitbucket account of this user.
     */
    bitbucket?: GetTeamMembersBitbucket | undefined;
    /**
     * Role of this user in the team.
     */
    role: GetTeamMembersRole;
    /**
     * The ID of this user.
     */
    uid: string;
    /**
     * The unique username of this user.
     */
    username: string;
    /**
     * The name of this user.
     */
    name?: string | undefined;
    /**
     * Timestamp in milliseconds when this member was added.
     */
    createdAt: number;
    /**
     * Timestamp in milliseconds for when this team member was accepted by an owner.
     */
    accessRequestedAt?: number | undefined;
    /**
     * Map with information about the members origin if they joined by requesting access.
     */
    joinedFrom?: GetTeamMembersJoinedFrom | undefined;
    /**
     * Array of project memberships
     */
    projects?: Array<GetTeamMembersProjects> | undefined;
};

export enum GetTeamMembersEmailInviteCodesRole {
    Owner = "OWNER",
    Member = "MEMBER",
    Developer = "DEVELOPER",
    Billing = "BILLING",
    Viewer = "VIEWER",
    Contributor = "CONTRIBUTOR",
}

export enum GetTeamMembersEmailInviteCodesProjects {
    Admin = "ADMIN",
    ProjectDeveloper = "PROJECT_DEVELOPER",
    ProjectViewer = "PROJECT_VIEWER",
}

export type EmailInviteCodes2 = {
    accessGroups?: Array<string> | undefined;
    id: string;
    email?: string | undefined;
    role?: GetTeamMembersEmailInviteCodesRole | undefined;
    isDSyncUser: boolean;
    createdAt?: number | undefined;
    expired?: boolean | undefined;
    projects?: { [k: string]: GetTeamMembersEmailInviteCodesProjects } | undefined;
};

export enum EmailInviteCodesRole {
    Owner = "OWNER",
    Member = "MEMBER",
    Developer = "DEVELOPER",
    Billing = "BILLING",
    Viewer = "VIEWER",
    Contributor = "CONTRIBUTOR",
}

export enum EmailInviteCodesProjects {
    Admin = "ADMIN",
    ProjectDeveloper = "PROJECT_DEVELOPER",
    ProjectViewer = "PROJECT_VIEWER",
}

export type EmailInviteCodes1 = {
    id: string;
    email?: string | undefined;
    role?: EmailInviteCodesRole | undefined;
    isDSyncUser: boolean;
    createdAt?: number | undefined;
    expired?: boolean | undefined;
    projects?: { [k: string]: EmailInviteCodesProjects } | undefined;
};

export type EmailInviteCodes = EmailInviteCodes1 | EmailInviteCodes2;

export type GetTeamMembersPagination = {
    hasNext: boolean;
    /**
     * Amount of items in the current page.
     */
    count: number;
    /**
     * Timestamp that must be used to request the next page.
     */
    next: number | null;
    /**
     * Timestamp that must be used to request the previous page.
     */
    prev: number | null;
};

export type GetTeamMembersResponseBody = {
    members: Array<Members>;
    emailInviteCodes?: Array<EmailInviteCodes1 | EmailInviteCodes2> | undefined;
    pagination: GetTeamMembersPagination;
};

/** @internal */
export const QueryParamRole$inboundSchema: z.ZodNativeEnum<typeof QueryParamRole> =
    z.nativeEnum(QueryParamRole);

/** @internal */
export const QueryParamRole$outboundSchema: z.ZodNativeEnum<typeof QueryParamRole> =
    QueryParamRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamRole$ {
    /** @deprecated use `QueryParamRole$inboundSchema` instead. */
    export const inboundSchema = QueryParamRole$inboundSchema;
    /** @deprecated use `QueryParamRole$outboundSchema` instead. */
    export const outboundSchema = QueryParamRole$outboundSchema;
}

/** @internal */
export const GetTeamMembersRequest$inboundSchema: z.ZodType<
    GetTeamMembersRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    limit: z.number().optional(),
    since: z.number().optional(),
    until: z.number().optional(),
    search: z.string().optional(),
    role: QueryParamRole$inboundSchema.optional(),
    excludeProject: z.string().optional(),
    eligibleMembersForProjectId: z.string().optional(),
    teamId: z.string(),
});

/** @internal */
export type GetTeamMembersRequest$Outbound = {
    limit?: number | undefined;
    since?: number | undefined;
    until?: number | undefined;
    search?: string | undefined;
    role?: string | undefined;
    excludeProject?: string | undefined;
    eligibleMembersForProjectId?: string | undefined;
    teamId: string;
};

/** @internal */
export const GetTeamMembersRequest$outboundSchema: z.ZodType<
    GetTeamMembersRequest$Outbound,
    z.ZodTypeDef,
    GetTeamMembersRequest
> = z.object({
    limit: z.number().optional(),
    since: z.number().optional(),
    until: z.number().optional(),
    search: z.string().optional(),
    role: QueryParamRole$outboundSchema.optional(),
    excludeProject: z.string().optional(),
    eligibleMembersForProjectId: z.string().optional(),
    teamId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersRequest$ {
    /** @deprecated use `GetTeamMembersRequest$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersRequest$inboundSchema;
    /** @deprecated use `GetTeamMembersRequest$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersRequest$outboundSchema;
    /** @deprecated use `GetTeamMembersRequest$Outbound` instead. */
    export type Outbound = GetTeamMembersRequest$Outbound;
}

/** @internal */
export const GetTeamMembersGithub$inboundSchema: z.ZodType<
    GetTeamMembersGithub,
    z.ZodTypeDef,
    unknown
> = z.object({
    login: z.string().optional(),
});

/** @internal */
export type GetTeamMembersGithub$Outbound = {
    login?: string | undefined;
};

/** @internal */
export const GetTeamMembersGithub$outboundSchema: z.ZodType<
    GetTeamMembersGithub$Outbound,
    z.ZodTypeDef,
    GetTeamMembersGithub
> = z.object({
    login: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersGithub$ {
    /** @deprecated use `GetTeamMembersGithub$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersGithub$inboundSchema;
    /** @deprecated use `GetTeamMembersGithub$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersGithub$outboundSchema;
    /** @deprecated use `GetTeamMembersGithub$Outbound` instead. */
    export type Outbound = GetTeamMembersGithub$Outbound;
}

/** @internal */
export const GetTeamMembersGitlab$inboundSchema: z.ZodType<
    GetTeamMembersGitlab,
    z.ZodTypeDef,
    unknown
> = z.object({
    login: z.string().optional(),
});

/** @internal */
export type GetTeamMembersGitlab$Outbound = {
    login?: string | undefined;
};

/** @internal */
export const GetTeamMembersGitlab$outboundSchema: z.ZodType<
    GetTeamMembersGitlab$Outbound,
    z.ZodTypeDef,
    GetTeamMembersGitlab
> = z.object({
    login: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersGitlab$ {
    /** @deprecated use `GetTeamMembersGitlab$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersGitlab$inboundSchema;
    /** @deprecated use `GetTeamMembersGitlab$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersGitlab$outboundSchema;
    /** @deprecated use `GetTeamMembersGitlab$Outbound` instead. */
    export type Outbound = GetTeamMembersGitlab$Outbound;
}

/** @internal */
export const GetTeamMembersBitbucket$inboundSchema: z.ZodType<
    GetTeamMembersBitbucket,
    z.ZodTypeDef,
    unknown
> = z.object({
    login: z.string().optional(),
});

/** @internal */
export type GetTeamMembersBitbucket$Outbound = {
    login?: string | undefined;
};

/** @internal */
export const GetTeamMembersBitbucket$outboundSchema: z.ZodType<
    GetTeamMembersBitbucket$Outbound,
    z.ZodTypeDef,
    GetTeamMembersBitbucket
> = z.object({
    login: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersBitbucket$ {
    /** @deprecated use `GetTeamMembersBitbucket$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersBitbucket$inboundSchema;
    /** @deprecated use `GetTeamMembersBitbucket$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersBitbucket$outboundSchema;
    /** @deprecated use `GetTeamMembersBitbucket$Outbound` instead. */
    export type Outbound = GetTeamMembersBitbucket$Outbound;
}

/** @internal */
export const GetTeamMembersRole$inboundSchema: z.ZodNativeEnum<typeof GetTeamMembersRole> =
    z.nativeEnum(GetTeamMembersRole);

/** @internal */
export const GetTeamMembersRole$outboundSchema: z.ZodNativeEnum<typeof GetTeamMembersRole> =
    GetTeamMembersRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersRole$ {
    /** @deprecated use `GetTeamMembersRole$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersRole$inboundSchema;
    /** @deprecated use `GetTeamMembersRole$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersRole$outboundSchema;
}

/** @internal */
export const GetTeamMembersOrigin$inboundSchema: z.ZodNativeEnum<typeof GetTeamMembersOrigin> =
    z.nativeEnum(GetTeamMembersOrigin);

/** @internal */
export const GetTeamMembersOrigin$outboundSchema: z.ZodNativeEnum<typeof GetTeamMembersOrigin> =
    GetTeamMembersOrigin$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersOrigin$ {
    /** @deprecated use `GetTeamMembersOrigin$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersOrigin$inboundSchema;
    /** @deprecated use `GetTeamMembersOrigin$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersOrigin$outboundSchema;
}

/** @internal */
export const GetTeamMembersGitUserId$inboundSchema: z.ZodType<
    GetTeamMembersGitUserId,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type GetTeamMembersGitUserId$Outbound = string | number;

/** @internal */
export const GetTeamMembersGitUserId$outboundSchema: z.ZodType<
    GetTeamMembersGitUserId$Outbound,
    z.ZodTypeDef,
    GetTeamMembersGitUserId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersGitUserId$ {
    /** @deprecated use `GetTeamMembersGitUserId$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersGitUserId$inboundSchema;
    /** @deprecated use `GetTeamMembersGitUserId$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersGitUserId$outboundSchema;
    /** @deprecated use `GetTeamMembersGitUserId$Outbound` instead. */
    export type Outbound = GetTeamMembersGitUserId$Outbound;
}

/** @internal */
export const GetTeamMembersJoinedFrom$inboundSchema: z.ZodType<
    GetTeamMembersJoinedFrom,
    z.ZodTypeDef,
    unknown
> = z.object({
    origin: GetTeamMembersOrigin$inboundSchema,
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
export type GetTeamMembersJoinedFrom$Outbound = {
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
export const GetTeamMembersJoinedFrom$outboundSchema: z.ZodType<
    GetTeamMembersJoinedFrom$Outbound,
    z.ZodTypeDef,
    GetTeamMembersJoinedFrom
> = z.object({
    origin: GetTeamMembersOrigin$outboundSchema,
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
export namespace GetTeamMembersJoinedFrom$ {
    /** @deprecated use `GetTeamMembersJoinedFrom$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersJoinedFrom$inboundSchema;
    /** @deprecated use `GetTeamMembersJoinedFrom$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersJoinedFrom$outboundSchema;
    /** @deprecated use `GetTeamMembersJoinedFrom$Outbound` instead. */
    export type Outbound = GetTeamMembersJoinedFrom$Outbound;
}

/** @internal */
export const GetTeamMembersTeamsRole$inboundSchema: z.ZodNativeEnum<
    typeof GetTeamMembersTeamsRole
> = z.nativeEnum(GetTeamMembersTeamsRole);

/** @internal */
export const GetTeamMembersTeamsRole$outboundSchema: z.ZodNativeEnum<
    typeof GetTeamMembersTeamsRole
> = GetTeamMembersTeamsRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersTeamsRole$ {
    /** @deprecated use `GetTeamMembersTeamsRole$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersTeamsRole$inboundSchema;
    /** @deprecated use `GetTeamMembersTeamsRole$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersTeamsRole$outboundSchema;
}

/** @internal */
export const GetTeamMembersProjects$inboundSchema: z.ZodType<
    GetTeamMembersProjects,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string().optional(),
    id: z.string().optional(),
    role: GetTeamMembersTeamsRole$inboundSchema.optional(),
});

/** @internal */
export type GetTeamMembersProjects$Outbound = {
    name?: string | undefined;
    id?: string | undefined;
    role?: string | undefined;
};

/** @internal */
export const GetTeamMembersProjects$outboundSchema: z.ZodType<
    GetTeamMembersProjects$Outbound,
    z.ZodTypeDef,
    GetTeamMembersProjects
> = z.object({
    name: z.string().optional(),
    id: z.string().optional(),
    role: GetTeamMembersTeamsRole$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersProjects$ {
    /** @deprecated use `GetTeamMembersProjects$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersProjects$inboundSchema;
    /** @deprecated use `GetTeamMembersProjects$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersProjects$outboundSchema;
    /** @deprecated use `GetTeamMembersProjects$Outbound` instead. */
    export type Outbound = GetTeamMembersProjects$Outbound;
}

/** @internal */
export const Members$inboundSchema: z.ZodType<Members, z.ZodTypeDef, unknown> = z.object({
    avatar: z.string().optional(),
    confirmed: z.boolean(),
    email: z.string(),
    github: z.lazy(() => GetTeamMembersGithub$inboundSchema).optional(),
    gitlab: z.lazy(() => GetTeamMembersGitlab$inboundSchema).optional(),
    bitbucket: z.lazy(() => GetTeamMembersBitbucket$inboundSchema).optional(),
    role: GetTeamMembersRole$inboundSchema,
    uid: z.string(),
    username: z.string(),
    name: z.string().optional(),
    createdAt: z.number(),
    accessRequestedAt: z.number().optional(),
    joinedFrom: z.lazy(() => GetTeamMembersJoinedFrom$inboundSchema).optional(),
    projects: z.array(z.lazy(() => GetTeamMembersProjects$inboundSchema)).optional(),
});

/** @internal */
export type Members$Outbound = {
    avatar?: string | undefined;
    confirmed: boolean;
    email: string;
    github?: GetTeamMembersGithub$Outbound | undefined;
    gitlab?: GetTeamMembersGitlab$Outbound | undefined;
    bitbucket?: GetTeamMembersBitbucket$Outbound | undefined;
    role: string;
    uid: string;
    username: string;
    name?: string | undefined;
    createdAt: number;
    accessRequestedAt?: number | undefined;
    joinedFrom?: GetTeamMembersJoinedFrom$Outbound | undefined;
    projects?: Array<GetTeamMembersProjects$Outbound> | undefined;
};

/** @internal */
export const Members$outboundSchema: z.ZodType<Members$Outbound, z.ZodTypeDef, Members> = z.object({
    avatar: z.string().optional(),
    confirmed: z.boolean(),
    email: z.string(),
    github: z.lazy(() => GetTeamMembersGithub$outboundSchema).optional(),
    gitlab: z.lazy(() => GetTeamMembersGitlab$outboundSchema).optional(),
    bitbucket: z.lazy(() => GetTeamMembersBitbucket$outboundSchema).optional(),
    role: GetTeamMembersRole$outboundSchema,
    uid: z.string(),
    username: z.string(),
    name: z.string().optional(),
    createdAt: z.number(),
    accessRequestedAt: z.number().optional(),
    joinedFrom: z.lazy(() => GetTeamMembersJoinedFrom$outboundSchema).optional(),
    projects: z.array(z.lazy(() => GetTeamMembersProjects$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Members$ {
    /** @deprecated use `Members$inboundSchema` instead. */
    export const inboundSchema = Members$inboundSchema;
    /** @deprecated use `Members$outboundSchema` instead. */
    export const outboundSchema = Members$outboundSchema;
    /** @deprecated use `Members$Outbound` instead. */
    export type Outbound = Members$Outbound;
}

/** @internal */
export const GetTeamMembersEmailInviteCodesRole$inboundSchema: z.ZodNativeEnum<
    typeof GetTeamMembersEmailInviteCodesRole
> = z.nativeEnum(GetTeamMembersEmailInviteCodesRole);

/** @internal */
export const GetTeamMembersEmailInviteCodesRole$outboundSchema: z.ZodNativeEnum<
    typeof GetTeamMembersEmailInviteCodesRole
> = GetTeamMembersEmailInviteCodesRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersEmailInviteCodesRole$ {
    /** @deprecated use `GetTeamMembersEmailInviteCodesRole$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersEmailInviteCodesRole$inboundSchema;
    /** @deprecated use `GetTeamMembersEmailInviteCodesRole$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersEmailInviteCodesRole$outboundSchema;
}

/** @internal */
export const GetTeamMembersEmailInviteCodesProjects$inboundSchema: z.ZodNativeEnum<
    typeof GetTeamMembersEmailInviteCodesProjects
> = z.nativeEnum(GetTeamMembersEmailInviteCodesProjects);

/** @internal */
export const GetTeamMembersEmailInviteCodesProjects$outboundSchema: z.ZodNativeEnum<
    typeof GetTeamMembersEmailInviteCodesProjects
> = GetTeamMembersEmailInviteCodesProjects$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersEmailInviteCodesProjects$ {
    /** @deprecated use `GetTeamMembersEmailInviteCodesProjects$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersEmailInviteCodesProjects$inboundSchema;
    /** @deprecated use `GetTeamMembersEmailInviteCodesProjects$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersEmailInviteCodesProjects$outboundSchema;
}

/** @internal */
export const EmailInviteCodes2$inboundSchema: z.ZodType<EmailInviteCodes2, z.ZodTypeDef, unknown> =
    z.object({
        accessGroups: z.array(z.string()).optional(),
        id: z.string(),
        email: z.string().optional(),
        role: GetTeamMembersEmailInviteCodesRole$inboundSchema.optional(),
        isDSyncUser: z.boolean(),
        createdAt: z.number().optional(),
        expired: z.boolean().optional(),
        projects: z.record(GetTeamMembersEmailInviteCodesProjects$inboundSchema).optional(),
    });

/** @internal */
export type EmailInviteCodes2$Outbound = {
    accessGroups?: Array<string> | undefined;
    id: string;
    email?: string | undefined;
    role?: string | undefined;
    isDSyncUser: boolean;
    createdAt?: number | undefined;
    expired?: boolean | undefined;
    projects?: { [k: string]: string } | undefined;
};

/** @internal */
export const EmailInviteCodes2$outboundSchema: z.ZodType<
    EmailInviteCodes2$Outbound,
    z.ZodTypeDef,
    EmailInviteCodes2
> = z.object({
    accessGroups: z.array(z.string()).optional(),
    id: z.string(),
    email: z.string().optional(),
    role: GetTeamMembersEmailInviteCodesRole$outboundSchema.optional(),
    isDSyncUser: z.boolean(),
    createdAt: z.number().optional(),
    expired: z.boolean().optional(),
    projects: z.record(GetTeamMembersEmailInviteCodesProjects$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailInviteCodes2$ {
    /** @deprecated use `EmailInviteCodes2$inboundSchema` instead. */
    export const inboundSchema = EmailInviteCodes2$inboundSchema;
    /** @deprecated use `EmailInviteCodes2$outboundSchema` instead. */
    export const outboundSchema = EmailInviteCodes2$outboundSchema;
    /** @deprecated use `EmailInviteCodes2$Outbound` instead. */
    export type Outbound = EmailInviteCodes2$Outbound;
}

/** @internal */
export const EmailInviteCodesRole$inboundSchema: z.ZodNativeEnum<typeof EmailInviteCodesRole> =
    z.nativeEnum(EmailInviteCodesRole);

/** @internal */
export const EmailInviteCodesRole$outboundSchema: z.ZodNativeEnum<typeof EmailInviteCodesRole> =
    EmailInviteCodesRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailInviteCodesRole$ {
    /** @deprecated use `EmailInviteCodesRole$inboundSchema` instead. */
    export const inboundSchema = EmailInviteCodesRole$inboundSchema;
    /** @deprecated use `EmailInviteCodesRole$outboundSchema` instead. */
    export const outboundSchema = EmailInviteCodesRole$outboundSchema;
}

/** @internal */
export const EmailInviteCodesProjects$inboundSchema: z.ZodNativeEnum<
    typeof EmailInviteCodesProjects
> = z.nativeEnum(EmailInviteCodesProjects);

/** @internal */
export const EmailInviteCodesProjects$outboundSchema: z.ZodNativeEnum<
    typeof EmailInviteCodesProjects
> = EmailInviteCodesProjects$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailInviteCodesProjects$ {
    /** @deprecated use `EmailInviteCodesProjects$inboundSchema` instead. */
    export const inboundSchema = EmailInviteCodesProjects$inboundSchema;
    /** @deprecated use `EmailInviteCodesProjects$outboundSchema` instead. */
    export const outboundSchema = EmailInviteCodesProjects$outboundSchema;
}

/** @internal */
export const EmailInviteCodes1$inboundSchema: z.ZodType<EmailInviteCodes1, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
        email: z.string().optional(),
        role: EmailInviteCodesRole$inboundSchema.optional(),
        isDSyncUser: z.boolean(),
        createdAt: z.number().optional(),
        expired: z.boolean().optional(),
        projects: z.record(EmailInviteCodesProjects$inboundSchema).optional(),
    });

/** @internal */
export type EmailInviteCodes1$Outbound = {
    id: string;
    email?: string | undefined;
    role?: string | undefined;
    isDSyncUser: boolean;
    createdAt?: number | undefined;
    expired?: boolean | undefined;
    projects?: { [k: string]: string } | undefined;
};

/** @internal */
export const EmailInviteCodes1$outboundSchema: z.ZodType<
    EmailInviteCodes1$Outbound,
    z.ZodTypeDef,
    EmailInviteCodes1
> = z.object({
    id: z.string(),
    email: z.string().optional(),
    role: EmailInviteCodesRole$outboundSchema.optional(),
    isDSyncUser: z.boolean(),
    createdAt: z.number().optional(),
    expired: z.boolean().optional(),
    projects: z.record(EmailInviteCodesProjects$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailInviteCodes1$ {
    /** @deprecated use `EmailInviteCodes1$inboundSchema` instead. */
    export const inboundSchema = EmailInviteCodes1$inboundSchema;
    /** @deprecated use `EmailInviteCodes1$outboundSchema` instead. */
    export const outboundSchema = EmailInviteCodes1$outboundSchema;
    /** @deprecated use `EmailInviteCodes1$Outbound` instead. */
    export type Outbound = EmailInviteCodes1$Outbound;
}

/** @internal */
export const EmailInviteCodes$inboundSchema: z.ZodType<EmailInviteCodes, z.ZodTypeDef, unknown> =
    z.union([
        z.lazy(() => EmailInviteCodes1$inboundSchema),
        z.lazy(() => EmailInviteCodes2$inboundSchema),
    ]);

/** @internal */
export type EmailInviteCodes$Outbound = EmailInviteCodes1$Outbound | EmailInviteCodes2$Outbound;

/** @internal */
export const EmailInviteCodes$outboundSchema: z.ZodType<
    EmailInviteCodes$Outbound,
    z.ZodTypeDef,
    EmailInviteCodes
> = z.union([
    z.lazy(() => EmailInviteCodes1$outboundSchema),
    z.lazy(() => EmailInviteCodes2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailInviteCodes$ {
    /** @deprecated use `EmailInviteCodes$inboundSchema` instead. */
    export const inboundSchema = EmailInviteCodes$inboundSchema;
    /** @deprecated use `EmailInviteCodes$outboundSchema` instead. */
    export const outboundSchema = EmailInviteCodes$outboundSchema;
    /** @deprecated use `EmailInviteCodes$Outbound` instead. */
    export type Outbound = EmailInviteCodes$Outbound;
}

/** @internal */
export const GetTeamMembersPagination$inboundSchema: z.ZodType<
    GetTeamMembersPagination,
    z.ZodTypeDef,
    unknown
> = z.object({
    hasNext: z.boolean(),
    count: z.number(),
    next: z.nullable(z.number()),
    prev: z.nullable(z.number()),
});

/** @internal */
export type GetTeamMembersPagination$Outbound = {
    hasNext: boolean;
    count: number;
    next: number | null;
    prev: number | null;
};

/** @internal */
export const GetTeamMembersPagination$outboundSchema: z.ZodType<
    GetTeamMembersPagination$Outbound,
    z.ZodTypeDef,
    GetTeamMembersPagination
> = z.object({
    hasNext: z.boolean(),
    count: z.number(),
    next: z.nullable(z.number()),
    prev: z.nullable(z.number()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersPagination$ {
    /** @deprecated use `GetTeamMembersPagination$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersPagination$inboundSchema;
    /** @deprecated use `GetTeamMembersPagination$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersPagination$outboundSchema;
    /** @deprecated use `GetTeamMembersPagination$Outbound` instead. */
    export type Outbound = GetTeamMembersPagination$Outbound;
}

/** @internal */
export const GetTeamMembersResponseBody$inboundSchema: z.ZodType<
    GetTeamMembersResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    members: z.array(z.lazy(() => Members$inboundSchema)),
    emailInviteCodes: z
        .array(
            z.union([
                z.lazy(() => EmailInviteCodes1$inboundSchema),
                z.lazy(() => EmailInviteCodes2$inboundSchema),
            ])
        )
        .optional(),
    pagination: z.lazy(() => GetTeamMembersPagination$inboundSchema),
});

/** @internal */
export type GetTeamMembersResponseBody$Outbound = {
    members: Array<Members$Outbound>;
    emailInviteCodes?: Array<EmailInviteCodes1$Outbound | EmailInviteCodes2$Outbound> | undefined;
    pagination: GetTeamMembersPagination$Outbound;
};

/** @internal */
export const GetTeamMembersResponseBody$outboundSchema: z.ZodType<
    GetTeamMembersResponseBody$Outbound,
    z.ZodTypeDef,
    GetTeamMembersResponseBody
> = z.object({
    members: z.array(z.lazy(() => Members$outboundSchema)),
    emailInviteCodes: z
        .array(
            z.union([
                z.lazy(() => EmailInviteCodes1$outboundSchema),
                z.lazy(() => EmailInviteCodes2$outboundSchema),
            ])
        )
        .optional(),
    pagination: z.lazy(() => GetTeamMembersPagination$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTeamMembersResponseBody$ {
    /** @deprecated use `GetTeamMembersResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetTeamMembersResponseBody$inboundSchema;
    /** @deprecated use `GetTeamMembersResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetTeamMembersResponseBody$outboundSchema;
    /** @deprecated use `GetTeamMembersResponseBody$Outbound` instead. */
    export type Outbound = GetTeamMembersResponseBody$Outbound;
}
