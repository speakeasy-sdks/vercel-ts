/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetCheckRequest = {
    /**
     * The deployment to get the check for.
     */
    deploymentId: string;
    /**
     * The check to fetch
     */
    checkId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export enum GetCheckStatus {
    Registered = "registered",
    Running = "running",
    Completed = "completed",
}

export enum GetCheckConclusion {
    Canceled = "canceled",
    Failed = "failed",
    Neutral = "neutral",
    Succeeded = "succeeded",
    Skipped = "skipped",
    Stale = "stale",
}

export enum GetCheckSource {
    WebVitals = "web-vitals",
}

export type GetCheckFCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetCheckSource;
};

export enum GetCheckChecksSource {
    WebVitals = "web-vitals",
}

export type GetCheckLCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetCheckChecksSource;
};

export enum GetCheckChecksResponseSource {
    WebVitals = "web-vitals",
}

export type GetCheckCLS = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetCheckChecksResponseSource;
};

export enum GetCheckChecksResponse200Source {
    WebVitals = "web-vitals",
}

export type GetCheckTBT = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetCheckChecksResponse200Source;
};

export enum GetCheckChecksResponse200ApplicationJSONSource {
    WebVitals = "web-vitals",
}

export type GetCheckVirtualExperienceScore = {
    value: number | null;
    previousValue?: number | undefined;
    source: GetCheckChecksResponse200ApplicationJSONSource;
};

export type GetCheckMetrics = {
    fcp: GetCheckFCP;
    lcp: GetCheckLCP;
    cls: GetCheckCLS;
    tbt: GetCheckTBT;
    virtualExperienceScore?: GetCheckVirtualExperienceScore | undefined;
};

export type GetCheckOutput = {
    metrics?: GetCheckMetrics | undefined;
};

export type GetCheckResponseBody = {
    id: string;
    name: string;
    path?: string | undefined;
    status: GetCheckStatus;
    conclusion?: GetCheckConclusion | undefined;
    blocking: boolean;
    output?: GetCheckOutput | undefined;
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

export type GetCheckResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetCheckResponseBody | undefined;
};

