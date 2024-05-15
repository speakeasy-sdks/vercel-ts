/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetIntegrationLogDrainsRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

/**
 * The delivery log format
 */
export enum GetIntegrationLogDrainsDeliveryFormat {
    Json = "json",
    Ndjson = "ndjson",
    Syslog = "syslog",
}

/**
 * The sources from which logs are currently being delivered to this log drain.
 */
export enum GetIntegrationLogDrainsSources {
    Build = "build",
    Edge = "edge",
    Lambda = "lambda",
    Static = "static",
    External = "external",
}

/**
 * Whether the log drain was created by an integration or by a user
 */
export enum CreatedFrom {
    SelfServed = "self-served",
    Integration = "integration",
}

/**
 * The environment of log drain
 */
export enum GetIntegrationLogDrainsEnvironments {
    Production = "production",
    Preview = "preview",
}

export type GetIntegrationLogDrainsResponseBody = {
    /**
     * The oauth2 client application id that created this log drain
     */
    clientId?: string | undefined;
    /**
     * The client configuration this log drain was created with
     */
    configurationId?: string | undefined;
    /**
     * A timestamp that tells you when the log drain was created
     */
    createdAt: number;
    /**
     * The unique identifier of the log drain. Always prefixed with `ld_`
     */
    id: string;
    /**
     * The delivery log format
     */
    deliveryFormat?: GetIntegrationLogDrainsDeliveryFormat | undefined;
    /**
     * The name of the log drain
     */
    name: string;
    /**
     * The identifier of the team or user whose events will trigger the log drain
     */
    ownerId: string;
    projectId?: string | null | undefined;
    /**
     * The identifier of the projects this log drain is associated with
     */
    projectIds?: Array<string> | undefined;
    /**
     * The URL to call when logs are generated
     */
    url: string;
    /**
     * The sources from which logs are currently being delivered to this log drain.
     */
    sources?: Array<GetIntegrationLogDrainsSources> | undefined;
    /**
     * Whether the log drain was created by an integration or by a user
     */
    createdFrom?: CreatedFrom | undefined;
    /**
     * The headers to send with the request
     */
    headers?: Record<string, string> | undefined;
    /**
     * The environment of log drain
     */
    environments: Array<GetIntegrationLogDrainsEnvironments>;
    /**
     * The branch regexp of log drain
     */
    branch?: string | undefined;
    /**
     * The sampling rate of log drain
     */
    samplingRate?: number | undefined;
};

export type GetIntegrationLogDrainsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * A list of log drains
     */
    responseBodies?: Array<GetIntegrationLogDrainsResponseBody> | undefined;
};

/** @internal */
export namespace GetIntegrationLogDrainsRequest$ {
    export const inboundSchema: z.ZodType<GetIntegrationLogDrainsRequest, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIntegrationLogDrainsRequest> =
        z
            .object({
                teamId: z.string().optional(),
                slug: z.string().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                    ...(v.slug === undefined ? null : { slug: v.slug }),
                };
            });
}

/** @internal */
export const GetIntegrationLogDrainsDeliveryFormat$: z.ZodNativeEnum<
    typeof GetIntegrationLogDrainsDeliveryFormat
> = z.nativeEnum(GetIntegrationLogDrainsDeliveryFormat);

/** @internal */
export const GetIntegrationLogDrainsSources$: z.ZodNativeEnum<
    typeof GetIntegrationLogDrainsSources
> = z.nativeEnum(GetIntegrationLogDrainsSources);

/** @internal */
export const CreatedFrom$: z.ZodNativeEnum<typeof CreatedFrom> = z.nativeEnum(CreatedFrom);

/** @internal */
export const GetIntegrationLogDrainsEnvironments$: z.ZodNativeEnum<
    typeof GetIntegrationLogDrainsEnvironments
> = z.nativeEnum(GetIntegrationLogDrainsEnvironments);

