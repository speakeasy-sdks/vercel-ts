/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListDeploymentAliasesRequest = {
    /**
     * The ID of the deployment the aliases should be listed for
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
};

export enum ListDeploymentAliasesProtectionBypassAliasesResponse200Scope {
    EmailInvite = "email_invite",
}

/**
 * The protection bypass for the alias
 */
export type ListDeploymentAliasesProtectionBypass4 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: ListDeploymentAliasesProtectionBypassAliasesResponse200Scope;
};

export enum ListDeploymentAliasesProtectionBypassAliasesResponseScope {
    AliasProtectionOverride = "alias-protection-override",
}

/**
 * The protection bypass for the alias
 */
export type ListDeploymentAliasesProtectionBypass3 = {
    createdAt: number;
    createdBy: string;
    scope: ListDeploymentAliasesProtectionBypassAliasesResponseScope;
};

export enum ListDeploymentAliasesProtectionBypassAccess {
    Requested = "requested",
    Granted = "granted",
}

export enum ListDeploymentAliasesProtectionBypassAliasesScope {
    User = "user",
}

/**
 * The protection bypass for the alias
 */
export type ListDeploymentAliasesProtectionBypass2 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    access: ListDeploymentAliasesProtectionBypassAccess;
    scope: ListDeploymentAliasesProtectionBypassAliasesScope;
};

export enum ListDeploymentAliasesProtectionBypassScope {
    ShareableLink = "shareable-link",
}

/**
 * The protection bypass for the alias
 */
export type ListDeploymentAliasesProtectionBypass1 = {
    createdAt: number;
    createdBy: string;
    scope: ListDeploymentAliasesProtectionBypassScope;
};

export type ListDeploymentAliasesProtectionBypass =
    | ListDeploymentAliasesProtectionBypass1
    | ListDeploymentAliasesProtectionBypass3
    | ListDeploymentAliasesProtectionBypass4
    | ListDeploymentAliasesProtectionBypass2;

/**
 * A list of the aliases assigned to the deployment
 */
export type ListDeploymentAliasesAliases = {
    /**
     * The unique identifier of the alias
     */
    uid: string;
    /**
     * The alias name, it could be a `.vercel.app` subdomain or a custom domain
     */
    alias: string;
    /**
     * The date when the alias was created
     */
    created: Date;
    /**
     * Target destination domain for redirect when the alias is a redirect
     */
    redirect?: string | null | undefined;
    /**
     * The protection bypass for the alias
     */
    protectionBypass?:
        | Record<
              string,
              | ListDeploymentAliasesProtectionBypass1
              | ListDeploymentAliasesProtectionBypass3
              | ListDeploymentAliasesProtectionBypass4
              | ListDeploymentAliasesProtectionBypass2
          >
        | undefined;
};

/**
 * The list of aliases assigned to the deployment
 */
export type ListDeploymentAliasesResponseBody = {
    /**
     * A list of the aliases assigned to the deployment
     */
    aliases: Array<ListDeploymentAliasesAliases>;
};

