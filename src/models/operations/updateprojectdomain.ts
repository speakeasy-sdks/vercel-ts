/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * Status code for domain redirect
 */
export enum RedirectStatusCode {
    ThreeHundredAndOne = 301,
    ThreeHundredAndTwo = 302,
    ThreeHundredAndSeven = 307,
    ThreeHundredAndEight = 308,
}

export type UpdateProjectDomainRequestBody = {
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
    redirectStatusCode?: RedirectStatusCode | null | undefined;
};

export type UpdateProjectDomainRequest = {
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
    requestBody?: UpdateProjectDomainRequestBody | undefined;
};

/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type UpdateProjectDomainVerification = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};

/**
 * The domain was updated successfuly
 */
export type UpdateProjectDomainResponseBody = {
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
    verification?: Array<UpdateProjectDomainVerification> | undefined;
};

export type UpdateProjectDomainResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * The domain was updated successfuly
     */
    object?: UpdateProjectDomainResponseBody | undefined;
};

/** @internal */
export const RedirectStatusCode$: z.ZodNativeEnum<typeof RedirectStatusCode> =
    z.nativeEnum(RedirectStatusCode);

/** @internal */
export namespace UpdateProjectDomainRequestBody$ {
    export const inboundSchema: z.ZodType<UpdateProjectDomainRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            gitBranch: z.nullable(z.string()).optional(),
            customEnvironmentId: z.string().optional(),
            redirect: z.nullable(z.string()).optional(),
            redirectStatusCode: z.nullable(RedirectStatusCode$).optional(),
        })
        .transform((v) => {
            return {
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
        gitBranch?: string | null | undefined;
        customEnvironmentId?: string | undefined;
        redirect?: string | null | undefined;
        redirectStatusCode?: RedirectStatusCode | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateProjectDomainRequestBody> =
        z
            .object({
                gitBranch: z.nullable(z.string()).optional(),
                customEnvironmentId: z.string().optional(),
                redirect: z.nullable(z.string()).optional(),
                redirectStatusCode: z.nullable(RedirectStatusCode$).optional(),
            })
            .transform((v) => {
                return {
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
export namespace UpdateProjectDomainRequest$ {
    export const inboundSchema: z.ZodType<UpdateProjectDomainRequest, z.ZodTypeDef, unknown> = z
        .object({
            idOrName: z.string(),
            domain: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => UpdateProjectDomainRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                domain: v.domain,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        idOrName: string;
        domain: string;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: UpdateProjectDomainRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateProjectDomainRequest> = z
        .object({
            idOrName: z.string(),
            domain: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => UpdateProjectDomainRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                domain: v.domain,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace UpdateProjectDomainVerification$ {
    export const inboundSchema: z.ZodType<UpdateProjectDomainVerification, z.ZodTypeDef, unknown> =
        z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateProjectDomainVerification
    > = z
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
export namespace UpdateProjectDomainResponseBody$ {
    export const inboundSchema: z.ZodType<UpdateProjectDomainResponseBody, z.ZodTypeDef, unknown> =
        z
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
                    .array(z.lazy(() => UpdateProjectDomainVerification$.inboundSchema))
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
        verification?: Array<UpdateProjectDomainVerification$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateProjectDomainResponseBody
    > = z
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
                .array(z.lazy(() => UpdateProjectDomainVerification$.outboundSchema))
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

/** @internal */
export namespace UpdateProjectDomainResponse$ {
    export const inboundSchema: z.ZodType<UpdateProjectDomainResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => UpdateProjectDomainResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: UpdateProjectDomainResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateProjectDomainResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => UpdateProjectDomainResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
