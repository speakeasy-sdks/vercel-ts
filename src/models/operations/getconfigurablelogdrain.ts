/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
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
    headers?: Record<string, string> | undefined;
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

export type GetConfigurableLogDrainResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetConfigurableLogDrainResponseBody | undefined;
};

/** @internal */
export namespace GetConfigurableLogDrainRequest$ {
    export const inboundSchema: z.ZodType<GetConfigurableLogDrainRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        id: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetConfigurableLogDrainRequest> =
        z
            .object({
                id: z.string(),
                teamId: z.string().optional(),
                slug: z.string().optional(),
            })
            .transform((v) => {
                return {
                    id: v.id,
                    ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                    ...(v.slug === undefined ? null : { slug: v.slug }),
                };
            });
}

/** @internal */
export namespace GetConfigurableLogDrainDeliveryFormat$ {
    export const inboundSchema = z.nativeEnum(GetConfigurableLogDrainDeliveryFormat);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetConfigurableLogDrainSources$ {
    export const inboundSchema = z.nativeEnum(GetConfigurableLogDrainSources);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetConfigurableLogDrainEnvironments$ {
    export const inboundSchema = z.nativeEnum(GetConfigurableLogDrainEnvironments);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetConfigurableLogDrainStatus$ {
    export const inboundSchema = z.nativeEnum(GetConfigurableLogDrainStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace DisabledReason$ {
    export const inboundSchema = z.nativeEnum(DisabledReason);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Compression$ {
    export const inboundSchema = z.nativeEnum(Compression);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetConfigurableLogDrainCreatedFrom$ {
    export const inboundSchema = z.nativeEnum(GetConfigurableLogDrainCreatedFrom);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetConfigurableLogDrainResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetConfigurableLogDrainResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            id: z.string(),
            deliveryFormat: GetConfigurableLogDrainDeliveryFormat$.inboundSchema,
            url: z.string(),
            name: z.string(),
            clientId: z.string().optional(),
            configurationId: z.string().optional(),
            teamId: z.nullable(z.string()).optional(),
            ownerId: z.string(),
            projectIds: z.array(z.string()).optional(),
            createdAt: z.number(),
            sources: z.array(GetConfigurableLogDrainSources$.inboundSchema).optional(),
            headers: z.record(z.string()).optional(),
            environments: z.array(GetConfigurableLogDrainEnvironments$.inboundSchema),
            status: GetConfigurableLogDrainStatus$.inboundSchema.optional(),
            disabledAt: z.number().optional(),
            disabledReason: DisabledReason$.inboundSchema.optional(),
            disabledBy: z.string().optional(),
            firstErrorTimestamp: z.number().optional(),
            samplingRate: z.number().optional(),
            compression: Compression$.inboundSchema.optional(),
            secret: z.string(),
            createdFrom: GetConfigurableLogDrainCreatedFrom$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                deliveryFormat: v.deliveryFormat,
                url: v.url,
                name: v.name,
                ...(v.clientId === undefined ? null : { clientId: v.clientId }),
                ...(v.configurationId === undefined
                    ? null
                    : { configurationId: v.configurationId }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ownerId: v.ownerId,
                ...(v.projectIds === undefined ? null : { projectIds: v.projectIds }),
                createdAt: v.createdAt,
                ...(v.sources === undefined ? null : { sources: v.sources }),
                ...(v.headers === undefined ? null : { headers: v.headers }),
                environments: v.environments,
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.disabledAt === undefined ? null : { disabledAt: v.disabledAt }),
                ...(v.disabledReason === undefined ? null : { disabledReason: v.disabledReason }),
                ...(v.disabledBy === undefined ? null : { disabledBy: v.disabledBy }),
                ...(v.firstErrorTimestamp === undefined
                    ? null
                    : { firstErrorTimestamp: v.firstErrorTimestamp }),
                ...(v.samplingRate === undefined ? null : { samplingRate: v.samplingRate }),
                ...(v.compression === undefined ? null : { compression: v.compression }),
                secret: v.secret,
                ...(v.createdFrom === undefined ? null : { createdFrom: v.createdFrom }),
            };
        });

    export type Outbound = {
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
        headers?: Record<string, string> | undefined;
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetConfigurableLogDrainResponseBody
    > = z
        .object({
            id: z.string(),
            deliveryFormat: GetConfigurableLogDrainDeliveryFormat$.outboundSchema,
            url: z.string(),
            name: z.string(),
            clientId: z.string().optional(),
            configurationId: z.string().optional(),
            teamId: z.nullable(z.string()).optional(),
            ownerId: z.string(),
            projectIds: z.array(z.string()).optional(),
            createdAt: z.number(),
            sources: z.array(GetConfigurableLogDrainSources$.outboundSchema).optional(),
            headers: z.record(z.string()).optional(),
            environments: z.array(GetConfigurableLogDrainEnvironments$.outboundSchema),
            status: GetConfigurableLogDrainStatus$.outboundSchema.optional(),
            disabledAt: z.number().optional(),
            disabledReason: DisabledReason$.outboundSchema.optional(),
            disabledBy: z.string().optional(),
            firstErrorTimestamp: z.number().optional(),
            samplingRate: z.number().optional(),
            compression: Compression$.outboundSchema.optional(),
            secret: z.string(),
            createdFrom: GetConfigurableLogDrainCreatedFrom$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                deliveryFormat: v.deliveryFormat,
                url: v.url,
                name: v.name,
                ...(v.clientId === undefined ? null : { clientId: v.clientId }),
                ...(v.configurationId === undefined
                    ? null
                    : { configurationId: v.configurationId }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ownerId: v.ownerId,
                ...(v.projectIds === undefined ? null : { projectIds: v.projectIds }),
                createdAt: v.createdAt,
                ...(v.sources === undefined ? null : { sources: v.sources }),
                ...(v.headers === undefined ? null : { headers: v.headers }),
                environments: v.environments,
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.disabledAt === undefined ? null : { disabledAt: v.disabledAt }),
                ...(v.disabledReason === undefined ? null : { disabledReason: v.disabledReason }),
                ...(v.disabledBy === undefined ? null : { disabledBy: v.disabledBy }),
                ...(v.firstErrorTimestamp === undefined
                    ? null
                    : { firstErrorTimestamp: v.firstErrorTimestamp }),
                ...(v.samplingRate === undefined ? null : { samplingRate: v.samplingRate }),
                ...(v.compression === undefined ? null : { compression: v.compression }),
                secret: v.secret,
                ...(v.createdFrom === undefined ? null : { createdFrom: v.createdFrom }),
            };
        });
}

/** @internal */
export namespace GetConfigurableLogDrainResponse$ {
    export const inboundSchema: z.ZodType<GetConfigurableLogDrainResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                object: z.lazy(() => GetConfigurableLogDrainResponseBody$.inboundSchema).optional(),
            })
            .transform((v) => {
                return {
                    httpMeta: v.HttpMeta,
                    ...(v.object === undefined ? null : { object: v.object }),
                };
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetConfigurableLogDrainResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetConfigurableLogDrainResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetConfigurableLogDrainResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
