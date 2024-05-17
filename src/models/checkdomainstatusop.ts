/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CheckDomainStatusRequest = {
    /**
     * The name of the domain for which we would like to check the status.
     */
    name: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

/**
 * Successful response checking if a Domain's name is available.
 */
export type CheckDomainStatusResponseBody = {
    available: boolean;
};

/** @internal */
export namespace CheckDomainStatusRequest$ {
    export const inboundSchema: z.ZodType<CheckDomainStatusRequest, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        name: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CheckDomainStatusRequest> = z
        .object({
            name: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace CheckDomainStatusResponseBody$ {
    export const inboundSchema: z.ZodType<CheckDomainStatusResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            available: z.boolean(),
        })
        .transform((v) => {
            return {
                available: v.available,
            };
        });

    export type Outbound = {
        available: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CheckDomainStatusResponseBody> =
        z
            .object({
                available: z.boolean(),
            })
            .transform((v) => {
                return {
                    available: v.available,
                };
            });
}
