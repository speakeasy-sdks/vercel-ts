/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import { ClosedEnum } from "../types/enums.js";
import * as z from "zod";

/**
 * The project role of the member that will be added. \"null\" will remove this project level role.
 */
export const UpdateTeamMemberRole = {
    Admin: "ADMIN",
    ProjectViewer: "PROJECT_VIEWER",
    ProjectDeveloper: "PROJECT_DEVELOPER",
} as const;
/**
 * The project role of the member that will be added. \"null\" will remove this project level role.
 */
export type UpdateTeamMemberRole = ClosedEnum<typeof UpdateTeamMemberRole>;

export type UpdateTeamMemberProjects = {
    /**
     * The ID of the project.
     */
    projectId: string;
    /**
     * The project role of the member that will be added. \"null\" will remove this project level role.
     */
    role: UpdateTeamMemberRole | null;
};

export type UpdateTeamMemberJoinedFrom = {
    ssoUserId?: any | null | undefined;
};

export type UpdateTeamMemberRequestBody = {
    /**
     * Accept a user who requested access to the team.
     */
    confirmed?: boolean | undefined;
    /**
     * The role in the team of the member.
     */
    role?: string | undefined;
    projects?: Array<UpdateTeamMemberProjects> | undefined;
    joinedFrom?: UpdateTeamMemberJoinedFrom | undefined;
};

export type UpdateTeamMemberRequest = {
    teamId: string;
    /**
     * The ID of the member.
     */
    uid: string;
    requestBody?: UpdateTeamMemberRequestBody | undefined;
};

/**
 * Successfully updated the membership.
 */
export type UpdateTeamMemberResponseBody = {
    /**
     * ID of the team.
     */
    id: string;
};

/** @internal */
export const UpdateTeamMemberRole$inboundSchema: z.ZodNativeEnum<typeof UpdateTeamMemberRole> =
    z.nativeEnum(UpdateTeamMemberRole);

/** @internal */
export const UpdateTeamMemberRole$outboundSchema: z.ZodNativeEnum<typeof UpdateTeamMemberRole> =
    UpdateTeamMemberRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTeamMemberRole$ {
    /** @deprecated use `UpdateTeamMemberRole$inboundSchema` instead. */
    export const inboundSchema = UpdateTeamMemberRole$inboundSchema;
    /** @deprecated use `UpdateTeamMemberRole$outboundSchema` instead. */
    export const outboundSchema = UpdateTeamMemberRole$outboundSchema;
}

/** @internal */
export const UpdateTeamMemberProjects$inboundSchema: z.ZodType<
    UpdateTeamMemberProjects,
    z.ZodTypeDef,
    unknown
> = z.object({
    projectId: z.string(),
    role: z.nullable(UpdateTeamMemberRole$inboundSchema),
});

/** @internal */
export type UpdateTeamMemberProjects$Outbound = {
    projectId: string;
    role: string | null;
};

/** @internal */
export const UpdateTeamMemberProjects$outboundSchema: z.ZodType<
    UpdateTeamMemberProjects$Outbound,
    z.ZodTypeDef,
    UpdateTeamMemberProjects
