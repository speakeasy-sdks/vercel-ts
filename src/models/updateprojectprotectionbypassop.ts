/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import { ClosedEnum } from "../types/enums.js";
import * as z from "zod";

/**
 * Optional instructions for revoking and regenerating a automation bypass
 */
export type Revoke = {
    /**
     * Automation bypass to revoked
     */
    secret: string;
    /**
     * Whether or not a new automation bypass should be created after the provided secret is revoked
     */
    regenerate: boolean;
};

export type UpdateProjectProtectionBypassRequestBody = {
    /**
     * Optional instructions for revoking and regenerating a automation bypass
     */
    revoke?: Revoke | undefined;
};

export type UpdateProjectProtectionBypassRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UpdateProjectProtectionBypassRequestBody | undefined;
};

export const UpdateProjectProtectionBypassScope = {
    AutomationBypass: "automation-bypass",
} as const;
export type UpdateProjectProtectionBypassScope = ClosedEnum<
    typeof UpdateProjectProtectionBypassScope
>;

export type UpdateProjectProtectionBypassProtectionBypass = {
    createdAt: number;
    createdBy: string;
    scope: UpdateProjectProtectionBypassScope;
};

export type UpdateProjectProtectionBypassResponseBody = {
    protectionBypass?: { [k: string]: UpdateProjectProtectionBypassProtectionBypass } | undefined;
};

/** @internal */
export const Revoke$inboundSchema: z.ZodType<Revoke, z.ZodTypeDef, unknown> = z.object({
    secret: z.string(),
    regenerate: z.boolean(),
});

/** @internal */
export type Revoke$Outbound = {
    secret: string;
    regenerate: boolean;
};

/** @internal */
export const Revoke$outboundSchema: z.ZodType<Revoke$Outbound, z.ZodTypeDef, Revoke> = z.object({
    secret: z.string(),
    regenerate: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Revoke$ {
    /** @deprecated use `Revoke$inboundSchema` instead. */
    export const inboundSchema = Revoke$inboundSchema;
    /** @deprecated use `Revoke$outboundSchema` instead. */
    export const outboundSchema = Revoke$outboundSchema;
    /** @deprecated use `Revoke$Outbound` instead. */
    export type Outbound = Revoke$Outbound;
}

/** @internal */
export const UpdateProjectProtectionBypassRequestBody$inboundSchema: z.ZodType<
    UpdateProjectProtectionBypassRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    revoke: z.lazy(() => Revoke$inboundSchema).optional(),
});

/** @internal */
export type UpdateProjectProtectionBypassRequestBody$Outbound = {
    revoke?: Revoke$Outbound | undefined;
};

/** @internal */
export const UpdateProjectProtectionBypassRequestBody$outboundSchema: z.ZodType<
    UpdateProjectProtectionBypassRequestBody$Outbound,
    z.ZodTypeDef,
    UpdateProjectProtectionBypassRequestBody
