/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteSecretRequest = {
    /**
     * The name or the unique identifier to which the secret belongs to.
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
};

export type DeleteSecretResponseBody = {
    /**
     * The unique identifier of the deleted secret.
     */
    uid: string;
    /**
     * The name of the deleted secret.
     */
    name: string;
    /**
     * The date when the secret was created.
     */
    created: number;
};

/** @internal */
export namespace DeleteSecretRequest$ {
    export const inboundSchema: z.ZodType<DeleteSecretRequest, z.ZodTypeDef, unknown> = z.object({
        idOrName: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });

    export type Outbound = {
        idOrName: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSecretRequest> = z.object({
        idOrName: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });
}

/** @internal */
export namespace DeleteSecretResponseBody$ {
    export const inboundSchema: z.ZodType<DeleteSecretResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            uid: z.string(),
            name: z.string(),
            created: z.number(),
        });

    export type Outbound = {
        uid: string;
        name: string;
        created: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSecretResponseBody> =
        z.object({
            uid: z.string(),
            name: z.string(),
            created: z.number(),
        });
}
