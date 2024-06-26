/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Pagination, Pagination$ } from "./pagination";
import * as z from "zod";

/**
 * Get only aliases of the given domain name
 */
export type Domain = Array<string> | string;

export type ListAliasesRequest = {
    /**
     * Get only aliases of the given domain name
     */
    domain?: Array<string> | string | undefined;
    /**
     * Get only aliases created after the provided timestamp
     */
    from?: number | undefined;
    /**
     * Maximum number of aliases to list from a request
     */
    limit?: number | undefined;
    /**
     * Filter aliases from the given `projectId`
     */
    projectId?: string | undefined;
    /**
     * Get aliases created after this JavaScript timestamp
     */
    since?: number | undefined;
    /**
     * Get aliases created before this JavaScript timestamp
     */
    until?: number | undefined;
    /**
     * Get aliases that would be rolled back for the given deployment
     */
    rollbackDeploymentId?: string | undefined;
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
export type ListAliasesCreator = {
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
export type ListAliasesDeployment = {
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

export enum ListAliasesProtectionBypassAliasesResponseScope {
    EmailInvite = "email_invite",
}

/**
 * The protection bypass for the alias
 */
export type ListAliasesProtectionBypass4 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: ListAliasesProtectionBypassAliasesResponseScope;
};

export enum ListAliasesProtectionBypassAliasesScope {
    AliasProtectionOverride = "alias-protection-override",
}

/**
 * The protection bypass for the alias
 */
export type ListAliasesProtectionBypass3 = {
    createdAt: number;
    createdBy: string;
    scope: ListAliasesProtectionBypassAliasesScope;
};

export enum ProtectionBypassAccess {
    Requested = "requested",
    Granted = "granted",
}

export enum ListAliasesProtectionBypassScope {
    User = "user",
}

/**
 * The protection bypass for the alias
 */
export type ListAliasesProtectionBypass2 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    access: ProtectionBypassAccess;
    scope: ListAliasesProtectionBypassScope;
};

export enum ListAliasesProtectionBypassAliasesResponse200Scope {
    ShareableLink = "shareable-link",
}

/**
 * The protection bypass for the alias
 */
export type ListAliasesProtectionBypass1 = {
    createdAt: number;
    createdBy: string;
    scope: ListAliasesProtectionBypassAliasesResponse200Scope;
};

export type ListAliasesProtectionBypass =
    | ListAliasesProtectionBypass1
    | ListAliasesProtectionBypass3
    | ListAliasesProtectionBypass4
    | ListAliasesProtectionBypass2;

export type ListAliasesAliases = {
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
    creator?: ListAliasesCreator | undefined;
    /**
     * The date when the alias was deleted in milliseconds since the UNIX epoch
     */
    deletedAt?: number | undefined;
    /**
     * A map with the deployment ID, URL and metadata
     */
    deployment?: ListAliasesDeployment | undefined;
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
        | Record<
              string,
              | ListAliasesProtectionBypass1
              | ListAliasesProtectionBypass3
              | ListAliasesProtectionBypass4
              | ListAliasesProtectionBypass2
          >
        | undefined;
};

/**
 * The paginated list of aliases
 */
export type ListAliasesResponseBody = {
    aliases: Array<ListAliasesAliases>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};

/** @internal */
export namespace Domain$ {
    export const inboundSchema: z.ZodType<Domain, z.ZodTypeDef, unknown> = z.union([
        z.array(z.string()),
        z.string(),
    ]);

    export type Outbound = Array<string> | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Domain> = z.union([
        z.array(z.string()),
        z.string(),
    ]);
}

/** @internal */
export namespace ListAliasesRequest$ {
    export const inboundSchema: z.ZodType<ListAliasesRequest, z.ZodTypeDef, unknown> = z
        .object({
            domain: z.union([z.array(z.string()), z.string()]).optional(),
            from: z.number().optional(),
            limit: z.number().optional(),
            projectId: z.string().optional(),
            since: z.number().optional(),
            until: z.number().optional(),
            rollbackDeploymentId: z.string().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.from === undefined ? null : { from: v.from }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.projectId === undefined ? null : { projectId: v.projectId }),
                ...(v.since === undefined ? null : { since: v.since }),
                ...(v.until === undefined ? null : { until: v.until }),
                ...(v.rollbackDeploymentId === undefined
                    ? null
                    : { rollbackDeploymentId: v.rollbackDeploymentId }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        domain?: Array<string> | string | undefined;
        from?: number | undefined;
        limit?: number | undefined;
        projectId?: string | undefined;
        since?: number | undefined;
        until?: number | undefined;
        rollbackDeploymentId?: string | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAliasesRequest> = z
        .object({
            domain: z.union([z.array(z.string()), z.string()]).optional(),
            from: z.number().optional(),
            limit: z.number().optional(),
            projectId: z.string().optional(),
            since: z.number().optional(),
            until: z.number().optional(),
            rollbackDeploymentId: z.string().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.from === undefined ? null : { from: v.from }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.projectId === undefined ? null : { projectId: v.projectId }),
                ...(v.since === undefined ? null : { since: v.since }),
                ...(v.until === undefined ? null : { until: v.until }),
                ...(v.rollbackDeploymentId === undefined
                    ? null
                    : { rollbackDeploymentId: v.rollbackDeploymentId }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace ListAliasesCreator$ {
    export const inboundSchema: z.ZodType<ListAliasesCreator, z.ZodTypeDef, unknown> = z
        .object({
            uid: z.string(),
            email: z.string(),
            username: z.string(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                email: v.email,
                username: v.username,
            };
        });

    export type Outbound = {
        uid: string;
        email: string;
        username: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAliasesCreator> = z
        .object({
            uid: z.string(),
            email: z.string(),
            username: z.string(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                email: v.email,
                username: v.username,
            };
        });
}

/** @internal */
export namespace ListAliasesDeployment$ {
    export const inboundSchema: z.ZodType<ListAliasesDeployment, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            url: z.string(),
            meta: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                url: v.url,
                ...(v.meta === undefined ? null : { meta: v.meta }),
            };
        });

    export type Outbound = {
        id: string;
        url: string;
        meta?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAliasesDeployment> = z
        .object({
            id: z.string(),
            url: z.string(),
            meta: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                url: v.url,
                ...(v.meta === undefined ? null : { meta: v.meta }),
            };
        });
}

/** @internal */
export namespace ListAliasesProtectionBypassAliasesResponseScope$ {
    export const inboundSchema = z.nativeEnum(ListAliasesProtectionBypassAliasesResponseScope);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListAliasesProtectionBypass4$ {
    export const inboundSchema: z.ZodType<ListAliasesProtectionBypass4, z.ZodTypeDef, unknown> = z
        .object({
            createdAt: z.number(),
            lastUpdatedAt: z.number(),
            lastUpdatedBy: z.string(),
            scope: ListAliasesProtectionBypassAliasesResponseScope$.inboundSchema,
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAliasesProtectionBypass4> = z
        .object({
            createdAt: z.number(),
            lastUpdatedAt: z.number(),
            lastUpdatedBy: z.string(),
            scope: ListAliasesProtectionBypassAliasesResponseScope$.outboundSchema,
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
export namespace ListAliasesProtectionBypassAliasesScope$ {
    export const inboundSchema = z.nativeEnum(ListAliasesProtectionBypassAliasesScope);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListAliasesProtectionBypass3$ {
    export const inboundSchema: z.ZodType<ListAliasesProtectionBypass3, z.ZodTypeDef, unknown> = z
        .object({
            createdAt: z.number(),
            createdBy: z.string(),
            scope: ListAliasesProtectionBypassAliasesScope$.inboundSchema,
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAliasesProtectionBypass3> = z
        .object({
            createdAt: z.number(),
            createdBy: z.string(),
            scope: ListAliasesProtectionBypassAliasesScope$.outboundSchema,
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
export namespace ProtectionBypassAccess$ {
    export const inboundSchema = z.nativeEnum(ProtectionBypassAccess);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListAliasesProtectionBypassScope$ {
    export const inboundSchema = z.nativeEnum(ListAliasesProtectionBypassScope);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListAliasesProtectionBypass2$ {
    export const inboundSchema: z.ZodType<ListAliasesProtectionBypass2, z.ZodTypeDef, unknown> = z
        .object({
            createdAt: z.number(),
            lastUpdatedAt: z.number(),
            lastUpdatedBy: z.string(),
            access: ProtectionBypassAccess$.inboundSchema,
            scope: ListAliasesProtectionBypassScope$.inboundSchema,
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAliasesProtectionBypass2> = z
        .object({
            createdAt: z.number(),
            lastUpdatedAt: z.number(),
            lastUpdatedBy: z.string(),
            access: ProtectionBypassAccess$.outboundSchema,
            scope: ListAliasesProtectionBypassScope$.outboundSchema,
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
export namespace ListAliasesProtectionBypassAliasesResponse200Scope$ {
    export const inboundSchema = z.nativeEnum(ListAliasesProtectionBypassAliasesResponse200Scope);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ListAliasesProtectionBypass1$ {
    export const inboundSchema: z.ZodType<ListAliasesProtectionBypass1, z.ZodTypeDef, unknown> = z
        .object({
            createdAt: z.number(),
            createdBy: z.string(),
            scope: ListAliasesProtectionBypassAliasesResponse200Scope$.inboundSchema,
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAliasesProtectionBypass1> = z
        .object({
            createdAt: z.number(),
            createdBy: z.string(),
            scope: ListAliasesProtectionBypassAliasesResponse200Scope$.outboundSchema,
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
export namespace ListAliasesProtectionBypass$ {
    export const inboundSchema: z.ZodType<ListAliasesProtectionBypass, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => ListAliasesProtectionBypass1$.inboundSchema),
            z.lazy(() => ListAliasesProtectionBypass3$.inboundSchema),
            z.lazy(() => ListAliasesProtectionBypass4$.inboundSchema),
            z.lazy(() => ListAliasesProtectionBypass2$.inboundSchema),
        ]);

    export type Outbound =
        | ListAliasesProtectionBypass1$.Outbound
        | ListAliasesProtectionBypass3$.Outbound
        | ListAliasesProtectionBypass4$.Outbound
        | ListAliasesProtectionBypass2$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAliasesProtectionBypass> =
        z.union([
            z.lazy(() => ListAliasesProtectionBypass1$.outboundSchema),
            z.lazy(() => ListAliasesProtectionBypass3$.outboundSchema),
            z.lazy(() => ListAliasesProtectionBypass4$.outboundSchema),
            z.lazy(() => ListAliasesProtectionBypass2$.outboundSchema),
        ]);
}

/** @internal */
export namespace ListAliasesAliases$ {
    export const inboundSchema: z.ZodType<ListAliasesAliases, z.ZodTypeDef, unknown> = z
        .object({
            alias: z.string(),
            created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            createdAt: z.number().optional(),
            creator: z.lazy(() => ListAliasesCreator$.inboundSchema).optional(),
            deletedAt: z.number().optional(),
            deployment: z.lazy(() => ListAliasesDeployment$.inboundSchema).optional(),
            deploymentId: z.nullable(z.string()),
            projectId: z.nullable(z.string()),
            redirect: z.nullable(z.string()).optional(),
            redirectStatusCode: z.nullable(z.number()).optional(),
            uid: z.string(),
            updatedAt: z.number().optional(),
            protectionBypass: z
                .record(
                    z.union([
                        z.lazy(() => ListAliasesProtectionBypass1$.inboundSchema),
                        z.lazy(() => ListAliasesProtectionBypass3$.inboundSchema),
                        z.lazy(() => ListAliasesProtectionBypass4$.inboundSchema),
                        z.lazy(() => ListAliasesProtectionBypass2$.inboundSchema),
                    ])
                )
                .optional(),
        })
        .transform((v) => {
            return {
                alias: v.alias,
                created: v.created,
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.creator === undefined ? null : { creator: v.creator }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                ...(v.deployment === undefined ? null : { deployment: v.deployment }),
                deploymentId: v.deploymentId,
                projectId: v.projectId,
                ...(v.redirect === undefined ? null : { redirect: v.redirect }),
                ...(v.redirectStatusCode === undefined
                    ? null
                    : { redirectStatusCode: v.redirectStatusCode }),
                uid: v.uid,
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.protectionBypass === undefined
                    ? null
                    : { protectionBypass: v.protectionBypass }),
            };
        });

    export type Outbound = {
        alias: string;
        created: string;
        createdAt?: number | undefined;
        creator?: ListAliasesCreator$.Outbound | undefined;
        deletedAt?: number | undefined;
        deployment?: ListAliasesDeployment$.Outbound | undefined;
        deploymentId: string | null;
        projectId: string | null;
        redirect?: string | null | undefined;
        redirectStatusCode?: number | null | undefined;
        uid: string;
        updatedAt?: number | undefined;
        protectionBypass?:
            | Record<
                  string,
                  | ListAliasesProtectionBypass1$.Outbound
                  | ListAliasesProtectionBypass3$.Outbound
                  | ListAliasesProtectionBypass4$.Outbound
                  | ListAliasesProtectionBypass2$.Outbound
              >
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAliasesAliases> = z
        .object({
            alias: z.string(),
            created: z.date().transform((v) => v.toISOString()),
            createdAt: z.number().optional(),
            creator: z.lazy(() => ListAliasesCreator$.outboundSchema).optional(),
            deletedAt: z.number().optional(),
            deployment: z.lazy(() => ListAliasesDeployment$.outboundSchema).optional(),
            deploymentId: z.nullable(z.string()),
            projectId: z.nullable(z.string()),
            redirect: z.nullable(z.string()).optional(),
            redirectStatusCode: z.nullable(z.number()).optional(),
            uid: z.string(),
            updatedAt: z.number().optional(),
            protectionBypass: z
                .record(
                    z.union([
                        z.lazy(() => ListAliasesProtectionBypass1$.outboundSchema),
                        z.lazy(() => ListAliasesProtectionBypass3$.outboundSchema),
                        z.lazy(() => ListAliasesProtectionBypass4$.outboundSchema),
                        z.lazy(() => ListAliasesProtectionBypass2$.outboundSchema),
                    ])
                )
                .optional(),
        })
        .transform((v) => {
            return {
                alias: v.alias,
                created: v.created,
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.creator === undefined ? null : { creator: v.creator }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                ...(v.deployment === undefined ? null : { deployment: v.deployment }),
                deploymentId: v.deploymentId,
                projectId: v.projectId,
                ...(v.redirect === undefined ? null : { redirect: v.redirect }),
                ...(v.redirectStatusCode === undefined
                    ? null
                    : { redirectStatusCode: v.redirectStatusCode }),
                uid: v.uid,
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.protectionBypass === undefined
                    ? null
                    : { protectionBypass: v.protectionBypass }),
            };
        });
}

/** @internal */
export namespace ListAliasesResponseBody$ {
    export const inboundSchema: z.ZodType<ListAliasesResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            aliases: z.array(z.lazy(() => ListAliasesAliases$.inboundSchema)),
            pagination: Pagination$.inboundSchema,
        })
        .transform((v) => {
            return {
                aliases: v.aliases,
                pagination: v.pagination,
            };
        });

    export type Outbound = {
        aliases: Array<ListAliasesAliases$.Outbound>;
        pagination: Pagination$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAliasesResponseBody> = z
        .object({
            aliases: z.array(z.lazy(() => ListAliasesAliases$.outboundSchema)),
            pagination: Pagination$.outboundSchema,
        })
        .transform((v) => {
            return {
                aliases: v.aliases,
                pagination: v.pagination,
            };
        });
}
