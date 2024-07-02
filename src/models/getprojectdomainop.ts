/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetProjectDomainRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The project domain name
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
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type Verification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};

export type GetProjectDomainResponseBody = {
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
    verification?: Array<Verification> | undefined;
};

/** @internal */
export namespace GetProjectDomainRequest$ {
    export const inboundSchema: z.ZodType<GetProjectDomainRequest, z.ZodTypeDef, unknown> =
        z.object({
            idOrName: z.string(),
            domain: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        });

    export type Outbound = {
        idOrName: string;
        domain: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProjectDomainRequest> =
        z.object({
            idOrName: z.string(),
            domain: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        });
}

/** @internal */
export namespace Verification$ {
    export const inboundSchema: z.ZodType<Verification, z.ZodTypeDef, unknown> = z.object({
        type: z.string(),
        domain: z.string(),
        value: z.string(),
        reason: z.string(),
    });

    export type Outbound = {
        type: string;
        domain: string;
        value: string;
        reason: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Verification> = z.object({
        type: z.string(),
        domain: z.string(),
        value: z.string(),
        reason: z.string(),
    });
}

/** @internal */
export namespace GetProjectDomainResponseBody$ {
    export const inboundSchema: z.ZodType<GetProjectDomainResponseBody, z.ZodTypeDef, unknown> =
        z.object({
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
            verification: z.array(z.lazy(() => Verification$.inboundSchema)).optional(),
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
        verification?: Array<Verification$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProjectDomainResponseBody> =
        z.object({
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
            verification: z.array(z.lazy(() => Verification$.outboundSchema)).optional(),
        });
}
