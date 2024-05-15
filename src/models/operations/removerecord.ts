/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type RemoveRecordRequest = {
    domain: string;
    recordId: string;
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
 * Successful response by removing the specified DNS record.
 */
export type RemoveRecordResponseBody = {};

export type RemoveRecordResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful response by removing the specified DNS record.
     */
    object?: RemoveRecordResponseBody | undefined;
};

/** @internal */
export namespace RemoveRecordRequest$ {
    export const inboundSchema: z.ZodType<RemoveRecordRequest, z.ZodTypeDef, unknown> = z
        .object({
            domain: z.string(),
            recordId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                recordId: v.recordId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        domain: string;
        recordId: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveRecordRequest> = z
        .object({
            domain: z.string(),
            recordId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                recordId: v.recordId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace RemoveRecordResponseBody$ {
    export const inboundSchema: z.ZodType<RemoveRecordResponseBody, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveRecordResponseBody> =
        z.object({});
}

/** @internal */
export namespace RemoveRecordResponse$ {
    export const inboundSchema: z.ZodType<RemoveRecordResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => RemoveRecordResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: RemoveRecordResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveRecordResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => RemoveRecordResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}