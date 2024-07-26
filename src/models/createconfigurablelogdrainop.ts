/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import { ClosedEnum } from "../types/enums.js";
import * as z from "zod";

/**
 * The delivery log format
 */
export const CreateConfigurableLogDrainDeliveryFormat = {
    Json: "json",
    Ndjson: "ndjson",
} as const;
/**
 * The delivery log format
 */
export type CreateConfigurableLogDrainDeliveryFormat = ClosedEnum<
    typeof CreateConfigurableLogDrainDeliveryFormat
>;

export const CreateConfigurableLogDrainSources = {
    Static: "static",
    Lambda: "lambda",
    Build: "build",
    Edge: "edge",
    External: "external",
} as const;
export type CreateConfigurableLogDrainSources = ClosedEnum<
    typeof CreateConfigurableLogDrainSources
>;

export const CreateConfigurableLogDrainEnvironments = {
    Preview: "preview",
    Production: "production",
} as const;
export type CreateConfigurableLogDrainEnvironments = ClosedEnum<
    typeof CreateConfigurableLogDrainEnvironments
>;

export type CreateConfigurableLogDrainRequestBody = {
    /**
     * The delivery log format
     */
    deliveryFormat: CreateConfigurableLogDrainDeliveryFormat;
    /**
     * The log drain url
     */
    url: string;
    /**
     * Headers to be sent together with the request
     */
    headers?: { [k: string]: string } | undefined;
    projectIds?: Array<string> | undefined;
    sources: Array<CreateConfigurableLogDrainSources>;
    environments?: Array<CreateConfigurableLogDrainEnvironments> | undefined;
    /**
     * Custom secret of log drain
     */
    secret?: string | undefined;
    /**
     * The sampling rate for this log drain. It should be a percentage rate between 0 and 100. With max 2 decimal points
     */
    samplingRate?: number | undefined;
};

export type CreateConfigurableLogDrainRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateConfigurableLogDrainRequestBody | undefined;
};

export const CreateConfigurableLogDrainLogDrainsDeliveryFormat = {
    Json: "json",
    Ndjson: "ndjson",
    Syslog: "syslog",
} as const;
export type CreateConfigurableLogDrainLogDrainsDeliveryFormat = ClosedEnum<
    typeof CreateConfigurableLogDrainLogDrainsDeliveryFormat
>;

export const CreateConfigurableLogDrainLogDrainsSources = {
    Build: "build",
    Edge: "edge",
    Lambda: "lambda",
    Static: "static",
    External: "external",
} as const;
export type CreateConfigurableLogDrainLogDrainsSources = ClosedEnum<
    typeof CreateConfigurableLogDrainLogDrainsSources
>;

export const CreateConfigurableLogDrainLogDrainsEnvironments = {
    Production: "production",
    Preview: "preview",
} as const;
export type CreateConfigurableLogDrainLogDrainsEnvironments = ClosedEnum<
    typeof CreateConfigurableLogDrainLogDrainsEnvironments
>;

export const CreateConfigurableLogDrainStatus = {
    Enabled: "enabled",
    Disabled: "disabled",
    Errored: "errored",
} as const;
export type CreateConfigurableLogDrainStatus = ClosedEnum<typeof CreateConfigurableLogDrainStatus>;

export const CreateConfigurableLogDrainDisabledReason = {
    DisabledByOwner: "disabled-by-owner",
    FeatureNotAvailable: "feature-not-available",
    DisabledByAdmin: "disabled-by-admin",
} as const;
export type CreateConfigurableLogDrainDisabledReason = ClosedEnum<
    typeof CreateConfigurableLogDrainDisabledReason
>;

export const CreateConfigurableLogDrainCompression = {
    Gzip: "gzip",
    Zstd: "zstd",
    None: "none",
} as const;
export type CreateConfigurableLogDrainCompression = ClosedEnum<
    typeof CreateConfigurableLogDrainCompression
>;

export const CreateConfigurableLogDrainCreatedFrom = {
    SelfServed: "self-served",
} as const;
export type CreateConfigurableLogDrainCreatedFrom = ClosedEnum<
    typeof CreateConfigurableLogDrainCreatedFrom
>;

