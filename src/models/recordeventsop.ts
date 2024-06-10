/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives";
import * as z from "zod";

/**
 * One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.
 */
export enum Source {
    Local = "LOCAL",
    Remote = "REMOTE",
}

/**
 * One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.
 */
export enum Event {
    Hit = "HIT",
    Miss = "MISS",
}

export type RequestBody = {
    /**
     * A UUID (universally unique identifer) for the session that generated this event.
     */
    sessionId: string;
    /**
     * One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.
     */
    source: Source;
    /**
     * One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.
     */
    event: Event;
    /**
     * The artifact hash
     */
    hash: string;
    /**
     * The time taken to generate the artifact. This should be sent as a body parameter on `HIT` events.
     */
    duration?: number | undefined;
};

export type RecordEventsRequest = {
    /**
     * The continuous integration or delivery environment where this artifact is downloaded.
     */
    xArtifactClientCi?: string | undefined;
    /**
     * 1 if the client is an interactive shell. Otherwise 0
     */
    xArtifactClientInteractive?: number | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: Array<RequestBody> | undefined;
};

/** @internal */
export namespace Source$ {
    export const inboundSchema = z.nativeEnum(Source);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Event$ {
    export const inboundSchema = z.nativeEnum(Event);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RequestBody$ {
    export const inboundSchema: z.ZodType<RequestBody, z.ZodTypeDef, unknown> = z.object({
        sessionId: z.string(),
        source: Source$.inboundSchema,
        event: Event$.inboundSchema,
        hash: z.string(),
        duration: z.number().optional(),
    });

    export type Outbound = {
        sessionId: string;
        source: string;
        event: string;
        hash: string;
        duration?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestBody> = z.object({
        sessionId: z.string(),
        source: Source$.outboundSchema,
        event: Event$.outboundSchema,
        hash: z.string(),
        duration: z.number().optional(),
    });
}

/** @internal */
export namespace RecordEventsRequest$ {
    export const inboundSchema: z.ZodType<RecordEventsRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-artifact-client-ci": z.string().optional(),
            "x-artifact-client-interactive": z.number().int().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.array(z.lazy(() => RequestBody$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "x-artifact-client-ci": "xArtifactClientCi",
                "x-artifact-client-interactive": "xArtifactClientInteractive",
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        "x-artifact-client-ci"?: string | undefined;
        "x-artifact-client-interactive"?: number | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: Array<RequestBody$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RecordEventsRequest> = z
        .object({
            xArtifactClientCi: z.string().optional(),
            xArtifactClientInteractive: z.number().int().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.array(z.lazy(() => RequestBody$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                xArtifactClientCi: "x-artifact-client-ci",
                xArtifactClientInteractive: "x-artifact-client-interactive",
                requestBody: "RequestBody",
            });
        });
}
