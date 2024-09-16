/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

/**
 * The type of entity.
 */
export const UserEventType = {
  Author: "author",
  BitbucketLogin: "bitbucket_login",
  Bold: "bold",
  DeploymentHost: "deployment_host",
  DnsRecord: "dns_record",
  GitLink: "git_link",
  GithubLogin: "github_login",
  GitlabLogin: "gitlab_login",
  HookName: "hook_name",
  Integration: "integration",
  EdgeConfig: "edge-config",
  Link: "link",
  ProjectName: "project_name",
  ScalingRules: "scaling_rules",
  EnvVarName: "env_var_name",
  Target: "target",
  Store: "store",
  System: "system",
} as const;
/**
 * The type of entity.
 */
export type UserEventType = ClosedEnum<typeof UserEventType>;

/**
 * A list of "entities" within the event `text`. Useful for enhancing the displayed text with additional styling and links.
 */
export type Entities = {
  /**
   * The type of entity.
   */
  type: UserEventType;
  /**
   * The index of where the entity begins within the `text` (inclusive).
   */
  start: number;
  /**
   * The index of where the entity ends within the `text` (non-inclusive).
   */
  end: number;
};

/**
 * Metadata for the User who generated the event.
 */
export type UserModel = {
  avatar: string;
  email: string;
  slug?: string | undefined;
  uid: string;
  username: string;
};

/**
 * Array of events generated by the User.
 */
export type UserEvent = {
  /**
   * The unique identifier of the Event.
   */
  id: string;
  /**
   * The human-readable text of the Event.
   */
  text: string;
  /**
   * A list of "entities" within the event `text`. Useful for enhancing the displayed text with additional styling and links.
   */
  entities: Array<Entities>;
  /**
   * Timestamp (in milliseconds) of when the event was generated.
   */
  createdAt: number;
  /**
   * Metadata for the User who generated the event.
   */
  user?: UserModel | undefined;
  /**
   * The unique identifier of the User who generated the event.
   */
  userId: string;
};

/** @internal */
export const UserEventType$inboundSchema: z.ZodNativeEnum<
  typeof UserEventType
> = z.nativeEnum(UserEventType);

/** @internal */
export const UserEventType$outboundSchema: z.ZodNativeEnum<
  typeof UserEventType
> = UserEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserEventType$ {
  /** @deprecated use `UserEventType$inboundSchema` instead. */
  export const inboundSchema = UserEventType$inboundSchema;
  /** @deprecated use `UserEventType$outboundSchema` instead. */
  export const outboundSchema = UserEventType$outboundSchema;
}

/** @internal */
export const Entities$inboundSchema: z.ZodType<
  Entities,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: UserEventType$inboundSchema,
  start: z.number(),
  end: z.number(),
});

/** @internal */
export type Entities$Outbound = {
  type: string;
  start: number;
  end: number;
};

/** @internal */
export const Entities$outboundSchema: z.ZodType<
  Entities$Outbound,
  z.ZodTypeDef,
  Entities
> = z.object({
  type: UserEventType$outboundSchema,
  start: z.number(),
  end: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Entities$ {
  /** @deprecated use `Entities$inboundSchema` instead. */
  export const inboundSchema = Entities$inboundSchema;
  /** @deprecated use `Entities$outboundSchema` instead. */
  export const outboundSchema = Entities$outboundSchema;
  /** @deprecated use `Entities$Outbound` instead. */
  export type Outbound = Entities$Outbound;
}

/** @internal */
export const UserModel$inboundSchema: z.ZodType<
  UserModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  avatar: z.string(),
  email: z.string(),
  slug: z.string().optional(),
  uid: z.string(),
  username: z.string(),
});

/** @internal */
export type UserModel$Outbound = {
  avatar: string;
  email: string;
  slug?: string | undefined;
  uid: string;
  username: string;
};

/** @internal */
export const UserModel$outboundSchema: z.ZodType<
  UserModel$Outbound,
  z.ZodTypeDef,
  UserModel
> = z.object({
  avatar: z.string(),
  email: z.string(),
  slug: z.string().optional(),
  uid: z.string(),
  username: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserModel$ {
  /** @deprecated use `UserModel$inboundSchema` instead. */
  export const inboundSchema = UserModel$inboundSchema;
  /** @deprecated use `UserModel$outboundSchema` instead. */
  export const outboundSchema = UserModel$outboundSchema;
  /** @deprecated use `UserModel$Outbound` instead. */
  export type Outbound = UserModel$Outbound;
}

/** @internal */
export const UserEvent$inboundSchema: z.ZodType<
  UserEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  text: z.string(),
  entities: z.array(z.lazy(() => Entities$inboundSchema)),
  createdAt: z.number(),
  user: z.lazy(() => UserModel$inboundSchema).optional(),
  userId: z.string(),
});

/** @internal */
export type UserEvent$Outbound = {
  id: string;
  text: string;
  entities: Array<Entities$Outbound>;
  createdAt: number;
  user?: UserModel$Outbound | undefined;
  userId: string;
};

/** @internal */
export const UserEvent$outboundSchema: z.ZodType<
  UserEvent$Outbound,
  z.ZodTypeDef,
  UserEvent
> = z.object({
  id: z.string(),
  text: z.string(),
  entities: z.array(z.lazy(() => Entities$outboundSchema)),
  createdAt: z.number(),
  user: z.lazy(() => UserModel$outboundSchema).optional(),
  userId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserEvent$ {
  /** @deprecated use `UserEvent$inboundSchema` instead. */
  export const inboundSchema = UserEvent$inboundSchema;
  /** @deprecated use `UserEvent$outboundSchema` instead. */
  export const outboundSchema = UserEvent$outboundSchema;
  /** @deprecated use `UserEvent$Outbound` instead. */
  export type Outbound = UserEvent$Outbound;
}