export type CreateConfigurableLogDrainResponseBody = {
    /**
     * The secret to validate the log-drain payload
     */
    secret?: string | undefined;
    id: string;
    deliveryFormat: CreateConfigurableLogDrainLogDrainsDeliveryFormat;
    url: string;
    name: string;
    clientId?: string | undefined;
    configurationId?: string | undefined;
    teamId?: string | null | undefined;
    ownerId: string;
    projectIds?: Array<string> | undefined;
    createdAt: number;
    sources?: Array<CreateConfigurableLogDrainLogDrainsSources> | undefined;
    headers?: { [k: string]: string } | undefined;
    environments: Array<CreateConfigurableLogDrainLogDrainsEnvironments>;
    status?: CreateConfigurableLogDrainStatus | undefined;
    disabledAt?: number | undefined;
    disabledReason?: CreateConfigurableLogDrainDisabledReason | undefined;
    disabledBy?: string | undefined;
    firstErrorTimestamp?: number | undefined;
    samplingRate?: number | undefined;
    compression?: CreateConfigurableLogDrainCompression | undefined;
    createdFrom?: CreateConfigurableLogDrainCreatedFrom | undefined;
};

/** @internal */
export const CreateConfigurableLogDrainDeliveryFormat$inboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainDeliveryFormat
> = z.nativeEnum(CreateConfigurableLogDrainDeliveryFormat);

