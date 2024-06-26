/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateCheckRequestBody = {
    /**
     * The name of the check being created
     */
    name: string;
    /**
     * Path of the page that is being checked
     */
    path?: string | undefined;
    /**
     * Whether the check should block a deployment from succeeding
     */
    blocking: boolean;
    /**
     * URL to display for further details
     */
    detailsUrl?: string | undefined;
    /**
     * An identifier that can be used as an external reference
     */
    externalId?: string | undefined;
    /**
     * Whether a user should be able to request for the check to be rerun if it fails
     */
    rerequestable?: boolean | undefined;
};

export type CreateCheckRequest = {
    /**
     * The deployment to create the check for.
     */
    deploymentId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateCheckRequestBody | undefined;
};

export enum CreateCheckStatus {
    Registered = "registered",
    Running = "running",
    Completed = "completed",
}

export enum CreateCheckConclusion {
    Canceled = "canceled",
    Failed = "failed",
    Neutral = "neutral",
    Succeeded = "succeeded",
    Skipped = "skipped",
    Stale = "stale",
}

export enum CreateCheckSource {
    WebVitals = "web-vitals",
}

export type CreateCheckFCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: CreateCheckSource;
};

export enum CreateCheckChecksSource {
    WebVitals = "web-vitals",
}

export type CreateCheckLCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: CreateCheckChecksSource;
};

export enum CreateCheckChecksResponseSource {
    WebVitals = "web-vitals",
}

export type CreateCheckCLS = {
    value: number | null;
    previousValue?: number | undefined;
    source: CreateCheckChecksResponseSource;
};

export enum CreateCheckChecksResponse200Source {
    WebVitals = "web-vitals",
}

export type CreateCheckTBT = {
    value: number | null;
    previousValue?: number | undefined;
    source: CreateCheckChecksResponse200Source;
};

export enum CreateCheckChecksResponse200ApplicationJSONSource {
    WebVitals = "web-vitals",
}

export type CreateCheckVirtualExperienceScore = {
    value: number | null;
    previousValue?: number | undefined;
    source: CreateCheckChecksResponse200ApplicationJSONSource;
};

export type CreateCheckMetrics = {
    fcp: CreateCheckFCP;
    lcp: CreateCheckLCP;
    cls: CreateCheckCLS;
    tbt: CreateCheckTBT;
    virtualExperienceScore?: CreateCheckVirtualExperienceScore | undefined;
};

export type CreateCheckOutput = {
    metrics?: CreateCheckMetrics | undefined;
};

export type CreateCheckResponseBody = {
    id: string;
    name: string;
    path?: string | undefined;
    status: CreateCheckStatus;
    conclusion?: CreateCheckConclusion | undefined;
    blocking: boolean;
    output?: CreateCheckOutput | undefined;
    detailsUrl?: string | undefined;
    integrationId: string;
    deploymentId: string;
    externalId?: string | undefined;
    createdAt: number;
    updatedAt: number;
    startedAt?: number | undefined;
    completedAt?: number | undefined;
    rerequestable?: boolean | undefined;
};

/** @internal */
export namespace CreateCheckRequestBody$ {
    export const inboundSchema: z.ZodType<CreateCheckRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            path: z.string().optional(),
            blocking: z.boolean(),
            detailsUrl: z.string().optional(),
            externalId: z.string().optional(),
            rerequestable: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.path === undefined ? null : { path: v.path }),
                blocking: v.blocking,
                ...(v.detailsUrl === undefined ? null : { detailsUrl: v.detailsUrl }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                ...(v.rerequestable === undefined ? null : { rerequestable: v.rerequestable }),
            };
        });

    export type Outbound = {
        name: string;
        path?: string | undefined;
        blocking: boolean;
        detailsUrl?: string | undefined;
        externalId?: string | undefined;
        rerequestable?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCheckRequestBody> = z
        .object({
            name: z.string(),
            path: z.string().optional(),
            blocking: z.boolean(),
            detailsUrl: z.string().optional(),
            externalId: z.string().optional(),
            rerequestable: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.path === undefined ? null : { path: v.path }),
                blocking: v.blocking,
                ...(v.detailsUrl === undefined ? null : { detailsUrl: v.detailsUrl }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                ...(v.rerequestable === undefined ? null : { rerequestable: v.rerequestable }),
            };
        });
}

