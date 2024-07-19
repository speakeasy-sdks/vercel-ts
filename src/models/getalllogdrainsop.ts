/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetAllLogDrainsRequest = {
    projectId?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export enum GetAllLogDrainsDeliveryFormat {
    Json = "json",
    Ndjson = "ndjson",
    Syslog = "syslog",
}

export enum GetAllLogDrainsSources {
    Build = "build",
    Edge = "edge",
    Lambda = "lambda",
    Static = "static",
    External = "external",
}

export enum GetAllLogDrainsEnvironments {
    Production = "production",
    Preview = "preview",
}

export enum GetAllLogDrainsStatus {
    Enabled = "enabled",
    Disabled = "disabled",
    Errored = "errored",
}

export enum GetAllLogDrainsDisabledReason {
    DisabledByOwner = "disabled-by-owner",
    FeatureNotAvailable = "feature-not-available",
    DisabledByAdmin = "disabled-by-admin",
}

export enum GetAllLogDrainsCompression {
    Gzip = "gzip",
    Zstd = "zstd",
    None = "none",
}

export enum GetAllLogDrainsCreatedFrom {
    SelfServed = "self-served",
}

export type GetAllLogDrainsResponseBody = {
    id: string;
    deliveryFormat: GetAllLogDrainsDeliveryFormat;
    url: string;
    name: string;
    clientId?: string | undefined;
    configurationId?: string | undefined;
    teamId?: string | null | undefined;
    ownerId: string;
    projectIds?: Array<string> | undefined;
    createdAt: number;
    sources?: Array<GetAllLogDrainsSources> | undefined;
    headers?: { [k: string]: string } | undefined;
    environments: Array<GetAllLogDrainsEnvironments>;
    status?: GetAllLogDrainsStatus | undefined;
    disabledAt?: number | undefined;
    disabledReason?: GetAllLogDrainsDisabledReason | undefined;
    disabledBy?: string | undefined;
    firstErrorTimestamp?: number | undefined;
    samplingRate?: number | undefined;
    compression?: GetAllLogDrainsCompression | undefined;
    secret: string;
    createdFrom?: GetAllLogDrainsCreatedFrom | undefined;
};

/** @internal */
export const GetAllLogDrainsRequest$inboundSchema: z.ZodType<
    GetAllLogDrainsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    projectId: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type GetAllLogDrainsRequest$Outbound = {
    projectId?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetAllLogDrainsRequest$outboundSchema: z.ZodType<
    GetAllLogDrainsRequest$Outbound,
    z.ZodTypeDef,
    GetAllLogDrainsRequest
> = z.object({
    projectId: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLogDrainsRequest$ {
    /** @deprecated use `GetAllLogDrainsRequest$inboundSchema` instead. */
    export const inboundSchema = GetAllLogDrainsRequest$inboundSchema;
    /** @deprecated use `GetAllLogDrainsRequest$outboundSchema` instead. */
    export const outboundSchema = GetAllLogDrainsRequest$outboundSchema;
    /** @deprecated use `GetAllLogDrainsRequest$Outbound` instead. */
    export type Outbound = GetAllLogDrainsRequest$Outbound;
}

/** @internal */
export const GetAllLogDrainsDeliveryFormat$inboundSchema: z.ZodNativeEnum<
    typeof GetAllLogDrainsDeliveryFormat
> = z.nativeEnum(GetAllLogDrainsDeliveryFormat);

/** @internal */
export const GetAllLogDrainsDeliveryFormat$outboundSchema: z.ZodNativeEnum<
    typeof GetAllLogDrainsDeliveryFormat
> = GetAllLogDrainsDeliveryFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLogDrainsDeliveryFormat$ {
    /** @deprecated use `GetAllLogDrainsDeliveryFormat$inboundSchema` instead. */
    export const inboundSchema = GetAllLogDrainsDeliveryFormat$inboundSchema;
    /** @deprecated use `GetAllLogDrainsDeliveryFormat$outboundSchema` instead. */
    export const outboundSchema = GetAllLogDrainsDeliveryFormat$outboundSchema;
}

/** @internal */
export const GetAllLogDrainsSources$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsSources> =
    z.nativeEnum(GetAllLogDrainsSources);

/** @internal */
export const GetAllLogDrainsSources$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsSources> =
    GetAllLogDrainsSources$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLogDrainsSources$ {
    /** @deprecated use `GetAllLogDrainsSources$inboundSchema` instead. */
    export const inboundSchema = GetAllLogDrainsSources$inboundSchema;
    /** @deprecated use `GetAllLogDrainsSources$outboundSchema` instead. */
    export const outboundSchema = GetAllLogDrainsSources$outboundSchema;
}

/** @internal */
export const GetAllLogDrainsEnvironments$inboundSchema: z.ZodNativeEnum<
    typeof GetAllLogDrainsEnvironments
> = z.nativeEnum(GetAllLogDrainsEnvironments);

/** @internal */
export const GetAllLogDrainsEnvironments$outboundSchema: z.ZodNativeEnum<
    typeof GetAllLogDrainsEnvironments
> = GetAllLogDrainsEnvironments$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLogDrainsEnvironments$ {
    /** @deprecated use `GetAllLogDrainsEnvironments$inboundSchema` instead. */
    export const inboundSchema = GetAllLogDrainsEnvironments$inboundSchema;
    /** @deprecated use `GetAllLogDrainsEnvironments$outboundSchema` instead. */
    export const outboundSchema = GetAllLogDrainsEnvironments$outboundSchema;
}

/** @internal */
export const GetAllLogDrainsStatus$inboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsStatus> =
    z.nativeEnum(GetAllLogDrainsStatus);

/** @internal */
export const GetAllLogDrainsStatus$outboundSchema: z.ZodNativeEnum<typeof GetAllLogDrainsStatus> =
    GetAllLogDrainsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLogDrainsStatus$ {
    /** @deprecated use `GetAllLogDrainsStatus$inboundSchema` instead. */
    export const inboundSchema = GetAllLogDrainsStatus$inboundSchema;
    /** @deprecated use `GetAllLogDrainsStatus$outboundSchema` instead. */
    export const outboundSchema = GetAllLogDrainsStatus$outboundSchema;
}

/** @internal */
export const GetAllLogDrainsDisabledReason$inboundSchema: z.ZodNativeEnum<
    typeof GetAllLogDrainsDisabledReason
> = z.nativeEnum(GetAllLogDrainsDisabledReason);

/** @internal */
export const GetAllLogDrainsDisabledReason$outboundSchema: z.ZodNativeEnum<
    typeof GetAllLogDrainsDisabledReason
> = GetAllLogDrainsDisabledReason$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLogDrainsDisabledReason$ {
    /** @deprecated use `GetAllLogDrainsDisabledReason$inboundSchema` instead. */
    export const inboundSchema = GetAllLogDrainsDisabledReason$inboundSchema;
    /** @deprecated use `GetAllLogDrainsDisabledReason$outboundSchema` instead. */
    export const outboundSchema = GetAllLogDrainsDisabledReason$outboundSchema;
}

/** @internal */
export const GetAllLogDrainsCompression$inboundSchema: z.ZodNativeEnum<
    typeof GetAllLogDrainsCompression
> = z.nativeEnum(GetAllLogDrainsCompression);

/** @internal */
export const GetAllLogDrainsCompression$outboundSchema: z.ZodNativeEnum<
    typeof GetAllLogDrainsCompression
> = GetAllLogDrainsCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLogDrainsCompression$ {
    /** @deprecated use `GetAllLogDrainsCompression$inboundSchema` instead. */
    export const inboundSchema = GetAllLogDrainsCompression$inboundSchema;
    /** @deprecated use `GetAllLogDrainsCompression$outboundSchema` instead. */
    export const outboundSchema = GetAllLogDrainsCompression$outboundSchema;
}

/** @internal */
export const GetAllLogDrainsCreatedFrom$inboundSchema: z.ZodNativeEnum<
    typeof GetAllLogDrainsCreatedFrom
> = z.nativeEnum(GetAllLogDrainsCreatedFrom);

/** @internal */
export const GetAllLogDrainsCreatedFrom$outboundSchema: z.ZodNativeEnum<
    typeof GetAllLogDrainsCreatedFrom
> = GetAllLogDrainsCreatedFrom$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLogDrainsCreatedFrom$ {
    /** @deprecated use `GetAllLogDrainsCreatedFrom$inboundSchema` instead. */
    export const inboundSchema = GetAllLogDrainsCreatedFrom$inboundSchema;
    /** @deprecated use `GetAllLogDrainsCreatedFrom$outboundSchema` instead. */
    export const outboundSchema = GetAllLogDrainsCreatedFrom$outboundSchema;
}

/** @internal */
export const GetAllLogDrainsResponseBody$inboundSchema: z.ZodType<
    GetAllLogDrainsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    deliveryFormat: GetAllLogDrainsDeliveryFormat$inboundSchema,
    url: z.string(),
    name: z.string(),
    clientId: z.string().optional(),
    configurationId: z.string().optional(),
    teamId: z.nullable(z.string()).optional(),
    ownerId: z.string(),
    projectIds: z.array(z.string()).optional(),
    createdAt: z.number(),
    sources: z.array(GetAllLogDrainsSources$inboundSchema).optional(),
    headers: z.record(z.string()).optional(),
    environments: z.array(GetAllLogDrainsEnvironments$inboundSchema),
    status: GetAllLogDrainsStatus$inboundSchema.optional(),
    disabledAt: z.number().optional(),
    disabledReason: GetAllLogDrainsDisabledReason$inboundSchema.optional(),
    disabledBy: z.string().optional(),
    firstErrorTimestamp: z.number().optional(),
    samplingRate: z.number().optional(),
    compression: GetAllLogDrainsCompression$inboundSchema.optional(),
    secret: z.string(),
    createdFrom: GetAllLogDrainsCreatedFrom$inboundSchema.optional(),
});

/** @internal */
export type GetAllLogDrainsResponseBody$Outbound = {
    id: string;
    deliveryFormat: string;
    url: string;
    name: string;
    clientId?: string | undefined;
    configurationId?: string | undefined;
    teamId?: string | null | undefined;
    ownerId: string;
    projectIds?: Array<string> | undefined;
    createdAt: number;
    sources?: Array<string> | undefined;
    headers?: { [k: string]: string } | undefined;
    environments: Array<string>;
    status?: string | undefined;
    disabledAt?: number | undefined;
    disabledReason?: string | undefined;
    disabledBy?: string | undefined;
    firstErrorTimestamp?: number | undefined;
    samplingRate?: number | undefined;
    compression?: string | undefined;
    secret: string;
    createdFrom?: string | undefined;
};

/** @internal */
export const GetAllLogDrainsResponseBody$outboundSchema: z.ZodType<
    GetAllLogDrainsResponseBody$Outbound,
    z.ZodTypeDef,
    GetAllLogDrainsResponseBody
> = z.object({
    id: z.string(),
    deliveryFormat: GetAllLogDrainsDeliveryFormat$outboundSchema,
    url: z.string(),
    name: z.string(),
    clientId: z.string().optional(),
    configurationId: z.string().optional(),
    teamId: z.nullable(z.string()).optional(),
    ownerId: z.string(),
    projectIds: z.array(z.string()).optional(),
    createdAt: z.number(),
    sources: z.array(GetAllLogDrainsSources$outboundSchema).optional(),
    headers: z.record(z.string()).optional(),
    environments: z.array(GetAllLogDrainsEnvironments$outboundSchema),
    status: GetAllLogDrainsStatus$outboundSchema.optional(),
    disabledAt: z.number().optional(),
    disabledReason: GetAllLogDrainsDisabledReason$outboundSchema.optional(),
    disabledBy: z.string().optional(),
    firstErrorTimestamp: z.number().optional(),
    samplingRate: z.number().optional(),
    compression: GetAllLogDrainsCompression$outboundSchema.optional(),
    secret: z.string(),
    createdFrom: GetAllLogDrainsCreatedFrom$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllLogDrainsResponseBody$ {
    /** @deprecated use `GetAllLogDrainsResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAllLogDrainsResponseBody$inboundSchema;
    /** @deprecated use `GetAllLogDrainsResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAllLogDrainsResponseBody$outboundSchema;
    /** @deprecated use `GetAllLogDrainsResponseBody$Outbound` instead. */
    export type Outbound = GetAllLogDrainsResponseBody$Outbound;
}
