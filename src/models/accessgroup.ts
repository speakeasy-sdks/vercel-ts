/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Represents an Access Group.
 */
export type AccessGroup = {
    /**
     * The name of this access group.
     */
    name: string;
    /**
     * Timestamp in milliseconds when the access group was created.
     */
    createdAt: string;
    /**
     * ID of the team that this access group belongs to.
     */
    teamId: string;
    /**
     * Timestamp in milliseconds when the access group was last updated.
     */
    updatedAt: string;
    /**
     * ID of the access group.
     */
    accessGroupId: string;
    /**
     * Number of members in the access group.
     */
    membersCount: number;
    /**
     * Number of projects in the access group.
     */
    projectsCount: number;
};

/** @internal */
export const AccessGroup$inboundSchema: z.ZodType<AccessGroup, z.ZodTypeDef, unknown> = z.object({
    name: z.string(),
    createdAt: z.string(),
    teamId: z.string(),
    updatedAt: z.string(),
    accessGroupId: z.string(),
    membersCount: z.number(),
    projectsCount: z.number(),
});

/** @internal */
export type AccessGroup$Outbound = {
    name: string;
    createdAt: string;
    teamId: string;
    updatedAt: string;
    accessGroupId: string;
    membersCount: number;
    projectsCount: number;
};

/** @internal */
export const AccessGroup$outboundSchema: z.ZodType<
    AccessGroup$Outbound,
    z.ZodTypeDef,
    AccessGroup
> = z.object({
    name: z.string(),
    createdAt: z.string(),
    teamId: z.string(),
    updatedAt: z.string(),
    accessGroupId: z.string(),
    membersCount: z.number(),
    projectsCount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccessGroup$ {
    /** @deprecated use `AccessGroup$inboundSchema` instead. */
    export const inboundSchema = AccessGroup$inboundSchema;
    /** @deprecated use `AccessGroup$outboundSchema` instead. */
    export const outboundSchema = AccessGroup$outboundSchema;
    /** @deprecated use `AccessGroup$Outbound` instead. */
    export type Outbound = AccessGroup$Outbound;
}