/** @internal */
export namespace GetCheckRequest$ {
    export const inboundSchema: z.ZodType<GetCheckRequest, z.ZodTypeDef, unknown> = z
        .object({
            deploymentId: z.string(),
            checkId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                deploymentId: v.deploymentId,
                checkId: v.checkId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        deploymentId: string;
        checkId: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckRequest> = z
        .object({
            deploymentId: z.string(),
            checkId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                deploymentId: v.deploymentId,
                checkId: v.checkId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export const GetCheckStatus$: z.ZodNativeEnum<typeof GetCheckStatus> = z.nativeEnum(GetCheckStatus);

/** @internal */
export const GetCheckConclusion$: z.ZodNativeEnum<typeof GetCheckConclusion> =
    z.nativeEnum(GetCheckConclusion);

/** @internal */
export const GetCheckSource$: z.ZodNativeEnum<typeof GetCheckSource> = z.nativeEnum(GetCheckSource);

/** @internal */
export namespace GetCheckFCP$ {
    export const inboundSchema: z.ZodType<GetCheckFCP, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckSource$,
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
        source: GetCheckSource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckFCP> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckSource$,
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
export const GetCheckChecksSource$: z.ZodNativeEnum<typeof GetCheckChecksSource> =
    z.nativeEnum(GetCheckChecksSource);

/** @internal */
export namespace GetCheckLCP$ {
    export const inboundSchema: z.ZodType<GetCheckLCP, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckChecksSource$,
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
        source: GetCheckChecksSource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckLCP> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckChecksSource$,
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
export const GetCheckChecksResponseSource$: z.ZodNativeEnum<typeof GetCheckChecksResponseSource> =
    z.nativeEnum(GetCheckChecksResponseSource);

/** @internal */
export namespace GetCheckCLS$ {
    export const inboundSchema: z.ZodType<GetCheckCLS, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckChecksResponseSource$,
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
        source: GetCheckChecksResponseSource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckCLS> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckChecksResponseSource$,
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
export const GetCheckChecksResponse200Source$: z.ZodNativeEnum<
    typeof GetCheckChecksResponse200Source
> = z.nativeEnum(GetCheckChecksResponse200Source);

/** @internal */
export namespace GetCheckTBT$ {
    export const inboundSchema: z.ZodType<GetCheckTBT, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckChecksResponse200Source$,
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
        source: GetCheckChecksResponse200Source;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckTBT> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckChecksResponse200Source$,
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
export const GetCheckChecksResponse200ApplicationJSONSource$: z.ZodNativeEnum<
    typeof GetCheckChecksResponse200ApplicationJSONSource
> = z.nativeEnum(GetCheckChecksResponse200ApplicationJSONSource);

/** @internal */
export namespace GetCheckVirtualExperienceScore$ {
    export const inboundSchema: z.ZodType<GetCheckVirtualExperienceScore, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckChecksResponse200ApplicationJSONSource$,
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
        source: GetCheckChecksResponse200ApplicationJSONSource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckVirtualExperienceScore> =
        z
            .object({
                value: z.nullable(z.number()),
                previousValue: z.number().optional(),
                source: GetCheckChecksResponse200ApplicationJSONSource$,
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
export namespace GetCheckMetrics$ {
    export const inboundSchema: z.ZodType<GetCheckMetrics, z.ZodTypeDef, unknown> = z
        .object({
            FCP: z.lazy(() => GetCheckFCP$.inboundSchema),
            LCP: z.lazy(() => GetCheckLCP$.inboundSchema),
            CLS: z.lazy(() => GetCheckCLS$.inboundSchema),
            TBT: z.lazy(() => GetCheckTBT$.inboundSchema),
            virtualExperienceScore: z
                .lazy(() => GetCheckVirtualExperienceScore$.inboundSchema)
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
        FCP: GetCheckFCP$.Outbound;
        LCP: GetCheckLCP$.Outbound;
        CLS: GetCheckCLS$.Outbound;
        TBT: GetCheckTBT$.Outbound;
        virtualExperienceScore?: GetCheckVirtualExperienceScore$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckMetrics> = z
        .object({
            fcp: z.lazy(() => GetCheckFCP$.outboundSchema),
            lcp: z.lazy(() => GetCheckLCP$.outboundSchema),
            cls: z.lazy(() => GetCheckCLS$.outboundSchema),
            tbt: z.lazy(() => GetCheckTBT$.outboundSchema),
            virtualExperienceScore: z
                .lazy(() => GetCheckVirtualExperienceScore$.outboundSchema)
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
export namespace GetCheckOutput$ {
    export const inboundSchema: z.ZodType<GetCheckOutput, z.ZodTypeDef, unknown> = z
        .object({
            metrics: z.lazy(() => GetCheckMetrics$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.metrics === undefined ? null : { metrics: v.metrics }),
            };
        });

    export type Outbound = {
        metrics?: GetCheckMetrics$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckOutput> = z
        .object({
            metrics: z.lazy(() => GetCheckMetrics$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.metrics === undefined ? null : { metrics: v.metrics }),
            };
        });
}

/** @internal */
export namespace GetCheckResponseBody$ {
    export const inboundSchema: z.ZodType<GetCheckResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            name: z.string(),
            path: z.string().optional(),
            status: GetCheckStatus$,
            conclusion: GetCheckConclusion$.optional(),
            blocking: z.boolean(),
            output: z.lazy(() => GetCheckOutput$.inboundSchema).optional(),
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
        status: GetCheckStatus;
        conclusion?: GetCheckConclusion | undefined;
        blocking: boolean;
        output?: GetCheckOutput$.Outbound | undefined;
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckResponseBody> = z
        .object({
            id: z.string(),
            name: z.string(),
            path: z.string().optional(),
            status: GetCheckStatus$,
            conclusion: GetCheckConclusion$.optional(),
            blocking: z.boolean(),
            output: z.lazy(() => GetCheckOutput$.outboundSchema).optional(),
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

/** @internal */
export namespace GetCheckResponse$ {
    export const inboundSchema: z.ZodType<GetCheckResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetCheckResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetCheckResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetCheckResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
