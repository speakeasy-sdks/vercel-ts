/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateSecretRequestBody = {
    /**
     * The name of the secret (max 100 characters).
     */
    name: string;
    /**
     * The value of the new secret.
     */
    value: string;
    /**
     * Whether the secret value can be decrypted after it has been created.
     */
    decryptable?: boolean | undefined;
    /**
     * Associate a secret to a project.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    projectId?: string | undefined;
};

export type CreateSecretRequest = {
    /**
     * The name of the secret.
     */
    name: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: CreateSecretRequestBody | undefined;
};

export enum CreateSecretType {
    Buffer = "Buffer",
}

export type Value = {
    type?: CreateSecretType | undefined;
    data?: Array<number> | undefined;
};

/**
 * Successful response showing the created secret.
 */
export type CreateSecretResponseBody = {
    value: Value;
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
export namespace CreateSecretRequestBody$ {
    export const inboundSchema: z.ZodType<CreateSecretRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            value: z.string(),
            decryptable: z.boolean().optional(),
            projectId: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                value: v.value,
                ...(v.decryptable === undefined ? null : { decryptable: v.decryptable }),
                ...(v.projectId === undefined ? null : { projectId: v.projectId }),
            };
        });

    export type Outbound = {
        name: string;
        value: string;
        decryptable?: boolean | undefined;
        projectId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateSecretRequestBody> = z
        .object({
            name: z.string(),
            value: z.string(),
            decryptable: z.boolean().optional(),
            projectId: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                value: v.value,
                ...(v.decryptable === undefined ? null : { decryptable: v.decryptable }),
                ...(v.projectId === undefined ? null : { projectId: v.projectId }),
            };
        });
}

/** @internal */
export namespace CreateSecretRequest$ {
    export const inboundSchema: z.ZodType<CreateSecretRequest, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => CreateSecretRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        name: string;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: CreateSecretRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateSecretRequest> = z
        .object({
            name: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => CreateSecretRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace CreateSecretType$ {
    export const inboundSchema = z.nativeEnum(CreateSecretType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Value$ {
    export const inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown> = z
        .object({
            type: CreateSecretType$.inboundSchema.optional(),
            data: z.array(z.number()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        type?: string | undefined;
        data?: Array<number> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Value> = z
        .object({
            type: CreateSecretType$.outboundSchema.optional(),
            data: z.array(z.number()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

/** @internal */
export namespace CreateSecretResponseBody$ {
    export const inboundSchema: z.ZodType<CreateSecretResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            value: z.lazy(() => Value$.inboundSchema),
            created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            name: z.string(),
            teamId: z.nullable(z.string()).optional(),
            uid: z.string(),
            userId: z.string().optional(),
            createdAt: z.number().optional(),
            projectId: z.string().optional(),
            decryptable: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                value: v.value,
                created: v.created,
                name: v.name,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                uid: v.uid,
                ...(v.userId === undefined ? null : { userId: v.userId }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.projectId === undefined ? null : { projectId: v.projectId }),
                ...(v.decryptable === undefined ? null : { decryptable: v.decryptable }),
            };
        });

    export type Outbound = {
        value: Value$.Outbound;
        created: string;
        name: string;
        teamId?: string | null | undefined;
        uid: string;
        userId?: string | undefined;
        createdAt?: number | undefined;
        projectId?: string | undefined;
        decryptable?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateSecretResponseBody> = z
        .object({
            value: z.lazy(() => Value$.outboundSchema),
            created: z.date().transform((v) => v.toISOString()),
            name: z.string(),
            teamId: z.nullable(z.string()).optional(),
            uid: z.string(),
            userId: z.string().optional(),
            createdAt: z.number().optional(),
            projectId: z.string().optional(),
            decryptable: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                value: v.value,
                created: v.created,
                name: v.name,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                uid: v.uid,
                ...(v.userId === undefined ? null : { userId: v.userId }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.projectId === undefined ? null : { projectId: v.projectId }),
                ...(v.decryptable === undefined ? null : { decryptable: v.decryptable }),
            };
        });
}
