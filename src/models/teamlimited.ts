/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

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
 * Information for the Directory Sync configuration.
 */
export type Directory = {
  /**
   * The Identity Provider "type", for example Okta.
   */
  type: string;
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
   * Information for the Directory Sync configuration.
   */
  directory?: Directory | undefined;
  /**
   * When `true`, interactions with the Team **must** be done with an authentication token that has been authenticated with the Team's SAML Single Sign-On provider.
   */
  enforced: boolean;
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

export const Origin = {
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
export type Origin = ClosedEnum<typeof Origin>;

export type GitUserId = string | number;

export type JoinedFrom = {
  origin: Origin;
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
export type Membership = {
  confirmed?: boolean | undefined;
  confirmedAt?: number | undefined;
  accessRequestedAt?: number | undefined;
  role?: Role | undefined;
  teamId?: string | undefined;
  createdAt?: number | undefined;
  created?: number | undefined;
  joinedFrom?: JoinedFrom | undefined;
  uid?: string | undefined;
};

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
  /**
   * The membership of the authenticated User in relation to the Team.
   */
  membership: Membership;
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
export const Connection$inboundSchema: z.ZodType<
  Connection,
  z.ZodTypeDef,
  unknown
> = z.object({
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
export const Connection$outboundSchema: z.ZodType<
  Connection$Outbound,
  z.ZodTypeDef,
  Connection
> = z.object({
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
export const Directory$inboundSchema: z.ZodType<
  Directory,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  state: z.string(),
  connectedAt: z.number(),
  lastReceivedWebhookEvent: z.number().optional(),
});

/** @internal */
export type Directory$Outbound = {
  type: string;
  state: string;
  connectedAt: number;
  lastReceivedWebhookEvent?: number | undefined;
};

/** @internal */
export const Directory$outboundSchema: z.ZodType<
  Directory$Outbound,
  z.ZodTypeDef,
  Directory
> = z.object({
  type: z.string(),
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
export const Saml$inboundSchema: z.ZodType<Saml, z.ZodTypeDef, unknown> = z
  .object({
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
export const Saml$outboundSchema: z.ZodType<Saml$Outbound, z.ZodTypeDef, Saml> =
  z.object({
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
export const Role$inboundSchema: z.ZodNativeEnum<typeof Role> = z.nativeEnum(
  Role,
);

/** @internal */
export const Role$outboundSchema: z.ZodNativeEnum<typeof Role> =
  Role$inboundSchema;

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
export const Origin$inboundSchema: z.ZodNativeEnum<typeof Origin> = z
  .nativeEnum(Origin);

/** @internal */
export const Origin$outboundSchema: z.ZodNativeEnum<typeof Origin> =
  Origin$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Origin$ {
  /** @deprecated use `Origin$inboundSchema` instead. */
  export const inboundSchema = Origin$inboundSchema;
  /** @deprecated use `Origin$outboundSchema` instead. */
  export const outboundSchema = Origin$outboundSchema;
}

/** @internal */
export const GitUserId$inboundSchema: z.ZodType<
  GitUserId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type GitUserId$Outbound = string | number;

/** @internal */
export const GitUserId$outboundSchema: z.ZodType<
  GitUserId$Outbound,
  z.ZodTypeDef,
  GitUserId
> = z.union([z.string(), z.number()]);

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
export const JoinedFrom$inboundSchema: z.ZodType<
  JoinedFrom,
  z.ZodTypeDef,
  unknown
> = z.object({
  origin: Origin$inboundSchema,
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
export const JoinedFrom$outboundSchema: z.ZodType<
  JoinedFrom$Outbound,
  z.ZodTypeDef,
  JoinedFrom
> = z.object({
  origin: Origin$outboundSchema,
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
export const Membership$inboundSchema: z.ZodType<
  Membership,
  z.ZodTypeDef,
  unknown
> = z.object({
  confirmed: z.boolean().optional(),
  confirmedAt: z.number().optional(),
  accessRequestedAt: z.number().optional(),
  role: Role$inboundSchema.optional(),
  teamId: z.string().optional(),
  createdAt: z.number().optional(),
  created: z.number().optional(),
  joinedFrom: z.lazy(() => JoinedFrom$inboundSchema).optional(),
  uid: z.string().optional(),
});

/** @internal */
export type Membership$Outbound = {
  confirmed?: boolean | undefined;
  confirmedAt?: number | undefined;
  accessRequestedAt?: number | undefined;
  role?: string | undefined;
  teamId?: string | undefined;
  createdAt?: number | undefined;
  created?: number | undefined;
  joinedFrom?: JoinedFrom$Outbound | undefined;
  uid?: string | undefined;
};

/** @internal */
export const Membership$outboundSchema: z.ZodType<
  Membership$Outbound,
  z.ZodTypeDef,
  Membership
> = z.object({
  confirmed: z.boolean().optional(),
  confirmedAt: z.number().optional(),
  accessRequestedAt: z.number().optional(),
  role: Role$outboundSchema.optional(),
  teamId: z.string().optional(),
  createdAt: z.number().optional(),
  created: z.number().optional(),
  joinedFrom: z.lazy(() => JoinedFrom$outboundSchema).optional(),
  uid: z.string().optional(),
});

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
export const TeamLimited$inboundSchema: z.ZodType<
  TeamLimited,
  z.ZodTypeDef,
  unknown
> = z.object({
  limited: z.boolean(),
  saml: z.lazy(() => Saml$inboundSchema).optional(),
  id: z.string(),
  slug: z.string(),
  name: z.nullable(z.string()),
  avatar: z.nullable(z.string()),
  membership: z.lazy(() => Membership$inboundSchema),
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
  membership: Membership$Outbound;
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
  membership: z.lazy(() => Membership$outboundSchema),
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
