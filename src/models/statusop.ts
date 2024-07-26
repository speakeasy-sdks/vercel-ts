/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../types/enums.js";
import * as z from "zod";

export type StatusRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export const StatusStatus = {
    Disabled: "disabled",
    Enabled: "enabled",
    OverLimit: "over_limit",
    Paused: "paused",
} as const;
export type StatusStatus = ClosedEnum<typeof StatusStatus>;

export type StatusResponseBody = {
    status: StatusStatus;
};

/** @internal */
export const StatusRequest$inboundSchema: z.ZodType<StatusRequest, z.ZodTypeDef, unknown> =
    z.object({
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });

/** @internal */
export type StatusRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const StatusRequest$outboundSchema: z.ZodType<
    StatusRequest$Outbound,
    z.ZodTypeDef,
    StatusRequest
> = z.object({
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StatusRequest$ {
    /** @deprecated use `StatusRequest$inboundSchema` instead. */
    export const inboundSchema = StatusRequest$inboundSchema;
    /** @deprecated use `StatusRequest$outboundSchema` instead. */
    export const outboundSchema = StatusRequest$outboundSchema;
    /** @deprecated use `StatusRequest$Outbound` instead. */
    export type Outbound = StatusRequest$Outbound;
}

/** @internal */
export const StatusStatus$inboundSchema: z.ZodNativeEnum<typeof StatusStatus> =
    z.nativeEnum(StatusStatus);

/** @internal */
export const StatusStatus$outboundSchema: z.ZodNativeEnum<typeof StatusStatus> =
    StatusStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StatusStatus$ {
    /** @deprecated use `StatusStatus$inboundSchema` instead. */
    export const inboundSchema = StatusStatus$inboundSchema;
    /** @deprecated use `StatusStatus$outboundSchema` instead. */
    export const outboundSchema = StatusStatus$outboundSchema;
}

/** @internal */
export const StatusResponseBody$inboundSchema: z.ZodType<
    StatusResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    status: StatusStatus$inboundSchema,
});

/** @internal */
export type StatusResponseBody$Outbound = {
    status: string;
};

/** @internal */
export const StatusResponseBody$outboundSchema: z.ZodType<
    StatusResponseBody$Outbound,
    z.ZodTypeDef,
    StatusResponseBody
> = z.object({
    status: StatusStatus$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StatusResponseBody$ {
    /** @deprecated use `StatusResponseBody$inboundSchema` instead. */
    export const inboundSchema = StatusResponseBody$inboundSchema;
    /** @deprecated use `StatusResponseBody$outboundSchema` instead. */
    export const outboundSchema = StatusResponseBody$outboundSchema;
    /** @deprecated use `StatusResponseBody$Outbound` instead. */
    export type Outbound = StatusResponseBody$Outbound;
}
