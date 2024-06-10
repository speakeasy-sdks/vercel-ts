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
export namespace QueryParamRole$ {
    export const inboundSchema = z.nativeEnum(QueryParamRole);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetTeamMembersRequest$ {
    export const inboundSchema: z.ZodType<GetTeamMembersRequest, z.ZodTypeDef, unknown> = z.object({
        limit: z.number().optional(),
        since: z.number().optional(),
        until: z.number().optional(),
        search: z.string().optional(),
        role: QueryParamRole$.inboundSchema.optional(),
        excludeProject: z.string().optional(),
        eligibleMembersForProjectId: z.string().optional(),
        teamId: z.string(),
    });

    export type Outbound = {
        limit?: number | undefined;
        since?: number | undefined;
        until?: number | undefined;
        search?: string | undefined;
        role?: string | undefined;
        excludeProject?: string | undefined;
        eligibleMembersForProjectId?: string | undefined;
        teamId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamMembersRequest> =
        z.object({
            limit: z.number().optional(),
            since: z.number().optional(),
            until: z.number().optional(),
            search: z.string().optional(),
            role: QueryParamRole$.outboundSchema.optional(),
            excludeProject: z.string().optional(),
            eligibleMembersForProjectId: z.string().optional(),
            teamId: z.string(),
        });
}

/** @internal */
export namespace GetTeamMembersGithub$ {
    export const inboundSchema: z.ZodType<GetTeamMembersGithub, z.ZodTypeDef, unknown> = z.object({
        login: z.string().optional(),
    });

    export type Outbound = {
        login?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamMembersGithub> = z.object(
        {
            login: z.string().optional(),
        }
    );
}

/** @internal */
export namespace GetTeamMembersGitlab$ {
    export const inboundSchema: z.ZodType<GetTeamMembersGitlab, z.ZodTypeDef, unknown> = z.object({
        login: z.string().optional(),
    });

    export type Outbound = {
        login?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamMembersGitlab> = z.object(
        {
            login: z.string().optional(),
        }
    );
}

/** @internal */
export namespace GetTeamMembersBitbucket$ {
    export const inboundSchema: z.ZodType<GetTeamMembersBitbucket, z.ZodTypeDef, unknown> =
        z.object({
            login: z.string().optional(),
        });

    export type Outbound = {
        login?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamMembersBitbucket> =
        z.object({
            login: z.string().optional(),
        });
}

/** @internal */
export namespace GetTeamMembersRole$ {
    export const inboundSchema = z.nativeEnum(GetTeamMembersRole);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetTeamMembersOrigin$ {
    export const inboundSchema = z.nativeEnum(GetTeamMembersOrigin);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetTeamMembersGitUserId$ {
    export const inboundSchema: z.ZodType<GetTeamMembersGitUserId, z.ZodTypeDef, unknown> = z.union(
        [z.string(), z.number()]
    );

    export type Outbound = string | number;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamMembersGitUserId> =
        z.union([z.string(), z.number()]);
}

/** @internal */
export namespace GetTeamMembersJoinedFrom$ {
    export const inboundSchema: z.ZodType<GetTeamMembersJoinedFrom, z.ZodTypeDef, unknown> =
        z.object({
            origin: GetTeamMembersOrigin$.inboundSchema,
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

    export type Outbound = {
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamMembersJoinedFrom> =
        z.object({
            origin: GetTeamMembersOrigin$.outboundSchema,
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
}

/** @internal */
export namespace GetTeamMembersTeamsRole$ {
    export const inboundSchema = z.nativeEnum(GetTeamMembersTeamsRole);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetTeamMembersProjects$ {
    export const inboundSchema: z.ZodType<GetTeamMembersProjects, z.ZodTypeDef, unknown> = z.object(
        {
            name: z.string().optional(),
            id: z.string().optional(),
            role: GetTeamMembersTeamsRole$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        name?: string | undefined;
        id?: string | undefined;
        role?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamMembersProjects> =
        z.object({
            name: z.string().optional(),
            id: z.string().optional(),
            role: GetTeamMembersTeamsRole$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace Members$ {
    export const inboundSchema: z.ZodType<Members, z.ZodTypeDef, unknown> = z.object({
        avatar: z.string().optional(),
        confirmed: z.boolean(),
        email: z.string(),
        github: z.lazy(() => GetTeamMembersGithub$.inboundSchema).optional(),
        gitlab: z.lazy(() => GetTeamMembersGitlab$.inboundSchema).optional(),
        bitbucket: z.lazy(() => GetTeamMembersBitbucket$.inboundSchema).optional(),
        role: GetTeamMembersRole$.inboundSchema,
        uid: z.string(),
        username: z.string(),
        name: z.string().optional(),
        createdAt: z.number(),
        accessRequestedAt: z.number().optional(),
        joinedFrom: z.lazy(() => GetTeamMembersJoinedFrom$.inboundSchema).optional(),
        projects: z.array(z.lazy(() => GetTeamMembersProjects$.inboundSchema)).optional(),
    });

    export type Outbound = {
        avatar?: string | undefined;
        confirmed: boolean;
        email: string;
        github?: GetTeamMembersGithub$.Outbound | undefined;
        gitlab?: GetTeamMembersGitlab$.Outbound | undefined;
        bitbucket?: GetTeamMembersBitbucket$.Outbound | undefined;
        role: string;
        uid: string;
        username: string;
        name?: string | undefined;
        createdAt: number;
        accessRequestedAt?: number | undefined;
        joinedFrom?: GetTeamMembersJoinedFrom$.Outbound | undefined;
        projects?: Array<GetTeamMembersProjects$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Members> = z.object({
        avatar: z.string().optional(),
        confirmed: z.boolean(),
        email: z.string(),
        github: z.lazy(() => GetTeamMembersGithub$.outboundSchema).optional(),
        gitlab: z.lazy(() => GetTeamMembersGitlab$.outboundSchema).optional(),
        bitbucket: z.lazy(() => GetTeamMembersBitbucket$.outboundSchema).optional(),
        role: GetTeamMembersRole$.outboundSchema,
        uid: z.string(),
        username: z.string(),
        name: z.string().optional(),
        createdAt: z.number(),
        accessRequestedAt: z.number().optional(),
        joinedFrom: z.lazy(() => GetTeamMembersJoinedFrom$.outboundSchema).optional(),
        projects: z.array(z.lazy(() => GetTeamMembersProjects$.outboundSchema)).optional(),
    });
}

/** @internal */
export namespace GetTeamMembersEmailInviteCodesRole$ {
    export const inboundSchema = z.nativeEnum(GetTeamMembersEmailInviteCodesRole);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetTeamMembersEmailInviteCodesProjects$ {
    export const inboundSchema = z.nativeEnum(GetTeamMembersEmailInviteCodesProjects);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace EmailInviteCodes2$ {
    export const inboundSchema: z.ZodType<EmailInviteCodes2, z.ZodTypeDef, unknown> = z.object({
        accessGroups: z.array(z.string()).optional(),
        id: z.string(),
        email: z.string().optional(),
        role: GetTeamMembersEmailInviteCodesRole$.inboundSchema.optional(),
        isDSyncUser: z.boolean(),
        createdAt: z.number().optional(),
        expired: z.boolean().optional(),
        projects: z.record(GetTeamMembersEmailInviteCodesProjects$.inboundSchema).optional(),
    });

    export type Outbound = {
        accessGroups?: Array<string> | undefined;
        id: string;
        email?: string | undefined;
        role?: string | undefined;
        isDSyncUser: boolean;
        createdAt?: number | undefined;
        expired?: boolean | undefined;
        projects?: { [k: string]: string } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmailInviteCodes2> = z.object({
        accessGroups: z.array(z.string()).optional(),
        id: z.string(),
        email: z.string().optional(),
        role: GetTeamMembersEmailInviteCodesRole$.outboundSchema.optional(),
        isDSyncUser: z.boolean(),
        createdAt: z.number().optional(),
        expired: z.boolean().optional(),
        projects: z.record(GetTeamMembersEmailInviteCodesProjects$.outboundSchema).optional(),
    });
}

/** @internal */
export namespace EmailInviteCodesRole$ {
    export const inboundSchema = z.nativeEnum(EmailInviteCodesRole);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace EmailInviteCodesProjects$ {
    export const inboundSchema = z.nativeEnum(EmailInviteCodesProjects);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace EmailInviteCodes1$ {
    export const inboundSchema: z.ZodType<EmailInviteCodes1, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        email: z.string().optional(),
        role: EmailInviteCodesRole$.inboundSchema.optional(),
        isDSyncUser: z.boolean(),
        createdAt: z.number().optional(),
        expired: z.boolean().optional(),
        projects: z.record(EmailInviteCodesProjects$.inboundSchema).optional(),
    });

    export type Outbound = {
        id: string;
        email?: string | undefined;
        role?: string | undefined;
        isDSyncUser: boolean;
        createdAt?: number | undefined;
        expired?: boolean | undefined;
        projects?: { [k: string]: string } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmailInviteCodes1> = z.object({
        id: z.string(),
        email: z.string().optional(),
        role: EmailInviteCodesRole$.outboundSchema.optional(),
        isDSyncUser: z.boolean(),
        createdAt: z.number().optional(),
        expired: z.boolean().optional(),
        projects: z.record(EmailInviteCodesProjects$.outboundSchema).optional(),
    });
}

/** @internal */
export namespace EmailInviteCodes$ {
    export const inboundSchema: z.ZodType<EmailInviteCodes, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => EmailInviteCodes1$.inboundSchema),
        z.lazy(() => EmailInviteCodes2$.inboundSchema),
    ]);

    export type Outbound = EmailInviteCodes1$.Outbound | EmailInviteCodes2$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmailInviteCodes> = z.union([
        z.lazy(() => EmailInviteCodes1$.outboundSchema),
        z.lazy(() => EmailInviteCodes2$.outboundSchema),
    ]);
}

/** @internal */
export namespace GetTeamMembersPagination$ {
    export const inboundSchema: z.ZodType<GetTeamMembersPagination, z.ZodTypeDef, unknown> =
        z.object({
            hasNext: z.boolean(),
            count: z.number(),
            next: z.nullable(z.number()),
            prev: z.nullable(z.number()),
        });

    export type Outbound = {
        hasNext: boolean;
        count: number;
        next: number | null;
        prev: number | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamMembersPagination> =
        z.object({
            hasNext: z.boolean(),
            count: z.number(),
            next: z.nullable(z.number()),
            prev: z.nullable(z.number()),
        });
}

/** @internal */
export namespace GetTeamMembersResponseBody$ {
    export const inboundSchema: z.ZodType<GetTeamMembersResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            members: z.array(z.lazy(() => Members$.inboundSchema)),
            emailInviteCodes: z
                .array(
                    z.union([
                        z.lazy(() => EmailInviteCodes1$.inboundSchema),
                        z.lazy(() => EmailInviteCodes2$.inboundSchema),
                    ])
                )
                .optional(),
            pagination: z.lazy(() => GetTeamMembersPagination$.inboundSchema),
        });

    export type Outbound = {
        members: Array<Members$.Outbound>;
        emailInviteCodes?:
            | Array<EmailInviteCodes1$.Outbound | EmailInviteCodes2$.Outbound>
            | undefined;
        pagination: GetTeamMembersPagination$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamMembersResponseBody> =
        z.object({
            members: z.array(z.lazy(() => Members$.outboundSchema)),
            emailInviteCodes: z
                .array(
                    z.union([
                        z.lazy(() => EmailInviteCodes1$.outboundSchema),
                        z.lazy(() => EmailInviteCodes2$.outboundSchema),
                    ])
                )
                .optional(),
            pagination: z.lazy(() => GetTeamMembersPagination$.outboundSchema),
        });
}
