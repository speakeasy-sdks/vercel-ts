/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateEdgeConfigTokenRequestBody = {
    label: string;
};

export type CreateEdgeConfigTokenRequest = {
    edgeConfigId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateEdgeConfigTokenRequestBody | undefined;
};

export type CreateEdgeConfigTokenResponseBody = {
    token: string;
    id: string;
};

/** @internal */
export namespace CreateEdgeConfigTokenRequestBody$ {
    export const inboundSchema: z.ZodType<CreateEdgeConfigTokenRequestBody, z.ZodTypeDef, unknown> =
        z
            .object({
                label: z.string(),
            })
            .transform((v) => {
                return {
                    label: v.label,
                };
            });

    export type Outbound = {
        label: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateEdgeConfigTokenRequestBody
    > = z
        .object({
            label: z.string(),
        })
        .transform((v) => {
            return {
                label: v.label,
            };
        });
}

/** @internal */
export namespace CreateEdgeConfigTokenRequest$ {
    export const inboundSchema: z.ZodType<CreateEdgeConfigTokenRequest, z.ZodTypeDef, unknown> = z
        .object({
            edgeConfigId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => CreateEdgeConfigTokenRequestBody$.inboundSchema).optional(),
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
        RequestBody?: CreateEdgeConfigTokenRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateEdgeConfigTokenRequest> = z
        .object({
            edgeConfigId: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => CreateEdgeConfigTokenRequestBody$.outboundSchema).optional(),
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
export namespace CreateEdgeConfigTokenResponseBody$ {
    export const inboundSchema: z.ZodType<
        CreateEdgeConfigTokenResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            token: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                token: v.token,
                id: v.id,
            };
        });

    export type Outbound = {
        token: string;
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateEdgeConfigTokenResponseBody
    > = z
        .object({
            token: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                token: v.token,
                id: v.id,
            };
        });
}
