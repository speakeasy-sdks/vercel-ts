/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * The current status of the check
 */
export enum Status {
    Running = "running",
    Completed = "completed",
}

/**
 * The result of the check being run
 */
export enum Conclusion {
    Canceled = "canceled",
    Failed = "failed",
    Neutral = "neutral",
    Succeeded = "succeeded",
    Skipped = "skipped",
}

export enum UpdateCheckSource {
    WebVitals = "web-vitals",
}

export type Fcp = {
    /**
     * First Contentful Paint value
     */
    value: number | null;
    /**
     * Previous First Contentful Paint value to display a delta
     */
    previousValue?: number | undefined;
    source: UpdateCheckSource;
};

export enum UpdateCheckChecksSource {
    WebVitals = "web-vitals",
}

export type Lcp = {
    /**
     * Largest Contentful Paint value
     */
    value: number | null;
    /**
     * Previous Largest Contentful Paint value to display a delta
     */
    previousValue?: number | undefined;
    source: UpdateCheckChecksSource;
};

export enum UpdateCheckChecksRequestSource {
    WebVitals = "web-vitals",
}

export type Cls = {
    /**
     * Cumulative Layout Shift value
     */
    value: number | null;
    /**
     * Previous Cumulative Layout Shift value to display a delta
     */
    previousValue?: number | undefined;
    source: UpdateCheckChecksRequestSource;
};

export enum UpdateCheckChecksRequestRequestBodySource {
    WebVitals = "web-vitals",
}

export type Tbt = {
    /**
     * Total Blocking Time value
     */
    value: number | null;
    /**
     * Previous Total Blocking Time value to display a delta
     */
    previousValue?: number | undefined;
    source: UpdateCheckChecksRequestRequestBodySource;
};

export enum UpdateCheckChecksRequestRequestBodyOutputSource {
    WebVitals = "web-vitals",
}

export type VirtualExperienceScore = {
    /**
     * The calculated Virtual Experience Score value, between 0 and 100
     */
    value: number | null;
    /**
     * A previous Virtual Experience Score value to display a delta, between 0 and 100
     */
    previousValue?: number | undefined;
    source: UpdateCheckChecksRequestRequestBodyOutputSource;
};

/**
 * Metrics about the page
 */
export type Metrics = {
    fcp: Fcp;
    lcp: Lcp;
    cls: Cls;
    tbt: Tbt;
    virtualExperienceScore?: VirtualExperienceScore | undefined;
};

/**
 * The results of the check Run
 */
export type Output = {
    /**
     * Metrics about the page
     */
    metrics?: Metrics | undefined;
};

export type UpdateCheckRequestBody = {
    /**
     * The name of the check being created
     */
    name?: string | undefined;
    /**
     * Path of the page that is being checked
     */
    path?: string | undefined;
    /**
     * The current status of the check
     */
    status?: Status | undefined;
    /**
     * The result of the check being run
     */
    conclusion?: Conclusion | undefined;
    /**
     * A URL a user may visit to see more information about the check
     */
    detailsUrl?: string | undefined;
    /**
     * The results of the check Run
     */
    output?: Output | undefined;
    /**
     * An identifier that can be used as an external reference
     */
    externalId?: string | undefined;
};

