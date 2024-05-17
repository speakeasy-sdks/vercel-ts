/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Status code for domain redirect
 */
export enum AddProjectDomainRedirectStatusCode {
    ThreeHundredAndOne = 301,
    ThreeHundredAndTwo = 302,
    ThreeHundredAndSeven = 307,
    ThreeHundredAndEight = 308,
}

export type AddProjectDomainRequestBody = {
    /**
     * The project domain name
     */
    name: string;
    /**
     * Git branch to link the project domain
     */
    gitBranch?: string | null | undefined;
    /**
     * The unique custom environment identifier within the project
     */
    customEnvironmentId?: string | undefined;
    /**
     * Target destination domain for redirect
     */
    redirect?: string | null | undefined;
    /**
     * Status code for domain redirect
     */
    redirectStatusCode?: AddProjectDomainRedirectStatusCode | null | undefined;
};

export type AddProjectDomainRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: AddProjectDomainRequestBody | undefined;
};

/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type AddProjectDomainVerification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};

/**
 * The domain was successfully added to the project
 */
export type AddProjectDomainResponseBody = {
    name: string;
    apexName: string;
    projectId: string;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
    gitBranch?: string | null | undefined;
    customEnvironmentId?: string | null | undefined;
    updatedAt?: number | undefined;
    createdAt?: number | undefined;
    /**
     * `true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.
     */
    verified: boolean;
    /**
     * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
     */
    verification?: Array<AddProjectDomainVerification> | undefined;
};

/** @internal */
export namespace AddProjectDomainRedirectStatusCode$ {
    export const inboundSchema = z.nativeEnum(AddProjectDomainRedirectStatusCode);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AddProjectDomainRequestBody$ {
    export const inboundSchema: z.ZodType<AddProjectDomainRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            gitBranch: z.nullable(z.string()).optional(),
            customEnvironmentId: z.string().optional(),
            redirect: z.nullable(z.string()).optional(),
            redirectStatusCode: z
                .nullable(AddProjectDomainRedirectStatusCode$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.gitBranch === undefined ? null : { gitBranch: v.gitBranch }),
                ...(v.customEnvironmentId === undefined
                    ? null
                    : { customEnvironmentId: v.customEnvironmentId }),
                ...(v.redirect === undefined ? null : { redirect: v.redirect }),
                ...(v.redirectStatusCode === undefined
                    ? null
                    : { redirectStatusCode: v.redirectStatusCode }),
            };
        });

    export type Outbound = {
        name: string;
        gitBranch?: string | null | undefined;
        customEnvironmentId?: string | undefined;
        redirect?: string | null | undefined;
        redirectStatusCode?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectDomainRequestBody> = z
        .object({
            name: z.string(),
            gitBranch: z.nullable(z.string()).optional(),
            customEnvironmentId: z.string().optional(),
            redirect: z.nullable(z.string()).optional(),
            redirectStatusCode: z
                .nullable(AddProjectDomainRedirectStatusCode$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.gitBranch === undefined ? null : { gitBranch: v.gitBranch }),
                ...(v.customEnvironmentId === undefined
                    ? null
                    : { customEnvironmentId: v.customEnvironmentId }),
                ...(v.redirect === undefined ? null : { redirect: v.redirect }),
                ...(v.redirectStatusCode === undefined
                    ? null
                    : { redirectStatusCode: v.redirectStatusCode }),
            };
        });
}

/** @internal */
export namespace AddProjectDomainRequest$ {
    export const inboundSchema: z.ZodType<AddProjectDomainRequest, z.ZodTypeDef, unknown> = z
        .object({
            idOrName: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => AddProjectDomainRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        idOrName: string;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: AddProjectDomainRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectDomainRequest> = z
        .object({
            idOrName: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => AddProjectDomainRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace AddProjectDomainVerification$ {
    export const inboundSchema: z.ZodType<AddProjectDomainVerification, z.ZodTypeDef, unknown> = z
        .object({
            type: z.string(),
            domain: z.string(),
            value: z.string(),
            reason: z.string(),
        })
        .transform((v) => {
            return {
                type: v.type,
                domain: v.domain,
                value: v.value,
                reason: v.reason,
            };
        });

    export type Outbound = {
        type: string;
        domain: string;
        value: string;
        reason: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectDomainVerification> = z
        .object({
            type: z.string(),
            domain: z.string(),
            value: z.string(),
            reason: z.string(),
        })
        .transform((v) => {
            return {
                type: v.type,
                domain: v.domain,
                value: v.value,
                reason: v.reason,
            };
        });
}

/** @internal */
export namespace AddProjectDomainResponseBody$ {
    export const inboundSchema: z.ZodType<AddProjectDomainResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            apexName: z.string(),
            projectId: z.string(),
            redirect: z.nullable(z.string()).optional(),
            redirectStatusCode: z.nullable(z.number()).optional(),
            gitBranch: z.nullable(z.string()).optional(),
            customEnvironmentId: z.nullable(z.string()).optional(),
            updatedAt: z.number().optional(),
            createdAt: z.number().optional(),
            verified: z.boolean(),
            verification: z
                .array(z.lazy(() => AddProjectDomainVerification$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                apexName: v.apexName,
                projectId: v.projectId,
                ...(v.redirect === undefined ? null : { redirect: v.redirect }),
                ...(v.redirectStatusCode === undefined
                    ? null
                    : { redirectStatusCode: v.redirectStatusCode }),
                ...(v.gitBranch === undefined ? null : { gitBranch: v.gitBranch }),
                ...(v.customEnvironmentId === undefined
                    ? null
                    : { customEnvironmentId: v.customEnvironmentId }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                verified: v.verified,
                ...(v.verification === undefined ? null : { verification: v.verification }),
            };
        });

    export type Outbound = {
        name: string;
        apexName: string;
        projectId: string;
        redirect?: string | null | undefined;
        redirectStatusCode?: number | null | undefined;
        gitBranch?: string | null | undefined;
        customEnvironmentId?: string | null | undefined;
        updatedAt?: number | undefined;
        createdAt?: number | undefined;
        verified: boolean;
        verification?: Array<AddProjectDomainVerification$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectDomainResponseBody> = z
        .object({
            name: z.string(),
            apexName: z.string(),
            projectId: z.string(),
            redirect: z.nullable(z.string()).optional(),
            redirectStatusCode: z.nullable(z.number()).optional(),
            gitBranch: z.nullable(z.string()).optional(),
            customEnvironmentId: z.nullable(z.string()).optional(),
            updatedAt: z.number().optional(),
            createdAt: z.number().optional(),
            verified: z.boolean(),
            verification: z
                .array(z.lazy(() => AddProjectDomainVerification$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                apexName: v.apexName,
                projectId: v.projectId,
                ...(v.redirect === undefined ? null : { redirect: v.redirect }),
                ...(v.redirectStatusCode === undefined
                    ? null
                    : { redirectStatusCode: v.redirectStatusCode }),
                ...(v.gitBranch === undefined ? null : { gitBranch: v.gitBranch }),
                ...(v.customEnvironmentId === undefined
                    ? null
                    : { customEnvironmentId: v.customEnvironmentId }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                verified: v.verified,
                ...(v.verification === undefined ? null : { verification: v.verification }),
            };
        });
}