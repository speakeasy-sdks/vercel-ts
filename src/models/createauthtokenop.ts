/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AuthToken, AuthToken$ } from "./authtoken";
import * as z from "zod";

export enum CreateAuthTokenRequestBodyType {
    Oauth2Token = "oauth2-token",
}

export type CreateAuthTokenRequestBody2 = {
    type: CreateAuthTokenRequestBodyType;
    name: string;
    clientId?: string | undefined;
    installationId?: string | undefined;
    expiresAt?: number | undefined;
};

export type CreateAuthTokenRequestBody1 = {
    name: string;
    expiresAt?: number | undefined;
};

export type CreateAuthTokenRequestBody = CreateAuthTokenRequestBody1 | CreateAuthTokenRequestBody2;

export type CreateAuthTokenRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateAuthTokenRequestBody1 | CreateAuthTokenRequestBody2 | undefined;
};

/**
 * Successful response.
 */
export type CreateAuthTokenResponseBody = {
    /**
     * Authentication token metadata.
     */
    token: AuthToken;
    /**
     * The authentication token's actual value. This token is only provided in this response, and can never be retrieved again in the future. Be sure to save it somewhere safe!
     */
    bearerToken: string;
};

/** @internal */
export namespace CreateAuthTokenRequestBodyType$ {
    export const inboundSchema = z.nativeEnum(CreateAuthTokenRequestBodyType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace CreateAuthTokenRequestBody2$ {
    export const inboundSchema: z.ZodType<CreateAuthTokenRequestBody2, z.ZodTypeDef, unknown> = z
        .object({
            type: CreateAuthTokenRequestBodyType$.inboundSchema,
            name: z.string(),
            clientId: z.string().optional(),
            installationId: z.string().optional(),
            expiresAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                name: v.name,
                ...(v.clientId === undefined ? null : { clientId: v.clientId }),
                ...(v.installationId === undefined ? null : { installationId: v.installationId }),
                ...(v.expiresAt === undefined ? null : { expiresAt: v.expiresAt }),
            };
        });

    export type Outbound = {
        type: string;
        name: string;
        clientId?: string | undefined;
        installationId?: string | undefined;
        expiresAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthTokenRequestBody2> = z
        .object({
            type: CreateAuthTokenRequestBodyType$.outboundSchema,
            name: z.string(),
            clientId: z.string().optional(),
            installationId: z.string().optional(),
            expiresAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                name: v.name,
                ...(v.clientId === undefined ? null : { clientId: v.clientId }),
                ...(v.installationId === undefined ? null : { installationId: v.installationId }),
                ...(v.expiresAt === undefined ? null : { expiresAt: v.expiresAt }),
            };
        });
}

/** @internal */
export namespace CreateAuthTokenRequestBody1$ {
    export const inboundSchema: z.ZodType<CreateAuthTokenRequestBody1, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            expiresAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.expiresAt === undefined ? null : { expiresAt: v.expiresAt }),
            };
        });

    export type Outbound = {
        name: string;
        expiresAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthTokenRequestBody1> = z
        .object({
            name: z.string(),
            expiresAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.expiresAt === undefined ? null : { expiresAt: v.expiresAt }),
            };
        });
}

/** @internal */
export namespace CreateAuthTokenRequestBody$ {
    export const inboundSchema: z.ZodType<CreateAuthTokenRequestBody, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => CreateAuthTokenRequestBody1$.inboundSchema),
            z.lazy(() => CreateAuthTokenRequestBody2$.inboundSchema),
        ]);

    export type Outbound =
        | CreateAuthTokenRequestBody1$.Outbound
        | CreateAuthTokenRequestBody2$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthTokenRequestBody> =
        z.union([
            z.lazy(() => CreateAuthTokenRequestBody1$.outboundSchema),
            z.lazy(() => CreateAuthTokenRequestBody2$.outboundSchema),
        ]);
}

/** @internal */
export namespace CreateAuthTokenRequest$ {
    export const inboundSchema: z.ZodType<CreateAuthTokenRequest, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z
                .union([
                    z.lazy(() => CreateAuthTokenRequestBody1$.inboundSchema),
                    z.lazy(() => CreateAuthTokenRequestBody2$.inboundSchema),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?:
            | CreateAuthTokenRequestBody1$.Outbound
            | CreateAuthTokenRequestBody2$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthTokenRequest> = z
        .object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z
                .union([
                    z.lazy(() => CreateAuthTokenRequestBody1$.outboundSchema),
                    z.lazy(() => CreateAuthTokenRequestBody2$.outboundSchema),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace CreateAuthTokenResponseBody$ {
    export const inboundSchema: z.ZodType<CreateAuthTokenResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            token: AuthToken$.inboundSchema,
            bearerToken: z.string(),
        })
        .transform((v) => {
            return {
                token: v.token,
                bearerToken: v.bearerToken,
            };
        });

    export type Outbound = {
        token: AuthToken$.Outbound;
        bearerToken: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAuthTokenResponseBody> = z
        .object({
            token: AuthToken$.outboundSchema,
            bearerToken: z.string(),
        })
        .transform((v) => {
            return {
                token: v.token,
                bearerToken: v.bearerToken,
            };
        });
}
