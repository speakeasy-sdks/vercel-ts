/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives";
import * as z from "zod";

export type IssueCertRequestBody = {
    /**
     * The common names the cert should be issued for
     */
    cns?: Array<string> | undefined;
};

export type IssueCertRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: IssueCertRequestBody | undefined;
};

export type IssueCertResponseBody = {
    id: string;
    createdAt: number;
    expiresAt: number;
    autoRenew: boolean;
    cns: Array<string>;
};

/** @internal */
export namespace IssueCertRequestBody$ {
    export const inboundSchema: z.ZodType<IssueCertRequestBody, z.ZodTypeDef, unknown> = z.object({
        cns: z.array(z.string()).optional(),
    });

    export type Outbound = {
        cns?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IssueCertRequestBody> = z.object(
        {
            cns: z.array(z.string()).optional(),
        }
    );
}

/** @internal */
export namespace IssueCertRequest$ {
    export const inboundSchema: z.ZodType<IssueCertRequest, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => IssueCertRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: IssueCertRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IssueCertRequest> = z
        .object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => IssueCertRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace IssueCertResponseBody$ {
    export const inboundSchema: z.ZodType<IssueCertResponseBody, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        createdAt: z.number(),
        expiresAt: z.number(),
        autoRenew: z.boolean(),
        cns: z.array(z.string()),
    });

    export type Outbound = {
        id: string;
        createdAt: number;
        expiresAt: number;
        autoRenew: boolean;
        cns: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IssueCertResponseBody> =
        z.object({
            id: z.string(),
            createdAt: z.number(),
            expiresAt: z.number(),
            autoRenew: z.boolean(),
            cns: z.array(z.string()),
        });
}
