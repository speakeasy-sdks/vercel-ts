/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

export enum EditProjectEnvTarget {
    Production = "production",
    Preview = "preview",
    Development = "development",
}

/**
 * The type of environment variable
 */
export enum EditProjectEnvType {
    System = "system",
    Secret = "secret",
    Encrypted = "encrypted",
    Plain = "plain",
    Sensitive = "sensitive",
}

export type EditProjectEnvRequestBody = {
    /**
     * The name of the environment variable
     */
    key?: string | undefined;
    /**
     * The target environment of the environment variable
     */
    target?: Array<EditProjectEnvTarget> | undefined;
    /**
     * If defined, the git branch of the environment variable (must have target=preview)
     */
    gitBranch?: string | null | undefined;
    /**
     * The type of environment variable
     */
    type?: EditProjectEnvType | undefined;
    /**
     * The value of the environment variable
     */
    value?: string | undefined;
    customEnvironmentId?: string | undefined;
    /**
     * A comment to add context on what this env var is for
     */
    comment?: string | undefined;
};

export type EditProjectEnvRequest = {
    /**
     * The unique project identifier or the project name
     */
    idOrName: string;
    /**
     * The unique environment variable identifier
     */
    id: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: EditProjectEnvRequestBody | undefined;
};

export enum EditProjectEnvTarget2 {
    Production = "production",
    Preview = "preview",
    Development = "development",
}

export enum EditProjectEnvTarget1 {
    Production = "production",
    Preview = "preview",
    Development = "development",
}

export type EditProjectEnvProjectsTarget = Array<EditProjectEnvTarget1> | EditProjectEnvTarget2;

export enum EditProjectEnvProjectsType {
    System = "system",
    Encrypted = "encrypted",
    Plain = "plain",
    Sensitive = "sensitive",
    Secret = "secret",
}

export enum EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody14Type {
    IntegrationStoreSecret = "integration-store-secret",
}

