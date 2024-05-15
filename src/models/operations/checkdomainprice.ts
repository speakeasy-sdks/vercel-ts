/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * In which status of the domain the price needs to be checked.
 */
export enum QueryParamType {
    New = "new",
    Renewal = "renewal",
}

export type CheckDomainPriceRequest = {
    /**
     * The name of the domain for which the price needs to be checked.
     */
    name: string;
    /**
     * In which status of the domain the price needs to be checked.
     */
    type?: QueryParamType | undefined;
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
 * Successful response which returns the price of the domain and the period.
 */
export type CheckDomainPriceResponseBody = {
    /**
     * The domain price in USD.
     */
    price: number;
    /**
     * The number of years the domain could be held before paying again.
     */
    period: number;
};

export type CheckDomainPriceResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful response which returns the price of the domain and the period.
     */
    object?: CheckDomainPriceResponseBody | undefined;
};

/** @internal */
export namespace QueryParamType$ {
    export const inboundSchema = z.nativeEnum(QueryParamType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CheckDomainPriceRequest$ {
    export const inboundSchema: z.ZodType<CheckDomainPriceRequest, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: QueryParamType$.inboundSchema.optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        name: string;
        type?: string | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CheckDomainPriceRequest> = z
        .object({
            name: z.string(),
            type: QueryParamType$.outboundSchema.optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace CheckDomainPriceResponseBody$ {
    export const inboundSchema: z.ZodType<CheckDomainPriceResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            price: z.number(),
            period: z.number(),
        })
        .transform((v) => {
            return {
                price: v.price,
                period: v.period,
            };
        });

    export type Outbound = {
        price: number;
        period: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CheckDomainPriceResponseBody> = z
        .object({
            price: z.number(),
            period: z.number(),
        })
        .transform((v) => {
            return {
                price: v.price,
                period: v.period,
            };
        });
}

/** @internal */
export namespace CheckDomainPriceResponse$ {
    export const inboundSchema: z.ZodType<CheckDomainPriceResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => CheckDomainPriceResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: CheckDomainPriceResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CheckDomainPriceResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => CheckDomainPriceResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
