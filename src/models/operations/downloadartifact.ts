/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DownloadArtifactRequest = {
    /**
     * The continuous integration or delivery environment where this artifact is downloaded.
     */
    xArtifactClientCi?: string | undefined;
    /**
     * 1 if the client is an interactive shell. Otherwise 0
     */
    xArtifactClientInteractive?: number | undefined;
    /**
     * The artifact hash
     */
    hash: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export type DownloadArtifactResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * The artifact was found and is downloaded as a stream. Content-Length should be verified.
     */
    stream?: ReadableStream<Uint8Array> | undefined;
};

/** @internal */
export namespace DownloadArtifactRequest$ {
    export const inboundSchema: z.ZodType<DownloadArtifactRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-artifact-client-ci": z.string().optional(),
            "x-artifact-client-interactive": z.number().int().optional(),
            hash: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v["x-artifact-client-ci"] === undefined
                    ? null
                    : { xArtifactClientCi: v["x-artifact-client-ci"] }),
                ...(v["x-artifact-client-interactive"] === undefined
                    ? null
                    : { xArtifactClientInteractive: v["x-artifact-client-interactive"] }),
                hash: v.hash,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        "x-artifact-client-ci"?: string | undefined;
        "x-artifact-client-interactive"?: number | undefined;
        hash: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DownloadArtifactRequest> = z
        .object({
            xArtifactClientCi: z.string().optional(),
            xArtifactClientInteractive: z.number().int().optional(),
            hash: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.xArtifactClientCi === undefined
                    ? null
                    : { "x-artifact-client-ci": v.xArtifactClientCi }),
                ...(v.xArtifactClientInteractive === undefined
                    ? null
                    : { "x-artifact-client-interactive": v.xArtifactClientInteractive }),
                hash: v.hash,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace DownloadArtifactResponse$ {
    export const inboundSchema: z.ZodType<DownloadArtifactResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            stream: z.instanceof(ReadableStream<Uint8Array>).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.stream === undefined ? null : { stream: v.stream }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        stream?: ReadableStream<Uint8Array> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DownloadArtifactResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            stream: z.instanceof(ReadableStream<Uint8Array>).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.stream === undefined ? null : { stream: v.stream }),
            };
        });
}