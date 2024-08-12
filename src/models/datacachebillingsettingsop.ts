/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DataCacheBillingSettingsRequestBody = {
    excessBillingEnabled?: boolean | undefined;
};

export type DataCacheBillingSettingsResponseBody = {
    excessBillingEnabled?: boolean | undefined;
};

/** @internal */
export const DataCacheBillingSettingsRequestBody$inboundSchema: z.ZodType<
    DataCacheBillingSettingsRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    excessBillingEnabled: z.boolean().optional(),
});

/** @internal */
export type DataCacheBillingSettingsRequestBody$Outbound = {
    excessBillingEnabled?: boolean | undefined;
};

/** @internal */
export const DataCacheBillingSettingsRequestBody$outboundSchema: z.ZodType<
    DataCacheBillingSettingsRequestBody$Outbound,
    z.ZodTypeDef,
    DataCacheBillingSettingsRequestBody
> = z.object({
    excessBillingEnabled: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataCacheBillingSettingsRequestBody$ {
    /** @deprecated use `DataCacheBillingSettingsRequestBody$inboundSchema` instead. */
    export const inboundSchema = DataCacheBillingSettingsRequestBody$inboundSchema;
    /** @deprecated use `DataCacheBillingSettingsRequestBody$outboundSchema` instead. */
    export const outboundSchema = DataCacheBillingSettingsRequestBody$outboundSchema;
    /** @deprecated use `DataCacheBillingSettingsRequestBody$Outbound` instead. */
    export type Outbound = DataCacheBillingSettingsRequestBody$Outbound;
}

/** @internal */
export const DataCacheBillingSettingsResponseBody$inboundSchema: z.ZodType<
    DataCacheBillingSettingsResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    excessBillingEnabled: z.boolean().optional(),
});

/** @internal */
export type DataCacheBillingSettingsResponseBody$Outbound = {
    excessBillingEnabled?: boolean | undefined;
};

/** @internal */
export const DataCacheBillingSettingsResponseBody$outboundSchema: z.ZodType<
    DataCacheBillingSettingsResponseBody$Outbound,
    z.ZodTypeDef,
    DataCacheBillingSettingsResponseBody
> = z.object({
    excessBillingEnabled: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataCacheBillingSettingsResponseBody$ {
    /** @deprecated use `DataCacheBillingSettingsResponseBody$inboundSchema` instead. */
    export const inboundSchema = DataCacheBillingSettingsResponseBody$inboundSchema;
    /** @deprecated use `DataCacheBillingSettingsResponseBody$outboundSchema` instead. */
    export const outboundSchema = DataCacheBillingSettingsResponseBody$outboundSchema;
    /** @deprecated use `DataCacheBillingSettingsResponseBody$Outbound` instead. */
    export type Outbound = DataCacheBillingSettingsResponseBody$Outbound;
}