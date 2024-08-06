/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import { ClosedEnum } from "../types/enums.js";
import * as z from "zod";

/**
 * Status code for domain redirect
 */
export const RedirectStatusCode = {
    ThreeHundredAndOne: 301,
    ThreeHundredAndTwo: 302,
    ThreeHundredAndSeven: 307,
    ThreeHundredAndEight: 308,
} as const;
/**
 * Status code for domain redirect
 */
export type RedirectStatusCode = ClosedEnum<typeof RedirectStatusCode>;

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

/** @internal */
export const RedirectStatusCode$inboundSchema: z.ZodNativeEnum<typeof RedirectStatusCode> =
    z.nativeEnum(RedirectStatusCode);

/** @internal */
export const RedirectStatusCode$outboundSchema: z.ZodNativeEnum<typeof RedirectStatusCode> =
    RedirectStatusCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RedirectStatusCode$ {
    /** @deprecated use `RedirectStatusCode$inboundSchema` instead. */
    export const inboundSchema = RedirectStatusCode$inboundSchema;
    /** @deprecated use `RedirectStatusCode$outboundSchema` instead. */
    export const outboundSchema = RedirectStatusCode$outboundSchema;
}

/** @internal */
export const UpdateProjectDomainRequestBody$inboundSchema: z.ZodType<
    UpdateProjectDomainRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    gitBranch: z.nullable(z.string()).optional(),
    customEnvironmentId: z.string().optional(),
    redirect: z.nullable(z.string()).optional(),
    redirectStatusCode: z.nullable(RedirectStatusCode$inboundSchema).optional(),
});

/** @internal */
export type UpdateProjectDomainRequestBody$Outbound = {
    gitBranch?: string | null | undefined;
    customEnvironmentId?: string | undefined;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
};

/** @internal */
export const UpdateProjectDomainRequestBody$outboundSchema: z.ZodType<
    UpdateProjectDomainRequestBody$Outbound,
    z.ZodTypeDef,
    UpdateProjectDomainRequestBody
> = z.object({
    gitBranch: z.nullable(z.string()).optional(),
    customEnvironmentId: z.string().optional(),
    redirect: z.nullable(z.string()).optional(),
    redirectStatusCode: z.nullable(RedirectStatusCode$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectDomainRequestBody$ {
    /** @deprecated use `UpdateProjectDomainRequestBody$inboundSchema` instead. */
    export const inboundSchema = UpdateProjectDomainRequestBody$inboundSchema;
    /** @deprecated use `UpdateProjectDomainRequestBody$outboundSchema` instead. */
    export const outboundSchema = UpdateProjectDomainRequestBody$outboundSchema;
    /** @deprecated use `UpdateProjectDomainRequestBody$Outbound` instead. */
    export type Outbound = UpdateProjectDomainRequestBody$Outbound;
}

/** @internal */
export const UpdateProjectDomainRequest$inboundSchema: z.ZodType<
    UpdateProjectDomainRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        idOrName: z.string(),
        domain: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        RequestBody: z.lazy(() => UpdateProjectDomainRequestBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type UpdateProjectDomainRequest$Outbound = {
    idOrName: string;
    domain: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateProjectDomainRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateProjectDomainRequest$outboundSchema: z.ZodType<
    UpdateProjectDomainRequest$Outbound,
    z.ZodTypeDef,
    UpdateProjectDomainRequest
> = z
    .object({
        idOrName: z.string(),
        domain: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        requestBody: z.lazy(() => UpdateProjectDomainRequestBody$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectDomainRequest$ {
    /** @deprecated use `UpdateProjectDomainRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateProjectDomainRequest$inboundSchema;
    /** @deprecated use `UpdateProjectDomainRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateProjectDomainRequest$outboundSchema;
    /** @deprecated use `UpdateProjectDomainRequest$Outbound` instead. */
    export type Outbound = UpdateProjectDomainRequest$Outbound;
}

/** @internal */
export const UpdateProjectDomainVerification$inboundSchema: z.ZodType<
    UpdateProjectDomainVerification,
    z.ZodTypeDef,
    unknown
> = z.object({
    type: z.string(),
    domain: z.string(),
    value: z.string(),
    reason: z.string(),
});

/** @internal */
export type UpdateProjectDomainVerification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};

/** @internal */
export const UpdateProjectDomainVerification$outboundSchema: z.ZodType<
    UpdateProjectDomainVerification$Outbound,
    z.ZodTypeDef,
    UpdateProjectDomainVerification
> = z.object({
    type: z.string(),
    domain: z.string(),
    value: z.string(),
    reason: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectDomainVerification$ {
    /** @deprecated use `UpdateProjectDomainVerification$inboundSchema` instead. */
    export const inboundSchema = UpdateProjectDomainVerification$inboundSchema;
    /** @deprecated use `UpdateProjectDomainVerification$outboundSchema` instead. */
    export const outboundSchema = UpdateProjectDomainVerification$outboundSchema;
    /** @deprecated use `UpdateProjectDomainVerification$Outbound` instead. */
    export type Outbound = UpdateProjectDomainVerification$Outbound;
}

/** @internal */
export const UpdateProjectDomainResponseBody$inboundSchema: z.ZodType<
    UpdateProjectDomainResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
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
    verification: z.array(z.lazy(() => UpdateProjectDomainVerification$inboundSchema)).optional(),
});

/** @internal */
export type UpdateProjectDomainResponseBody$Outbound = {
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
    verification?: Array<UpdateProjectDomainVerification$Outbound> | undefined;
};

/** @internal */
export const UpdateProjectDomainResponseBody$outboundSchema: z.ZodType<
    UpdateProjectDomainResponseBody$Outbound,
    z.ZodTypeDef,
    UpdateProjectDomainResponseBody
> = z.object({
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
    verification: z.array(z.lazy(() => UpdateProjectDomainVerification$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectDomainResponseBody$ {
    /** @deprecated use `UpdateProjectDomainResponseBody$inboundSchema` instead. */
    export const inboundSchema = UpdateProjectDomainResponseBody$inboundSchema;
    /** @deprecated use `UpdateProjectDomainResponseBody$outboundSchema` instead. */
    export const outboundSchema = UpdateProjectDomainResponseBody$outboundSchema;
    /** @deprecated use `UpdateProjectDomainResponseBody$Outbound` instead. */
    export type Outbound = UpdateProjectDomainResponseBody$Outbound;
}
