/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../types/enums.js";
import * as z from "zod";

export const QueryParamProvider = {
    Github: "github",
    GithubCustomHost: "github-custom-host",
    Gitlab: "gitlab",
    Bitbucket: "bitbucket",
} as const;
export type QueryParamProvider = ClosedEnum<typeof QueryParamProvider>;

export type ListGitReposRequest = {
    query?: string | undefined;
    namespaceId?: any | undefined;
    provider?: QueryParamProvider | undefined;
    installationId?: string | undefined;
    /**
     * The custom Git host if using a custom Git provider, like GitHub Enterprise Server
     */
    host?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export const ListGitReposProvider = {
    Github: "github",
    GithubCustomHost: "github-custom-host",
    Gitlab: "gitlab",
    Bitbucket: "bitbucket",
} as const;
export type ListGitReposProvider = ClosedEnum<typeof ListGitReposProvider>;

export type NamespaceId = string | number;

export type GitAccount = {
    provider: ListGitReposProvider;
    namespaceId: string | number | null;
};

export type ListGitReposId = string | number;

export const ListGitReposIntegrationsProvider = {
    Github: "github",
    GithubCustomHost: "github-custom-host",
    Gitlab: "gitlab",
    Bitbucket: "bitbucket",
} as const;
export type ListGitReposIntegrationsProvider = ClosedEnum<typeof ListGitReposIntegrationsProvider>;

export type ListGitReposIntegrationsId = string | number;

export type Owner = {
    id: string | number;
    name: string;
};

export const OwnerType = {
    User: "user",
    Team: "team",
} as const;
export type OwnerType = ClosedEnum<typeof OwnerType>;

export type Repos = {
    id: string | number;
    provider: ListGitReposIntegrationsProvider;
    url: string;
    name: string;
    slug: string;
    namespace: string;
    owner: Owner;
    ownerType: OwnerType;
    private: boolean;
    defaultBranch: string;
    updatedAt: number;
};

export type ListGitReposResponseBody = {
    gitAccount: GitAccount;
    repos: Array<Repos>;
};

/** @internal */
export const QueryParamProvider$inboundSchema: z.ZodNativeEnum<typeof QueryParamProvider> =
    z.nativeEnum(QueryParamProvider);

/** @internal */
export const QueryParamProvider$outboundSchema: z.ZodNativeEnum<typeof QueryParamProvider> =
    QueryParamProvider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamProvider$ {
    /** @deprecated use `QueryParamProvider$inboundSchema` instead. */
    export const inboundSchema = QueryParamProvider$inboundSchema;
    /** @deprecated use `QueryParamProvider$outboundSchema` instead. */
    export const outboundSchema = QueryParamProvider$outboundSchema;
}

/** @internal */
export const ListGitReposRequest$inboundSchema: z.ZodType<
    ListGitReposRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    query: z.string().optional(),
    namespaceId: z.any().optional(),
    provider: QueryParamProvider$inboundSchema.optional(),
    installationId: z.string().optional(),
    host: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type ListGitReposRequest$Outbound = {
    query?: string | undefined;
    namespaceId?: any | undefined;
    provider?: string | undefined;
    installationId?: string | undefined;
    host?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const ListGitReposRequest$outboundSchema: z.ZodType<
    ListGitReposRequest$Outbound,
    z.ZodTypeDef,
    ListGitReposRequest
> = z.object({
    query: z.string().optional(),
    namespaceId: z.any().optional(),
    provider: QueryParamProvider$outboundSchema.optional(),
    installationId: z.string().optional(),
    host: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGitReposRequest$ {
    /** @deprecated use `ListGitReposRequest$inboundSchema` instead. */
    export const inboundSchema = ListGitReposRequest$inboundSchema;
    /** @deprecated use `ListGitReposRequest$outboundSchema` instead. */
    export const outboundSchema = ListGitReposRequest$outboundSchema;
    /** @deprecated use `ListGitReposRequest$Outbound` instead. */
    export type Outbound = ListGitReposRequest$Outbound;
}

/** @internal */
export const ListGitReposProvider$inboundSchema: z.ZodNativeEnum<typeof ListGitReposProvider> =
    z.nativeEnum(ListGitReposProvider);

/** @internal */
export const ListGitReposProvider$outboundSchema: z.ZodNativeEnum<typeof ListGitReposProvider> =
    ListGitReposProvider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGitReposProvider$ {
    /** @deprecated use `ListGitReposProvider$inboundSchema` instead. */
    export const inboundSchema = ListGitReposProvider$inboundSchema;
    /** @deprecated use `ListGitReposProvider$outboundSchema` instead. */
    export const outboundSchema = ListGitReposProvider$outboundSchema;
}

/** @internal */
export const NamespaceId$inboundSchema: z.ZodType<NamespaceId, z.ZodTypeDef, unknown> = z.union([
    z.string(),
    z.number(),
]);

/** @internal */
export type NamespaceId$Outbound = string | number;

/** @internal */
export const NamespaceId$outboundSchema: z.ZodType<
    NamespaceId$Outbound,
    z.ZodTypeDef,
    NamespaceId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NamespaceId$ {
    /** @deprecated use `NamespaceId$inboundSchema` instead. */
    export const inboundSchema = NamespaceId$inboundSchema;
    /** @deprecated use `NamespaceId$outboundSchema` instead. */
    export const outboundSchema = NamespaceId$outboundSchema;
    /** @deprecated use `NamespaceId$Outbound` instead. */
    export type Outbound = NamespaceId$Outbound;
}

/** @internal */
export const GitAccount$inboundSchema: z.ZodType<GitAccount, z.ZodTypeDef, unknown> = z.object({
    provider: ListGitReposProvider$inboundSchema,
    namespaceId: z.nullable(z.union([z.string(), z.number()])),
});

/** @internal */
export type GitAccount$Outbound = {
    provider: string;
    namespaceId: string | number | null;
};

/** @internal */
export const GitAccount$outboundSchema: z.ZodType<GitAccount$Outbound, z.ZodTypeDef, GitAccount> =
    z.object({
        provider: ListGitReposProvider$outboundSchema,
        namespaceId: z.nullable(z.union([z.string(), z.number()])),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GitAccount$ {
    /** @deprecated use `GitAccount$inboundSchema` instead. */
    export const inboundSchema = GitAccount$inboundSchema;
    /** @deprecated use `GitAccount$outboundSchema` instead. */
    export const outboundSchema = GitAccount$outboundSchema;
    /** @deprecated use `GitAccount$Outbound` instead. */
    export type Outbound = GitAccount$Outbound;
}

/** @internal */
export const ListGitReposId$inboundSchema: z.ZodType<ListGitReposId, z.ZodTypeDef, unknown> =
    z.union([z.string(), z.number()]);

/** @internal */
export type ListGitReposId$Outbound = string | number;

/** @internal */
export const ListGitReposId$outboundSchema: z.ZodType<
    ListGitReposId$Outbound,
    z.ZodTypeDef,
    ListGitReposId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGitReposId$ {
    /** @deprecated use `ListGitReposId$inboundSchema` instead. */
    export const inboundSchema = ListGitReposId$inboundSchema;
    /** @deprecated use `ListGitReposId$outboundSchema` instead. */
    export const outboundSchema = ListGitReposId$outboundSchema;
    /** @deprecated use `ListGitReposId$Outbound` instead. */
    export type Outbound = ListGitReposId$Outbound;
}

/** @internal */
export const ListGitReposIntegrationsProvider$inboundSchema: z.ZodNativeEnum<
    typeof ListGitReposIntegrationsProvider
> = z.nativeEnum(ListGitReposIntegrationsProvider);

/** @internal */
export const ListGitReposIntegrationsProvider$outboundSchema: z.ZodNativeEnum<
    typeof ListGitReposIntegrationsProvider
> = ListGitReposIntegrationsProvider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGitReposIntegrationsProvider$ {
    /** @deprecated use `ListGitReposIntegrationsProvider$inboundSchema` instead. */
    export const inboundSchema = ListGitReposIntegrationsProvider$inboundSchema;
    /** @deprecated use `ListGitReposIntegrationsProvider$outboundSchema` instead. */
    export const outboundSchema = ListGitReposIntegrationsProvider$outboundSchema;
}

/** @internal */
export const ListGitReposIntegrationsId$inboundSchema: z.ZodType<
    ListGitReposIntegrationsId,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.number()]);

/** @internal */
export type ListGitReposIntegrationsId$Outbound = string | number;

/** @internal */
export const ListGitReposIntegrationsId$outboundSchema: z.ZodType<
    ListGitReposIntegrationsId$Outbound,
    z.ZodTypeDef,
    ListGitReposIntegrationsId
> = z.union([z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGitReposIntegrationsId$ {
    /** @deprecated use `ListGitReposIntegrationsId$inboundSchema` instead. */
    export const inboundSchema = ListGitReposIntegrationsId$inboundSchema;
    /** @deprecated use `ListGitReposIntegrationsId$outboundSchema` instead. */
    export const outboundSchema = ListGitReposIntegrationsId$outboundSchema;
    /** @deprecated use `ListGitReposIntegrationsId$Outbound` instead. */
    export type Outbound = ListGitReposIntegrationsId$Outbound;
}

/** @internal */
export const Owner$inboundSchema: z.ZodType<Owner, z.ZodTypeDef, unknown> = z.object({
    id: z.union([z.string(), z.number()]),
    name: z.string(),
});

/** @internal */
export type Owner$Outbound = {
    id: string | number;
    name: string;
};

/** @internal */
export const Owner$outboundSchema: z.ZodType<Owner$Outbound, z.ZodTypeDef, Owner> = z.object({
    id: z.union([z.string(), z.number()]),
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Owner$ {
    /** @deprecated use `Owner$inboundSchema` instead. */
    export const inboundSchema = Owner$inboundSchema;
    /** @deprecated use `Owner$outboundSchema` instead. */
    export const outboundSchema = Owner$outboundSchema;
    /** @deprecated use `Owner$Outbound` instead. */
    export type Outbound = Owner$Outbound;
}

/** @internal */
export const OwnerType$inboundSchema: z.ZodNativeEnum<typeof OwnerType> = z.nativeEnum(OwnerType);

/** @internal */
export const OwnerType$outboundSchema: z.ZodNativeEnum<typeof OwnerType> = OwnerType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OwnerType$ {
    /** @deprecated use `OwnerType$inboundSchema` instead. */
    export const inboundSchema = OwnerType$inboundSchema;
    /** @deprecated use `OwnerType$outboundSchema` instead. */
    export const outboundSchema = OwnerType$outboundSchema;
}

/** @internal */
export const Repos$inboundSchema: z.ZodType<Repos, z.ZodTypeDef, unknown> = z.object({
    id: z.union([z.string(), z.number()]),
    provider: ListGitReposIntegrationsProvider$inboundSchema,
    url: z.string(),
    name: z.string(),
    slug: z.string(),
    namespace: z.string(),
    owner: z.lazy(() => Owner$inboundSchema),
    ownerType: OwnerType$inboundSchema,
    private: z.boolean(),
    defaultBranch: z.string(),
    updatedAt: z.number(),
});

/** @internal */
export type Repos$Outbound = {
    id: string | number;
    provider: string;
    url: string;
    name: string;
    slug: string;
    namespace: string;
    owner: Owner$Outbound;
    ownerType: string;
    private: boolean;
    defaultBranch: string;
    updatedAt: number;
};

/** @internal */
export const Repos$outboundSchema: z.ZodType<Repos$Outbound, z.ZodTypeDef, Repos> = z.object({
    id: z.union([z.string(), z.number()]),
    provider: ListGitReposIntegrationsProvider$outboundSchema,
    url: z.string(),
    name: z.string(),
    slug: z.string(),
    namespace: z.string(),
    owner: z.lazy(() => Owner$outboundSchema),
    ownerType: OwnerType$outboundSchema,
    private: z.boolean(),
    defaultBranch: z.string(),
    updatedAt: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Repos$ {
    /** @deprecated use `Repos$inboundSchema` instead. */
    export const inboundSchema = Repos$inboundSchema;
    /** @deprecated use `Repos$outboundSchema` instead. */
    export const outboundSchema = Repos$outboundSchema;
    /** @deprecated use `Repos$Outbound` instead. */
    export type Outbound = Repos$Outbound;
}

/** @internal */
export const ListGitReposResponseBody$inboundSchema: z.ZodType<
    ListGitReposResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    gitAccount: z.lazy(() => GitAccount$inboundSchema),
    repos: z.array(z.lazy(() => Repos$inboundSchema)),
});

/** @internal */
export type ListGitReposResponseBody$Outbound = {
    gitAccount: GitAccount$Outbound;
    repos: Array<Repos$Outbound>;
};

/** @internal */
export const ListGitReposResponseBody$outboundSchema: z.ZodType<
    ListGitReposResponseBody$Outbound,
    z.ZodTypeDef,
    ListGitReposResponseBody
> = z.object({
    gitAccount: z.lazy(() => GitAccount$outboundSchema),
    repos: z.array(z.lazy(() => Repos$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGitReposResponseBody$ {
    /** @deprecated use `ListGitReposResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListGitReposResponseBody$inboundSchema;
    /** @deprecated use `ListGitReposResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListGitReposResponseBody$outboundSchema;
    /** @deprecated use `ListGitReposResponseBody$Outbound` instead. */
    export type Outbound = ListGitReposResponseBody$Outbound;
}