export type UpdateCheckRequest = {
    /**
     * The deployment to update the check for.
     */
    deploymentId: string;
    /**
     * The check being updated
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
    requestBody?: UpdateCheckRequestBody | undefined;
};

export enum UpdateCheckStatus {
    Registered = "registered",
    Running = "running",
    Completed = "completed",
}

export enum UpdateCheckConclusion {
    Canceled = "canceled",
    Failed = "failed",
    Neutral = "neutral",
    Succeeded = "succeeded",
    Skipped = "skipped",
    Stale = "stale",
}

export enum UpdateCheckChecksResponseSource {
    WebVitals = "web-vitals",
}

export type UpdateCheckFCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: UpdateCheckChecksResponseSource;
};

export enum UpdateCheckChecksResponse200Source {
    WebVitals = "web-vitals",
}

export type UpdateCheckLCP = {
    value: number | null;
    previousValue?: number | undefined;
    source: UpdateCheckChecksResponse200Source;
};

export enum UpdateCheckChecksResponse200ApplicationJSONSource {
    WebVitals = "web-vitals",
}

export type UpdateCheckCLS = {
    value: number | null;
    previousValue?: number | undefined;
    source: UpdateCheckChecksResponse200ApplicationJSONSource;
};

export enum UpdateCheckChecksResponse200ApplicationJSONResponseBodySource {
    WebVitals = "web-vitals",
}

export type UpdateCheckTBT = {
    value: number | null;
    previousValue?: number | undefined;
    source: UpdateCheckChecksResponse200ApplicationJSONResponseBodySource;
};

export enum UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource {
    WebVitals = "web-vitals",
}

export type UpdateCheckVirtualExperienceScore = {
    value: number | null;
    previousValue?: number | undefined;
    source: UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource;
};

export type UpdateCheckMetrics = {
    fcp: UpdateCheckFCP;
    lcp: UpdateCheckLCP;
    cls: UpdateCheckCLS;
    tbt: UpdateCheckTBT;
    virtualExperienceScore?: UpdateCheckVirtualExperienceScore | undefined;
};

export type UpdateCheckOutput = {
    metrics?: UpdateCheckMetrics | undefined;
};

export type UpdateCheckResponseBody = {
    id: string;
    name: string;
    path?: string | undefined;
    status: UpdateCheckStatus;
    conclusion?: UpdateCheckConclusion | undefined;
    blocking: boolean;
    output?: UpdateCheckOutput | undefined;
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

export type UpdateCheckResponse = {
    httpMeta: components.HTTPMetadata;
    object?: UpdateCheckResponseBody | undefined;
};

/** @internal */
export const Status$: z.ZodNativeEnum<typeof Status> = z.nativeEnum(Status);

/** @internal */
export const Conclusion$: z.ZodNativeEnum<typeof Conclusion> = z.nativeEnum(Conclusion);

/** @internal */
export const UpdateCheckSource$: z.ZodNativeEnum<typeof UpdateCheckSource> =
    z.nativeEnum(UpdateCheckSource);

/** @internal */
export namespace Fcp$ {
    export const inboundSchema: z.ZodType<Fcp, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckSource$,
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
        source: UpdateCheckSource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Fcp> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckSource$,
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
export const UpdateCheckChecksSource$: z.ZodNativeEnum<typeof UpdateCheckChecksSource> =
    z.nativeEnum(UpdateCheckChecksSource);

/** @internal */
export namespace Lcp$ {
    export const inboundSchema: z.ZodType<Lcp, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksSource$,
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
        source: UpdateCheckChecksSource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Lcp> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksSource$,
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
export const UpdateCheckChecksRequestSource$: z.ZodNativeEnum<
    typeof UpdateCheckChecksRequestSource
> = z.nativeEnum(UpdateCheckChecksRequestSource);

/** @internal */
export namespace Cls$ {
    export const inboundSchema: z.ZodType<Cls, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksRequestSource$,
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
        source: UpdateCheckChecksRequestSource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Cls> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksRequestSource$,
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
export const UpdateCheckChecksRequestRequestBodySource$: z.ZodNativeEnum<
    typeof UpdateCheckChecksRequestRequestBodySource
> = z.nativeEnum(UpdateCheckChecksRequestRequestBodySource);

/** @internal */
export namespace Tbt$ {
    export const inboundSchema: z.ZodType<Tbt, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksRequestRequestBodySource$,
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
        source: UpdateCheckChecksRequestRequestBodySource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Tbt> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksRequestRequestBodySource$,
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
export const UpdateCheckChecksRequestRequestBodyOutputSource$: z.ZodNativeEnum<
    typeof UpdateCheckChecksRequestRequestBodyOutputSource
> = z.nativeEnum(UpdateCheckChecksRequestRequestBodyOutputSource);

/** @internal */
export namespace VirtualExperienceScore$ {
    export const inboundSchema: z.ZodType<VirtualExperienceScore, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number().int()),
            previousValue: z.number().int().optional(),
            source: UpdateCheckChecksRequestRequestBodyOutputSource$,
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
        source: UpdateCheckChecksRequestRequestBodyOutputSource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VirtualExperienceScore> = z
        .object({
            value: z.nullable(z.number().int()),
            previousValue: z.number().int().optional(),
            source: UpdateCheckChecksRequestRequestBodyOutputSource$,
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
export namespace Metrics$ {
    export const inboundSchema: z.ZodType<Metrics, z.ZodTypeDef, unknown> = z
        .object({
            FCP: z.lazy(() => Fcp$.inboundSchema),
            LCP: z.lazy(() => Lcp$.inboundSchema),
            CLS: z.lazy(() => Cls$.inboundSchema),
            TBT: z.lazy(() => Tbt$.inboundSchema),
            virtualExperienceScore: z.lazy(() => VirtualExperienceScore$.inboundSchema).optional(),
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
        FCP: Fcp$.Outbound;
        LCP: Lcp$.Outbound;
        CLS: Cls$.Outbound;
        TBT: Tbt$.Outbound;
        virtualExperienceScore?: VirtualExperienceScore$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Metrics> = z
        .object({
            fcp: z.lazy(() => Fcp$.outboundSchema),
            lcp: z.lazy(() => Lcp$.outboundSchema),
            cls: z.lazy(() => Cls$.outboundSchema),
            tbt: z.lazy(() => Tbt$.outboundSchema),
            virtualExperienceScore: z.lazy(() => VirtualExperienceScore$.outboundSchema).optional(),
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
export namespace Output$ {
    export const inboundSchema: z.ZodType<Output, z.ZodTypeDef, unknown> = z
        .object({
            metrics: z.lazy(() => Metrics$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.metrics === undefined ? null : { metrics: v.metrics }),
            };
        });

    export type Outbound = {
        metrics?: Metrics$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Output> = z
        .object({
            metrics: z.lazy(() => Metrics$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.metrics === undefined ? null : { metrics: v.metrics }),
            };
        });
}

/** @internal */
export namespace UpdateCheckRequestBody$ {
    export const inboundSchema: z.ZodType<UpdateCheckRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string().optional(),
            path: z.string().optional(),
            status: Status$.optional(),
            conclusion: Conclusion$.optional(),
            detailsUrl: z.string().optional(),
            output: z.lazy(() => Output$.inboundSchema).optional(),
            externalId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.path === undefined ? null : { path: v.path }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.conclusion === undefined ? null : { conclusion: v.conclusion }),
                ...(v.detailsUrl === undefined ? null : { detailsUrl: v.detailsUrl }),
                ...(v.output === undefined ? null : { output: v.output }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
            };
        });

    export type Outbound = {
        name?: string | undefined;
        path?: string | undefined;
        status?: Status | undefined;
        conclusion?: Conclusion | undefined;
        detailsUrl?: string | undefined;
        output?: Output$.Outbound | undefined;
        externalId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckRequestBody> = z
        .object({
            name: z.string().optional(),
            path: z.string().optional(),
            status: Status$.optional(),
            conclusion: Conclusion$.optional(),
            detailsUrl: z.string().optional(),
            output: z.lazy(() => Output$.outboundSchema).optional(),
            externalId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.path === undefined ? null : { path: v.path }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.conclusion === undefined ? null : { conclusion: v.conclusion }),
                ...(v.detailsUrl === undefined ? null : { detailsUrl: v.detailsUrl }),
                ...(v.output === undefined ? null : { output: v.output }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
            };
        });
}

/** @internal */
export namespace UpdateCheckRequest$ {
    export const inboundSchema: z.ZodType<UpdateCheckRequest, z.ZodTypeDef, unknown> = z
        .object({
            deploymentId: z.string(),
            checkId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => UpdateCheckRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                deploymentId: v.deploymentId,
                checkId: v.checkId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        deploymentId: string;
        checkId: string;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: UpdateCheckRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckRequest> = z
        .object({
            deploymentId: z.string(),
            checkId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => UpdateCheckRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                deploymentId: v.deploymentId,
                checkId: v.checkId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export const UpdateCheckStatus$: z.ZodNativeEnum<typeof UpdateCheckStatus> =
    z.nativeEnum(UpdateCheckStatus);

/** @internal */
export const UpdateCheckConclusion$: z.ZodNativeEnum<typeof UpdateCheckConclusion> =
    z.nativeEnum(UpdateCheckConclusion);

/** @internal */
export const UpdateCheckChecksResponseSource$: z.ZodNativeEnum<
    typeof UpdateCheckChecksResponseSource
> = z.nativeEnum(UpdateCheckChecksResponseSource);

/** @internal */
export namespace UpdateCheckFCP$ {
    export const inboundSchema: z.ZodType<UpdateCheckFCP, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksResponseSource$,
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
        source: UpdateCheckChecksResponseSource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckFCP> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksResponseSource$,
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
export const UpdateCheckChecksResponse200Source$: z.ZodNativeEnum<
    typeof UpdateCheckChecksResponse200Source
> = z.nativeEnum(UpdateCheckChecksResponse200Source);

/** @internal */
export namespace UpdateCheckLCP$ {
    export const inboundSchema: z.ZodType<UpdateCheckLCP, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksResponse200Source$,
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
        source: UpdateCheckChecksResponse200Source;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckLCP> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksResponse200Source$,
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
export const UpdateCheckChecksResponse200ApplicationJSONSource$: z.ZodNativeEnum<
    typeof UpdateCheckChecksResponse200ApplicationJSONSource
> = z.nativeEnum(UpdateCheckChecksResponse200ApplicationJSONSource);

/** @internal */
export namespace UpdateCheckCLS$ {
    export const inboundSchema: z.ZodType<UpdateCheckCLS, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksResponse200ApplicationJSONSource$,
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
        source: UpdateCheckChecksResponse200ApplicationJSONSource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckCLS> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksResponse200ApplicationJSONSource$,
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
export const UpdateCheckChecksResponse200ApplicationJSONResponseBodySource$: z.ZodNativeEnum<
    typeof UpdateCheckChecksResponse200ApplicationJSONResponseBodySource
> = z.nativeEnum(UpdateCheckChecksResponse200ApplicationJSONResponseBodySource);

/** @internal */
export namespace UpdateCheckTBT$ {
    export const inboundSchema: z.ZodType<UpdateCheckTBT, z.ZodTypeDef, unknown> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksResponse200ApplicationJSONResponseBodySource$,
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
        source: UpdateCheckChecksResponse200ApplicationJSONResponseBodySource;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckTBT> = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksResponse200ApplicationJSONResponseBodySource$,
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
export const UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource$: z.ZodNativeEnum<
    typeof UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource
> = z.nativeEnum(UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource);

/** @internal */
export namespace UpdateCheckVirtualExperienceScore$ {
    export const inboundSchema: z.ZodType<
        UpdateCheckVirtualExperienceScore,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource$,
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
        source: UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateCheckVirtualExperienceScore
    > = z
        .object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource$,
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
export namespace UpdateCheckMetrics$ {
    export const inboundSchema: z.ZodType<UpdateCheckMetrics, z.ZodTypeDef, unknown> = z
        .object({
            FCP: z.lazy(() => UpdateCheckFCP$.inboundSchema),
            LCP: z.lazy(() => UpdateCheckLCP$.inboundSchema),
            CLS: z.lazy(() => UpdateCheckCLS$.inboundSchema),
            TBT: z.lazy(() => UpdateCheckTBT$.inboundSchema),
            virtualExperienceScore: z
                .lazy(() => UpdateCheckVirtualExperienceScore$.inboundSchema)
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
        FCP: UpdateCheckFCP$.Outbound;
        LCP: UpdateCheckLCP$.Outbound;
        CLS: UpdateCheckCLS$.Outbound;
        TBT: UpdateCheckTBT$.Outbound;
        virtualExperienceScore?: UpdateCheckVirtualExperienceScore$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckMetrics> = z
        .object({
            fcp: z.lazy(() => UpdateCheckFCP$.outboundSchema),
            lcp: z.lazy(() => UpdateCheckLCP$.outboundSchema),
            cls: z.lazy(() => UpdateCheckCLS$.outboundSchema),
            tbt: z.lazy(() => UpdateCheckTBT$.outboundSchema),
            virtualExperienceScore: z
                .lazy(() => UpdateCheckVirtualExperienceScore$.outboundSchema)
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
export namespace UpdateCheckOutput$ {
    export const inboundSchema: z.ZodType<UpdateCheckOutput, z.ZodTypeDef, unknown> = z
        .object({
            metrics: z.lazy(() => UpdateCheckMetrics$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.metrics === undefined ? null : { metrics: v.metrics }),
            };
        });

    export type Outbound = {
        metrics?: UpdateCheckMetrics$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckOutput> = z
        .object({
            metrics: z.lazy(() => UpdateCheckMetrics$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.metrics === undefined ? null : { metrics: v.metrics }),
            };
        });
}

/** @internal */
export namespace UpdateCheckResponseBody$ {
    export const inboundSchema: z.ZodType<UpdateCheckResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            name: z.string(),
            path: z.string().optional(),
            status: UpdateCheckStatus$,
            conclusion: UpdateCheckConclusion$.optional(),
            blocking: z.boolean(),
            output: z.lazy(() => UpdateCheckOutput$.inboundSchema).optional(),
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
        status: UpdateCheckStatus;
        conclusion?: UpdateCheckConclusion | undefined;
        blocking: boolean;
        output?: UpdateCheckOutput$.Outbound | undefined;
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckResponseBody> = z
        .object({
            id: z.string(),
            name: z.string(),
            path: z.string().optional(),
            status: UpdateCheckStatus$,
            conclusion: UpdateCheckConclusion$.optional(),
            blocking: z.boolean(),
            output: z.lazy(() => UpdateCheckOutput$.outboundSchema).optional(),
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
export namespace UpdateCheckResponse$ {
    export const inboundSchema: z.ZodType<UpdateCheckResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => UpdateCheckResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: UpdateCheckResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => UpdateCheckResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}