/** @internal */
export const CreateConfigurableLogDrainDeliveryFormat$outboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainDeliveryFormat
> = CreateConfigurableLogDrainDeliveryFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainDeliveryFormat$ {
    /** @deprecated use `CreateConfigurableLogDrainDeliveryFormat$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainDeliveryFormat$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainDeliveryFormat$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainDeliveryFormat$outboundSchema;
}

/** @internal */
export const CreateConfigurableLogDrainSources$inboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainSources
> = z.nativeEnum(CreateConfigurableLogDrainSources);

/** @internal */
export const CreateConfigurableLogDrainSources$outboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainSources
> = CreateConfigurableLogDrainSources$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainSources$ {
    /** @deprecated use `CreateConfigurableLogDrainSources$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainSources$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainSources$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainSources$outboundSchema;
}

/** @internal */
export const CreateConfigurableLogDrainEnvironments$inboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainEnvironments
> = z.nativeEnum(CreateConfigurableLogDrainEnvironments);

/** @internal */
export const CreateConfigurableLogDrainEnvironments$outboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainEnvironments
> = CreateConfigurableLogDrainEnvironments$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainEnvironments$ {
    /** @deprecated use `CreateConfigurableLogDrainEnvironments$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainEnvironments$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainEnvironments$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainEnvironments$outboundSchema;
}

/** @internal */
export const CreateConfigurableLogDrainRequestBody$inboundSchema: z.ZodType<
    CreateConfigurableLogDrainRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    deliveryFormat: CreateConfigurableLogDrainDeliveryFormat$inboundSchema,
    url: z.string(),
    headers: z.record(z.string()).optional(),
    projectIds: z.array(z.string()).optional(),
    sources: z.array(CreateConfigurableLogDrainSources$inboundSchema),
    environments: z.array(CreateConfigurableLogDrainEnvironments$inboundSchema).optional(),
    secret: z.string().optional(),
    samplingRate: z.number().optional(),
});

/** @internal */
export type CreateConfigurableLogDrainRequestBody$Outbound = {
    deliveryFormat: string;
    url: string;
    headers?: { [k: string]: string } | undefined;
    projectIds?: Array<string> | undefined;
    sources: Array<string>;
    environments?: Array<string> | undefined;
    secret?: string | undefined;
    samplingRate?: number | undefined;
};

/** @internal */
export const CreateConfigurableLogDrainRequestBody$outboundSchema: z.ZodType<
    CreateConfigurableLogDrainRequestBody$Outbound,
    z.ZodTypeDef,
    CreateConfigurableLogDrainRequestBody
> = z.object({
    deliveryFormat: CreateConfigurableLogDrainDeliveryFormat$outboundSchema,
    url: z.string(),
    headers: z.record(z.string()).optional(),
    projectIds: z.array(z.string()).optional(),
    sources: z.array(CreateConfigurableLogDrainSources$outboundSchema),
    environments: z.array(CreateConfigurableLogDrainEnvironments$outboundSchema).optional(),
    secret: z.string().optional(),
    samplingRate: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainRequestBody$ {
    /** @deprecated use `CreateConfigurableLogDrainRequestBody$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainRequestBody$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainRequestBody$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainRequestBody$outboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainRequestBody$Outbound` instead. */
    export type Outbound = CreateConfigurableLogDrainRequestBody$Outbound;
}

/** @internal */
export const CreateConfigurableLogDrainRequest$inboundSchema: z.ZodType<
    CreateConfigurableLogDrainRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        teamId: z.string().optional(),
        slug: z.string().optional(),
        RequestBody: z.lazy(() => CreateConfigurableLogDrainRequestBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type CreateConfigurableLogDrainRequest$Outbound = {
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: CreateConfigurableLogDrainRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateConfigurableLogDrainRequest$outboundSchema: z.ZodType<
    CreateConfigurableLogDrainRequest$Outbound,
    z.ZodTypeDef,
    CreateConfigurableLogDrainRequest
> = z
    .object({
        teamId: z.string().optional(),
        slug: z.string().optional(),
        requestBody: z.lazy(() => CreateConfigurableLogDrainRequestBody$outboundSchema).optional(),
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
export namespace CreateConfigurableLogDrainRequest$ {
    /** @deprecated use `CreateConfigurableLogDrainRequest$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainRequest$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainRequest$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainRequest$outboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainRequest$Outbound` instead. */
    export type Outbound = CreateConfigurableLogDrainRequest$Outbound;
}

/** @internal */
export const CreateConfigurableLogDrainLogDrainsDeliveryFormat$inboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainLogDrainsDeliveryFormat
> = z.nativeEnum(CreateConfigurableLogDrainLogDrainsDeliveryFormat);

/** @internal */
export const CreateConfigurableLogDrainLogDrainsDeliveryFormat$outboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainLogDrainsDeliveryFormat
> = CreateConfigurableLogDrainLogDrainsDeliveryFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainLogDrainsDeliveryFormat$ {
    /** @deprecated use `CreateConfigurableLogDrainLogDrainsDeliveryFormat$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainLogDrainsDeliveryFormat$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainLogDrainsDeliveryFormat$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainLogDrainsDeliveryFormat$outboundSchema;
}

/** @internal */
export const CreateConfigurableLogDrainLogDrainsSources$inboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainLogDrainsSources
> = z.nativeEnum(CreateConfigurableLogDrainLogDrainsSources);

/** @internal */
export const CreateConfigurableLogDrainLogDrainsSources$outboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainLogDrainsSources
> = CreateConfigurableLogDrainLogDrainsSources$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainLogDrainsSources$ {
    /** @deprecated use `CreateConfigurableLogDrainLogDrainsSources$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainLogDrainsSources$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainLogDrainsSources$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainLogDrainsSources$outboundSchema;
}

/** @internal */
export const CreateConfigurableLogDrainLogDrainsEnvironments$inboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainLogDrainsEnvironments
> = z.nativeEnum(CreateConfigurableLogDrainLogDrainsEnvironments);

/** @internal */
export const CreateConfigurableLogDrainLogDrainsEnvironments$outboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainLogDrainsEnvironments
> = CreateConfigurableLogDrainLogDrainsEnvironments$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainLogDrainsEnvironments$ {
    /** @deprecated use `CreateConfigurableLogDrainLogDrainsEnvironments$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainLogDrainsEnvironments$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainLogDrainsEnvironments$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainLogDrainsEnvironments$outboundSchema;
}

/** @internal */
export const CreateConfigurableLogDrainStatus$inboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainStatus
> = z.nativeEnum(CreateConfigurableLogDrainStatus);

/** @internal */
export const CreateConfigurableLogDrainStatus$outboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainStatus
> = CreateConfigurableLogDrainStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainStatus$ {
    /** @deprecated use `CreateConfigurableLogDrainStatus$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainStatus$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainStatus$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainStatus$outboundSchema;
}

/** @internal */
export const CreateConfigurableLogDrainDisabledReason$inboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainDisabledReason
> = z.nativeEnum(CreateConfigurableLogDrainDisabledReason);

/** @internal */
export const CreateConfigurableLogDrainDisabledReason$outboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainDisabledReason
> = CreateConfigurableLogDrainDisabledReason$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainDisabledReason$ {
    /** @deprecated use `CreateConfigurableLogDrainDisabledReason$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainDisabledReason$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainDisabledReason$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainDisabledReason$outboundSchema;
}

/** @internal */
export const CreateConfigurableLogDrainCompression$inboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainCompression
> = z.nativeEnum(CreateConfigurableLogDrainCompression);

/** @internal */
export const CreateConfigurableLogDrainCompression$outboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainCompression
> = CreateConfigurableLogDrainCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainCompression$ {
    /** @deprecated use `CreateConfigurableLogDrainCompression$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainCompression$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainCompression$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainCompression$outboundSchema;
}

/** @internal */
export const CreateConfigurableLogDrainCreatedFrom$inboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainCreatedFrom
> = z.nativeEnum(CreateConfigurableLogDrainCreatedFrom);

/** @internal */
export const CreateConfigurableLogDrainCreatedFrom$outboundSchema: z.ZodNativeEnum<
    typeof CreateConfigurableLogDrainCreatedFrom
> = CreateConfigurableLogDrainCreatedFrom$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainCreatedFrom$ {
    /** @deprecated use `CreateConfigurableLogDrainCreatedFrom$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainCreatedFrom$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainCreatedFrom$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainCreatedFrom$outboundSchema;
}

/** @internal */
export const CreateConfigurableLogDrainResponseBody$inboundSchema: z.ZodType<
    CreateConfigurableLogDrainResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    secret: z.string().optional(),
    id: z.string(),
    deliveryFormat: CreateConfigurableLogDrainLogDrainsDeliveryFormat$inboundSchema,
    url: z.string(),
    name: z.string(),
    clientId: z.string().optional(),
    configurationId: z.string().optional(),
    teamId: z.nullable(z.string()).optional(),
    ownerId: z.string(),
    projectIds: z.array(z.string()).optional(),
    createdAt: z.number(),
    sources: z.array(CreateConfigurableLogDrainLogDrainsSources$inboundSchema).optional(),
    headers: z.record(z.string()).optional(),
    environments: z.array(CreateConfigurableLogDrainLogDrainsEnvironments$inboundSchema),
    status: CreateConfigurableLogDrainStatus$inboundSchema.optional(),
    disabledAt: z.number().optional(),
    disabledReason: CreateConfigurableLogDrainDisabledReason$inboundSchema.optional(),
    disabledBy: z.string().optional(),
    firstErrorTimestamp: z.number().optional(),
    samplingRate: z.number().optional(),
    compression: CreateConfigurableLogDrainCompression$inboundSchema.optional(),
    createdFrom: CreateConfigurableLogDrainCreatedFrom$inboundSchema.optional(),
});

/** @internal */
export type CreateConfigurableLogDrainResponseBody$Outbound = {
    secret?: string | undefined;
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
    createdFrom?: string | undefined;
};

/** @internal */
export const CreateConfigurableLogDrainResponseBody$outboundSchema: z.ZodType<
    CreateConfigurableLogDrainResponseBody$Outbound,
    z.ZodTypeDef,
    CreateConfigurableLogDrainResponseBody
> = z.object({
    secret: z.string().optional(),
    id: z.string(),
    deliveryFormat: CreateConfigurableLogDrainLogDrainsDeliveryFormat$outboundSchema,
    url: z.string(),
    name: z.string(),
    clientId: z.string().optional(),
    configurationId: z.string().optional(),
    teamId: z.nullable(z.string()).optional(),
    ownerId: z.string(),
    projectIds: z.array(z.string()).optional(),
    createdAt: z.number(),
    sources: z.array(CreateConfigurableLogDrainLogDrainsSources$outboundSchema).optional(),
    headers: z.record(z.string()).optional(),
    environments: z.array(CreateConfigurableLogDrainLogDrainsEnvironments$outboundSchema),
    status: CreateConfigurableLogDrainStatus$outboundSchema.optional(),
    disabledAt: z.number().optional(),
    disabledReason: CreateConfigurableLogDrainDisabledReason$outboundSchema.optional(),
    disabledBy: z.string().optional(),
    firstErrorTimestamp: z.number().optional(),
    samplingRate: z.number().optional(),
    compression: CreateConfigurableLogDrainCompression$outboundSchema.optional(),
    createdFrom: CreateConfigurableLogDrainCreatedFrom$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateConfigurableLogDrainResponseBody$ {
    /** @deprecated use `CreateConfigurableLogDrainResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateConfigurableLogDrainResponseBody$inboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateConfigurableLogDrainResponseBody$outboundSchema;
    /** @deprecated use `CreateConfigurableLogDrainResponseBody$Outbound` instead. */
    export type Outbound = CreateConfigurableLogDrainResponseBody$Outbound;
}
