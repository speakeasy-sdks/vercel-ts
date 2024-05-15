/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * An object describing the reason why the User account is being deleted.
 */
export type RequestDeleteReasons = {
    /**
     * Idenitifier slug of the reason why the User account is being deleted.
     */
    slug: string;
    /**
     * Description of the reason why the User account is being deleted.
     */
    description: string;
};

export type RequestDeleteRequestBody = {
    /**
     * Optional array of objects that describe the reason why the User account is being deleted.
     */
    reasons?: Array<RequestDeleteReasons> | undefined;
};

/**
 * Response indicating that the User deletion process has been initiated, and a confirmation email has been sent.
 */
export type RequestDeleteResponseBody = {
    /**
     * Unique identifier of the User who has initiated deletion.
     */
    id: string;
    /**
     * Email address of the User who has initiated deletion.
     */
    email: string;
    /**
     * User deletion progress status.
     */
    message: string;
};

export type RequestDeleteResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Response indicating that the User deletion process has been initiated, and a confirmation email has been sent.
     */
    object?: RequestDeleteResponseBody | undefined;
};

/** @internal */
export namespace RequestDeleteReasons$ {
    export const inboundSchema: z.ZodType<RequestDeleteReasons, z.ZodTypeDef, unknown> = z
        .object({
            slug: z.string(),
            description: z.string(),
        })
        .transform((v) => {
            return {
                slug: v.slug,
                description: v.description,
            };
        });

    export type Outbound = {
        slug: string;
        description: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestDeleteReasons> = z
        .object({
            slug: z.string(),
            description: z.string(),
        })
        .transform((v) => {
            return {
                slug: v.slug,
                description: v.description,
            };
        });
}

/** @internal */
export namespace RequestDeleteRequestBody$ {
    export const inboundSchema: z.ZodType<RequestDeleteRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            reasons: z.array(z.lazy(() => RequestDeleteReasons$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.reasons === undefined ? null : { reasons: v.reasons }),
            };
        });

    export type Outbound = {
        reasons?: Array<RequestDeleteReasons$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestDeleteRequestBody> = z
        .object({
            reasons: z.array(z.lazy(() => RequestDeleteReasons$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.reasons === undefined ? null : { reasons: v.reasons }),
            };
        });
}

/** @internal */
export namespace RequestDeleteResponseBody$ {
    export const inboundSchema: z.ZodType<RequestDeleteResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            email: z.string(),
            message: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                email: v.email,
                message: v.message,
            };
        });

    export type Outbound = {
        id: string;
        email: string;
        message: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestDeleteResponseBody> = z
        .object({
            id: z.string(),
            email: z.string(),
            message: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                email: v.email,
                message: v.message,
            };
        });
}

/** @internal */
export namespace RequestDeleteResponse$ {
    export const inboundSchema: z.ZodType<RequestDeleteResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => RequestDeleteResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: RequestDeleteResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestDeleteResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => RequestDeleteResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}