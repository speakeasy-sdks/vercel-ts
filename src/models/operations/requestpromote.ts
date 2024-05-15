/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type RequestPromoteRequest = {
    projectId: string;
    deploymentId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export type RequestPromoteResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace RequestPromoteRequest$ {
    export const inboundSchema: z.ZodType<RequestPromoteRequest, z.ZodTypeDef, unknown> = z
        .object({
            projectId: z.string(),
            deploymentId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                projectId: v.projectId,
                deploymentId: v.deploymentId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        projectId: string;
        deploymentId: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestPromoteRequest> = z
        .object({
            projectId: z.string(),
            deploymentId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                projectId: v.projectId,
                deploymentId: v.deploymentId,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace RequestPromoteResponse$ {
    export const inboundSchema: z.ZodType<RequestPromoteResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestPromoteResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
            };
        });
}