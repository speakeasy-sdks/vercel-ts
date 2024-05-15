/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type PatchEdgeConfigSchemaRequestBody = {
    definition?: any | undefined;
};

export type PatchEdgeConfigSchemaRequest = {
    edgeConfigId: string;
    dryRun?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: PatchEdgeConfigSchemaRequestBody | undefined;
};

/**
 * The JSON schema uploaded by the user
 */
export type PatchEdgeConfigSchemaResponseBody = {};

export type PatchEdgeConfigSchemaResponse = {
    httpMeta: components.HTTPMetadata;
    object?: PatchEdgeConfigSchemaResponseBody | null | undefined;
};

/** @internal */
export namespace PatchEdgeConfigSchemaRequestBody$ {
    export const inboundSchema: z.ZodType<PatchEdgeConfigSchemaRequestBody, z.ZodTypeDef, unknown> =
        z
            .object({
                definition: z.any().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.definition === undefined ? null : { definition: v.definition }),
                };
            });

    export type Outbound = {
        definition?: any | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PatchEdgeConfigSchemaRequestBody
    > = z
        .object({
            definition: z.any().optional(),
        })
        .transform((v) => {
            return {
                ...(v.definition === undefined ? null : { definition: v.definition }),
            };
        });
}

/** @internal */
export namespace PatchEdgeConfigSchemaRequest$ {
    export const inboundSchema: z.ZodType<PatchEdgeConfigSchemaRequest, z.ZodTypeDef, unknown> = z
        .object({
            edgeConfigId: z.string(),
            dryRun: z.string().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => PatchEdgeConfigSchemaRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                edgeConfigId: v.edgeConfigId,
                ...(v.dryRun === undefined ? null : { dryRun: v.dryRun }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        edgeConfigId: string;
        dryRun?: string | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: PatchEdgeConfigSchemaRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchEdgeConfigSchemaRequest> = z
        .object({
            edgeConfigId: z.string(),
            dryRun: z.string().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => PatchEdgeConfigSchemaRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                edgeConfigId: v.edgeConfigId,
                ...(v.dryRun === undefined ? null : { dryRun: v.dryRun }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace PatchEdgeConfigSchemaResponseBody$ {
    export const inboundSchema: z.ZodType<
        PatchEdgeConfigSchemaResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PatchEdgeConfigSchemaResponseBody
    > = z.object({});
}

/** @internal */
export namespace PatchEdgeConfigSchemaResponse$ {
    export const inboundSchema: z.ZodType<PatchEdgeConfigSchemaResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z
                .nullable(z.lazy(() => PatchEdgeConfigSchemaResponseBody$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: PatchEdgeConfigSchemaResponseBody$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchEdgeConfigSchemaResponse> =
        z
            .object({
                httpMeta: components.HTTPMetadata$.outboundSchema,
                object: z
                    .nullable(z.lazy(() => PatchEdgeConfigSchemaResponseBody$.outboundSchema))
                    .optional(),
            })
            .transform((v) => {
                return {
                    HttpMeta: v.httpMeta,
                    ...(v.object === undefined ? null : { object: v.object }),
                };
            });
}