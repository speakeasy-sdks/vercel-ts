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
export namespace GetAllLogDrainsRequest$ {
    export const inboundSchema: z.ZodType<GetAllLogDrainsRequest, z.ZodTypeDef, unknown> = z.object(
        {
            projectId: z.string().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        }
    );

    export type Outbound = {
        projectId?: string | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllLogDrainsRequest> =
        z.object({
            projectId: z.string().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        });
}

/** @internal */
export namespace GetAllLogDrainsDeliveryFormat$ {
    export const inboundSchema = z.nativeEnum(GetAllLogDrainsDeliveryFormat);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetAllLogDrainsSources$ {
    export const inboundSchema = z.nativeEnum(GetAllLogDrainsSources);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetAllLogDrainsEnvironments$ {
    export const inboundSchema = z.nativeEnum(GetAllLogDrainsEnvironments);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetAllLogDrainsStatus$ {
    export const inboundSchema = z.nativeEnum(GetAllLogDrainsStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetAllLogDrainsDisabledReason$ {
    export const inboundSchema = z.nativeEnum(GetAllLogDrainsDisabledReason);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetAllLogDrainsCompression$ {
    export const inboundSchema = z.nativeEnum(GetAllLogDrainsCompression);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetAllLogDrainsCreatedFrom$ {
    export const inboundSchema = z.nativeEnum(GetAllLogDrainsCreatedFrom);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetAllLogDrainsResponseBody$ {
    export const inboundSchema: z.ZodType<GetAllLogDrainsResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
            deliveryFormat: GetAllLogDrainsDeliveryFormat$.inboundSchema,
            url: z.string(),
            name: z.string(),
            clientId: z.string().optional(),
            configurationId: z.string().optional(),
            teamId: z.nullable(z.string()).optional(),
            ownerId: z.string(),
            projectIds: z.array(z.string()).optional(),
            createdAt: z.number(),
            sources: z.array(GetAllLogDrainsSources$.inboundSchema).optional(),
            headers: z.record(z.string()).optional(),
            environments: z.array(GetAllLogDrainsEnvironments$.inboundSchema),
            status: GetAllLogDrainsStatus$.inboundSchema.optional(),
            disabledAt: z.number().optional(),
            disabledReason: GetAllLogDrainsDisabledReason$.inboundSchema.optional(),
            disabledBy: z.string().optional(),
            firstErrorTimestamp: z.number().optional(),
            samplingRate: z.number().optional(),
            compression: GetAllLogDrainsCompression$.inboundSchema.optional(),
            secret: z.string(),
            createdFrom: GetAllLogDrainsCreatedFrom$.inboundSchema.optional(),
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllLogDrainsResponseBody> =
        z.object({
            id: z.string(),
            deliveryFormat: GetAllLogDrainsDeliveryFormat$.outboundSchema,
            url: z.string(),
            name: z.string(),
            clientId: z.string().optional(),
            configurationId: z.string().optional(),
            teamId: z.nullable(z.string()).optional(),
            ownerId: z.string(),
            projectIds: z.array(z.string()).optional(),
            createdAt: z.number(),
            sources: z.array(GetAllLogDrainsSources$.outboundSchema).optional(),
            headers: z.record(z.string()).optional(),
            environments: z.array(GetAllLogDrainsEnvironments$.outboundSchema),
            status: GetAllLogDrainsStatus$.outboundSchema.optional(),
            disabledAt: z.number().optional(),
            disabledReason: GetAllLogDrainsDisabledReason$.outboundSchema.optional(),
            disabledBy: z.string().optional(),
            firstErrorTimestamp: z.number().optional(),
            samplingRate: z.number().optional(),
            compression: GetAllLogDrainsCompression$.outboundSchema.optional(),
            secret: z.string(),
            createdFrom: GetAllLogDrainsCreatedFrom$.outboundSchema.optional(),
        });
}
