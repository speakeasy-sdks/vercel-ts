/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetDomainTransferRequest = {
    /**
     * The domain to check the transfer status for.
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
 * The domain's transfer policy (depends on TLD requirements). `charge-and-renew`: transfer will charge for renewal and will renew the existing domain's registration. `no-charge-no-change`: transfer will have no change to registration period and does not require charge. `no-change`: transfer charge is required, but no change in registration period. `new-term`: transfer charge is required and a new registry term is set based on the transfer date. `not-supported`: transfers are not supported for this domain or TLD. `null`: This TLD is not supported by Vercel's Registrar.
 */
export enum TransferPolicy {
    ChargeAndRenew = "charge-and-renew",
    NoChargeNoChange = "no-charge-no-change",
    NoChange = "no-change",
    NewTerm = "new-term",
    NotSupported = "not-supported",
}

/**
 * The current state of an ongoing transfer. `pending_owner`: Awaiting approval by domain's admin contact (every transfer begins with this status). If approval is not given within five days, the transfer is cancelled. `pending_admin`: Waiting for approval by Vercel Registrar admin. `pending_registry`: Awaiting registry approval (the transfer completes after 7 days unless it is declined by the current registrar). `completed`: The transfer completed successfully. `cancelled`: The transfer was cancelled. `undef`: No transfer exists for this domain. `unknown`: This TLD is not supported by Vercel's Registrar.
 */
export enum GetDomainTransferStatus {
    PendingOwner = "pending_owner",
    PendingAdmin = "pending_admin",
    PendingRegistry = "pending_registry",
    Completed = "completed",
    Cancelled = "cancelled",
    Undef = "undef",
    Unknown = "unknown",
}

export type GetDomainTransferResponseBody = {
    /**
     * Whether or not the domain is transferable
     */
    transferable: boolean;
    /**
     * The domain's transfer policy (depends on TLD requirements). `charge-and-renew`: transfer will charge for renewal and will renew the existing domain's registration. `no-charge-no-change`: transfer will have no change to registration period and does not require charge. `no-change`: transfer charge is required, but no change in registration period. `new-term`: transfer charge is required and a new registry term is set based on the transfer date. `not-supported`: transfers are not supported for this domain or TLD. `null`: This TLD is not supported by Vercel's Registrar.
     */
    transferPolicy: TransferPolicy | null;
    /**
     * Description associated with transferable state.
     */
    reason: string;
    /**
     * The current state of an ongoing transfer. `pending_owner`: Awaiting approval by domain's admin contact (every transfer begins with this status). If approval is not given within five days, the transfer is cancelled. `pending_admin`: Waiting for approval by Vercel Registrar admin. `pending_registry`: Awaiting registry approval (the transfer completes after 7 days unless it is declined by the current registrar). `completed`: The transfer completed successfully. `cancelled`: The transfer was cancelled. `undef`: No transfer exists for this domain. `unknown`: This TLD is not supported by Vercel's Registrar.
     */
    status: GetDomainTransferStatus;
};

/** @internal */
export namespace GetDomainTransferRequest$ {
    export const inboundSchema: z.ZodType<GetDomainTransferRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainTransferRequest> = z
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
export namespace TransferPolicy$ {
    export const inboundSchema = z.nativeEnum(TransferPolicy);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetDomainTransferStatus$ {
    export const inboundSchema = z.nativeEnum(GetDomainTransferStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetDomainTransferResponseBody$ {
    export const inboundSchema: z.ZodType<GetDomainTransferResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            transferable: z.boolean(),
            transferPolicy: z.nullable(TransferPolicy$.inboundSchema),
            reason: z.string(),
            status: GetDomainTransferStatus$.inboundSchema,
        })
        .transform((v) => {
            return {
                transferable: v.transferable,
                transferPolicy: v.transferPolicy,
                reason: v.reason,
                status: v.status,
            };
        });

    export type Outbound = {
        transferable: boolean;
        transferPolicy: string | null;
        reason: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainTransferResponseBody> =
        z
            .object({
                transferable: z.boolean(),
                transferPolicy: z.nullable(TransferPolicy$.outboundSchema),
                reason: z.string(),
                status: GetDomainTransferStatus$.outboundSchema,
            })
            .transform((v) => {
                return {
                    transferable: v.transferable,
                    transferPolicy: v.transferPolicy,
                    reason: v.reason,
                    status: v.status,
                };
            });
}
