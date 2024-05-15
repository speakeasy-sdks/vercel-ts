/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteSecretRequest = {
    /**
     * The name or the unique identifier to which the secret belongs to.
     */
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export type DeleteSecretResponseBody = {
    /**
     * The unique identifier of the deleted secret.
     */
    uid: string;
    /**
     * The name of the deleted secret.
     */
    name: string;
    /**
     * The date when the secret was created.
     */
    created: number;
};

export type DeleteSecretResponse = {
    httpMeta: components.HTTPMetadata;
    object?: DeleteSecretResponseBody | undefined;
};

/** @internal */
export namespace DeleteSecretRequest$ {
    export const inboundSchema: z.ZodType<DeleteSecretRequest, z.ZodTypeDef, unknown> = z
        .object({
            idOrName: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        idOrName: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSecretRequest> = z
        .object({
            idOrName: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace DeleteSecretResponseBody$ {
    export const inboundSchema: z.ZodType<DeleteSecretResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            uid: z.string(),
            name: z.string(),
            created: z.number(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                name: v.name,
                created: v.created,
            };
        });

    export type Outbound = {
        uid: string;
        name: string;
        created: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSecretResponseBody> = z
        .object({
            uid: z.string(),
            name: z.string(),
            created: z.number(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                name: v.name,
                created: v.created,
            };
        });
}

/** @internal */
export namespace DeleteSecretResponse$ {
    export const inboundSchema: z.ZodType<DeleteSecretResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => DeleteSecretResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: DeleteSecretResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSecretResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => DeleteSecretResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