> = z.object({
    projectId: z.string(),
    role: z.nullable(UpdateTeamMemberRole$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTeamMemberProjects$ {
    /** @deprecated use `UpdateTeamMemberProjects$inboundSchema` instead. */
    export const inboundSchema = UpdateTeamMemberProjects$inboundSchema;
    /** @deprecated use `UpdateTeamMemberProjects$outboundSchema` instead. */
    export const outboundSchema = UpdateTeamMemberProjects$outboundSchema;
    /** @deprecated use `UpdateTeamMemberProjects$Outbound` instead. */
    export type Outbound = UpdateTeamMemberProjects$Outbound;
}

/** @internal */
export const UpdateTeamMemberJoinedFrom$inboundSchema: z.ZodType<
    UpdateTeamMemberJoinedFrom,
    z.ZodTypeDef,
    unknown
> = z.object({
    ssoUserId: z.nullable(z.any()).optional(),
});

/** @internal */
export type UpdateTeamMemberJoinedFrom$Outbound = {
    ssoUserId?: any | null | undefined;
};

/** @internal */
export const UpdateTeamMemberJoinedFrom$outboundSchema: z.ZodType<
    UpdateTeamMemberJoinedFrom$Outbound,
    z.ZodTypeDef,
    UpdateTeamMemberJoinedFrom
> = z.object({
    ssoUserId: z.nullable(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTeamMemberJoinedFrom$ {
    /** @deprecated use `UpdateTeamMemberJoinedFrom$inboundSchema` instead. */
    export const inboundSchema = UpdateTeamMemberJoinedFrom$inboundSchema;
    /** @deprecated use `UpdateTeamMemberJoinedFrom$outboundSchema` instead. */
    export const outboundSchema = UpdateTeamMemberJoinedFrom$outboundSchema;
    /** @deprecated use `UpdateTeamMemberJoinedFrom$Outbound` instead. */
    export type Outbound = UpdateTeamMemberJoinedFrom$Outbound;
}

/** @internal */
export const UpdateTeamMemberRequestBody$inboundSchema: z.ZodType<
    UpdateTeamMemberRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    confirmed: z.boolean().optional(),
    role: z.string().default("[MEMBER VIEWER]"),
    projects: z.array(z.lazy(() => UpdateTeamMemberProjects$inboundSchema)).optional(),
    joinedFrom: z.lazy(() => UpdateTeamMemberJoinedFrom$inboundSchema).optional(),
});

/** @internal */
export type UpdateTeamMemberRequestBody$Outbound = {
    confirmed?: boolean | undefined;
    role: string;
    projects?: Array<UpdateTeamMemberProjects$Outbound> | undefined;
    joinedFrom?: UpdateTeamMemberJoinedFrom$Outbound | undefined;
};

/** @internal */
export const UpdateTeamMemberRequestBody$outboundSchema: z.ZodType<
    UpdateTeamMemberRequestBody$Outbound,
    z.ZodTypeDef,
    UpdateTeamMemberRequestBody
> = z.object({
    confirmed: z.boolean().optional(),
    role: z.string().default("[MEMBER VIEWER]"),
    projects: z.array(z.lazy(() => UpdateTeamMemberProjects$outboundSchema)).optional(),
    joinedFrom: z.lazy(() => UpdateTeamMemberJoinedFrom$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTeamMemberRequestBody$ {
    /** @deprecated use `UpdateTeamMemberRequestBody$inboundSchema` instead. */
    export const inboundSchema = UpdateTeamMemberRequestBody$inboundSchema;
    /** @deprecated use `UpdateTeamMemberRequestBody$outboundSchema` instead. */
    export const outboundSchema = UpdateTeamMemberRequestBody$outboundSchema;
    /** @deprecated use `UpdateTeamMemberRequestBody$Outbound` instead. */
    export type Outbound = UpdateTeamMemberRequestBody$Outbound;
}

/** @internal */
export const UpdateTeamMemberRequest$inboundSchema: z.ZodType<
    UpdateTeamMemberRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        teamId: z.string(),
        uid: z.string(),
        RequestBody: z.lazy(() => UpdateTeamMemberRequestBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type UpdateTeamMemberRequest$Outbound = {
    teamId: string;
    uid: string;
    RequestBody?: UpdateTeamMemberRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateTeamMemberRequest$outboundSchema: z.ZodType<
    UpdateTeamMemberRequest$Outbound,
    z.ZodTypeDef,
    UpdateTeamMemberRequest
> = z
    .object({
        teamId: z.string(),
        uid: z.string(),
        requestBody: z.lazy(() => UpdateTeamMemberRequestBody$outboundSchema).optional(),
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
export namespace UpdateTeamMemberRequest$ {
    /** @deprecated use `UpdateTeamMemberRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateTeamMemberRequest$inboundSchema;
    /** @deprecated use `UpdateTeamMemberRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateTeamMemberRequest$outboundSchema;
    /** @deprecated use `UpdateTeamMemberRequest$Outbound` instead. */
    export type Outbound = UpdateTeamMemberRequest$Outbound;
}

/** @internal */
export const UpdateTeamMemberResponseBody$inboundSchema: z.ZodType<
    UpdateTeamMemberResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type UpdateTeamMemberResponseBody$Outbound = {
    id: string;
};

/** @internal */
export const UpdateTeamMemberResponseBody$outboundSchema: z.ZodType<
    UpdateTeamMemberResponseBody$Outbound,
    z.ZodTypeDef,
    UpdateTeamMemberResponseBody
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTeamMemberResponseBody$ {
    /** @deprecated use `UpdateTeamMemberResponseBody$inboundSchema` instead. */
    export const inboundSchema = UpdateTeamMemberResponseBody$inboundSchema;
    /** @deprecated use `UpdateTeamMemberResponseBody$outboundSchema` instead. */
    export const outboundSchema = UpdateTeamMemberResponseBody$outboundSchema;
    /** @deprecated use `UpdateTeamMemberResponseBody$Outbound` instead. */
    export type Outbound = UpdateTeamMemberResponseBody$Outbound;
}
