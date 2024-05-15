/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetDomainRequest = {
    /**
     * The name of the domain.
     */
    domain: string;
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
export type GetDomainCreator = {
    username: string;
    email: string;
    customerId?: string | null | undefined;
    isDomainReseller?: boolean | undefined;
    id: string;
};

/**
 * The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.
 */
export enum ServiceType {
    ZeitWorld = "zeit.world",
    External = "external",
    Na = "na",
}

export type GetDomainDomain = {
    suffix: boolean;
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
    creator: GetDomainCreator;
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
    serviceType: ServiceType;
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
 * Successful response retrieving an information for a specific domains.
 */
export type GetDomainResponseBody = {
    domain: GetDomainDomain;
};

export type GetDomainResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful response retrieving an information for a specific domains.
     */
    object?: GetDomainResponseBody | undefined;
};

/** @internal */
export namespace GetDomainRequest$ {
    export const inboundSchema: z.ZodType<GetDomainRequest, z.ZodTypeDef, unknown> = z
        .object({
            domain: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        domain: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainRequest> = z
        .object({
            domain: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace GetDomainCreator$ {
    export const inboundSchema: z.ZodType<GetDomainCreator, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainCreator> = z
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
export const ServiceType$: z.ZodNativeEnum<typeof ServiceType> = z.nativeEnum(ServiceType);

/** @internal */
export namespace GetDomainDomain$ {
    export const inboundSchema: z.ZodType<GetDomainDomain, z.ZodTypeDef, unknown> = z
        .object({
            suffix: z.boolean(),
            verified: z.boolean(),
            nameservers: z.array(z.string()),
            intendedNameservers: z.array(z.string()),
            customNameservers: z.array(z.string()).optional(),
            creator: z.lazy(() => GetDomainCreator$.inboundSchema),
            boughtAt: z.nullable(z.number()),
            createdAt: z.number(),
            expiresAt: z.nullable(z.number()),
            id: z.string(),
            name: z.string(),
            orderedAt: z.number().optional(),
            renew: z.boolean().optional(),
            serviceType: ServiceType$,
            transferredAt: z.nullable(z.number()).optional(),
            transferStartedAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                suffix: v.suffix,
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
        suffix: boolean;
        verified: boolean;
        nameservers: Array<string>;
        intendedNameservers: Array<string>;
        customNameservers?: Array<string> | undefined;
        creator: GetDomainCreator$.Outbound;
        boughtAt: number | null;
        createdAt: number;
        expiresAt: number | null;
        id: string;
        name: string;
        orderedAt?: number | undefined;
        renew?: boolean | undefined;
        serviceType: ServiceType;
        transferredAt?: number | null | undefined;
        transferStartedAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainDomain> = z
        .object({
            suffix: z.boolean(),
            verified: z.boolean(),
            nameservers: z.array(z.string()),
            intendedNameservers: z.array(z.string()),
            customNameservers: z.array(z.string()).optional(),
            creator: z.lazy(() => GetDomainCreator$.outboundSchema),
            boughtAt: z.nullable(z.number()),
            createdAt: z.number(),
            expiresAt: z.nullable(z.number()),
            id: z.string(),
            name: z.string(),
            orderedAt: z.number().optional(),
            renew: z.boolean().optional(),
            serviceType: ServiceType$,
            transferredAt: z.nullable(z.number()).optional(),
            transferStartedAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                suffix: v.suffix,
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
export namespace GetDomainResponseBody$ {
    export const inboundSchema: z.ZodType<GetDomainResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            domain: z.lazy(() => GetDomainDomain$.inboundSchema),
        })
        .transform((v) => {
            return {
                domain: v.domain,
            };
        });

    export type Outbound = {
        domain: GetDomainDomain$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainResponseBody> = z
        .object({
            domain: z.lazy(() => GetDomainDomain$.outboundSchema),
        })
        .transform((v) => {
            return {
                domain: v.domain,
            };
        });
}

/** @internal */
export namespace GetDomainResponse$ {
    export const inboundSchema: z.ZodType<GetDomainResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetDomainResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetDomainResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetDomainResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}