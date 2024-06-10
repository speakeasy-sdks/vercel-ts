/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetAliasRequest = {
    /**
     * Get the alias only if it was created after the provided timestamp
     */
    from?: number | undefined;
    /**
     * The alias or alias ID to be retrieved
     */
    idOrAlias: string;
    /**
     * Get the alias only if it is assigned to the provided project ID
     */
    projectId?: string | undefined;
    /**
     * Get the alias only if it was created after this JavaScript timestamp
     */
    since?: number | undefined;
    /**
     * Get the alias only if it was created before this JavaScript timestamp
     */
    until?: number | undefined;
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
 * Information of the user who created the alias
 */
export type GetAliasCreator = {
    /**
     * ID of the user who created the alias
     */
    uid: string;
    /**
     * Email of the user who created the alias
     */
    email: string;
    /**
     * Username of the user who created the alias
     */
    username: string;
};

/**
 * A map with the deployment ID, URL and metadata
 */
export type Deployment = {
    /**
     * The deployment unique identifier
     */
    id: string;
    /**
     * The deployment unique URL
     */
    url: string;
    /**
     * The deployment metadata
     */
    meta?: string | undefined;
};

export enum GetAliasProtectionBypassAliasesResponseScope {
    EmailInvite = "email_invite",
}

/**
 * The protection bypass for the alias
 */
export type ProtectionBypass4 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: GetAliasProtectionBypassAliasesResponseScope;
};

export enum GetAliasProtectionBypassAliasesScope {
    AliasProtectionOverride = "alias-protection-override",
}

/**
 * The protection bypass for the alias
 */
export type ProtectionBypass3 = {
    createdAt: number;
    createdBy: string;
    scope: GetAliasProtectionBypassAliasesScope;
};

export enum Access {
    Requested = "requested",
    Granted = "granted",
}

export enum GetAliasProtectionBypassScope {
    User = "user",
}

/**
 * The protection bypass for the alias
 */
export type ProtectionBypass2 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    access: Access;
    scope: GetAliasProtectionBypassScope;
};

export enum ProtectionBypassScope {
    ShareableLink = "shareable-link",
}

/**
 * The protection bypass for the alias
 */
export type ProtectionBypass1 = {
    createdAt: number;
    createdBy: string;
    scope: ProtectionBypassScope;
};

export type GetAliasProtectionBypass =
    | ProtectionBypass1
    | ProtectionBypass3
    | ProtectionBypass4
    | ProtectionBypass2;

/**
 * The alias information
 */
export type GetAliasResponseBody = {
    /**
     * The alias name, it could be a `.vercel.app` subdomain or a custom domain
     */
    alias: string;
    /**
     * The date when the alias was created
     */
    created: Date;
    /**
     * The date when the alias was created in milliseconds since the UNIX epoch
     */
    createdAt?: number | undefined;
    /**
     * Information of the user who created the alias
     */
    creator?: GetAliasCreator | undefined;
    /**
     * The date when the alias was deleted in milliseconds since the UNIX epoch
     */
    deletedAt?: number | undefined;
    /**
     * A map with the deployment ID, URL and metadata
     */
    deployment?: Deployment | undefined;
    /**
     * The deployment ID
     */
    deploymentId: string | null;
    /**
     * The unique identifier of the project
     */
    projectId: string | null;
    /**
     * Target destination domain for redirect when the alias is a redirect
     */
    redirect?: string | null | undefined;
    /**
     * Status code to be used on redirect
     */
    redirectStatusCode?: number | null | undefined;
    /**
     * The unique identifier of the alias
     */
    uid: string;
    /**
     * The date when the alias was updated in milliseconds since the UNIX epoch
     */
    updatedAt?: number | undefined;
    /**
     * The protection bypass for the alias
     */
    protectionBypass?:
        | {
              [k: string]:
                  | ProtectionBypass1
                  | ProtectionBypass3
                  | ProtectionBypass4
                  | ProtectionBypass2;
          }
        | undefined;
};

/** @internal */
export namespace GetAliasRequest$ {
    export const inboundSchema: z.ZodType<GetAliasRequest, z.ZodTypeDef, unknown> = z.object({
        from: z.number().optional(),
        idOrAlias: z.string(),
        projectId: z.string().optional(),
        since: z.number().optional(),
        until: z.number().optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });

