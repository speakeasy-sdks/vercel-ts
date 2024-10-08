/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { ClosedEnum } from "../types/enums.js";

/**
 * The project role that will be added to this Access Group. \"null\" will remove this project level role.
 */
export const UpdateAccessGroupRole = {
  Admin: "ADMIN",
  ProjectViewer: "PROJECT_VIEWER",
  ProjectDeveloper: "PROJECT_DEVELOPER",
} as const;
/**
 * The project role that will be added to this Access Group. \"null\" will remove this project level role.
 */
export type UpdateAccessGroupRole = ClosedEnum<typeof UpdateAccessGroupRole>;

export type UpdateAccessGroupProjects = {
  /**
   * The ID of the project.
   */
  projectId: string;
  /**
   * The project role that will be added to this Access Group. \"null\" will remove this project level role.
   */
  role: UpdateAccessGroupRole | null;
};

export type UpdateAccessGroupRequestBody = {
  /**
   * The name of the access group
   */
  name?: string | undefined;
  projects?: Array<UpdateAccessGroupProjects> | undefined;
  /**
   * List of members to add to the access group.
   */
  membersToAdd?: Array<string> | undefined;
  /**
   * List of members to remove from the access group.
   */
  membersToRemove?: Array<string> | undefined;
};

export type UpdateAccessGroupRequest = {
  idOrName: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: UpdateAccessGroupRequestBody | undefined;
};

/** @internal */
export const UpdateAccessGroupRole$inboundSchema: z.ZodNativeEnum<
  typeof UpdateAccessGroupRole
> = z.nativeEnum(UpdateAccessGroupRole);

/** @internal */
export const UpdateAccessGroupRole$outboundSchema: z.ZodNativeEnum<
  typeof UpdateAccessGroupRole
> = UpdateAccessGroupRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupRole$ {
  /** @deprecated use `UpdateAccessGroupRole$inboundSchema` instead. */
  export const inboundSchema = UpdateAccessGroupRole$inboundSchema;
  /** @deprecated use `UpdateAccessGroupRole$outboundSchema` instead. */
  export const outboundSchema = UpdateAccessGroupRole$outboundSchema;
}

/** @internal */
export const UpdateAccessGroupProjects$inboundSchema: z.ZodType<
  UpdateAccessGroupProjects,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectId: z.string(),
  role: z.nullable(UpdateAccessGroupRole$inboundSchema),
});

/** @internal */
export type UpdateAccessGroupProjects$Outbound = {
  projectId: string;
  role: string | null;
};

/** @internal */
export const UpdateAccessGroupProjects$outboundSchema: z.ZodType<
  UpdateAccessGroupProjects$Outbound,
  z.ZodTypeDef,
  UpdateAccessGroupProjects
> = z.object({
  projectId: z.string(),
  role: z.nullable(UpdateAccessGroupRole$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupProjects$ {
  /** @deprecated use `UpdateAccessGroupProjects$inboundSchema` instead. */
  export const inboundSchema = UpdateAccessGroupProjects$inboundSchema;
  /** @deprecated use `UpdateAccessGroupProjects$outboundSchema` instead. */
  export const outboundSchema = UpdateAccessGroupProjects$outboundSchema;
  /** @deprecated use `UpdateAccessGroupProjects$Outbound` instead. */
  export type Outbound = UpdateAccessGroupProjects$Outbound;
}

/** @internal */
export const UpdateAccessGroupRequestBody$inboundSchema: z.ZodType<
  UpdateAccessGroupRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  projects: z.array(z.lazy(() => UpdateAccessGroupProjects$inboundSchema))
    .optional(),
  membersToAdd: z.array(z.string()).optional(),
  membersToRemove: z.array(z.string()).optional(),
});

/** @internal */
export type UpdateAccessGroupRequestBody$Outbound = {
  name?: string | undefined;
  projects?: Array<UpdateAccessGroupProjects$Outbound> | undefined;
  membersToAdd?: Array<string> | undefined;
  membersToRemove?: Array<string> | undefined;
};

/** @internal */
export const UpdateAccessGroupRequestBody$outboundSchema: z.ZodType<
  UpdateAccessGroupRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateAccessGroupRequestBody
> = z.object({
  name: z.string().optional(),
  projects: z.array(z.lazy(() => UpdateAccessGroupProjects$outboundSchema))
    .optional(),
  membersToAdd: z.array(z.string()).optional(),
  membersToRemove: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupRequestBody$ {
  /** @deprecated use `UpdateAccessGroupRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateAccessGroupRequestBody$inboundSchema;
  /** @deprecated use `UpdateAccessGroupRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateAccessGroupRequestBody$outboundSchema;
  /** @deprecated use `UpdateAccessGroupRequestBody$Outbound` instead. */
  export type Outbound = UpdateAccessGroupRequestBody$Outbound;
}

/** @internal */
export const UpdateAccessGroupRequest$inboundSchema: z.ZodType<
  UpdateAccessGroupRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  idOrName: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => UpdateAccessGroupRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateAccessGroupRequest$Outbound = {
  idOrName: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?: UpdateAccessGroupRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateAccessGroupRequest$outboundSchema: z.ZodType<
  UpdateAccessGroupRequest$Outbound,
  z.ZodTypeDef,
  UpdateAccessGroupRequest
> = z.object({
  idOrName: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => UpdateAccessGroupRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupRequest$ {
  /** @deprecated use `UpdateAccessGroupRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAccessGroupRequest$inboundSchema;
  /** @deprecated use `UpdateAccessGroupRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAccessGroupRequest$outboundSchema;
  /** @deprecated use `UpdateAccessGroupRequest$Outbound` instead. */
  export type Outbound = UpdateAccessGroupRequest$Outbound;
}