export type Fourteen = {
    type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody14Type;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody13Type {
    PostgresUrlNoSsl = "postgres-url-no-ssl",
}

export type Thirteen = {
    type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody13Type;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody12Type {
    PostgresDatabase = "postgres-database",
}

export type Twelve = {
    type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody12Type;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody11Type {
    PostgresPassword = "postgres-password",
}

export type Eleven = {
    type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody11Type;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody10Type {
    PostgresHost = "postgres-host",
}

export type ContentHint10 = {
    type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody10Type;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody9Type {
    PostgresUser = "postgres-user",
}

export type ContentHint9 = {
    type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody9Type;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody8Type {
    PostgresPrismaUrl = "postgres-prisma-url",
}

export type ContentHint8 = {
    type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody8Type;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBodyType {
    PostgresUrlNonPooling = "postgres-url-non-pooling",
}

export type ContentHint7 = {
    type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBodyType;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsResponse200ApplicationJSONType {
    PostgresUrl = "postgres-url",
}

export type ContentHint6 = {
    type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONType;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsResponse200Type {
    BlobReadWriteToken = "blob-read-write-token",
}

export type ContentHint5 = {
    type: EditProjectEnvContentHintProjectsResponse200Type;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsResponseType {
    RedisRestApiReadOnlyToken = "redis-rest-api-read-only-token",
}

export type ContentHint4 = {
    type: EditProjectEnvContentHintProjectsResponseType;
    storeId: string;
};

export enum EditProjectEnvContentHintProjectsType {
    RedisRestApiToken = "redis-rest-api-token",
}

export type ContentHint3 = {
    type: EditProjectEnvContentHintProjectsType;
    storeId: string;
};

export enum EditProjectEnvContentHintType {
    RedisRestApiUrl = "redis-rest-api-url",
}

export type ContentHint2 = {
    type: EditProjectEnvContentHintType;
    storeId: string;
};

export enum ContentHintType {
    RedisUrl = "redis-url",
}

export type ContentHint1 = {
    type: ContentHintType;
    storeId: string;
};

export type ContentHint =
    | ContentHint1
    | ContentHint2
    | ContentHint3
    | ContentHint4
    | ContentHint5
    | ContentHint6
    | ContentHint7
    | ContentHint8
    | ContentHint9
    | ContentHint10
    | Eleven
    | Twelve
    | Thirteen
    | Fourteen;

export enum EditProjectEnvProjectsResponseType {
    FlagsSecret = "flags-secret",
}

/**
 * Similar to `contentHints`, but should not be exposed to the user.
 */
export type InternalContentHint = {
    type: EditProjectEnvProjectsResponseType;
    /**
     * Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.
     */
    encryptedValue: string;
};

/**
 * The environment variable was successfully edited
 */
export type EditProjectEnvResponseBody = {
    target?: Array<EditProjectEnvTarget1> | EditProjectEnvTarget2 | undefined;
    type: EditProjectEnvProjectsType;
    id?: string | undefined;
    key: string;
    value: string;
    configurationId?: string | null | undefined;
    createdAt?: number | undefined;
    updatedAt?: number | undefined;
    createdBy?: string | null | undefined;
    updatedBy?: string | null | undefined;
    gitBranch?: string | undefined;
    edgeConfigId?: string | null | undefined;
    edgeConfigTokenId?: string | null | undefined;
    contentHint?:
        | ContentHint1
        | ContentHint2
        | ContentHint3
        | ContentHint4
        | ContentHint5
        | ContentHint6
        | ContentHint7
        | ContentHint8
        | ContentHint9
        | ContentHint10
        | Eleven
        | Twelve
        | Thirteen
        | Fourteen
        | null
        | undefined;
    /**
     * Similar to `contentHints`, but should not be exposed to the user.
     */
    internalContentHint?: InternalContentHint | null | undefined;
    /**
     * Whether `value` is decrypted.
     */
    decrypted?: boolean | undefined;
    comment?: string | undefined;
    customEnvironmentId?: string | undefined;
};

/** @internal */
export namespace EditProjectEnvTarget$ {
    export const inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget> =
        z.nativeEnum(EditProjectEnvTarget);
    export const outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget> = inboundSchema;
}

/** @internal */
export namespace EditProjectEnvType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvType> =
        z.nativeEnum(EditProjectEnvType);
    export const outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvType> = inboundSchema;
}

/** @internal */
export namespace EditProjectEnvRequestBody$ {
    export const inboundSchema: z.ZodType<EditProjectEnvRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            key: z.string().optional(),
            target: z.array(EditProjectEnvTarget$.inboundSchema).optional(),
            gitBranch: z.nullable(z.string()).optional(),
            type: EditProjectEnvType$.inboundSchema.optional(),
            value: z.string().optional(),
            customEnvironmentId: z.string().optional(),
            comment: z.string().optional(),
        });

    export type Outbound = {
        key?: string | undefined;
        target?: Array<string> | undefined;
        gitBranch?: string | null | undefined;
        type?: string | undefined;
        value?: string | undefined;
        customEnvironmentId?: string | undefined;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EditProjectEnvRequestBody> =
        z.object({
            key: z.string().optional(),
            target: z.array(EditProjectEnvTarget$.outboundSchema).optional(),
            gitBranch: z.nullable(z.string()).optional(),
            type: EditProjectEnvType$.outboundSchema.optional(),
            value: z.string().optional(),
            customEnvironmentId: z.string().optional(),
            comment: z.string().optional(),
        });
}

/** @internal */
export namespace EditProjectEnvRequest$ {
    export const inboundSchema: z.ZodType<EditProjectEnvRequest, z.ZodTypeDef, unknown> = z
        .object({
            idOrName: z.string(),
            id: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z.lazy(() => EditProjectEnvRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        idOrName: string;
        id: string;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?: EditProjectEnvRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EditProjectEnvRequest> = z
        .object({
            idOrName: z.string(),
            id: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z.lazy(() => EditProjectEnvRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace EditProjectEnvTarget2$ {
    export const inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget2> =
        z.nativeEnum(EditProjectEnvTarget2);
    export const outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget2> = inboundSchema;
}

/** @internal */
export namespace EditProjectEnvTarget1$ {
    export const inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget1> =
        z.nativeEnum(EditProjectEnvTarget1);
    export const outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvTarget1> = inboundSchema;
}

/** @internal */
export namespace EditProjectEnvProjectsTarget$ {
    export const inboundSchema: z.ZodType<EditProjectEnvProjectsTarget, z.ZodTypeDef, unknown> =
        z.union([
            z.array(EditProjectEnvTarget1$.inboundSchema),
            EditProjectEnvTarget2$.inboundSchema,
        ]);

    export type Outbound = Array<string> | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EditProjectEnvProjectsTarget> =
        z.union([
            z.array(EditProjectEnvTarget1$.outboundSchema),
            EditProjectEnvTarget2$.outboundSchema,
        ]);
}

/** @internal */
export namespace EditProjectEnvProjectsType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvProjectsType> = z.nativeEnum(
        EditProjectEnvProjectsType
    );
    export const outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvProjectsType> = inboundSchema;
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody14Type$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody14Type
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody14Type);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody14Type
    > = inboundSchema;
}

/** @internal */
export namespace Fourteen$ {
    export const inboundSchema: z.ZodType<Fourteen, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody14Type$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Fourteen> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody14Type$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody13Type$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody13Type
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody13Type);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody13Type
    > = inboundSchema;
}

/** @internal */
export namespace Thirteen$ {
    export const inboundSchema: z.ZodType<Thirteen, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody13Type$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Thirteen> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody13Type$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody12Type$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody12Type
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody12Type);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody12Type
    > = inboundSchema;
}

/** @internal */
export namespace Twelve$ {
    export const inboundSchema: z.ZodType<Twelve, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody12Type$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Twelve> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody12Type$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody11Type$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody11Type
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody11Type);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody11Type
    > = inboundSchema;
}

/** @internal */
export namespace Eleven$ {
    export const inboundSchema: z.ZodType<Eleven, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody11Type$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Eleven> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody11Type$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody10Type$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody10Type
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody10Type);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody10Type
    > = inboundSchema;
}

/** @internal */
export namespace ContentHint10$ {
    export const inboundSchema: z.ZodType<ContentHint10, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody10Type$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint10> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody10Type$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody9Type$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody9Type
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody9Type);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody9Type
    > = inboundSchema;
}

/** @internal */
export namespace ContentHint9$ {
    export const inboundSchema: z.ZodType<ContentHint9, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody9Type$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint9> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody9Type$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody8Type$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody8Type
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody8Type);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody8Type
    > = inboundSchema;
}

/** @internal */
export namespace ContentHint8$ {
    export const inboundSchema: z.ZodType<ContentHint8, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody8Type$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint8> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBody8Type$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBodyType$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBodyType
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBodyType);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBodyType
    > = inboundSchema;
}

/** @internal */
export namespace ContentHint7$ {
    export const inboundSchema: z.ZodType<ContentHint7, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBodyType$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint7> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONResponseBodyType$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponse200ApplicationJSONType$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONType
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponse200ApplicationJSONType);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200ApplicationJSONType
    > = inboundSchema;
}

/** @internal */
export namespace ContentHint6$ {
    export const inboundSchema: z.ZodType<ContentHint6, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONType$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint6> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200ApplicationJSONType$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponse200Type$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200Type
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponse200Type);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponse200Type
    > = inboundSchema;
}

/** @internal */
export namespace ContentHint5$ {
    export const inboundSchema: z.ZodType<ContentHint5, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200Type$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint5> = z.object({
        type: EditProjectEnvContentHintProjectsResponse200Type$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsResponseType$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponseType
    > = z.nativeEnum(EditProjectEnvContentHintProjectsResponseType);
    export const outboundSchema: z.ZodNativeEnum<
        typeof EditProjectEnvContentHintProjectsResponseType
    > = inboundSchema;
}

/** @internal */
export namespace ContentHint4$ {
    export const inboundSchema: z.ZodType<ContentHint4, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsResponseType$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint4> = z.object({
        type: EditProjectEnvContentHintProjectsResponseType$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintProjectsType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvContentHintProjectsType> =
        z.nativeEnum(EditProjectEnvContentHintProjectsType);
    export const outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvContentHintProjectsType> =
        inboundSchema;
}

/** @internal */
export namespace ContentHint3$ {
    export const inboundSchema: z.ZodType<ContentHint3, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintProjectsType$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint3> = z.object({
        type: EditProjectEnvContentHintProjectsType$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvContentHintType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvContentHintType> =
        z.nativeEnum(EditProjectEnvContentHintType);
    export const outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvContentHintType> =
        inboundSchema;
}

/** @internal */
export namespace ContentHint2$ {
    export const inboundSchema: z.ZodType<ContentHint2, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvContentHintType$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint2> = z.object({
        type: EditProjectEnvContentHintType$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace ContentHintType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof ContentHintType> =
        z.nativeEnum(ContentHintType);
    export const outboundSchema: z.ZodNativeEnum<typeof ContentHintType> = inboundSchema;
}

/** @internal */
export namespace ContentHint1$ {
    export const inboundSchema: z.ZodType<ContentHint1, z.ZodTypeDef, unknown> = z.object({
        type: ContentHintType$.inboundSchema,
        storeId: z.string(),
    });

    export type Outbound = {
        type: string;
        storeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint1> = z.object({
        type: ContentHintType$.outboundSchema,
        storeId: z.string(),
    });
}

/** @internal */
export namespace ContentHint$ {
    export const inboundSchema: z.ZodType<ContentHint, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => ContentHint1$.inboundSchema),
        z.lazy(() => ContentHint2$.inboundSchema),
        z.lazy(() => ContentHint3$.inboundSchema),
        z.lazy(() => ContentHint4$.inboundSchema),
        z.lazy(() => ContentHint5$.inboundSchema),
        z.lazy(() => ContentHint6$.inboundSchema),
        z.lazy(() => ContentHint7$.inboundSchema),
        z.lazy(() => ContentHint8$.inboundSchema),
        z.lazy(() => ContentHint9$.inboundSchema),
        z.lazy(() => ContentHint10$.inboundSchema),
        z.lazy(() => Eleven$.inboundSchema),
        z.lazy(() => Twelve$.inboundSchema),
        z.lazy(() => Thirteen$.inboundSchema),
        z.lazy(() => Fourteen$.inboundSchema),
    ]);

    export type Outbound =
        | ContentHint1$.Outbound
        | ContentHint2$.Outbound
        | ContentHint3$.Outbound
        | ContentHint4$.Outbound
        | ContentHint5$.Outbound
        | ContentHint6$.Outbound
        | ContentHint7$.Outbound
        | ContentHint8$.Outbound
        | ContentHint9$.Outbound
        | ContentHint10$.Outbound
        | Eleven$.Outbound
        | Twelve$.Outbound
        | Thirteen$.Outbound
        | Fourteen$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentHint> = z.union([
        z.lazy(() => ContentHint1$.outboundSchema),
        z.lazy(() => ContentHint2$.outboundSchema),
        z.lazy(() => ContentHint3$.outboundSchema),
        z.lazy(() => ContentHint4$.outboundSchema),
        z.lazy(() => ContentHint5$.outboundSchema),
        z.lazy(() => ContentHint6$.outboundSchema),
        z.lazy(() => ContentHint7$.outboundSchema),
        z.lazy(() => ContentHint8$.outboundSchema),
        z.lazy(() => ContentHint9$.outboundSchema),
        z.lazy(() => ContentHint10$.outboundSchema),
        z.lazy(() => Eleven$.outboundSchema),
        z.lazy(() => Twelve$.outboundSchema),
        z.lazy(() => Thirteen$.outboundSchema),
        z.lazy(() => Fourteen$.outboundSchema),
    ]);
}

/** @internal */
export namespace EditProjectEnvProjectsResponseType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof EditProjectEnvProjectsResponseType> =
        z.nativeEnum(EditProjectEnvProjectsResponseType);
    export const outboundSchema: z.ZodNativeEnum<typeof EditProjectEnvProjectsResponseType> =
        inboundSchema;
}

/** @internal */
export namespace InternalContentHint$ {
    export const inboundSchema: z.ZodType<InternalContentHint, z.ZodTypeDef, unknown> = z.object({
        type: EditProjectEnvProjectsResponseType$.inboundSchema,
        encryptedValue: z.string(),
    });

    export type Outbound = {
        type: string;
        encryptedValue: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InternalContentHint> = z.object({
        type: EditProjectEnvProjectsResponseType$.outboundSchema,
        encryptedValue: z.string(),
    });
}

/** @internal */
export namespace EditProjectEnvResponseBody$ {
    export const inboundSchema: z.ZodType<EditProjectEnvResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            target: z
                .union([
                    z.array(EditProjectEnvTarget1$.inboundSchema),
                    EditProjectEnvTarget2$.inboundSchema,
                ])
                .optional(),
            type: EditProjectEnvProjectsType$.inboundSchema,
            id: z.string().optional(),
            key: z.string(),
            value: z.string(),
            configurationId: z.nullable(z.string()).optional(),
            createdAt: z.number().optional(),
            updatedAt: z.number().optional(),
            createdBy: z.nullable(z.string()).optional(),
            updatedBy: z.nullable(z.string()).optional(),
            gitBranch: z.string().optional(),
            edgeConfigId: z.nullable(z.string()).optional(),
            edgeConfigTokenId: z.nullable(z.string()).optional(),
            contentHint: z
                .nullable(
                    z.union([
                        z.lazy(() => ContentHint1$.inboundSchema),
                        z.lazy(() => ContentHint2$.inboundSchema),
                        z.lazy(() => ContentHint3$.inboundSchema),
                        z.lazy(() => ContentHint4$.inboundSchema),
                        z.lazy(() => ContentHint5$.inboundSchema),
                        z.lazy(() => ContentHint6$.inboundSchema),
                        z.lazy(() => ContentHint7$.inboundSchema),
                        z.lazy(() => ContentHint8$.inboundSchema),
                        z.lazy(() => ContentHint9$.inboundSchema),
                        z.lazy(() => ContentHint10$.inboundSchema),
                        z.lazy(() => Eleven$.inboundSchema),
                        z.lazy(() => Twelve$.inboundSchema),
                        z.lazy(() => Thirteen$.inboundSchema),
                        z.lazy(() => Fourteen$.inboundSchema),
                    ])
                )
                .optional(),
            internalContentHint: z
                .nullable(z.lazy(() => InternalContentHint$.inboundSchema))
                .optional(),
            decrypted: z.boolean().optional(),
            comment: z.string().optional(),
            customEnvironmentId: z.string().optional(),
        });

    export type Outbound = {
        target?: Array<string> | string | undefined;
        type: string;
        id?: string | undefined;
        key: string;
        value: string;
        configurationId?: string | null | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        createdBy?: string | null | undefined;
        updatedBy?: string | null | undefined;
        gitBranch?: string | undefined;
        edgeConfigId?: string | null | undefined;
        edgeConfigTokenId?: string | null | undefined;
        contentHint?:
            | ContentHint1$.Outbound
            | ContentHint2$.Outbound
            | ContentHint3$.Outbound
            | ContentHint4$.Outbound
            | ContentHint5$.Outbound
            | ContentHint6$.Outbound
            | ContentHint7$.Outbound
            | ContentHint8$.Outbound
            | ContentHint9$.Outbound
            | ContentHint10$.Outbound
            | Eleven$.Outbound
            | Twelve$.Outbound
            | Thirteen$.Outbound
            | Fourteen$.Outbound
            | null
            | undefined;
        internalContentHint?: InternalContentHint$.Outbound | null | undefined;
        decrypted?: boolean | undefined;
        comment?: string | undefined;
        customEnvironmentId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EditProjectEnvResponseBody> =
        z.object({
            target: z
                .union([
                    z.array(EditProjectEnvTarget1$.outboundSchema),
                    EditProjectEnvTarget2$.outboundSchema,
                ])
                .optional(),
            type: EditProjectEnvProjectsType$.outboundSchema,
            id: z.string().optional(),
            key: z.string(),
            value: z.string(),
            configurationId: z.nullable(z.string()).optional(),
            createdAt: z.number().optional(),
            updatedAt: z.number().optional(),
            createdBy: z.nullable(z.string()).optional(),
            updatedBy: z.nullable(z.string()).optional(),
            gitBranch: z.string().optional(),
            edgeConfigId: z.nullable(z.string()).optional(),
            edgeConfigTokenId: z.nullable(z.string()).optional(),
            contentHint: z
                .nullable(
                    z.union([
                        z.lazy(() => ContentHint1$.outboundSchema),
                        z.lazy(() => ContentHint2$.outboundSchema),
                        z.lazy(() => ContentHint3$.outboundSchema),
                        z.lazy(() => ContentHint4$.outboundSchema),
                        z.lazy(() => ContentHint5$.outboundSchema),
                        z.lazy(() => ContentHint6$.outboundSchema),
                        z.lazy(() => ContentHint7$.outboundSchema),
                        z.lazy(() => ContentHint8$.outboundSchema),
                        z.lazy(() => ContentHint9$.outboundSchema),
                        z.lazy(() => ContentHint10$.outboundSchema),
                        z.lazy(() => Eleven$.outboundSchema),
                        z.lazy(() => Twelve$.outboundSchema),
                        z.lazy(() => Thirteen$.outboundSchema),
                        z.lazy(() => Fourteen$.outboundSchema),
                    ])
                )
                .optional(),
            internalContentHint: z
                .nullable(z.lazy(() => InternalContentHint$.outboundSchema))
                .optional(),
            decrypted: z.boolean().optional(),
            comment: z.string().optional(),
            customEnvironmentId: z.string().optional(),
        });
}
