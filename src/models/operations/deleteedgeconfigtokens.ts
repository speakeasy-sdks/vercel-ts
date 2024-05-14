/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteEdgeConfigTokensRequestBody = {
    tokens: Array<string>;
};

export type DeleteEdgeConfigTokensRequest = {
    edgeConfigId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: DeleteEdgeConfigTokensRequestBody | undefined;
};

export type DeleteEdgeConfigTokensResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace DeleteEdgeConfigTokensRequestBody$ {
    export const inboundSchema: z.ZodType<
        DeleteEdgeConfigTokensRequestBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            tokens: z.array(z.string()),
        })
        .transform((v) => {
            return {
                tokens: v.tokens,
            };
        });

    export type Outbound = {
        tokens: Array<string>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteEdgeConfigTokensRequestBody
    > = z
        .object({
            tokens: z.array(z.string()),
        })
        .transform((v) => {
            return {
                tokens: v.tokens,
            };
        });
}

/** @internal */
export namespace DeleteEdgeConfigTokensRequest$ {
    export const inboundSchema: z.ZodType<DeleteEdgeConfigTokensRequest, z.ZodTypeDef, unknown> = z
        .object({
            edgeConfigId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => DeleteEdgeConfigTokensRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                edgeConfigId: v.edgeConfigId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        edgeConfigId: string;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: DeleteEdgeConfigTokensRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteEdgeConfigTokensRequest> =
        z
            .object({
                edgeConfigId: z.string(),
                teamId: z.string().optional(),
                slug: z.string().optional(),
                requestBody: z
                    .lazy(() => DeleteEdgeConfigTokensRequestBody$.outboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    edgeConfigId: v.edgeConfigId,
                    ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                    ...(v.slug === undefined ? null : { slug: v.slug }),
                    ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                };
            });
}

/** @internal */
export namespace DeleteEdgeConfigTokensResponse$ {
    export const inboundSchema: z.ZodType<DeleteEdgeConfigTokensResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteEdgeConfigTokensResponse> =
        z
            .object({
                httpMeta: components.HTTPMetadata$.outboundSchema,
            })
            .transform((v) => {
                return {
                    HttpMeta: v.httpMeta,
                };
            });
}
