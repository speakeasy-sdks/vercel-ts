/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Pagination, Pagination$ } from "./pagination";
import * as z from "zod";

export type GetDomainsRequest = {
    /**
     * Maximum number of domains to list from a request.
     */
    limit?: number | undefined;
    /**
     * Get domains created after this JavaScript timestamp.
     */
    since?: number | undefined;
    /**
     * Get domains created before this JavaScript timestamp.
     */
    until?: number | undefined;
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
 * An object containing information of the domain creator, including the user's id, username, and email.
 */
export type GetDomainsCreator = {
    username: string;
    email: string;
    customerId?: string | null | undefined;
    isDomainReseller?: boolean | undefined;
    id: string;
};

/**
 * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
 */
export enum GetDomainsServiceType {
    ZeitWorld = "zeit.world",
    External = "external",
    Na = "na",
}

export type GetDomainsDomains = {
    /**
     * If the domain has the ownership verified.
     */
    verified: boolean;
    /**
     * A list of the current nameservers of the domain.
     */
    nameservers: Array<string>;
    /**
     * A list of the intended nameservers for the domain to point to Vercel DNS.
     */
    intendedNameservers: Array<string>;
    /**
     * A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.
     */
    customNameservers?: Array<string> | undefined;
    /**
     * An object containing information of the domain creator, including the user's id, username, and email.
     */
    creator: GetDomainsCreator;
    /**
     * If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.
     */
    boughtAt: number | null;
    /**
     * Timestamp in milliseconds when the domain was created in the registry.
     */
    createdAt: number;
    /**
     * Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.
     */
    expiresAt: number | null;
    /**
     * The unique identifier of the domain.
     */
    id: string;
    /**
     * The domain name.
     */
    name: string;
    /**
     * Timestamp in milliseconds at which the domain was ordered.
     */
    orderedAt?: number | undefined;
    /**
     * Indicates whether the domain is set to automatically renew.
     */
    renew?: boolean | undefined;
    /**
     * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
     */
    serviceType: GetDomainsServiceType;
    /**
     * Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.
     */
    transferredAt?: number | null | undefined;
    /**
     * If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.
     */
    transferStartedAt?: number | undefined;
};

/**
 * Successful response retrieving a list of domains.
 */
export type GetDomainsResponseBody = {
    domains: Array<GetDomainsDomains>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};

/** @internal */
export namespace GetDomainsRequest$ {
    export const inboundSchema: z.ZodType<GetDomainsRequest, z.ZodTypeDef, unknown> = z
        .object({
            limit: z.number().optional(),
            since: z.number().optional(),
            until: z.number().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.since === undefined ? null : { since: v.since }),
                ...(v.until === undefined ? null : { until: v.until }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        limit?: number | undefined;
        since?: number | undefined;
        until?: number | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainsRequest> = z
        .object({
            limit: z.number().optional(),
            since: z.number().optional(),
            until: z.number().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.since === undefined ? null : { since: v.since }),
                ...(v.until === undefined ? null : { until: v.until }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace GetDomainsCreator$ {
    export const inboundSchema: z.ZodType<GetDomainsCreator, z.ZodTypeDef, unknown> = z
        .object({
            username: z.string(),
            email: z.string(),
            customerId: z.nullable(z.string()).optional(),
            isDomainReseller: z.boolean().optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                username: v.username,
                email: v.email,
                ...(v.customerId === undefined ? null : { customerId: v.customerId }),
                ...(v.isDomainReseller === undefined
                    ? null
                    : { isDomainReseller: v.isDomainReseller }),
                id: v.id,
            };
        });

    export type Outbound = {
        username: string;
        email: string;
        customerId?: string | null | undefined;
        isDomainReseller?: boolean | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainsCreator> = z
        .object({
            username: z.string(),
            email: z.string(),
            customerId: z.nullable(z.string()).optional(),
            isDomainReseller: z.boolean().optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                username: v.username,
                email: v.email,
                ...(v.customerId === undefined ? null : { customerId: v.customerId }),
                ...(v.isDomainReseller === undefined
                    ? null
                    : { isDomainReseller: v.isDomainReseller }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetDomainsServiceType$ {
    export const inboundSchema = z.nativeEnum(GetDomainsServiceType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetDomainsDomains$ {
    export const inboundSchema: z.ZodType<GetDomainsDomains, z.ZodTypeDef, unknown> = z
        .object({
            verified: z.boolean(),
            nameservers: z.array(z.string()),
            intendedNameservers: z.array(z.string()),
            customNameservers: z.array(z.string()).optional(),
            creator: z.lazy(() => GetDomainsCreator$.inboundSchema),
            boughtAt: z.nullable(z.number()),
            createdAt: z.number(),
            expiresAt: z.nullable(z.number()),
            id: z.string(),
            name: z.string(),
            orderedAt: z.number().optional(),
            renew: z.boolean().optional(),
            serviceType: GetDomainsServiceType$.inboundSchema,
            transferredAt: z.nullable(z.number()).optional(),
            transferStartedAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                verified: v.verified,
                nameservers: v.nameservers,
                intendedNameservers: v.intendedNameservers,
                ...(v.customNameservers === undefined
                    ? null
                    : { customNameservers: v.customNameservers }),
                creator: v.creator,
                boughtAt: v.boughtAt,
                createdAt: v.createdAt,
                expiresAt: v.expiresAt,
                id: v.id,
                name: v.name,
                ...(v.orderedAt === undefined ? null : { orderedAt: v.orderedAt }),
                ...(v.renew === undefined ? null : { renew: v.renew }),
                serviceType: v.serviceType,
                ...(v.transferredAt === undefined ? null : { transferredAt: v.transferredAt }),
                ...(v.transferStartedAt === undefined
                    ? null
                    : { transferStartedAt: v.transferStartedAt }),
            };
        });

    export type Outbound = {
        verified: boolean;
        nameservers: Array<string>;
        intendedNameservers: Array<string>;
        customNameservers?: Array<string> | undefined;
        creator: GetDomainsCreator$.Outbound;
        boughtAt: number | null;
        createdAt: number;
        expiresAt: number | null;
        id: string;
        name: string;
        orderedAt?: number | undefined;
        renew?: boolean | undefined;
        serviceType: string;
        transferredAt?: number | null | undefined;
        transferStartedAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainsDomains> = z
        .object({
            verified: z.boolean(),
            nameservers: z.array(z.string()),
            intendedNameservers: z.array(z.string()),
            customNameservers: z.array(z.string()).optional(),
            creator: z.lazy(() => GetDomainsCreator$.outboundSchema),
            boughtAt: z.nullable(z.number()),
            createdAt: z.number(),
            expiresAt: z.nullable(z.number()),
            id: z.string(),
            name: z.string(),
            orderedAt: z.number().optional(),
            renew: z.boolean().optional(),
            serviceType: GetDomainsServiceType$.outboundSchema,
            transferredAt: z.nullable(z.number()).optional(),
            transferStartedAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                verified: v.verified,
                nameservers: v.nameservers,
                intendedNameservers: v.intendedNameservers,
                ...(v.customNameservers === undefined
                    ? null
                    : { customNameservers: v.customNameservers }),
                creator: v.creator,
                boughtAt: v.boughtAt,
                createdAt: v.createdAt,
                expiresAt: v.expiresAt,
                id: v.id,
                name: v.name,
                ...(v.orderedAt === undefined ? null : { orderedAt: v.orderedAt }),
                ...(v.renew === undefined ? null : { renew: v.renew }),
                serviceType: v.serviceType,
                ...(v.transferredAt === undefined ? null : { transferredAt: v.transferredAt }),
                ...(v.transferStartedAt === undefined
                    ? null
                    : { transferStartedAt: v.transferStartedAt }),
            };
        });
}

/** @internal */
export namespace GetDomainsResponseBody$ {
    export const inboundSchema: z.ZodType<GetDomainsResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            domains: z.array(z.lazy(() => GetDomainsDomains$.inboundSchema)),
            pagination: Pagination$.inboundSchema,
        })
        .transform((v) => {
            return {
                domains: v.domains,
                pagination: v.pagination,
            };
        });

    export type Outbound = {
        domains: Array<GetDomainsDomains$.Outbound>;
        pagination: Pagination$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainsResponseBody> = z
        .object({
            domains: z.array(z.lazy(() => GetDomainsDomains$.outboundSchema)),
            pagination: Pagination$.outboundSchema,
        })
        .transform((v) => {
            return {
                domains: v.domains,
                pagination: v.pagination,
            };
        });
}
