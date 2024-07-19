/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetConfigurableLogDrainRequest = {
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export enum GetConfigurableLogDrainDeliveryFormat {
    Json = "json",
    Ndjson = "ndjson",
    Syslog = "syslog",
}

export enum GetConfigurableLogDrainSources {
    Build = "build",
    Edge = "edge",
    Lambda = "lambda",
    Static = "static",
    External = "external",
}

export enum GetConfigurableLogDrainEnvironments {
    Production = "production",
    Preview = "preview",
}

export enum GetConfigurableLogDrainStatus {
    Enabled = "enabled",
    Disabled = "disabled",
    Errored = "errored",
}

export enum DisabledReason {
    DisabledByOwner = "disabled-by-owner",
    FeatureNotAvailable = "feature-not-available",
    DisabledByAdmin = "disabled-by-admin",
}

export enum Compression {
    Gzip = "gzip",
    Zstd = "zstd",
    None = "none",
}

export enum GetConfigurableLogDrainCreatedFrom {
    SelfServed = "self-served",
}

export type GetConfigurableLogDrainResponseBody = {
    id: string;
    deliveryFormat: GetConfigurableLogDrainDeliveryFormat;
    url: string;
    name: string;
    clientId?: string | undefined;
    configurationId?: string | undefined;
    teamId?: string | null | undefined;
    ownerId: string;
    projectIds?: Array<string> | undefined;
    createdAt: number;
    sources?: Array<GetConfigurableLogDrainSources> | undefined;
    headers?: { [k: string]: string } | undefined;
    environments: Array<GetConfigurableLogDrainEnvironments>;
    status?: GetConfigurableLogDrainStatus | undefined;
    disabledAt?: number | undefined;
    disabledReason?: DisabledReason | undefined;
    disabledBy?: string | undefined;
    firstErrorTimestamp?: number | undefined;
    samplingRate?: number | undefined;
    compression?: Compression | undefined;
    secret: string;
    createdFrom?: GetConfigurableLogDrainCreatedFrom | undefined;
};

/** @internal */
export const GetConfigurableLogDrainRequest$inboundSchema: z.ZodType<
    GetConfigurableLogDrainRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type GetConfigurableLogDrainRequest$Outbound = {
    id: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetConfigurableLogDrainRequest$outboundSchema: z.ZodType<
    GetConfigurableLogDrainRequest$Outbound,
    z.ZodTypeDef,
    GetConfigurableLogDrainRequest
> = z.object({
    id: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConfigurableLogDrainRequest$ {
    /** @deprecated use `GetConfigurableLogDrainRequest$inboundSchema` instead. */
    export const inboundSchema = GetConfigurableLogDrainRequest$inboundSchema;
    /** @deprecated use `GetConfigurableLogDrainRequest$outboundSchema` instead. */
    export const outboundSchema = GetConfigurableLogDrainRequest$outboundSchema;
    /** @deprecated use `GetConfigurableLogDrainRequest$Outbound` instead. */
    export type Outbound = GetConfigurableLogDrainRequest$Outbound;
}

/** @internal */
export const GetConfigurableLogDrainDeliveryFormat$inboundSchema: z.ZodNativeEnum<
    typeof GetConfigurableLogDrainDeliveryFormat
> = z.nativeEnum(GetConfigurableLogDrainDeliveryFormat);

/** @internal */
export const GetConfigurableLogDrainDeliveryFormat$outboundSchema: z.ZodNativeEnum<
    typeof GetConfigurableLogDrainDeliveryFormat
> = GetConfigurableLogDrainDeliveryFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConfigurableLogDrainDeliveryFormat$ {
    /** @deprecated use `GetConfigurableLogDrainDeliveryFormat$inboundSchema` instead. */
    export const inboundSchema = GetConfigurableLogDrainDeliveryFormat$inboundSchema;
    /** @deprecated use `GetConfigurableLogDrainDeliveryFormat$outboundSchema` instead. */
    export const outboundSchema = GetConfigurableLogDrainDeliveryFormat$outboundSchema;
}

/** @internal */
export const GetConfigurableLogDrainSources$inboundSchema: z.ZodNativeEnum<
    typeof GetConfigurableLogDrainSources
> = z.nativeEnum(GetConfigurableLogDrainSources);

/** @internal */
export const GetConfigurableLogDrainSources$outboundSchema: z.ZodNativeEnum<
    typeof GetConfigurableLogDrainSources
> = GetConfigurableLogDrainSources$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConfigurableLogDrainSources$ {
    /** @deprecated use `GetConfigurableLogDrainSources$inboundSchema` instead. */
    export const inboundSchema = GetConfigurableLogDrainSources$inboundSchema;
    /** @deprecated use `GetConfigurableLogDrainSources$outboundSchema` instead. */
    export const outboundSchema = GetConfigurableLogDrainSources$outboundSchema;
}

/** @internal */
export const GetConfigurableLogDrainEnvironments$inboundSchema: z.ZodNativeEnum<
    typeof GetConfigurableLogDrainEnvironments
> = z.nativeEnum(GetConfigurableLogDrainEnvironments);

/** @internal */
export const GetConfigurableLogDrainEnvironments$outboundSchema: z.ZodNativeEnum<
    typeof GetConfigurableLogDrainEnvironments
> = GetConfigurableLogDrainEnvironments$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConfigurableLogDrainEnvironments$ {
    /** @deprecated use `GetConfigurableLogDrainEnvironments$inboundSchema` instead. */
    export const inboundSchema = GetConfigurableLogDrainEnvironments$inboundSchema;
    /** @deprecated use `GetConfigurableLogDrainEnvironments$outboundSchema` instead. */
    export const outboundSchema = GetConfigurableLogDrainEnvironments$outboundSchema;
}

/** @internal */
export const GetConfigurableLogDrainStatus$inboundSchema: z.ZodNativeEnum<
    typeof GetConfigurableLogDrainStatus
> = z.nativeEnum(GetConfigurableLogDrainStatus);

/** @internal */
export const GetConfigurableLogDrainStatus$outboundSchema: z.ZodNativeEnum<
    typeof GetConfigurableLogDrainStatus
> = GetConfigurableLogDrainStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConfigurableLogDrainStatus$ {
    /** @deprecated use `GetConfigurableLogDrainStatus$inboundSchema` instead. */
    export const inboundSchema = GetConfigurableLogDrainStatus$inboundSchema;
    /** @deprecated use `GetConfigurableLogDrainStatus$outboundSchema` instead. */
    export const outboundSchema = GetConfigurableLogDrainStatus$outboundSchema;
}

/** @internal */
export const DisabledReason$inboundSchema: z.ZodNativeEnum<typeof DisabledReason> =
    z.nativeEnum(DisabledReason);

/** @internal */
export const DisabledReason$outboundSchema: z.ZodNativeEnum<typeof DisabledReason> =
    DisabledReason$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DisabledReason$ {
    /** @deprecated use `DisabledReason$inboundSchema` instead. */
    export const inboundSchema = DisabledReason$inboundSchema;
    /** @deprecated use `DisabledReason$outboundSchema` instead. */
    export const outboundSchema = DisabledReason$outboundSchema;
}

/** @internal */
export const Compression$inboundSchema: z.ZodNativeEnum<typeof Compression> =
    z.nativeEnum(Compression);

/** @internal */
export const Compression$outboundSchema: z.ZodNativeEnum<typeof Compression> =
    Compression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Compression$ {
    /** @deprecated use `Compression$inboundSchema` instead. */
    export const inboundSchema = Compression$inboundSchema;
    /** @deprecated use `Compression$outboundSchema` instead. */
    export const outboundSchema = Compression$outboundSchema;
}

/** @internal */
export const GetConfigurableLogDrainCreatedFrom$inboundSchema: z.ZodNativeEnum<
    typeof GetConfigurableLogDrainCreatedFrom
> = z.nativeEnum(GetConfigurableLogDrainCreatedFrom);

/** @internal */
export const GetConfigurableLogDrainCreatedFrom$outboundSchema: z.ZodNativeEnum<
    typeof GetConfigurableLogDrainCreatedFrom
> = GetConfigurableLogDrainCreatedFrom$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConfigurableLogDrainCreatedFrom$ {
    /** @deprecated use `GetConfigurableLogDrainCreatedFrom$inboundSchema` instead. */
    export const inboundSchema = GetConfigurableLogDrainCreatedFrom$inboundSchema;
    /** @deprecated use `GetConfigurableLogDrainCreatedFrom$outboundSchema` instead. */
    export const outboundSchema = GetConfigurableLogDrainCreatedFrom$outboundSchema;
}

/** @internal */
export const GetConfigurableLogDrainResponseBody$inboundSchema: z.ZodType<
    GetConfigurableLogDrainResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    deliveryFormat: GetConfigurableLogDrainDeliveryFormat$inboundSchema,
    url: z.string(),
    name: z.string(),
    clientId: z.string().optional(),
    configurationId: z.string().optional(),
    teamId: z.nullable(z.string()).optional(),
    ownerId: z.string(),
    projectIds: z.array(z.string()).optional(),
    createdAt: z.number(),
    sources: z.array(GetConfigurableLogDrainSources$inboundSchema).optional(),
    headers: z.record(z.string()).optional(),
    environments: z.array(GetConfigurableLogDrainEnvironments$inboundSchema),
    status: GetConfigurableLogDrainStatus$inboundSchema.optional(),
    disabledAt: z.number().optional(),
    disabledReason: DisabledReason$inboundSchema.optional(),
    disabledBy: z.string().optional(),
    firstErrorTimestamp: z.number().optional(),
    samplingRate: z.number().optional(),
    compression: Compression$inboundSchema.optional(),
    secret: z.string(),
    createdFrom: GetConfigurableLogDrainCreatedFrom$inboundSchema.optional(),
});

/** @internal */
export type GetConfigurableLogDrainResponseBody$Outbound = {
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
export const GetConfigurableLogDrainResponseBody$outboundSchema: z.ZodType<
    GetConfigurableLogDrainResponseBody$Outbound,
    z.ZodTypeDef,
    GetConfigurableLogDrainResponseBody
> = z.object({
    id: z.string(),
    deliveryFormat: GetConfigurableLogDrainDeliveryFormat$outboundSchema,
    url: z.string(),
    name: z.string(),
    clientId: z.string().optional(),
    configurationId: z.string().optional(),
    teamId: z.nullable(z.string()).optional(),
    ownerId: z.string(),
    projectIds: z.array(z.string()).optional(),
    createdAt: z.number(),
    sources: z.array(GetConfigurableLogDrainSources$outboundSchema).optional(),
    headers: z.record(z.string()).optional(),
    environments: z.array(GetConfigurableLogDrainEnvironments$outboundSchema),
    status: GetConfigurableLogDrainStatus$outboundSchema.optional(),
    disabledAt: z.number().optional(),
    disabledReason: DisabledReason$outboundSchema.optional(),
    disabledBy: z.string().optional(),
    firstErrorTimestamp: z.number().optional(),
    samplingRate: z.number().optional(),
    compression: Compression$outboundSchema.optional(),
    secret: z.string(),
    createdFrom: GetConfigurableLogDrainCreatedFrom$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConfigurableLogDrainResponseBody$ {
    /** @deprecated use `GetConfigurableLogDrainResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetConfigurableLogDrainResponseBody$inboundSchema;
    /** @deprecated use `GetConfigurableLogDrainResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetConfigurableLogDrainResponseBody$outboundSchema;
    /** @deprecated use `GetConfigurableLogDrainResponseBody$Outbound` instead. */
    export type Outbound = GetConfigurableLogDrainResponseBody$Outbound;
}
