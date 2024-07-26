/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import { ClosedEnum } from "../types/enums.js";
import * as z from "zod";

/**
 * Status code for domain redirect
 */
export const AddProjectDomainRedirectStatusCode = {
    ThreeHundredAndOne: 301,
    ThreeHundredAndTwo: 302,
    ThreeHundredAndSeven: 307,
    ThreeHundredAndEight: 308,
} as const;
/**
 * Status code for domain redirect
 */
export type AddProjectDomainRedirectStatusCode = ClosedEnum<
    typeof AddProjectDomainRedirectStatusCode
>;

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
export const AddProjectDomainRedirectStatusCode$inboundSchema: z.ZodNativeEnum<
    typeof AddProjectDomainRedirectStatusCode
> = z.nativeEnum(AddProjectDomainRedirectStatusCode);

/** @internal */
export const AddProjectDomainRedirectStatusCode$outboundSchema: z.ZodNativeEnum<
    typeof AddProjectDomainRedirectStatusCode
> = AddProjectDomainRedirectStatusCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddProjectDomainRedirectStatusCode$ {
    /** @deprecated use `AddProjectDomainRedirectStatusCode$inboundSchema` instead. */
    export const inboundSchema = AddProjectDomainRedirectStatusCode$inboundSchema;
    /** @deprecated use `AddProjectDomainRedirectStatusCode$outboundSchema` instead. */
    export const outboundSchema = AddProjectDomainRedirectStatusCode$outboundSchema;
}

/** @internal */
export const AddProjectDomainRequestBody$inboundSchema: z.ZodType<
    AddProjectDomainRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    gitBranch: z.nullable(z.string()).optional(),
    customEnvironmentId: z.string().optional(),
    redirect: z.nullable(z.string()).optional(),
    redirectStatusCode: z.nullable(AddProjectDomainRedirectStatusCode$inboundSchema).optional(),
});

/** @internal */
export type AddProjectDomainRequestBody$Outbound = {
    name: string;
    gitBranch?: string | null | undefined;
    customEnvironmentId?: string | undefined;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
};

/** @internal */
export const AddProjectDomainRequestBody$outboundSchema: z.ZodType<
    AddProjectDomainRequestBody$Outbound,
    z.ZodTypeDef,
    AddProjectDomainRequestBody
> = z.object({
    name: z.string(),
    gitBranch: z.nullable(z.string()).optional(),
    customEnvironmentId: z.string().optional(),
    redirect: z.nullable(z.string()).optional(),
    redirectStatusCode: z.nullable(AddProjectDomainRedirectStatusCode$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddProjectDomainRequestBody$ {
    /** @deprecated use `AddProjectDomainRequestBody$inboundSchema` instead. */
    export const inboundSchema = AddProjectDomainRequestBody$inboundSchema;
    /** @deprecated use `AddProjectDomainRequestBody$outboundSchema` instead. */
    export const outboundSchema = AddProjectDomainRequestBody$outboundSchema;
    /** @deprecated use `AddProjectDomainRequestBody$Outbound` instead. */
    export type Outbound = AddProjectDomainRequestBody$Outbound;
}

/** @internal */
export const AddProjectDomainRequest$inboundSchema: z.ZodType<
    AddProjectDomainRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        idOrName: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        RequestBody: z.lazy(() => AddProjectDomainRequestBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type AddProjectDomainRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: AddProjectDomainRequestBody$Outbound | undefined;
};

/** @internal */
export const AddProjectDomainRequest$outboundSchema: z.ZodType<
    AddProjectDomainRequest$Outbound,
    z.ZodTypeDef,
    AddProjectDomainRequest
> = z
    .object({
        idOrName: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        requestBody: z.lazy(() => AddProjectDomainRequestBody$outboundSchema).optional(),
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
export namespace AddProjectDomainRequest$ {
    /** @deprecated use `AddProjectDomainRequest$inboundSchema` instead. */
    export const inboundSchema = AddProjectDomainRequest$inboundSchema;
    /** @deprecated use `AddProjectDomainRequest$outboundSchema` instead. */
    export const outboundSchema = AddProjectDomainRequest$outboundSchema;
    /** @deprecated use `AddProjectDomainRequest$Outbound` instead. */
    export type Outbound = AddProjectDomainRequest$Outbound;
}

/** @internal */
export const AddProjectDomainVerification$inboundSchema: z.ZodType<
    AddProjectDomainVerification,
    z.ZodTypeDef,
    unknown
> = z.object({
    type: z.string(),
    domain: z.string(),
    value: z.string(),
    reason: z.string(),
});

/** @internal */
export type AddProjectDomainVerification$Outbound = {
    type: string;
    domain: string;
    value: string;
    reason: string;
};

/** @internal */
export const AddProjectDomainVerification$outboundSchema: z.ZodType<
    AddProjectDomainVerification$Outbound,
    z.ZodTypeDef,
    AddProjectDomainVerification
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
export namespace AddProjectDomainVerification$ {
    /** @deprecated use `AddProjectDomainVerification$inboundSchema` instead. */
    export const inboundSchema = AddProjectDomainVerification$inboundSchema;
    /** @deprecated use `AddProjectDomainVerification$outboundSchema` instead. */
    export const outboundSchema = AddProjectDomainVerification$outboundSchema;
    /** @deprecated use `AddProjectDomainVerification$Outbound` instead. */
    export type Outbound = AddProjectDomainVerification$Outbound;
}

/** @internal */
export const AddProjectDomainResponseBody$inboundSchema: z.ZodType<
    AddProjectDomainResponseBody,
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
    verification: z.array(z.lazy(() => AddProjectDomainVerification$inboundSchema)).optional(),
});

/** @internal */
export type AddProjectDomainResponseBody$Outbound = {
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
    verification?: Array<AddProjectDomainVerification$Outbound> | undefined;
};

/** @internal */
export const AddProjectDomainResponseBody$outboundSchema: z.ZodType<
    AddProjectDomainResponseBody$Outbound,
    z.ZodTypeDef,
    AddProjectDomainResponseBody
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
    verification: z.array(z.lazy(() => AddProjectDomainVerification$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddProjectDomainResponseBody$ {
    /** @deprecated use `AddProjectDomainResponseBody$inboundSchema` instead. */
    export const inboundSchema = AddProjectDomainResponseBody$inboundSchema;
    /** @deprecated use `AddProjectDomainResponseBody$outboundSchema` instead. */
    export const outboundSchema = AddProjectDomainResponseBody$outboundSchema;
    /** @deprecated use `AddProjectDomainResponseBody$Outbound` instead. */
    export type Outbound = AddProjectDomainResponseBody$Outbound;
}