/** @internal */
export namespace CreateCheckRequest$ {
    export const inboundSchema: z.ZodType<CreateCheckRequest, z.ZodTypeDef, unknown> = z
        .object({
            deploymentId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => CreateCheckRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                deploymentId: v.deploymentId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        deploymentId: string;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: CreateCheckRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCheckRequest> = z
        .object({
            deploymentId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => CreateCheckRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                deploymentId: v.deploymentId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace CreateCheckStatus$ {
    export const inboundSchema = z.nativeEnum(CreateCheckStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CreateCheckConclusion$ {
    export const inboundSchema = z.nativeEnum(CreateCheckConclusion);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CreateCheckSource$ {
    export const inboundSchema = z.nativeEnum(CreateCheckSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CreateCheckFCP$ {
    export const inboundSchema: z.ZodType<CreateCheckFCP, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: CreateCheckSource$.inboundSchema,
        })
        .transform((v) => {
            return {
                value: v.value,
                ...(v.previousValue === undefined ? null : { previousValue: v.previousValue }),
                source: v.source,
            };
        });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCheckFCP> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: CreateCheckSource$.outboundSchema,
        })
        .transform((v) => {
            return {
                value: v.value,
                ...(v.previousValue === undefined ? null : { previousValue: v.previousValue }),
                source: v.source,
            };
        });
}

/** @internal */
export namespace CreateCheckChecksSource$ {
    export const inboundSchema = z.nativeEnum(CreateCheckChecksSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CreateCheckLCP$ {
    export const inboundSchema: z.ZodType<CreateCheckLCP, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: CreateCheckChecksSource$.inboundSchema,
        })
        .transform((v) => {
            return {
                value: v.value,
                ...(v.previousValue === undefined ? null : { previousValue: v.previousValue }),
                source: v.source,
            };
        });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCheckLCP> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: CreateCheckChecksSource$.outboundSchema,
        })
        .transform((v) => {
            return {
                value: v.value,
                ...(v.previousValue === undefined ? null : { previousValue: v.previousValue }),
                source: v.source,
            };
        });
}

/** @internal */
export namespace CreateCheckChecksResponseSource$ {
    export const inboundSchema = z.nativeEnum(CreateCheckChecksResponseSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CreateCheckCLS$ {
    export const inboundSchema: z.ZodType<CreateCheckCLS, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: CreateCheckChecksResponseSource$.inboundSchema,
        })
        .transform((v) => {
            return {
                value: v.value,
                ...(v.previousValue === undefined ? null : { previousValue: v.previousValue }),
                source: v.source,
            };
        });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCheckCLS> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: CreateCheckChecksResponseSource$.outboundSchema,
        })
        .transform((v) => {
            return {
                value: v.value,
                ...(v.previousValue === undefined ? null : { previousValue: v.previousValue }),
                source: v.source,
            };
        });
}

/** @internal */
export namespace CreateCheckChecksResponse200Source$ {
    export const inboundSchema = z.nativeEnum(CreateCheckChecksResponse200Source);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CreateCheckTBT$ {
    export const inboundSchema: z.ZodType<CreateCheckTBT, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: CreateCheckChecksResponse200Source$.inboundSchema,
        })
        .transform((v) => {
            return {
                value: v.value,
                ...(v.previousValue === undefined ? null : { previousValue: v.previousValue }),
                source: v.source,
            };
        });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCheckTBT> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: CreateCheckChecksResponse200Source$.outboundSchema,
        })
        .transform((v) => {
            return {
                value: v.value,
                ...(v.previousValue === undefined ? null : { previousValue: v.previousValue }),
                source: v.source,
            };
        });
}

/** @internal */
export namespace CreateCheckChecksResponse200ApplicationJSONSource$ {
    export const inboundSchema = z.nativeEnum(CreateCheckChecksResponse200ApplicationJSONSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CreateCheckVirtualExperienceScore$ {
    export const inboundSchema: z.ZodType<
        CreateCheckVirtualExperienceScore,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: CreateCheckChecksResponse200ApplicationJSONSource$.inboundSchema,
        })
        .transform((v) => {
            return {
                value: v.value,
                ...(v.previousValue === undefined ? null : { previousValue: v.previousValue }),
                source: v.source,
            };
        });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateCheckVirtualExperienceScore
    > = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: CreateCheckChecksResponse200ApplicationJSONSource$.outboundSchema,
        })
        .transform((v) => {
            return {
                value: v.value,
                ...(v.previousValue === undefined ? null : { previousValue: v.previousValue }),
                source: v.source,
            };
        });
}

/** @internal */
export namespace CreateCheckMetrics$ {
    export const inboundSchema: z.ZodType<CreateCheckMetrics, z.ZodTypeDef, unknown> = z
        .object({
            FCP: z.lazy(() => CreateCheckFCP$.inboundSchema),
            LCP: z.lazy(() => CreateCheckLCP$.inboundSchema),
            CLS: z.lazy(() => CreateCheckCLS$.inboundSchema),
            TBT: z.lazy(() => CreateCheckTBT$.inboundSchema),
            virtualExperienceScore: z
                .lazy(() => CreateCheckVirtualExperienceScore$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                fcp: v.FCP,
                lcp: v.LCP,
                cls: v.CLS,
                tbt: v.TBT,
                ...(v.virtualExperienceScore === undefined
                    ? null
                    : { virtualExperienceScore: v.virtualExperienceScore }),
            };
        });