    export type Outbound = {
        from?: number | undefined;
        idOrAlias: string;
        projectId?: string | undefined;
        since?: number | undefined;
        until?: number | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAliasRequest> = z.object({
        from: z.number().optional(),
        idOrAlias: z.string(),
        projectId: z.string().optional(),
        since: z.number().optional(),
        until: z.number().optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });
}

/** @internal */
export namespace GetAliasCreator$ {
    export const inboundSchema: z.ZodType<GetAliasCreator, z.ZodTypeDef, unknown> = z.object({
        uid: z.string(),
        email: z.string(),
        username: z.string(),
    });

    export type Outbound = {
        uid: string;
        email: string;
        username: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAliasCreator> = z.object({
        uid: z.string(),
        email: z.string(),
        username: z.string(),
    });
}

/** @internal */
export namespace Deployment$ {
    export const inboundSchema: z.ZodType<Deployment, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        url: z.string(),
        meta: z.string().optional(),
    });

    export type Outbound = {
        id: string;
        url: string;
        meta?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Deployment> = z.object({
        id: z.string(),
        url: z.string(),
        meta: z.string().optional(),
    });
}

/** @internal */
export namespace GetAliasProtectionBypassAliasesResponseScope$ {
    export const inboundSchema = z.nativeEnum(GetAliasProtectionBypassAliasesResponseScope);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ProtectionBypass4$ {
    export const inboundSchema: z.ZodType<ProtectionBypass4, z.ZodTypeDef, unknown> = z.object({
        createdAt: z.number(),
        lastUpdatedAt: z.number(),
        lastUpdatedBy: z.string(),
        scope: GetAliasProtectionBypassAliasesResponseScope$.inboundSchema,
    });

    export type Outbound = {
        createdAt: number;
        lastUpdatedAt: number;
        lastUpdatedBy: string;
        scope: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProtectionBypass4> = z.object({
        createdAt: z.number(),
        lastUpdatedAt: z.number(),
        lastUpdatedBy: z.string(),
        scope: GetAliasProtectionBypassAliasesResponseScope$.outboundSchema,
    });
}

/** @internal */
export namespace GetAliasProtectionBypassAliasesScope$ {
    export const inboundSchema = z.nativeEnum(GetAliasProtectionBypassAliasesScope);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ProtectionBypass3$ {
    export const inboundSchema: z.ZodType<ProtectionBypass3, z.ZodTypeDef, unknown> = z.object({
        createdAt: z.number(),
        createdBy: z.string(),
        scope: GetAliasProtectionBypassAliasesScope$.inboundSchema,
    });

    export type Outbound = {
        createdAt: number;
        createdBy: string;
        scope: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProtectionBypass3> = z.object({
        createdAt: z.number(),
        createdBy: z.string(),
        scope: GetAliasProtectionBypassAliasesScope$.outboundSchema,
    });
}

/** @internal */
export namespace Access$ {
    export const inboundSchema = z.nativeEnum(Access);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetAliasProtectionBypassScope$ {
    export const inboundSchema = z.nativeEnum(GetAliasProtectionBypassScope);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ProtectionBypass2$ {
    export const inboundSchema: z.ZodType<ProtectionBypass2, z.ZodTypeDef, unknown> = z.object({
        createdAt: z.number(),
        lastUpdatedAt: z.number(),
        lastUpdatedBy: z.string(),
        access: Access$.inboundSchema,
        scope: GetAliasProtectionBypassScope$.inboundSchema,
    });

    export type Outbound = {
        createdAt: number;
        lastUpdatedAt: number;
        lastUpdatedBy: string;
        access: string;
        scope: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProtectionBypass2> = z.object({
        createdAt: z.number(),
        lastUpdatedAt: z.number(),
        lastUpdatedBy: z.string(),
        access: Access$.outboundSchema,
        scope: GetAliasProtectionBypassScope$.outboundSchema,
    });
}

/** @internal */
export namespace ProtectionBypassScope$ {
    export const inboundSchema = z.nativeEnum(ProtectionBypassScope);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ProtectionBypass1$ {
    export const inboundSchema: z.ZodType<ProtectionBypass1, z.ZodTypeDef, unknown> = z.object({
        createdAt: z.number(),
        createdBy: z.string(),
        scope: ProtectionBypassScope$.inboundSchema,
    });

    export type Outbound = {
        createdAt: number;
        createdBy: string;
        scope: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProtectionBypass1> = z.object({
        createdAt: z.number(),
        createdBy: z.string(),
        scope: ProtectionBypassScope$.outboundSchema,
    });
}

/** @internal */
export namespace GetAliasProtectionBypass$ {
    export const inboundSchema: z.ZodType<GetAliasProtectionBypass, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => ProtectionBypass1$.inboundSchema),
            z.lazy(() => ProtectionBypass3$.inboundSchema),
            z.lazy(() => ProtectionBypass4$.inboundSchema),
            z.lazy(() => ProtectionBypass2$.inboundSchema),
        ]);

    export type Outbound =
        | ProtectionBypass1$.Outbound
        | ProtectionBypass3$.Outbound
        | ProtectionBypass4$.Outbound
        | ProtectionBypass2$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAliasProtectionBypass> =
        z.union([
            z.lazy(() => ProtectionBypass1$.outboundSchema),
            z.lazy(() => ProtectionBypass3$.outboundSchema),
            z.lazy(() => ProtectionBypass4$.outboundSchema),
            z.lazy(() => ProtectionBypass2$.outboundSchema),
        ]);
}

/** @internal */
export namespace GetAliasResponseBody$ {
    export const inboundSchema: z.ZodType<GetAliasResponseBody, z.ZodTypeDef, unknown> = z.object({
        alias: z.string(),
        created: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        createdAt: z.number().optional(),
        creator: z.lazy(() => GetAliasCreator$.inboundSchema).optional(),
        deletedAt: z.number().optional(),
        deployment: z.lazy(() => Deployment$.inboundSchema).optional(),
        deploymentId: z.nullable(z.string()),
        projectId: z.nullable(z.string()),
        redirect: z.nullable(z.string()).optional(),
        redirectStatusCode: z.nullable(z.number()).optional(),
        uid: z.string(),
        updatedAt: z.number().optional(),
        protectionBypass: z
            .record(
                z.union([
                    z.lazy(() => ProtectionBypass1$.inboundSchema),
                    z.lazy(() => ProtectionBypass3$.inboundSchema),
                    z.lazy(() => ProtectionBypass4$.inboundSchema),
                    z.lazy(() => ProtectionBypass2$.inboundSchema),
                ])
            )
            .optional(),
    });

    export type Outbound = {
        alias: string;
        created: string;
        createdAt?: number | undefined;
        creator?: GetAliasCreator$.Outbound | undefined;
        deletedAt?: number | undefined;
        deployment?: Deployment$.Outbound | undefined;
        deploymentId: string | null;
        projectId: string | null;
        redirect?: string | null | undefined;
        redirectStatusCode?: number | null | undefined;
        uid: string;
        updatedAt?: number | undefined;
        protectionBypass?:
            | {
                  [k: string]:
                      | ProtectionBypass1$.Outbound
                      | ProtectionBypass3$.Outbound
                      | ProtectionBypass4$.Outbound
                      | ProtectionBypass2$.Outbound;
              }
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAliasResponseBody> = z.object(
        {
            alias: z.string(),
            created: z.date().transform((v) => v.toISOString()),
            createdAt: z.number().optional(),
            creator: z.lazy(() => GetAliasCreator$.outboundSchema).optional(),
            deletedAt: z.number().optional(),
            deployment: z.lazy(() => Deployment$.outboundSchema).optional(),
            deploymentId: z.nullable(z.string()),
            projectId: z.nullable(z.string()),
            redirect: z.nullable(z.string()).optional(),
            redirectStatusCode: z.nullable(z.number()).optional(),
            uid: z.string(),
            updatedAt: z.number().optional(),
            protectionBypass: z
                .record(
                    z.union([
                        z.lazy(() => ProtectionBypass1$.outboundSchema),
                        z.lazy(() => ProtectionBypass3$.outboundSchema),
                        z.lazy(() => ProtectionBypass4$.outboundSchema),
                        z.lazy(() => ProtectionBypass2$.outboundSchema),
                    ])
                )
                .optional(),
        }
    );
}
