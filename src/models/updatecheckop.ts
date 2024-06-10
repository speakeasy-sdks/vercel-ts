/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives";
import * as z from "zod";

/**
 * The current status of the check
 */
export enum UpdateCheckStatus {
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
    status?: UpdateCheckStatus | undefined;
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

export enum UpdateCheckChecksStatus {
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
    status: UpdateCheckChecksStatus;
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

/** @internal */
export namespace UpdateCheckStatus$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Conclusion$ {
    export const inboundSchema = z.nativeEnum(Conclusion);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace UpdateCheckSource$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Fcp$ {
    export const inboundSchema: z.ZodType<Fcp, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckSource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Fcp> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckSource$.outboundSchema,
    });
}

/** @internal */
export namespace UpdateCheckChecksSource$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckChecksSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Lcp$ {
    export const inboundSchema: z.ZodType<Lcp, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksSource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Lcp> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksSource$.outboundSchema,
    });
}

/** @internal */
export namespace UpdateCheckChecksRequestSource$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckChecksRequestSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Cls$ {
    export const inboundSchema: z.ZodType<Cls, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksRequestSource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Cls> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksRequestSource$.outboundSchema,
    });
}

/** @internal */
export namespace UpdateCheckChecksRequestRequestBodySource$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckChecksRequestRequestBodySource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Tbt$ {
    export const inboundSchema: z.ZodType<Tbt, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksRequestRequestBodySource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Tbt> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksRequestRequestBodySource$.outboundSchema,
    });
}

/** @internal */
export namespace UpdateCheckChecksRequestRequestBodyOutputSource$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckChecksRequestRequestBodyOutputSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace VirtualExperienceScore$ {
    export const inboundSchema: z.ZodType<VirtualExperienceScore, z.ZodTypeDef, unknown> = z.object(
        {
            value: z.nullable(z.number().int()),
            previousValue: z.number().int().optional(),
            source: UpdateCheckChecksRequestRequestBodyOutputSource$.inboundSchema,
        }
    );

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VirtualExperienceScore> =
        z.object({
            value: z.nullable(z.number().int()),
            previousValue: z.number().int().optional(),
            source: UpdateCheckChecksRequestRequestBodyOutputSource$.outboundSchema,
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
            return remap$(v, {
                FCP: "fcp",
                LCP: "lcp",
                CLS: "cls",
                TBT: "tbt",
            });
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
            return remap$(v, {
                fcp: "FCP",
                lcp: "LCP",
                cls: "CLS",
                tbt: "TBT",
            });
        });
}

/** @internal */
export namespace Output$ {
    export const inboundSchema: z.ZodType<Output, z.ZodTypeDef, unknown> = z.object({
        metrics: z.lazy(() => Metrics$.inboundSchema).optional(),
    });

    export type Outbound = {
        metrics?: Metrics$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Output> = z.object({
        metrics: z.lazy(() => Metrics$.outboundSchema).optional(),
    });
}

/** @internal */
export namespace UpdateCheckRequestBody$ {
    export const inboundSchema: z.ZodType<UpdateCheckRequestBody, z.ZodTypeDef, unknown> = z.object(
        {
            name: z.string().optional(),
            path: z.string().optional(),
            status: UpdateCheckStatus$.inboundSchema.optional(),
            conclusion: Conclusion$.inboundSchema.optional(),
            detailsUrl: z.string().optional(),
            output: z.lazy(() => Output$.inboundSchema).optional(),
            externalId: z.string().optional(),
        }
    );

