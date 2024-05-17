/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Whether to try to decrypt the value of the secret. Only works if `decryptable` has been set to `true` when the secret was created.
 */
export enum QueryParamDecrypt {
    True = "true",
    False = "false",
}

export type GetSecretRequest = {
    /**
     * The name or the unique identifier to which the secret belongs to.
     */
    idOrName: string;
    /**
     * Whether to try to decrypt the value of the secret. Only works if `decryptable` has been set to `true` when the secret was created.
     */
    decrypt?: QueryParamDecrypt | undefined;
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
 * Data representing a secret.
 */
export type GetSecretResponseBody = {
    /**
     * The date when the secret was created.
     */
    created: Date;
    /**
     * The name of the secret.
     */
    name: string;
    /**
     * The unique identifier of the team the secret was created for.
     */
    teamId?: string | null | undefined;
    /**
     * The unique identifier of the secret.
     */
    uid: string;
    /**
     * The unique identifier of the user who created the secret.
     */
    userId?: string | undefined;
    /**
     * The value of the secret.
     */
    value?: string | undefined;
    /**
     * Timestamp for when the secret was created.
     */
    createdAt?: number | undefined;
    /**
     * The unique identifier of the project which the secret belongs to.
     */
    projectId?: string | undefined;
    /**
     * Indicates whether the secret value can be decrypted after it has been created.
     */
    decryptable?: boolean | undefined;
};

/** @internal */
export namespace QueryParamDecrypt$ {
    export const inboundSchema = z.nativeEnum(QueryParamDecrypt);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetSecretRequest$ {
    export const inboundSchema: z.ZodType<GetSecretRequest, z.ZodTypeDef, unknown> = z
        .object({
            idOrName: z.string(),
            decrypt: QueryParamDecrypt$.inboundSchema.optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                ...(v.decrypt === undefined ? null : { decrypt: v.decrypt }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        idOrName: string;
        decrypt?: string | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSecretRequest> = z
        .object({
            idOrName: z.string(),
            decrypt: QueryParamDecrypt$.outboundSchema.optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                ...(v.decrypt === undefined ? null : { decrypt: v.decrypt }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace GetSecretResponseBody$ {
    export const inboundSchema: z.ZodType<GetSecretResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            name: z.string(),
            teamId: z.nullable(z.string()).optional(),
            uid: z.string(),
            userId: z.string().optional(),
            value: z.string().optional(),
            createdAt: z.number().optional(),
            projectId: z.string().optional(),
            decryptable: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                created: v.created,
                name: v.name,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                uid: v.uid,
                ...(v.userId === undefined ? null : { userId: v.userId }),
                ...(v.value === undefined ? null : { value: v.value }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.projectId === undefined ? null : { projectId: v.projectId }),
                ...(v.decryptable === undefined ? null : { decryptable: v.decryptable }),
            };
        });

    export type Outbound = {
        created: string;
        name: string;
        teamId?: string | null | undefined;
        uid: string;
        userId?: string | undefined;
        value?: string | undefined;
        createdAt?: number | undefined;
        projectId?: string | undefined;
        decryptable?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSecretResponseBody> = z
        .object({
            created: z.date().transform((v) => v.toISOString()),
            name: z.string(),
            teamId: z.nullable(z.string()).optional(),
            uid: z.string(),
            userId: z.string().optional(),
            value: z.string().optional(),
            createdAt: z.number().optional(),
            projectId: z.string().optional(),
            decryptable: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                created: v.created,
                name: v.name,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                uid: v.uid,
                ...(v.userId === undefined ? null : { userId: v.userId }),
                ...(v.value === undefined ? null : { value: v.value }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.projectId === undefined ? null : { projectId: v.projectId }),
                ...(v.decryptable === undefined ? null : { decryptable: v.decryptable }),
            };
        });
}
