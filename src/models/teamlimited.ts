/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../types/enums.js";
import * as z from "zod";

/**
 * Information for the SAML Single Sign-On configuration.
 */
export type Connection = {
    /**
     * The Identity Provider "type", for example Okta.
     */
    type: string;
    /**
     * Current status of the connection.
     */
    status: string;
    /**
     * Current state of the connection.
     */
    state: string;
    /**
     * Timestamp (in milliseconds) of when the configuration was connected.
     */
    connectedAt: number;
    /**
     * Timestamp (in milliseconds) of when the last webhook event was received from WorkOS.
     */
    lastReceivedWebhookEvent?: number | undefined;
};

/**
 * Information for the SAML Single Sign-On configuration.
 */
export type Directory = {
    /**
     * The Identity Provider "type", for example Okta.
     */
    type: string;
    /**
     * Current status of the connection.
     */
    status: string;
    /**
     * Current state of the connection.
     */
    state: string;
    /**
     * Timestamp (in milliseconds) of when the configuration was connected.
     */
    connectedAt: number;
    /**
     * Timestamp (in milliseconds) of when the last webhook event was received from WorkOS.
     */
    lastReceivedWebhookEvent?: number | undefined;
};

/**
 * When "Single Sign-On (SAML)" is configured, this object contains information that allows the client-side to identify whether or not this Team has SAML enforced.
 */
export type Saml = {
    /**
     * Information for the SAML Single Sign-On configuration.
     */
    connection?: Connection | undefined;
    /**
     * Information for the SAML Single Sign-On configuration.
     */
    directory?: Directory | undefined;
    /**
     * When `true`, interactions with the Team **must** be done with an authentication token that has been authenticated with the Team's SAML Single Sign-On provider.
     */
    enforced: boolean;
};

export const MembershipRole = {
    Owner: "OWNER",
    Member: "MEMBER",
    Developer: "DEVELOPER",
    Billing: "BILLING",
    Viewer: "VIEWER",
    Contributor: "CONTRIBUTOR",
} as const;
export type MembershipRole = ClosedEnum<typeof MembershipRole>;

export const MembershipOrigin = {
    Link: "link",
    Saml: "saml",
    Mail: "mail",
    Import: "import",
    Teams: "teams",
    Github: "github",
    Gitlab: "gitlab",
    Bitbucket: "bitbucket",
    Dsync: "dsync",
    Feedback: "feedback",
    OrganizationTeams: "organization-teams",
} as const;
export type MembershipOrigin = ClosedEnum<typeof MembershipOrigin>;

export type MembershipGitUserId = string | number;