/** @internal */
export namespace ListDeploymentAliasesRequest$ {
    export const inboundSchema: z.ZodType<ListDeploymentAliasesRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        id: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListDeploymentAliasesRequest> = z
        .object({
            id: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace ListDeploymentAliasesProtectionBypassAliasesResponse200Scope$ {
    export const inboundSchema = z.nativeEnum(
        ListDeploymentAliasesProtectionBypassAliasesResponse200Scope
    );
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListDeploymentAliasesProtectionBypass4$ {
    export const inboundSchema: z.ZodType<
        ListDeploymentAliasesProtectionBypass4,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            createdAt: z.number(),
            lastUpdatedAt: z.number(),
            lastUpdatedBy: z.string(),
            scope: ListDeploymentAliasesProtectionBypassAliasesResponse200Scope$.inboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                lastUpdatedAt: v.lastUpdatedAt,
                lastUpdatedBy: v.lastUpdatedBy,
                scope: v.scope,
            };
        });

    export type Outbound = {
        createdAt: number;
        lastUpdatedAt: number;
        lastUpdatedBy: string;
        scope: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListDeploymentAliasesProtectionBypass4
    > = z
        .object({
            createdAt: z.number(),
            lastUpdatedAt: z.number(),
            lastUpdatedBy: z.string(),
            scope: ListDeploymentAliasesProtectionBypassAliasesResponse200Scope$.outboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                lastUpdatedAt: v.lastUpdatedAt,
                lastUpdatedBy: v.lastUpdatedBy,
                scope: v.scope,
            };
        });
}

/** @internal */
export namespace ListDeploymentAliasesProtectionBypassAliasesResponseScope$ {
    export const inboundSchema = z.nativeEnum(
        ListDeploymentAliasesProtectionBypassAliasesResponseScope
    );
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListDeploymentAliasesProtectionBypass3$ {
    export const inboundSchema: z.ZodType<
        ListDeploymentAliasesProtectionBypass3,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            createdAt: z.number(),
            createdBy: z.string(),
            scope: ListDeploymentAliasesProtectionBypassAliasesResponseScope$.inboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                scope: v.scope,
            };
        });

    export type Outbound = {
        createdAt: number;
        createdBy: string;
        scope: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListDeploymentAliasesProtectionBypass3
    > = z
        .object({
            createdAt: z.number(),
            createdBy: z.string(),
            scope: ListDeploymentAliasesProtectionBypassAliasesResponseScope$.outboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                scope: v.scope,
            };
        });
}

/** @internal */
export namespace ListDeploymentAliasesProtectionBypassAccess$ {
    export const inboundSchema = z.nativeEnum(ListDeploymentAliasesProtectionBypassAccess);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListDeploymentAliasesProtectionBypassAliasesScope$ {
    export const inboundSchema = z.nativeEnum(ListDeploymentAliasesProtectionBypassAliasesScope);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListDeploymentAliasesProtectionBypass2$ {
    export const inboundSchema: z.ZodType<
        ListDeploymentAliasesProtectionBypass2,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            createdAt: z.number(),
            lastUpdatedAt: z.number(),
            lastUpdatedBy: z.string(),
            access: ListDeploymentAliasesProtectionBypassAccess$.inboundSchema,
            scope: ListDeploymentAliasesProtectionBypassAliasesScope$.inboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                lastUpdatedAt: v.lastUpdatedAt,
                lastUpdatedBy: v.lastUpdatedBy,
                access: v.access,
                scope: v.scope,
            };
        });

    export type Outbound = {
        createdAt: number;
        lastUpdatedAt: number;
        lastUpdatedBy: string;
        access: string;
        scope: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListDeploymentAliasesProtectionBypass2
    > = z
        .object({
            createdAt: z.number(),
            lastUpdatedAt: z.number(),
            lastUpdatedBy: z.string(),
            access: ListDeploymentAliasesProtectionBypassAccess$.outboundSchema,
            scope: ListDeploymentAliasesProtectionBypassAliasesScope$.outboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                lastUpdatedAt: v.lastUpdatedAt,
                lastUpdatedBy: v.lastUpdatedBy,
                access: v.access,
                scope: v.scope,
            };
        });
}

/** @internal */
export namespace ListDeploymentAliasesProtectionBypassScope$ {
    export const inboundSchema = z.nativeEnum(ListDeploymentAliasesProtectionBypassScope);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListDeploymentAliasesProtectionBypass1$ {
    export const inboundSchema: z.ZodType<
        ListDeploymentAliasesProtectionBypass1,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            createdAt: z.number(),
            createdBy: z.string(),
            scope: ListDeploymentAliasesProtectionBypassScope$.inboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                scope: v.scope,
            };
        });

    export type Outbound = {
        createdAt: number;
        createdBy: string;
        scope: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListDeploymentAliasesProtectionBypass1
    > = z
        .object({
            createdAt: z.number(),
            createdBy: z.string(),
            scope: ListDeploymentAliasesProtectionBypassScope$.outboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                createdBy: v.createdBy,
                scope: v.scope,
            };
        });
}

