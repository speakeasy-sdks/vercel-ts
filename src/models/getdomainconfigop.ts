/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * When true, the response will only include the nameservers assigned directly to the specified domain. When false and there are no nameservers assigned directly to the specified domain, the response will include the nameservers of the domain's parent zone.
 */
export enum Strict {
    True = "true",
    False = "false",
}

export type GetDomainConfigRequest = {
    /**
     * The name of the domain.
     */
    domain: string;
    /**
     * When true, the response will only include the nameservers assigned directly to the specified domain. When false and there are no nameservers assigned directly to the specified domain, the response will include the nameservers of the domain's parent zone.
     */
    strict?: Strict | undefined;
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
 * How we see the domain's configuration. - `CNAME`: Domain has a CNAME pointing to Vercel. - `A`: Domain's A record is resolving to Vercel. - `http`: Domain is resolving to Vercel but may be behind a Proxy. - `dns-01`: Domain is not resolving to Vercel but dns-01 challenge is enabled. - `null`: Domain is not resolving to Vercel.
 */
export enum ConfiguredBy {
    Cname = "CNAME",
    A = "A",
    Http = "http",
    Dns01 = "dns-01",
}

/**
 * Which challenge types the domain can use for issuing certs.
 */
export enum AcceptedChallenges {
    Dns01 = "dns-01",
    Http01 = "http-01",
}

export type GetDomainConfigResponseBody = {
    /**
     * How we see the domain's configuration. - `CNAME`: Domain has a CNAME pointing to Vercel. - `A`: Domain's A record is resolving to Vercel. - `http`: Domain is resolving to Vercel but may be behind a Proxy. - `dns-01`: Domain is not resolving to Vercel but dns-01 challenge is enabled. - `null`: Domain is not resolving to Vercel.
     */
    configuredBy?: ConfiguredBy | null | undefined;
    /**
     * Which challenge types the domain can use for issuing certs.
     */
    acceptedChallenges?: Array<AcceptedChallenges> | undefined;
    /**
     * Whether or not the domain is configured AND we can automatically generate a TLS certificate.
     */
    misconfigured: boolean;
};

/** @internal */
export namespace Strict$ {
    export const inboundSchema = z.nativeEnum(Strict);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetDomainConfigRequest$ {
    export const inboundSchema: z.ZodType<GetDomainConfigRequest, z.ZodTypeDef, unknown> = z
        .object({
            domain: z.string(),
            strict: Strict$.inboundSchema.optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                ...(v.strict === undefined ? null : { strict: v.strict }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        domain: string;
        strict?: string | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainConfigRequest> = z
        .object({
            domain: z.string(),
            strict: Strict$.outboundSchema.optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                ...(v.strict === undefined ? null : { strict: v.strict }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace ConfiguredBy$ {
    export const inboundSchema = z.nativeEnum(ConfiguredBy);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AcceptedChallenges$ {
    export const inboundSchema = z.nativeEnum(AcceptedChallenges);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetDomainConfigResponseBody$ {
    export const inboundSchema: z.ZodType<GetDomainConfigResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            configuredBy: z.nullable(ConfiguredBy$.inboundSchema).optional(),
            acceptedChallenges: z.array(AcceptedChallenges$.inboundSchema).optional(),
            misconfigured: z.boolean(),
        })
        .transform((v) => {
            return {
                ...(v.configuredBy === undefined ? null : { configuredBy: v.configuredBy }),
                ...(v.acceptedChallenges === undefined
                    ? null
                    : { acceptedChallenges: v.acceptedChallenges }),
                misconfigured: v.misconfigured,
            };
        });

    export type Outbound = {
        configuredBy?: string | null | undefined;
        acceptedChallenges?: Array<string> | undefined;
        misconfigured: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainConfigResponseBody> = z
        .object({
            configuredBy: z.nullable(ConfiguredBy$.outboundSchema).optional(),
            acceptedChallenges: z.array(AcceptedChallenges$.outboundSchema).optional(),
            misconfigured: z.boolean(),
        })
        .transform((v) => {
            return {
                ...(v.configuredBy === undefined ? null : { configuredBy: v.configuredBy }),
                ...(v.acceptedChallenges === undefined
                    ? null
                    : { acceptedChallenges: v.acceptedChallenges }),
                misconfigured: v.misconfigured,
            };
        });
}