/** @internal */
export namespace GetIntegrationLogDrainsResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetIntegrationLogDrainsResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            clientId: z.string().optional(),
            configurationId: z.string().optional(),
            createdAt: z.number(),
            id: z.string(),
            deliveryFormat: GetIntegrationLogDrainsDeliveryFormat$.optional(),
            name: z.string(),
            ownerId: z.string(),
            projectId: z.nullable(z.string()).optional(),
            projectIds: z.array(z.string()).optional(),
            url: z.string(),
            sources: z.array(GetIntegrationLogDrainsSources$).optional(),
            createdFrom: CreatedFrom$.optional(),
            headers: z.record(z.string()).optional(),
            environments: z.array(GetIntegrationLogDrainsEnvironments$),
            branch: z.string().optional(),
            samplingRate: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.clientId === undefined ? null : { clientId: v.clientId }),
                ...(v.configurationId === undefined
                    ? null
                    : { configurationId: v.configurationId }),
                createdAt: v.createdAt,
                id: v.id,
                ...(v.deliveryFormat === undefined ? null : { deliveryFormat: v.deliveryFormat }),
                name: v.name,
                ownerId: v.ownerId,
                ...(v.projectId === undefined ? null : { projectId: v.projectId }),
                ...(v.projectIds === undefined ? null : { projectIds: v.projectIds }),
                url: v.url,
                ...(v.sources === undefined ? null : { sources: v.sources }),
                ...(v.createdFrom === undefined ? null : { createdFrom: v.createdFrom }),
                ...(v.headers === undefined ? null : { headers: v.headers }),
                environments: v.environments,
                ...(v.branch === undefined ? null : { branch: v.branch }),
                ...(v.samplingRate === undefined ? null : { samplingRate: v.samplingRate }),
            };
        });

    export type Outbound = {
        clientId?: string | undefined;
        configurationId?: string | undefined;
        createdAt: number;
        id: string;
        deliveryFormat?: GetIntegrationLogDrainsDeliveryFormat | undefined;
        name: string;
        ownerId: string;
        projectId?: string | null | undefined;
        projectIds?: Array<string> | undefined;
        url: string;
        sources?: Array<GetIntegrationLogDrainsSources> | undefined;
        createdFrom?: CreatedFrom | undefined;
        headers?: Record<string, string> | undefined;
        environments: Array<GetIntegrationLogDrainsEnvironments>;
        branch?: string | undefined;
        samplingRate?: number | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetIntegrationLogDrainsResponseBody
    > = z
        .object({
            clientId: z.string().optional(),
            configurationId: z.string().optional(),
            createdAt: z.number(),
            id: z.string(),
            deliveryFormat: GetIntegrationLogDrainsDeliveryFormat$.optional(),
            name: z.string(),
            ownerId: z.string(),
            projectId: z.nullable(z.string()).optional(),
            projectIds: z.array(z.string()).optional(),
            url: z.string(),
            sources: z.array(GetIntegrationLogDrainsSources$).optional(),
            createdFrom: CreatedFrom$.optional(),
            headers: z.record(z.string()).optional(),
            environments: z.array(GetIntegrationLogDrainsEnvironments$),
            branch: z.string().optional(),
            samplingRate: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.clientId === undefined ? null : { clientId: v.clientId }),
                ...(v.configurationId === undefined
                    ? null
                    : { configurationId: v.configurationId }),
                createdAt: v.createdAt,
                id: v.id,
                ...(v.deliveryFormat === undefined ? null : { deliveryFormat: v.deliveryFormat }),
                name: v.name,
                ownerId: v.ownerId,
                ...(v.projectId === undefined ? null : { projectId: v.projectId }),
                ...(v.projectIds === undefined ? null : { projectIds: v.projectIds }),
                url: v.url,
                ...(v.sources === undefined ? null : { sources: v.sources }),
                ...(v.createdFrom === undefined ? null : { createdFrom: v.createdFrom }),
                ...(v.headers === undefined ? null : { headers: v.headers }),
                environments: v.environments,
                ...(v.branch === undefined ? null : { branch: v.branch }),
                ...(v.samplingRate === undefined ? null : { samplingRate: v.samplingRate }),
            };
        });
}

/** @internal */
export namespace GetIntegrationLogDrainsResponse$ {
    export const inboundSchema: z.ZodType<GetIntegrationLogDrainsResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                responseBodies: z
                    .array(z.lazy(() => GetIntegrationLogDrainsResponseBody$.inboundSchema))
                    .optional(),
            })
            .transform((v) => {
                return {
                    httpMeta: v.HttpMeta,
                    ...(v.responseBodies === undefined
                        ? null
                        : { responseBodies: v.responseBodies }),
                };
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        responseBodies?: Array<GetIntegrationLogDrainsResponseBody$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetIntegrationLogDrainsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            responseBodies: z
                .array(z.lazy(() => GetIntegrationLogDrainsResponseBody$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.responseBodies === undefined ? null : { responseBodies: v.responseBodies }),
            };
        });
}