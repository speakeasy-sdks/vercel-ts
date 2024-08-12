/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type EmailLoginRequestBody = {
    /**
     * The user email.
     */
    email: string;
    /**
     * The desired name for the token. It will be displayed on the user account details.
     */
    tokenName?: string | undefined;
};

/**
 * The request was successful and an email was sent
 */
export type EmailLoginResponseBody = {
    token: string;
    securityCode: string;
};

/** @internal */
export const EmailLoginRequestBody$inboundSchema: z.ZodType<
    EmailLoginRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    email: z.string(),
    tokenName: z.string().optional(),
});

/** @internal */
export type EmailLoginRequestBody$Outbound = {
    email: string;
    tokenName?: string | undefined;
};

/** @internal */
export const EmailLoginRequestBody$outboundSchema: z.ZodType<
    EmailLoginRequestBody$Outbound,
    z.ZodTypeDef,
    EmailLoginRequestBody
> = z.object({
    email: z.string(),
    tokenName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailLoginRequestBody$ {
    /** @deprecated use `EmailLoginRequestBody$inboundSchema` instead. */
    export const inboundSchema = EmailLoginRequestBody$inboundSchema;
    /** @deprecated use `EmailLoginRequestBody$outboundSchema` instead. */
    export const outboundSchema = EmailLoginRequestBody$outboundSchema;
    /** @deprecated use `EmailLoginRequestBody$Outbound` instead. */
    export type Outbound = EmailLoginRequestBody$Outbound;
}

/** @internal */
export const EmailLoginResponseBody$inboundSchema: z.ZodType<
    EmailLoginResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    token: z.string(),
    securityCode: z.string(),
});

/** @internal */
export type EmailLoginResponseBody$Outbound = {
    token: string;
    securityCode: string;
};

/** @internal */
export const EmailLoginResponseBody$outboundSchema: z.ZodType<
    EmailLoginResponseBody$Outbound,
    z.ZodTypeDef,
    EmailLoginResponseBody
> = z.object({
    token: z.string(),
    securityCode: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailLoginResponseBody$ {
    /** @deprecated use `EmailLoginResponseBody$inboundSchema` instead. */
    export const inboundSchema = EmailLoginResponseBody$inboundSchema;
    /** @deprecated use `EmailLoginResponseBody$outboundSchema` instead. */
    export const outboundSchema = EmailLoginResponseBody$outboundSchema;
    /** @deprecated use `EmailLoginResponseBody$Outbound` instead. */
    export type Outbound = EmailLoginResponseBody$Outbound;
}