    export type Outbound = {
        name?: string | undefined;
        path?: string | undefined;
        status?: string | undefined;
        conclusion?: string | undefined;
        detailsUrl?: string | undefined;
        output?: Output$.Outbound | undefined;
        externalId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckRequestBody> =
        z.object({
            name: z.string().optional(),
            path: z.string().optional(),
            status: UpdateCheckStatus$.outboundSchema.optional(),
            conclusion: Conclusion$.outboundSchema.optional(),
            detailsUrl: z.string().optional(),
            output: z.lazy(() => Output$.outboundSchema).optional(),
            externalId: z.string().optional(),
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
            return remap$(v, {
                RequestBody: "requestBody",
            });
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
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace UpdateCheckChecksStatus$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckChecksStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace UpdateCheckConclusion$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckConclusion);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace UpdateCheckChecksResponseSource$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckChecksResponseSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace UpdateCheckFCP$ {
    export const inboundSchema: z.ZodType<UpdateCheckFCP, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksResponseSource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckFCP> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksResponseSource$.outboundSchema,
    });
}

/** @internal */
export namespace UpdateCheckChecksResponse200Source$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckChecksResponse200Source);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace UpdateCheckLCP$ {
    export const inboundSchema: z.ZodType<UpdateCheckLCP, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksResponse200Source$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckLCP> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksResponse200Source$.outboundSchema,
    });
}

/** @internal */
export namespace UpdateCheckChecksResponse200ApplicationJSONSource$ {
    export const inboundSchema = z.nativeEnum(UpdateCheckChecksResponse200ApplicationJSONSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace UpdateCheckCLS$ {
    export const inboundSchema: z.ZodType<UpdateCheckCLS, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksResponse200ApplicationJSONSource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckCLS> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksResponse200ApplicationJSONSource$.outboundSchema,
    });
}

/** @internal */
export namespace UpdateCheckChecksResponse200ApplicationJSONResponseBodySource$ {
    export const inboundSchema = z.nativeEnum(
        UpdateCheckChecksResponse200ApplicationJSONResponseBodySource
    );
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace UpdateCheckTBT$ {
    export const inboundSchema: z.ZodType<UpdateCheckTBT, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksResponse200ApplicationJSONResponseBodySource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckTBT> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksResponse200ApplicationJSONResponseBodySource$.outboundSchema,
    });
}

/** @internal */
export namespace UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource$ {
    export const inboundSchema = z.nativeEnum(
        UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource
    );
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace UpdateCheckVirtualExperienceScore$ {
    export const inboundSchema: z.ZodType<
        UpdateCheckVirtualExperienceScore,
        z.ZodTypeDef,
        unknown
    > = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateCheckVirtualExperienceScore
    > = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: UpdateCheckChecksResponse200ApplicationJSONResponseBodyOutputSource$.outboundSchema,
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
            return remap$(v, {
                FCP: "fcp",
                LCP: "lcp",
                CLS: "cls",
                TBT: "tbt",
            });
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
            return remap$(v, {
                fcp: "FCP",
                lcp: "LCP",
                cls: "CLS",
                tbt: "TBT",
            });
        });
}

/** @internal */
export namespace UpdateCheckOutput$ {
    export const inboundSchema: z.ZodType<UpdateCheckOutput, z.ZodTypeDef, unknown> = z.object({
        metrics: z.lazy(() => UpdateCheckMetrics$.inboundSchema).optional(),
    });

    export type Outbound = {
        metrics?: UpdateCheckMetrics$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckOutput> = z.object({
        metrics: z.lazy(() => UpdateCheckMetrics$.outboundSchema).optional(),
    });
}

/** @internal */
export namespace UpdateCheckResponseBody$ {
    export const inboundSchema: z.ZodType<UpdateCheckResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
            name: z.string(),
            path: z.string().optional(),
            status: UpdateCheckChecksStatus$.inboundSchema,
            conclusion: UpdateCheckConclusion$.inboundSchema.optional(),
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
        });

    export type Outbound = {
        id: string;
        name: string;
        path?: string | undefined;
        status: string;
        conclusion?: string | undefined;
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCheckResponseBody> =
        z.object({
            id: z.string(),
            name: z.string(),
            path: z.string().optional(),
            status: UpdateCheckChecksStatus$.outboundSchema,
            conclusion: UpdateCheckConclusion$.outboundSchema.optional(),
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
        });
}
