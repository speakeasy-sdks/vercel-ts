/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives";
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

/** @internal */
export namespace GetCheckRequest$ {
    export const inboundSchema: z.ZodType<GetCheckRequest, z.ZodTypeDef, unknown> = z.object({
        deploymentId: z.string(),
        checkId: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });

    export type Outbound = {
        deploymentId: string;
        checkId: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckRequest> = z.object({
        deploymentId: z.string(),
        checkId: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });
}

/** @internal */
export namespace GetCheckStatus$ {
    export const inboundSchema = z.nativeEnum(GetCheckStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetCheckConclusion$ {
    export const inboundSchema = z.nativeEnum(GetCheckConclusion);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetCheckSource$ {
    export const inboundSchema = z.nativeEnum(GetCheckSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetCheckFCP$ {
    export const inboundSchema: z.ZodType<GetCheckFCP, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: GetCheckSource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckFCP> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: GetCheckSource$.outboundSchema,
    });
}

/** @internal */
export namespace GetCheckChecksSource$ {
    export const inboundSchema = z.nativeEnum(GetCheckChecksSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetCheckLCP$ {
    export const inboundSchema: z.ZodType<GetCheckLCP, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: GetCheckChecksSource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckLCP> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: GetCheckChecksSource$.outboundSchema,
    });
}

/** @internal */
export namespace GetCheckChecksResponseSource$ {
    export const inboundSchema = z.nativeEnum(GetCheckChecksResponseSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetCheckCLS$ {
    export const inboundSchema: z.ZodType<GetCheckCLS, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: GetCheckChecksResponseSource$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckCLS> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: GetCheckChecksResponseSource$.outboundSchema,
    });
}

/** @internal */
export namespace GetCheckChecksResponse200Source$ {
    export const inboundSchema = z.nativeEnum(GetCheckChecksResponse200Source);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetCheckTBT$ {
    export const inboundSchema: z.ZodType<GetCheckTBT, z.ZodTypeDef, unknown> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: GetCheckChecksResponse200Source$.inboundSchema,
    });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckTBT> = z.object({
        value: z.nullable(z.number()),
        previousValue: z.number().optional(),
        source: GetCheckChecksResponse200Source$.outboundSchema,
    });
}

/** @internal */
export namespace GetCheckChecksResponse200ApplicationJSONSource$ {
    export const inboundSchema = z.nativeEnum(GetCheckChecksResponse200ApplicationJSONSource);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetCheckVirtualExperienceScore$ {
    export const inboundSchema: z.ZodType<GetCheckVirtualExperienceScore, z.ZodTypeDef, unknown> =
        z.object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckChecksResponse200ApplicationJSONSource$.inboundSchema,
        });

    export type Outbound = {
        value: number | null;
        previousValue?: number | undefined;
        source: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckVirtualExperienceScore> =
        z.object({
            value: z.nullable(z.number()),
            previousValue: z.number().optional(),
            source: GetCheckChecksResponse200ApplicationJSONSource$.outboundSchema,
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
            return remap$(v, {
                FCP: "fcp",
                LCP: "lcp",
                CLS: "cls",
                TBT: "tbt",
            });
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
            return remap$(v, {
                fcp: "FCP",
                lcp: "LCP",
                cls: "CLS",
                tbt: "TBT",
            });
        });
}

/** @internal */
export namespace GetCheckOutput$ {
    export const inboundSchema: z.ZodType<GetCheckOutput, z.ZodTypeDef, unknown> = z.object({
        metrics: z.lazy(() => GetCheckMetrics$.inboundSchema).optional(),
    });

    export type Outbound = {
        metrics?: GetCheckMetrics$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckOutput> = z.object({
        metrics: z.lazy(() => GetCheckMetrics$.outboundSchema).optional(),
    });
}

/** @internal */
export namespace GetCheckResponseBody$ {
    export const inboundSchema: z.ZodType<GetCheckResponseBody, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        name: z.string(),
        path: z.string().optional(),
        status: GetCheckStatus$.inboundSchema,
        conclusion: GetCheckConclusion$.inboundSchema.optional(),
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
    });

    export type Outbound = {
        id: string;
        name: string;
        path?: string | undefined;
        status: string;
        conclusion?: string | undefined;
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCheckResponseBody> = z.object(
        {
            id: z.string(),
            name: z.string(),
            path: z.string().optional(),
            status: GetCheckStatus$.outboundSchema,
            conclusion: GetCheckConclusion$.outboundSchema.optional(),
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
        }
    );
}
