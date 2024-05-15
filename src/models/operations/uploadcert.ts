/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type UploadCertRequestBody = {
    /**
     * The certificate authority
     */
    ca: string;
    /**
     * The certificate key
     */
    key: string;
    /**
     * The certificate
     */
    cert: string;
    /**
     * Skip validation of the certificate
     */
    skipValidation?: boolean | undefined;
};

export type UploadCertRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UploadCertRequestBody | undefined;
};

export type UploadCertResponseBody = {
    id: string;
    createdAt: number;
    expiresAt: number;
    autoRenew: boolean;
    cns: Array<string>;
};

export type UploadCertResponse = {
    httpMeta: components.HTTPMetadata;
    object?: UploadCertResponseBody | undefined;
};

/** @internal */
export namespace UploadCertRequestBody$ {
    export const inboundSchema: z.ZodType<UploadCertRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            ca: z.string(),
            key: z.string(),
            cert: z.string(),
            skipValidation: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ca: v.ca,
                key: v.key,
                cert: v.cert,
                ...(v.skipValidation === undefined ? null : { skipValidation: v.skipValidation }),
            };
        });

    export type Outbound = {
        ca: string;
        key: string;
        cert: string;
        skipValidation?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadCertRequestBody> = z
        .object({
            ca: z.string(),
            key: z.string(),
            cert: z.string(),
            skipValidation: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ca: v.ca,
                key: v.key,
                cert: v.cert,
                ...(v.skipValidation === undefined ? null : { skipValidation: v.skipValidation }),
            };
        });
}

/** @internal */
export namespace UploadCertRequest$ {
    export const inboundSchema: z.ZodType<UploadCertRequest, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => UploadCertRequestBody$.inboundSchema).optional(),
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
        RequestBody?: UploadCertRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadCertRequest> = z
        .object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => UploadCertRequestBody$.outboundSchema).optional(),
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
export namespace UploadCertResponseBody$ {
    export const inboundSchema: z.ZodType<UploadCertResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            createdAt: z.number(),
            expiresAt: z.number(),
            autoRenew: z.boolean(),
            cns: z.array(z.string()),
        })
        .transform((v) => {
            return {
                id: v.id,
                createdAt: v.createdAt,
                expiresAt: v.expiresAt,
                autoRenew: v.autoRenew,
                cns: v.cns,
            };
        });

    export type Outbound = {
        id: string;
        createdAt: number;
        expiresAt: number;
        autoRenew: boolean;
        cns: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadCertResponseBody> = z
        .object({
            id: z.string(),
            createdAt: z.number(),
            expiresAt: z.number(),
            autoRenew: z.boolean(),
            cns: z.array(z.string()),
        })
        .transform((v) => {
            return {
                id: v.id,
                createdAt: v.createdAt,
                expiresAt: v.expiresAt,
                autoRenew: v.autoRenew,
                cns: v.cns,
            };
        });
}

/** @internal */
export namespace UploadCertResponse$ {
    export const inboundSchema: z.ZodType<UploadCertResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => UploadCertResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: UploadCertResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadCertResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => UploadCertResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