/** @internal */
export namespace ListDeploymentAliasesProtectionBypass$ {
    export const inboundSchema: z.ZodType<
        ListDeploymentAliasesProtectionBypass,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => ListDeploymentAliasesProtectionBypass1$.inboundSchema),
        z.lazy(() => ListDeploymentAliasesProtectionBypass3$.inboundSchema),
        z.lazy(() => ListDeploymentAliasesProtectionBypass4$.inboundSchema),
        z.lazy(() => ListDeploymentAliasesProtectionBypass2$.inboundSchema),
    ]);

    export type Outbound =
        | ListDeploymentAliasesProtectionBypass1$.Outbound
        | ListDeploymentAliasesProtectionBypass3$.Outbound
        | ListDeploymentAliasesProtectionBypass4$.Outbound
        | ListDeploymentAliasesProtectionBypass2$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListDeploymentAliasesProtectionBypass
    > = z.union([
        z.lazy(() => ListDeploymentAliasesProtectionBypass1$.outboundSchema),
        z.lazy(() => ListDeploymentAliasesProtectionBypass3$.outboundSchema),
        z.lazy(() => ListDeploymentAliasesProtectionBypass4$.outboundSchema),
        z.lazy(() => ListDeploymentAliasesProtectionBypass2$.outboundSchema),
    ]);
}

/** @internal */
export namespace ListDeploymentAliasesAliases$ {
    export const inboundSchema: z.ZodType<ListDeploymentAliasesAliases, z.ZodTypeDef, unknown> = z
        .object({
            uid: z.string(),
            alias: z.string(),
            created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            redirect: z.nullable(z.string()).optional(),
            protectionBypass: z
                .record(
                    z.union([
                        z.lazy(() => ListDeploymentAliasesProtectionBypass1$.inboundSchema),
                        z.lazy(() => ListDeploymentAliasesProtectionBypass3$.inboundSchema),
                        z.lazy(() => ListDeploymentAliasesProtectionBypass4$.inboundSchema),
                        z.lazy(() => ListDeploymentAliasesProtectionBypass2$.inboundSchema),
                    ])
                )
                .optional(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                alias: v.alias,
                created: v.created,
                ...(v.redirect === undefined ? null : { redirect: v.redirect }),
                ...(v.protectionBypass === undefined
                    ? null
                    : { protectionBypass: v.protectionBypass }),
            };
        });

    export type Outbound = {
        uid: string;
        alias: string;
        created: string;
        redirect?: string | null | undefined;
        protectionBypass?:
            | Record<
                  string,
                  | ListDeploymentAliasesProtectionBypass1$.Outbound
                  | ListDeploymentAliasesProtectionBypass3$.Outbound
                  | ListDeploymentAliasesProtectionBypass4$.Outbound
                  | ListDeploymentAliasesProtectionBypass2$.Outbound
              >
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListDeploymentAliasesAliases> = z
        .object({
            uid: z.string(),
            alias: z.string(),
            created: z.date().transform((v) => v.toISOString()),
            redirect: z.nullable(z.string()).optional(),
            protectionBypass: z
                .record(
                    z.union([
                        z.lazy(() => ListDeploymentAliasesProtectionBypass1$.outboundSchema),
                        z.lazy(() => ListDeploymentAliasesProtectionBypass3$.outboundSchema),
                        z.lazy(() => ListDeploymentAliasesProtectionBypass4$.outboundSchema),
                        z.lazy(() => ListDeploymentAliasesProtectionBypass2$.outboundSchema),
                    ])
                )
                .optional(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                alias: v.alias,
                created: v.created,
                ...(v.redirect === undefined ? null : { redirect: v.redirect }),
                ...(v.protectionBypass === undefined
                    ? null
                    : { protectionBypass: v.protectionBypass }),
            };
        });
}

/** @internal */
export namespace ListDeploymentAliasesResponseBody$ {
    export const inboundSchema: z.ZodType<
        ListDeploymentAliasesResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            aliases: z.array(z.lazy(() => ListDeploymentAliasesAliases$.inboundSchema)),
        })
        .transform((v) => {
            return {
                aliases: v.aliases,
            };
        });

    export type Outbound = {
        aliases: Array<ListDeploymentAliasesAliases$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListDeploymentAliasesResponseBody
    > = z
        .object({
            aliases: z.array(z.lazy(() => ListDeploymentAliasesAliases$.outboundSchema)),
        })
        .transform((v) => {
            return {
                aliases: v.aliases,
            };
        });
}
