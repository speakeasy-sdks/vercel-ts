/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type BuyDomainRequestBody = {
    /**
     * The domain name to purchase.
     */
    name: string;
    /**
     * The price you expect to be charged for the purchase.
     */
    expectedPrice?: number | undefined;
    /**
     * Indicates whether the domain should be automatically renewed.
     */
    renew?: boolean | undefined;
};

export type BuyDomainRequest = {
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: BuyDomainRequestBody | undefined;
};

export type BuyDomainDomain = {
    uid: string;
    ns: Array<string>;
    verified: boolean;
    created: number;
    pending: boolean;
};

/**
 * Domain purchase is being processed asynchronously.
 */
export type BuyDomainDomainsResponseBody = {
    domain: BuyDomainDomain;
};

export type BuyDomainDomainsDomain = {
    uid: string;
    ns: Array<string>;
    verified: boolean;
    created: number;
    pending: boolean;
};

/**
 * Successful response for purchasing a Domain.
 */
export type BuyDomainResponseBody = {
    domain: BuyDomainDomainsDomain;
};

export type BuyDomainResponse = BuyDomainResponseBody | BuyDomainDomainsResponseBody;

/** @internal */
export namespace BuyDomainRequestBody$ {
    export const inboundSchema: z.ZodType<BuyDomainRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            expectedPrice: z.number().optional(),
            renew: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.expectedPrice === undefined ? null : { expectedPrice: v.expectedPrice }),
                ...(v.renew === undefined ? null : { renew: v.renew }),
            };
        });

    export type Outbound = {
        name: string;
        expectedPrice?: number | undefined;
        renew?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BuyDomainRequestBody> = z
        .object({
            name: z.string(),
            expectedPrice: z.number().optional(),
            renew: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.expectedPrice === undefined ? null : { expectedPrice: v.expectedPrice }),
                ...(v.renew === undefined ? null : { renew: v.renew }),
            };
        });
}

/** @internal */
export namespace BuyDomainRequest$ {
    export const inboundSchema: z.ZodType<BuyDomainRequest, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => BuyDomainRequestBody$.inboundSchema).optional(),
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
        RequestBody?: BuyDomainRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BuyDomainRequest> = z
        .object({
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => BuyDomainRequestBody$.outboundSchema).optional(),
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
export namespace BuyDomainDomain$ {
    export const inboundSchema: z.ZodType<BuyDomainDomain, z.ZodTypeDef, unknown> = z
        .object({
            uid: z.string(),
            ns: z.array(z.string()),
            verified: z.boolean(),
            created: z.number(),
            pending: z.boolean(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                ns: v.ns,
                verified: v.verified,
                created: v.created,
                pending: v.pending,
            };
        });

    export type Outbound = {
        uid: string;
        ns: Array<string>;
        verified: boolean;
        created: number;
        pending: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BuyDomainDomain> = z
        .object({
            uid: z.string(),
            ns: z.array(z.string()),
            verified: z.boolean(),
            created: z.number(),
            pending: z.boolean(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                ns: v.ns,
                verified: v.verified,
                created: v.created,
                pending: v.pending,
            };
        });
}

/** @internal */
export namespace BuyDomainDomainsResponseBody$ {
    export const inboundSchema: z.ZodType<BuyDomainDomainsResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            domain: z.lazy(() => BuyDomainDomain$.inboundSchema),
        })
        .transform((v) => {
            return {
                domain: v.domain,
            };
        });

    export type Outbound = {
        domain: BuyDomainDomain$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BuyDomainDomainsResponseBody> = z
        .object({
            domain: z.lazy(() => BuyDomainDomain$.outboundSchema),
        })
        .transform((v) => {
            return {
                domain: v.domain,
            };
        });
}

/** @internal */
export namespace BuyDomainDomainsDomain$ {
    export const inboundSchema: z.ZodType<BuyDomainDomainsDomain, z.ZodTypeDef, unknown> = z
        .object({
            uid: z.string(),
            ns: z.array(z.string()),
            verified: z.boolean(),
            created: z.number(),
            pending: z.boolean(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                ns: v.ns,
                verified: v.verified,
                created: v.created,
                pending: v.pending,
            };
        });

    export type Outbound = {
        uid: string;
        ns: Array<string>;
        verified: boolean;
        created: number;
        pending: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BuyDomainDomainsDomain> = z
        .object({
            uid: z.string(),
            ns: z.array(z.string()),
            verified: z.boolean(),
            created: z.number(),
            pending: z.boolean(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                ns: v.ns,
                verified: v.verified,
                created: v.created,
                pending: v.pending,
            };
        });
}

/** @internal */
export namespace BuyDomainResponseBody$ {
    export const inboundSchema: z.ZodType<BuyDomainResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            domain: z.lazy(() => BuyDomainDomainsDomain$.inboundSchema),
        })
        .transform((v) => {
            return {
                domain: v.domain,
            };
        });

    export type Outbound = {
        domain: BuyDomainDomainsDomain$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BuyDomainResponseBody> = z
        .object({
            domain: z.lazy(() => BuyDomainDomainsDomain$.outboundSchema),
        })
        .transform((v) => {
            return {
                domain: v.domain,
            };
        });
}

/** @internal */
export namespace BuyDomainResponse$ {
    export const inboundSchema: z.ZodType<BuyDomainResponse, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => BuyDomainResponseBody$.inboundSchema),
        z.lazy(() => BuyDomainDomainsResponseBody$.inboundSchema),
    ]);

    export type Outbound = BuyDomainResponseBody$.Outbound | BuyDomainDomainsResponseBody$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BuyDomainResponse> = z.union([
        z.lazy(() => BuyDomainResponseBody$.outboundSchema),
        z.lazy(() => BuyDomainDomainsResponseBody$.outboundSchema),
    ]);
}