export type MembershipJoinedFrom = {
    origin: MembershipOrigin;
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
 * The membership of the authenticated User in relation to the Team.
 */
export type Two = {
    confirmed: boolean;
    confirmedAt?: number | undefined;
    accessRequestedAt: number;
    role: MembershipRole;
    teamId?: string | undefined;
    uid: string;
    createdAt: number;
    created: number;
    joinedFrom?: MembershipJoinedFrom | undefined;
};

export const Role = {
    Owner: "OWNER",
    Member: "MEMBER",
    Developer: "DEVELOPER",
    Billing: "BILLING",
    Viewer: "VIEWER",
    Contributor: "CONTRIBUTOR",
} as const;
export type Role = ClosedEnum<typeof Role>;

export const TeamLimitedMembershipOrigin = {
    Link: "link",
    Saml: "saml",
    Mail: "mail",
    Import: "import",
    Teams: "teams",
    Github: "github",
    Gitlab: "gitlab",
    Bitbucket: "bitbucket",
    Dsync: "dsync",
    Feedback: "feedback",
    OrganizationTeams: "organization-teams",
} as const;
export type TeamLimitedMembershipOrigin = ClosedEnum<typeof TeamLimitedMembershipOrigin>;

export type GitUserId = string | number;

export type JoinedFrom = {
    origin: TeamLimitedMembershipOrigin;
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
 * The membership of the authenticated User in relation to the Team.
 */
export type One = {
    confirmed: boolean;
    confirmedAt: number;
    accessRequestedAt?: number | undefined;
    role: Role;
    teamId?: string | undefined;
    uid: string;
    createdAt: number;
    created: number;
    joinedFrom?: JoinedFrom | undefined;
};

export type Membership = One | Two;

/**
 * A limited form of data representing a Team, due to the authentication token missing privileges to read the full Team data.
 */
export type TeamLimited = {
    /**
     * Property indicating that this Team data contains only limited information, due to the authentication token missing privileges to read the full Team data. Re-login with the Team's configured SAML Single Sign-On provider in order to upgrade the authentication token with the necessary privileges.
     */
    limited: boolean;
    /**
     * When "Single Sign-On (SAML)" is configured, this object contains information that allows the client-side to identify whether or not this Team has SAML enforced.
     */
    saml?: Saml | undefined;
    /**
     * The Team's unique identifier.
     */
    id: string;
    /**
     * The Team's slug, which is unique across the Vercel platform.
     */
    slug: string;
    /**
     * Name associated with the Team account, or `null` if none has been provided.
     */
    name: string | null;
    /**
     * The ID of the file used as avatar for this Team.
     */
    avatar: string | null;
    membership: One | Two;
    /**
     * Will remain undocumented. Remove in v3 API.
     */
    created: string;
    /**
     * UNIX timestamp (in milliseconds) when the Team was created.
     */
    createdAt: number;
};

/** @internal */
export const Connection$inboundSchema: z.ZodType<Connection, z.ZodTypeDef, unknown> = z.object({
    type: z.string(),
    status: z.string(),
    state: z.string(),
    connectedAt: z.number(),
    lastReceivedWebhookEvent: z.number().optional(),
});

/** @internal */
export type Connection$Outbound = {
    type: string;
    status: string;
    state: string;
    connectedAt: number;
    lastReceivedWebhookEvent?: number | undefined;
};

/** @internal */
export const Connection$outboundSchema: z.ZodType<Connection$Outbound, z.ZodTypeDef, Connection> =
    z.object({
        type: z.string(),
        status: z.string(),
        state: z.string(),
        connectedAt: z.number(),
        lastReceivedWebhookEvent: z.number().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Connection$ {
    /** @deprecated use `Connection$inboundSchema` instead. */
    export const inboundSchema = Connection$inboundSchema;
    /** @deprecated use `Connection$outboundSchema` instead. */
    export const outboundSchema = Connection$outboundSchema;
    /** @deprecated use `Connection$Outbound` instead. */
    export type Outbound = Connection$Outbound;
}

/** @internal */
export const Directory$inboundSchema: z.ZodType<Directory, z.ZodTypeDef, unknown> = z.object({
    type: z.string(),
    status: z.string(),
    state: z.string(),
    connectedAt: z.number(),
    lastReceivedWebhookEvent: z.number().optional(),
});

/** @internal */
export type Directory$Outbound = {
    type: string;
    status: string;
    state: string;
    connectedAt: number;
    lastReceivedWebhookEvent?: number | undefined;
};

/** @internal */
export const Directory$outboundSchema: z.ZodType<Directory$Outbound, z.ZodTypeDef, Directory> =
    z.object({
        type: z.string(),
        status: z.string(),
        state: z.string(),
        connectedAt: z.number(),
        lastReceivedWebhookEvent: z.number().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Directory$ {
    /** @deprecated use `Directory$inboundSchema` instead. */
    export const inboundSchema = Directory$inboundSchema;
    /** @deprecated use `Directory$outboundSchema` instead. */
    export const outboundSchema = Directory$outboundSchema;
    /** @deprecated use `Directory$Outbound` instead. */
    export type Outbound = Directory$Outbound;
}

/** @internal */
export const Saml$inboundSchema: z.ZodType<Saml, z.ZodTypeDef, unknown> = z.object({
    connection: z.lazy(() => Connection$inboundSchema).optional(),
    directory: z.lazy(() => Directory$inboundSchema).optional(),
    enforced: z.boolean(),
});

/** @internal */
export type Saml$Outbound = {
    connection?: Connection$Outbound | undefined;
    directory?: Directory$Outbound | undefined;
    enforced: boolean;
};

/** @internal */
export const Saml$outboundSchema: z.ZodType<Saml$Outbound, z.ZodTypeDef, Saml> = z.object({
    connection: z.lazy(() => Connection$outboundSchema).optional(),
    directory: z.lazy(() => Directory$outboundSchema).optional(),
    enforced: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Saml$ {
    /** @deprecated use `Saml$inboundSchema` instead. */
    export const inboundSchema = Saml$inboundSchema;
    /** @deprecated use `Saml$outboundSchema` instead. */
    export const outboundSchema = Saml$outboundSchema;
    /** @deprecated use `Saml$Outbound` instead. */
    export type Outbound = Saml$Outbound;
}

/** @internal */
export const MembershipRole$inboundSchema: z.ZodNativeEnum<typeof MembershipRole> =
    z.nativeEnum(MembershipRole);

/** @internal */
export const MembershipRole$outboundSchema: z.ZodNativeEnum<typeof MembershipRole> =
    MembershipRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MembershipRole$ {
    /** @deprecated use `MembershipRole$inboundSchema` instead. */
    export const inboundSchema = MembershipRole$inboundSchema;
    /** @deprecated use `MembershipRole$outboundSchema` instead. */
    export const outboundSchema = MembershipRole$outboundSchema;
}

/** @internal */
export const MembershipOrigin$inboundSchema: z.ZodNativeEnum<typeof MembershipOrigin> =
    z.nativeEnum(MembershipOrigin);

/** @internal */
export const MembershipOrigin$outboundSchema: z.ZodNativeEnum<typeof MembershipOrigin> =
    MembershipOrigin$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MembershipOrigin$ {
    /** @deprecated use `MembershipOrigin$inboundSchema` instead. */
    export const inboundSchema = MembershipOrigin$inboundSchema;
    /** @deprecated use `MembershipOrigin$outboundSchema` instead. */
    export const outboundSchema = MembershipOrigin$outboundSchema;
}

/** @internal */
export const MembershipGitUserId$inboundSchema: z.ZodType<
    MembershipGitUserId,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type MembershipGitUserId$Outbound = string | number;

/** @internal */
export const MembershipGitUserId$outboundSchema: z.ZodType<
    MembershipGitUserId$Outbound,
    z.ZodTypeDef,
    MembershipGitUserId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MembershipGitUserId$ {
    /** @deprecated use `MembershipGitUserId$inboundSchema` instead. */
    export const inboundSchema = MembershipGitUserId$inboundSchema;
    /** @deprecated use `MembershipGitUserId$outboundSchema` instead. */
    export const outboundSchema = MembershipGitUserId$outboundSchema;
    /** @deprecated use `MembershipGitUserId$Outbound` instead. */
    export type Outbound = MembershipGitUserId$Outbound;
}

/** @internal */
export const MembershipJoinedFrom$inboundSchema: z.ZodType<
    MembershipJoinedFrom,
    z.ZodTypeDef,
    unknown
> = z.object({
    origin: MembershipOrigin$inboundSchema,
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
export type MembershipJoinedFrom$Outbound = {
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
export const MembershipJoinedFrom$outboundSchema: z.ZodType<
    MembershipJoinedFrom$Outbound,
    z.ZodTypeDef,
    MembershipJoinedFrom
> = z.object({
    origin: MembershipOrigin$outboundSchema,
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
export namespace MembershipJoinedFrom$ {
    /** @deprecated use `MembershipJoinedFrom$inboundSchema` instead. */
    export const inboundSchema = MembershipJoinedFrom$inboundSchema;
    /** @deprecated use `MembershipJoinedFrom$outboundSchema` instead. */
    export const outboundSchema = MembershipJoinedFrom$outboundSchema;
    /** @deprecated use `MembershipJoinedFrom$Outbound` instead. */
    export type Outbound = MembershipJoinedFrom$Outbound;
}

/** @internal */
export const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z.object({
    confirmed: z.boolean(),
    confirmedAt: z.number().optional(),
    accessRequestedAt: z.number(),
    role: MembershipRole$inboundSchema,
    teamId: z.string().optional(),
    uid: z.string(),
    createdAt: z.number(),
    created: z.number(),
    joinedFrom: z.lazy(() => MembershipJoinedFrom$inboundSchema).optional(),
});

/** @internal */
export type Two$Outbound = {
    confirmed: boolean;
    confirmedAt?: number | undefined;
    accessRequestedAt: number;
    role: string;
    teamId?: string | undefined;
    uid: string;
    createdAt: number;
    created: number;
    joinedFrom?: MembershipJoinedFrom$Outbound | undefined;
};

/** @internal */
export const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two> = z.object({
    confirmed: z.boolean(),
    confirmedAt: z.number().optional(),
    accessRequestedAt: z.number(),
    role: MembershipRole$outboundSchema,
    teamId: z.string().optional(),
    uid: z.string(),
    createdAt: z.number(),
    created: z.number(),
    joinedFrom: z.lazy(() => MembershipJoinedFrom$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
    /** @deprecated use `Two$inboundSchema` instead. */
    export const inboundSchema = Two$inboundSchema;
    /** @deprecated use `Two$outboundSchema` instead. */
    export const outboundSchema = Two$outboundSchema;
    /** @deprecated use `Two$Outbound` instead. */
    export type Outbound = Two$Outbound;
}

/** @internal */
export const Role$inboundSchema: z.ZodNativeEnum<typeof Role> = z.nativeEnum(Role);

/** @internal */
export const Role$outboundSchema: z.ZodNativeEnum<typeof Role> = Role$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Role$ {
    /** @deprecated use `Role$inboundSchema` instead. */
    export const inboundSchema = Role$inboundSchema;
    /** @deprecated use `Role$outboundSchema` instead. */
    export const outboundSchema = Role$outboundSchema;
}

/** @internal */
export const TeamLimitedMembershipOrigin$inboundSchema: z.ZodNativeEnum<
    typeof TeamLimitedMembershipOrigin
> = z.nativeEnum(TeamLimitedMembershipOrigin);

/** @internal */
export const TeamLimitedMembershipOrigin$outboundSchema: z.ZodNativeEnum<
    typeof TeamLimitedMembershipOrigin
> = TeamLimitedMembershipOrigin$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeamLimitedMembershipOrigin$ {
    /** @deprecated use `TeamLimitedMembershipOrigin$inboundSchema` instead. */
    export const inboundSchema = TeamLimitedMembershipOrigin$inboundSchema;
    /** @deprecated use `TeamLimitedMembershipOrigin$outboundSchema` instead. */
    export const outboundSchema = TeamLimitedMembershipOrigin$outboundSchema;
}

/** @internal */
export const GitUserId$inboundSchema: z.ZodType<GitUserId, z.ZodTypeDef, unknown> = z.union([
    z.string(),
    z.number(),
]);

/** @internal */
export type GitUserId$Outbound = string | number;

/** @internal */
export const GitUserId$outboundSchema: z.ZodType<GitUserId$Outbound, z.ZodTypeDef, GitUserId> =
    z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GitUserId$ {
    /** @deprecated use `GitUserId$inboundSchema` instead. */
    export const inboundSchema = GitUserId$inboundSchema;
    /** @deprecated use `GitUserId$outboundSchema` instead. */
    export const outboundSchema = GitUserId$outboundSchema;
    /** @deprecated use `GitUserId$Outbound` instead. */
    export type Outbound = GitUserId$Outbound;
}

/** @internal */
export const JoinedFrom$inboundSchema: z.ZodType<JoinedFrom, z.ZodTypeDef, unknown> = z.object({
    origin: TeamLimitedMembershipOrigin$inboundSchema,
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
export type JoinedFrom$Outbound = {
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
export const JoinedFrom$outboundSchema: z.ZodType<JoinedFrom$Outbound, z.ZodTypeDef, JoinedFrom> =
    z.object({
        origin: TeamLimitedMembershipOrigin$outboundSchema,
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
export namespace JoinedFrom$ {
    /** @deprecated use `JoinedFrom$inboundSchema` instead. */
    export const inboundSchema = JoinedFrom$inboundSchema;
    /** @deprecated use `JoinedFrom$outboundSchema` instead. */
    export const outboundSchema = JoinedFrom$outboundSchema;
    /** @deprecated use `JoinedFrom$Outbound` instead. */
    export type Outbound = JoinedFrom$Outbound;
}

/** @internal */
export const One$inboundSchema: z.ZodType<One, z.ZodTypeDef, unknown> = z.object({
    confirmed: z.boolean(),
    confirmedAt: z.number(),
    accessRequestedAt: z.number().optional(),
    role: Role$inboundSchema,
    teamId: z.string().optional(),
    uid: z.string(),
    createdAt: z.number(),
    created: z.number(),
    joinedFrom: z.lazy(() => JoinedFrom$inboundSchema).optional(),
});

/** @internal */
export type One$Outbound = {
    confirmed: boolean;
    confirmedAt: number;
    accessRequestedAt?: number | undefined;
    role: string;
    teamId?: string | undefined;
    uid: string;
    createdAt: number;
    created: number;
    joinedFrom?: JoinedFrom$Outbound | undefined;
};

/** @internal */
export const One$outboundSchema: z.ZodType<One$Outbound, z.ZodTypeDef, One> = z.object({
    confirmed: z.boolean(),
    confirmedAt: z.number(),
    accessRequestedAt: z.number().optional(),
    role: Role$outboundSchema,
    teamId: z.string().optional(),
    uid: z.string(),
    createdAt: z.number(),
    created: z.number(),
    joinedFrom: z.lazy(() => JoinedFrom$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One$ {
    /** @deprecated use `One$inboundSchema` instead. */
    export const inboundSchema = One$inboundSchema;
    /** @deprecated use `One$outboundSchema` instead. */
    export const outboundSchema = One$outboundSchema;
    /** @deprecated use `One$Outbound` instead. */
    export type Outbound = One$Outbound;
}

/** @internal */
export const Membership$inboundSchema: z.ZodType<Membership, z.ZodTypeDef, unknown> = z.union([
    z.lazy(() => One$inboundSchema),
    z.lazy(() => Two$inboundSchema),
]);

/** @internal */
export type Membership$Outbound = One$Outbound | Two$Outbound;

/** @internal */
export const Membership$outboundSchema: z.ZodType<Membership$Outbound, z.ZodTypeDef, Membership> =
    z.union([z.lazy(() => One$outboundSchema), z.lazy(() => Two$outboundSchema)]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Membership$ {
    /** @deprecated use `Membership$inboundSchema` instead. */
    export const inboundSchema = Membership$inboundSchema;
    /** @deprecated use `Membership$outboundSchema` instead. */
    export const outboundSchema = Membership$outboundSchema;
    /** @deprecated use `Membership$Outbound` instead. */
    export type Outbound = Membership$Outbound;
}

/** @internal */
export const TeamLimited$inboundSchema: z.ZodType<TeamLimited, z.ZodTypeDef, unknown> = z.object({
    limited: z.boolean(),
    saml: z.lazy(() => Saml$inboundSchema).optional(),
    id: z.string(),
    slug: z.string(),
    name: z.nullable(z.string()),
    avatar: z.nullable(z.string()),
    membership: z.union([z.lazy(() => One$inboundSchema), z.lazy(() => Two$inboundSchema)]),
    created: z.string(),
    createdAt: z.number(),
});

/** @internal */
export type TeamLimited$Outbound = {
    limited: boolean;
    saml?: Saml$Outbound | undefined;
    id: string;
    slug: string;
    name: string | null;
    avatar: string | null;
    membership: One$Outbound | Two$Outbound;
    created: string;
    createdAt: number;
};

/** @internal */
export const TeamLimited$outboundSchema: z.ZodType<
    TeamLimited$Outbound,
    z.ZodTypeDef,
    TeamLimited
> = z.object({
    limited: z.boolean(),
    saml: z.lazy(() => Saml$outboundSchema).optional(),
    id: z.string(),
    slug: z.string(),
    name: z.nullable(z.string()),
    avatar: z.nullable(z.string()),
    membership: z.union([z.lazy(() => One$outboundSchema), z.lazy(() => Two$outboundSchema)]),
    created: z.string(),
    createdAt: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeamLimited$ {
    /** @deprecated use `TeamLimited$inboundSchema` instead. */
    export const inboundSchema = TeamLimited$inboundSchema;
    /** @deprecated use `TeamLimited$outboundSchema` instead. */
    export const outboundSchema = TeamLimited$outboundSchema;
    /** @deprecated use `TeamLimited$Outbound` instead. */
    export type Outbound = TeamLimited$Outbound;
}
