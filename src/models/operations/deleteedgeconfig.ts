/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteEdgeConfigRequest = {
    edgeConfigId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export type DeleteEdgeConfigResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace DeleteEdgeConfigRequest$ {
    export const inboundSchema: z.ZodType<DeleteEdgeConfigRequest, z.ZodTypeDef, unknown> = z
        .object({
            edgeConfigId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                edgeConfigId: v.edgeConfigId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        edgeConfigId: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteEdgeConfigRequest> = z
        .object({
            edgeConfigId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                edgeConfigId: v.edgeConfigId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace DeleteEdgeConfigResponse$ {
    export const inboundSchema: z.ZodType<DeleteEdgeConfigResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteEdgeConfigResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
            };
        });
}