> = z.object({
    revoke: z.lazy(() => Revoke$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectProtectionBypassRequestBody$ {
    /** @deprecated use `UpdateProjectProtectionBypassRequestBody$inboundSchema` instead. */
    export const inboundSchema = UpdateProjectProtectionBypassRequestBody$inboundSchema;
    /** @deprecated use `UpdateProjectProtectionBypassRequestBody$outboundSchema` instead. */
    export const outboundSchema = UpdateProjectProtectionBypassRequestBody$outboundSchema;
    /** @deprecated use `UpdateProjectProtectionBypassRequestBody$Outbound` instead. */
    export type Outbound = UpdateProjectProtectionBypassRequestBody$Outbound;
}

/** @internal */
export const UpdateProjectProtectionBypassRequest$inboundSchema: z.ZodType<
    UpdateProjectProtectionBypassRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        idOrName: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        RequestBody: z
            .lazy(() => UpdateProjectProtectionBypassRequestBody$inboundSchema)
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type UpdateProjectProtectionBypassRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateProjectProtectionBypassRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateProjectProtectionBypassRequest$outboundSchema: z.ZodType<
    UpdateProjectProtectionBypassRequest$Outbound,
    z.ZodTypeDef,
    UpdateProjectProtectionBypassRequest
> = z
    .object({
        idOrName: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        requestBody: z
            .lazy(() => UpdateProjectProtectionBypassRequestBody$outboundSchema)
            .optional(),
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
export namespace UpdateProjectProtectionBypassRequest$ {
    /** @deprecated use `UpdateProjectProtectionBypassRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateProjectProtectionBypassRequest$inboundSchema;
    /** @deprecated use `UpdateProjectProtectionBypassRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateProjectProtectionBypassRequest$outboundSchema;
    /** @deprecated use `UpdateProjectProtectionBypassRequest$Outbound` instead. */
    export type Outbound = UpdateProjectProtectionBypassRequest$Outbound;
}

/** @internal */
export const UpdateProjectProtectionBypassScope$inboundSchema: z.ZodNativeEnum<
    typeof UpdateProjectProtectionBypassScope
> = z.nativeEnum(UpdateProjectProtectionBypassScope);

/** @internal */
export const UpdateProjectProtectionBypassScope$outboundSchema: z.ZodNativeEnum<
    typeof UpdateProjectProtectionBypassScope
> = UpdateProjectProtectionBypassScope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectProtectionBypassScope$ {
    /** @deprecated use `UpdateProjectProtectionBypassScope$inboundSchema` instead. */
    export const inboundSchema = UpdateProjectProtectionBypassScope$inboundSchema;
    /** @deprecated use `UpdateProjectProtectionBypassScope$outboundSchema` instead. */
    export const outboundSchema = UpdateProjectProtectionBypassScope$outboundSchema;
}

/** @internal */
export const UpdateProjectProtectionBypassProtectionBypass$inboundSchema: z.ZodType<
    UpdateProjectProtectionBypassProtectionBypass,
    z.ZodTypeDef,
    unknown
> = z.object({
    createdAt: z.number(),
    createdBy: z.string(),
    scope: UpdateProjectProtectionBypassScope$inboundSchema,
});

/** @internal */
export type UpdateProjectProtectionBypassProtectionBypass$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: string;
};

/** @internal */
export const UpdateProjectProtectionBypassProtectionBypass$outboundSchema: z.ZodType<
    UpdateProjectProtectionBypassProtectionBypass$Outbound,
    z.ZodTypeDef,
    UpdateProjectProtectionBypassProtectionBypass
> = z.object({
    createdAt: z.number(),
    createdBy: z.string(),
    scope: UpdateProjectProtectionBypassScope$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectProtectionBypassProtectionBypass$ {
    /** @deprecated use `UpdateProjectProtectionBypassProtectionBypass$inboundSchema` instead. */
    export const inboundSchema = UpdateProjectProtectionBypassProtectionBypass$inboundSchema;
    /** @deprecated use `UpdateProjectProtectionBypassProtectionBypass$outboundSchema` instead. */
    export const outboundSchema = UpdateProjectProtectionBypassProtectionBypass$outboundSchema;
    /** @deprecated use `UpdateProjectProtectionBypassProtectionBypass$Outbound` instead. */
    export type Outbound = UpdateProjectProtectionBypassProtectionBypass$Outbound;
}

/** @internal */
export const UpdateProjectProtectionBypassResponseBody$inboundSchema: z.ZodType<
    UpdateProjectProtectionBypassResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    protectionBypass: z
        .record(z.lazy(() => UpdateProjectProtectionBypassProtectionBypass$inboundSchema))
        .optional(),
});

/** @internal */
export type UpdateProjectProtectionBypassResponseBody$Outbound = {
    protectionBypass?:
        | { [k: string]: UpdateProjectProtectionBypassProtectionBypass$Outbound }
        | undefined;
};

/** @internal */
export const UpdateProjectProtectionBypassResponseBody$outboundSchema: z.ZodType<
    UpdateProjectProtectionBypassResponseBody$Outbound,
    z.ZodTypeDef,
    UpdateProjectProtectionBypassResponseBody
> = z.object({
    protectionBypass: z
        .record(z.lazy(() => UpdateProjectProtectionBypassProtectionBypass$outboundSchema))
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectProtectionBypassResponseBody$ {
    /** @deprecated use `UpdateProjectProtectionBypassResponseBody$inboundSchema` instead. */
    export const inboundSchema = UpdateProjectProtectionBypassResponseBody$inboundSchema;
    /** @deprecated use `UpdateProjectProtectionBypassResponseBody$outboundSchema` instead. */
    export const outboundSchema = UpdateProjectProtectionBypassResponseBody$outboundSchema;
    /** @deprecated use `UpdateProjectProtectionBypassResponseBody$Outbound` instead. */
    export type Outbound = UpdateProjectProtectionBypassResponseBody$Outbound;
}