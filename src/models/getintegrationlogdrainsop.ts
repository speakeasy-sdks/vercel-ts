/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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
    headers?: { [k: string]: string } | undefined;
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

/** @internal */
export namespace GetIntegrationLogDrainsRequest$ {
    export const inboundSchema: z.ZodType<GetIntegrationLogDrainsRequest, z.ZodTypeDef, unknown> =
        z.object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
        });

    export type Outbound = {
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIntegrationLogDrainsRequest> =
        z.object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
        });
}

/** @internal */
export namespace GetIntegrationLogDrainsDeliveryFormat$ {
    export const inboundSchema = z.nativeEnum(GetIntegrationLogDrainsDeliveryFormat);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetIntegrationLogDrainsSources$ {
    export const inboundSchema = z.nativeEnum(GetIntegrationLogDrainsSources);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CreatedFrom$ {
    export const inboundSchema = z.nativeEnum(CreatedFrom);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetIntegrationLogDrainsEnvironments$ {
    export const inboundSchema = z.nativeEnum(GetIntegrationLogDrainsEnvironments);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetIntegrationLogDrainsResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetIntegrationLogDrainsResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        clientId: z.string().optional(),
        configurationId: z.string().optional(),
        createdAt: z.number(),
        id: z.string(),
        deliveryFormat: GetIntegrationLogDrainsDeliveryFormat$.inboundSchema.optional(),
        name: z.string(),
        ownerId: z.string(),
        projectId: z.nullable(z.string()).optional(),
        projectIds: z.array(z.string()).optional(),
        url: z.string(),
        sources: z.array(GetIntegrationLogDrainsSources$.inboundSchema).optional(),
        createdFrom: CreatedFrom$.inboundSchema.optional(),
        headers: z.record(z.string()).optional(),
        environments: z.array(GetIntegrationLogDrainsEnvironments$.inboundSchema),
        branch: z.string().optional(),
        samplingRate: z.number().optional(),
    });

    export type Outbound = {
        clientId?: string | undefined;
        configurationId?: string | undefined;
        createdAt: number;
        id: string;
        deliveryFormat?: string | undefined;
        name: string;
        ownerId: string;
        projectId?: string | null | undefined;
        projectIds?: Array<string> | undefined;
        url: string;
        sources?: Array<string> | undefined;
        createdFrom?: string | undefined;
        headers?: { [k: string]: string } | undefined;
        environments: Array<string>;
        branch?: string | undefined;
        samplingRate?: number | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetIntegrationLogDrainsResponseBody
    > = z.object({
        clientId: z.string().optional(),
        configurationId: z.string().optional(),
        createdAt: z.number(),
        id: z.string(),
        deliveryFormat: GetIntegrationLogDrainsDeliveryFormat$.outboundSchema.optional(),
        name: z.string(),
        ownerId: z.string(),
        projectId: z.nullable(z.string()).optional(),
        projectIds: z.array(z.string()).optional(),
        url: z.string(),
        sources: z.array(GetIntegrationLogDrainsSources$.outboundSchema).optional(),
        createdFrom: CreatedFrom$.outboundSchema.optional(),
        headers: z.record(z.string()).optional(),
        environments: z.array(GetIntegrationLogDrainsEnvironments$.outboundSchema),
        branch: z.string().optional(),
        samplingRate: z.number().optional(),
    });
}
