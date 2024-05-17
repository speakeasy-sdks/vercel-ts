/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../lib/base64";
import * as z from "zod";

export type UploadArtifactRequest = {
    /**
     * The artifact size in bytes
     */
    contentLength: number;
    /**
     * The time taken to generate the uploaded artifact in milliseconds.
     */
    xArtifactDuration?: number | undefined;
    /**
     * The continuous integration or delivery environment where this artifact was generated.
     */
    xArtifactClientCi?: string | undefined;
    /**
     * 1 if the client is an interactive shell. Otherwise 0
     */
    xArtifactClientInteractive?: number | undefined;
    /**
     * The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`
     */
    xArtifactTag?: string | undefined;
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
    requestBody?: Uint8Array | string | undefined;
};

/**
 * File successfully uploaded
 */
export type UploadArtifactResponseBody = {
    /**
     * Array of URLs where the artifact was updated
     */
    urls: Array<string>;
};

/** @internal */
export namespace UploadArtifactRequest$ {
    export const inboundSchema: z.ZodType<UploadArtifactRequest, z.ZodTypeDef, unknown> = z
        .object({
            "Content-Length": z.number(),
            "x-artifact-duration": z.number().optional(),
            "x-artifact-client-ci": z.string().optional(),
            "x-artifact-client-interactive": z.number().int().optional(),
            "x-artifact-tag": z.string().optional(),
            hash: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: b64$.zodInbound.optional(),
        })
        .transform((v) => {
            return {
                contentLength: v["Content-Length"],
                ...(v["x-artifact-duration"] === undefined
                    ? null
                    : { xArtifactDuration: v["x-artifact-duration"] }),
                ...(v["x-artifact-client-ci"] === undefined
                    ? null
                    : { xArtifactClientCi: v["x-artifact-client-ci"] }),
                ...(v["x-artifact-client-interactive"] === undefined
                    ? null
                    : { xArtifactClientInteractive: v["x-artifact-client-interactive"] }),
                ...(v["x-artifact-tag"] === undefined
                    ? null
                    : { xArtifactTag: v["x-artifact-tag"] }),
                hash: v.hash,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        "Content-Length": number;
        "x-artifact-duration"?: number | undefined;
        "x-artifact-client-ci"?: string | undefined;
        "x-artifact-client-interactive"?: number | undefined;
        "x-artifact-tag"?: string | undefined;
        hash: string;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: Uint8Array | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadArtifactRequest> = z
        .object({
            contentLength: z.number(),
            xArtifactDuration: z.number().optional(),
            xArtifactClientCi: z.string().optional(),
            xArtifactClientInteractive: z.number().int().optional(),
            xArtifactTag: z.string().optional(),
            hash: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: b64$.zodOutbound.optional(),
        })
        .transform((v) => {
            return {
                "Content-Length": v.contentLength,
                ...(v.xArtifactDuration === undefined
                    ? null
                    : { "x-artifact-duration": v.xArtifactDuration }),
                ...(v.xArtifactClientCi === undefined
                    ? null
                    : { "x-artifact-client-ci": v.xArtifactClientCi }),
                ...(v.xArtifactClientInteractive === undefined
                    ? null
                    : { "x-artifact-client-interactive": v.xArtifactClientInteractive }),
                ...(v.xArtifactTag === undefined ? null : { "x-artifact-tag": v.xArtifactTag }),
                hash: v.hash,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace UploadArtifactResponseBody$ {
    export const inboundSchema: z.ZodType<UploadArtifactResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            urls: z.array(z.string()),
        })
        .transform((v) => {
            return {
                urls: v.urls,
            };
        });

    export type Outbound = {
        urls: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadArtifactResponseBody> = z
        .object({
            urls: z.array(z.string()),
        })
        .transform((v) => {
            return {
                urls: v.urls,
            };
        });
}