    export type Outbound = {
        FCP: CreateCheckFCP$.Outbound;
        LCP: CreateCheckLCP$.Outbound;
        CLS: CreateCheckCLS$.Outbound;
        TBT: CreateCheckTBT$.Outbound;
        virtualExperienceScore?: CreateCheckVirtualExperienceScore$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCheckMetrics> = z
        .object({
            fcp: z.lazy(() => CreateCheckFCP$.outboundSchema),
            lcp: z.lazy(() => CreateCheckLCP$.outboundSchema),
            cls: z.lazy(() => CreateCheckCLS$.outboundSchema),
            tbt: z.lazy(() => CreateCheckTBT$.outboundSchema),
            virtualExperienceScore: z
                .lazy(() => CreateCheckVirtualExperienceScore$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                FCP: v.fcp,
                LCP: v.lcp,
                CLS: v.cls,
                TBT: v.tbt,
                ...(v.virtualExperienceScore === undefined
                    ? null
                    : { virtualExperienceScore: v.virtualExperienceScore }),
            };
        });
}

/** @internal */
export namespace CreateCheckOutput$ {
    export const inboundSchema: z.ZodType<CreateCheckOutput, z.ZodTypeDef, unknown> = z
        .object({
            metrics: z.lazy(() => CreateCheckMetrics$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.metrics === undefined ? null : { metrics: v.metrics }),
            };
        });

    export type Outbound = {
        metrics?: CreateCheckMetrics$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCheckOutput> = z
        .object({
            metrics: z.lazy(() => CreateCheckMetrics$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.metrics === undefined ? null : { metrics: v.metrics }),
            };
        });
}

/** @internal */
export namespace CreateCheckResponseBody$ {
    export const inboundSchema: z.ZodType<CreateCheckResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            name: z.string(),
            path: z.string().optional(),
            status: CreateCheckStatus$.inboundSchema,
            conclusion: CreateCheckConclusion$.inboundSchema.optional(),
            blocking: z.boolean(),
            output: z.lazy(() => CreateCheckOutput$.inboundSchema).optional(),
            detailsUrl: z.string().optional(),
            integrationId: z.string(),
            deploymentId: z.string(),
            externalId: z.string().optional(),
            createdAt: z.number(),
            updatedAt: z.number(),
            startedAt: z.number().optional(),
            completedAt: z.number().optional(),
            rerequestable: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
                ...(v.path === undefined ? null : { path: v.path }),
                status: v.status,
                ...(v.conclusion === undefined ? null : { conclusion: v.conclusion }),
                blocking: v.blocking,
                ...(v.output === undefined ? null : { output: v.output }),
                ...(v.detailsUrl === undefined ? null : { detailsUrl: v.detailsUrl }),
                integrationId: v.integrationId,
                deploymentId: v.deploymentId,
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                createdAt: v.createdAt,
                updatedAt: v.updatedAt,
                ...(v.startedAt === undefined ? null : { startedAt: v.startedAt }),
                ...(v.completedAt === undefined ? null : { completedAt: v.completedAt }),
                ...(v.rerequestable === undefined ? null : { rerequestable: v.rerequestable }),
            };
        });

    export type Outbound = {
        id: string;
        name: string;
        path?: string | undefined;
        status: string;
        conclusion?: string | undefined;
        blocking: boolean;
        output?: CreateCheckOutput$.Outbound | undefined;
        detailsUrl?: string | undefined;
        integrationId: string;
        deploymentId: string;
        externalId?: string | undefined;
        createdAt: number;
        updatedAt: number;
        startedAt?: number | undefined;
        completedAt?: number | undefined;
        rerequestable?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCheckResponseBody> = z
        .object({
            id: z.string(),
            name: z.string(),
            path: z.string().optional(),
            status: CreateCheckStatus$.outboundSchema,
            conclusion: CreateCheckConclusion$.outboundSchema.optional(),
            blocking: z.boolean(),
            output: z.lazy(() => CreateCheckOutput$.outboundSchema).optional(),
            detailsUrl: z.string().optional(),
            integrationId: z.string(),
            deploymentId: z.string(),
            externalId: z.string().optional(),
            createdAt: z.number(),
            updatedAt: z.number(),
            startedAt: z.number().optional(),
            completedAt: z.number().optional(),
            rerequestable: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
                ...(v.path === undefined ? null : { path: v.path }),
                status: v.status,
                ...(v.conclusion === undefined ? null : { conclusion: v.conclusion }),
                blocking: v.blocking,
                ...(v.output === undefined ? null : { output: v.output }),
                ...(v.detailsUrl === undefined ? null : { detailsUrl: v.detailsUrl }),
                integrationId: v.integrationId,
                deploymentId: v.deploymentId,
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
                createdAt: v.createdAt,
                updatedAt: v.updatedAt,
                ...(v.startedAt === undefined ? null : { startedAt: v.startedAt }),
                ...(v.completedAt === undefined ? null : { completedAt: v.completedAt }),
                ...(v.rerequestable === undefined ? null : { rerequestable: v.rerequestable }),
            };
        });
}
