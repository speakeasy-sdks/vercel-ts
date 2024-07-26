/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../types/enums.js";
import {
    Pagination,
    Pagination$inboundSchema,
    Pagination$Outbound,
    Pagination$outboundSchema,
} from "./pagination.js";
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

export const ListAliasesProtectionBypassAliasesResponseScope = {
    EmailInvite: "email_invite",
} as const;
export type ListAliasesProtectionBypassAliasesResponseScope = ClosedEnum<
    typeof ListAliasesProtectionBypassAliasesResponseScope
>;

/**
 * The protection bypass for the alias
 */
export type ListAliasesProtectionBypass4 = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: ListAliasesProtectionBypassAliasesResponseScope;
};

export const ListAliasesProtectionBypassAliasesScope = {
    AliasProtectionOverride: "alias-protection-override",
} as const;
export type ListAliasesProtectionBypassAliasesScope = ClosedEnum<
    typeof ListAliasesProtectionBypassAliasesScope
>;

/**
 * The protection bypass for the alias
 */
export type ListAliasesProtectionBypass3 = {
    createdAt: number;
    createdBy: string;
    scope: ListAliasesProtectionBypassAliasesScope;
};

export const ProtectionBypassAccess = {
    Requested: "requested",
    Granted: "granted",
} as const;
export type ProtectionBypassAccess = ClosedEnum<typeof ProtectionBypassAccess>;

export const ListAliasesProtectionBypassScope = {
    User: "user",
} as const;
export type ListAliasesProtectionBypassScope = ClosedEnum<typeof ListAliasesProtectionBypassScope>;

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

export const ListAliasesProtectionBypassAliasesResponse200Scope = {
    ShareableLink: "shareable-link",
} as const;
export type ListAliasesProtectionBypassAliasesResponse200Scope = ClosedEnum<
    typeof ListAliasesProtectionBypassAliasesResponse200Scope
>;

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
        | {
              [k: string]:
                  | ListAliasesProtectionBypass1
                  | ListAliasesProtectionBypass3
                  | ListAliasesProtectionBypass4
                  | ListAliasesProtectionBypass2;
          }
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
export const Domain$inboundSchema: z.ZodType<Domain, z.ZodTypeDef, unknown> = z.union([
    z.array(z.string()),
    z.string(),
]);

/** @internal */
export type Domain$Outbound = Array<string> | string;

/** @internal */
export const Domain$outboundSchema: z.ZodType<Domain$Outbound, z.ZodTypeDef, Domain> = z.union([
    z.array(z.string()),
    z.string(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Domain$ {
    /** @deprecated use `Domain$inboundSchema` instead. */
    export const inboundSchema = Domain$inboundSchema;
    /** @deprecated use `Domain$outboundSchema` instead. */
    export const outboundSchema = Domain$outboundSchema;
    /** @deprecated use `Domain$Outbound` instead. */
    export type Outbound = Domain$Outbound;
}

/** @internal */
export const ListAliasesRequest$inboundSchema: z.ZodType<
    ListAliasesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    domain: z.union([z.array(z.string()), z.string()]).optional(),
    from: z.number().optional(),
    limit: z.number().optional(),
    projectId: z.string().optional(),
    since: z.number().optional(),
    until: z.number().optional(),
    rollbackDeploymentId: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type ListAliasesRequest$Outbound = {
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

/** @internal */
export const ListAliasesRequest$outboundSchema: z.ZodType<
    ListAliasesRequest$Outbound,
    z.ZodTypeDef,
    ListAliasesRequest
> = z.object({
    domain: z.union([z.array(z.string()), z.string()]).optional(),
    from: z.number().optional(),
    limit: z.number().optional(),
    projectId: z.string().optional(),
    since: z.number().optional(),
    until: z.number().optional(),
    rollbackDeploymentId: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesRequest$ {
    /** @deprecated use `ListAliasesRequest$inboundSchema` instead. */
    export const inboundSchema = ListAliasesRequest$inboundSchema;
    /** @deprecated use `ListAliasesRequest$outboundSchema` instead. */
    export const outboundSchema = ListAliasesRequest$outboundSchema;
    /** @deprecated use `ListAliasesRequest$Outbound` instead. */
    export type Outbound = ListAliasesRequest$Outbound;
}

/** @internal */
export const ListAliasesCreator$inboundSchema: z.ZodType<
    ListAliasesCreator,
    z.ZodTypeDef,
    unknown
> = z.object({
    uid: z.string(),
    email: z.string(),
    username: z.string(),
});

/** @internal */
export type ListAliasesCreator$Outbound = {
    uid: string;
    email: string;
    username: string;
};

/** @internal */
export const ListAliasesCreator$outboundSchema: z.ZodType<
    ListAliasesCreator$Outbound,
    z.ZodTypeDef,
    ListAliasesCreator
> = z.object({
    uid: z.string(),
    email: z.string(),
    username: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesCreator$ {
    /** @deprecated use `ListAliasesCreator$inboundSchema` instead. */
    export const inboundSchema = ListAliasesCreator$inboundSchema;
    /** @deprecated use `ListAliasesCreator$outboundSchema` instead. */
    export const outboundSchema = ListAliasesCreator$outboundSchema;
    /** @deprecated use `ListAliasesCreator$Outbound` instead. */
    export type Outbound = ListAliasesCreator$Outbound;
}

/** @internal */
export const ListAliasesDeployment$inboundSchema: z.ZodType<
    ListAliasesDeployment,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    url: z.string(),
    meta: z.string().optional(),
});

/** @internal */
export type ListAliasesDeployment$Outbound = {
    id: string;
    url: string;
    meta?: string | undefined;
};

/** @internal */
export const ListAliasesDeployment$outboundSchema: z.ZodType<
    ListAliasesDeployment$Outbound,
    z.ZodTypeDef,
    ListAliasesDeployment
> = z.object({
    id: z.string(),
    url: z.string(),
    meta: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesDeployment$ {
    /** @deprecated use `ListAliasesDeployment$inboundSchema` instead. */
    export const inboundSchema = ListAliasesDeployment$inboundSchema;
    /** @deprecated use `ListAliasesDeployment$outboundSchema` instead. */
    export const outboundSchema = ListAliasesDeployment$outboundSchema;
    /** @deprecated use `ListAliasesDeployment$Outbound` instead. */
    export type Outbound = ListAliasesDeployment$Outbound;
}

/** @internal */
export const ListAliasesProtectionBypassAliasesResponseScope$inboundSchema: z.ZodNativeEnum<
    typeof ListAliasesProtectionBypassAliasesResponseScope
> = z.nativeEnum(ListAliasesProtectionBypassAliasesResponseScope);

/** @internal */
export const ListAliasesProtectionBypassAliasesResponseScope$outboundSchema: z.ZodNativeEnum<
    typeof ListAliasesProtectionBypassAliasesResponseScope
> = ListAliasesProtectionBypassAliasesResponseScope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesProtectionBypassAliasesResponseScope$ {
    /** @deprecated use `ListAliasesProtectionBypassAliasesResponseScope$inboundSchema` instead. */
    export const inboundSchema = ListAliasesProtectionBypassAliasesResponseScope$inboundSchema;
    /** @deprecated use `ListAliasesProtectionBypassAliasesResponseScope$outboundSchema` instead. */
    export const outboundSchema = ListAliasesProtectionBypassAliasesResponseScope$outboundSchema;
}

/** @internal */
export const ListAliasesProtectionBypass4$inboundSchema: z.ZodType<
    ListAliasesProtectionBypass4,
    z.ZodTypeDef,
    unknown
> = z.object({
    createdAt: z.number(),
    lastUpdatedAt: z.number(),
    lastUpdatedBy: z.string(),
    scope: ListAliasesProtectionBypassAliasesResponseScope$inboundSchema,
});

/** @internal */
export type ListAliasesProtectionBypass4$Outbound = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    scope: string;
};

/** @internal */
export const ListAliasesProtectionBypass4$outboundSchema: z.ZodType<
    ListAliasesProtectionBypass4$Outbound,
    z.ZodTypeDef,
    ListAliasesProtectionBypass4
> = z.object({
    createdAt: z.number(),
    lastUpdatedAt: z.number(),
    lastUpdatedBy: z.string(),
    scope: ListAliasesProtectionBypassAliasesResponseScope$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesProtectionBypass4$ {
    /** @deprecated use `ListAliasesProtectionBypass4$inboundSchema` instead. */
    export const inboundSchema = ListAliasesProtectionBypass4$inboundSchema;
    /** @deprecated use `ListAliasesProtectionBypass4$outboundSchema` instead. */
    export const outboundSchema = ListAliasesProtectionBypass4$outboundSchema;
    /** @deprecated use `ListAliasesProtectionBypass4$Outbound` instead. */
    export type Outbound = ListAliasesProtectionBypass4$Outbound;
}

/** @internal */
export const ListAliasesProtectionBypassAliasesScope$inboundSchema: z.ZodNativeEnum<
    typeof ListAliasesProtectionBypassAliasesScope
> = z.nativeEnum(ListAliasesProtectionBypassAliasesScope);

/** @internal */
export const ListAliasesProtectionBypassAliasesScope$outboundSchema: z.ZodNativeEnum<
    typeof ListAliasesProtectionBypassAliasesScope
> = ListAliasesProtectionBypassAliasesScope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesProtectionBypassAliasesScope$ {
    /** @deprecated use `ListAliasesProtectionBypassAliasesScope$inboundSchema` instead. */
    export const inboundSchema = ListAliasesProtectionBypassAliasesScope$inboundSchema;
    /** @deprecated use `ListAliasesProtectionBypassAliasesScope$outboundSchema` instead. */
    export const outboundSchema = ListAliasesProtectionBypassAliasesScope$outboundSchema;
}

/** @internal */
export const ListAliasesProtectionBypass3$inboundSchema: z.ZodType<
    ListAliasesProtectionBypass3,
    z.ZodTypeDef,
    unknown
> = z.object({
    createdAt: z.number(),
    createdBy: z.string(),
    scope: ListAliasesProtectionBypassAliasesScope$inboundSchema,
});

/** @internal */
export type ListAliasesProtectionBypass3$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: string;
};

/** @internal */
export const ListAliasesProtectionBypass3$outboundSchema: z.ZodType<
    ListAliasesProtectionBypass3$Outbound,
    z.ZodTypeDef,
    ListAliasesProtectionBypass3
> = z.object({
    createdAt: z.number(),
    createdBy: z.string(),
    scope: ListAliasesProtectionBypassAliasesScope$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesProtectionBypass3$ {
    /** @deprecated use `ListAliasesProtectionBypass3$inboundSchema` instead. */
    export const inboundSchema = ListAliasesProtectionBypass3$inboundSchema;
    /** @deprecated use `ListAliasesProtectionBypass3$outboundSchema` instead. */
    export const outboundSchema = ListAliasesProtectionBypass3$outboundSchema;
    /** @deprecated use `ListAliasesProtectionBypass3$Outbound` instead. */
    export type Outbound = ListAliasesProtectionBypass3$Outbound;
}

/** @internal */
export const ProtectionBypassAccess$inboundSchema: z.ZodNativeEnum<typeof ProtectionBypassAccess> =
    z.nativeEnum(ProtectionBypassAccess);

/** @internal */
export const ProtectionBypassAccess$outboundSchema: z.ZodNativeEnum<typeof ProtectionBypassAccess> =
    ProtectionBypassAccess$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProtectionBypassAccess$ {
    /** @deprecated use `ProtectionBypassAccess$inboundSchema` instead. */
    export const inboundSchema = ProtectionBypassAccess$inboundSchema;
    /** @deprecated use `ProtectionBypassAccess$outboundSchema` instead. */
    export const outboundSchema = ProtectionBypassAccess$outboundSchema;
}

/** @internal */
export const ListAliasesProtectionBypassScope$inboundSchema: z.ZodNativeEnum<
    typeof ListAliasesProtectionBypassScope
> = z.nativeEnum(ListAliasesProtectionBypassScope);

/** @internal */
export const ListAliasesProtectionBypassScope$outboundSchema: z.ZodNativeEnum<
    typeof ListAliasesProtectionBypassScope
> = ListAliasesProtectionBypassScope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesProtectionBypassScope$ {
    /** @deprecated use `ListAliasesProtectionBypassScope$inboundSchema` instead. */
    export const inboundSchema = ListAliasesProtectionBypassScope$inboundSchema;
    /** @deprecated use `ListAliasesProtectionBypassScope$outboundSchema` instead. */
    export const outboundSchema = ListAliasesProtectionBypassScope$outboundSchema;
}

/** @internal */
export const ListAliasesProtectionBypass2$inboundSchema: z.ZodType<
    ListAliasesProtectionBypass2,
    z.ZodTypeDef,
    unknown
> = z.object({
    createdAt: z.number(),
    lastUpdatedAt: z.number(),
    lastUpdatedBy: z.string(),
    access: ProtectionBypassAccess$inboundSchema,
    scope: ListAliasesProtectionBypassScope$inboundSchema,
});

/** @internal */
export type ListAliasesProtectionBypass2$Outbound = {
    createdAt: number;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
    access: string;
    scope: string;
};

/** @internal */
export const ListAliasesProtectionBypass2$outboundSchema: z.ZodType<
    ListAliasesProtectionBypass2$Outbound,
    z.ZodTypeDef,
    ListAliasesProtectionBypass2
> = z.object({
    createdAt: z.number(),
    lastUpdatedAt: z.number(),
    lastUpdatedBy: z.string(),
    access: ProtectionBypassAccess$outboundSchema,
    scope: ListAliasesProtectionBypassScope$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesProtectionBypass2$ {
    /** @deprecated use `ListAliasesProtectionBypass2$inboundSchema` instead. */
    export const inboundSchema = ListAliasesProtectionBypass2$inboundSchema;
    /** @deprecated use `ListAliasesProtectionBypass2$outboundSchema` instead. */
    export const outboundSchema = ListAliasesProtectionBypass2$outboundSchema;
    /** @deprecated use `ListAliasesProtectionBypass2$Outbound` instead. */
    export type Outbound = ListAliasesProtectionBypass2$Outbound;
}

/** @internal */
export const ListAliasesProtectionBypassAliasesResponse200Scope$inboundSchema: z.ZodNativeEnum<
    typeof ListAliasesProtectionBypassAliasesResponse200Scope
> = z.nativeEnum(ListAliasesProtectionBypassAliasesResponse200Scope);

/** @internal */
export const ListAliasesProtectionBypassAliasesResponse200Scope$outboundSchema: z.ZodNativeEnum<
    typeof ListAliasesProtectionBypassAliasesResponse200Scope
> = ListAliasesProtectionBypassAliasesResponse200Scope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesProtectionBypassAliasesResponse200Scope$ {
    /** @deprecated use `ListAliasesProtectionBypassAliasesResponse200Scope$inboundSchema` instead. */
    export const inboundSchema = ListAliasesProtectionBypassAliasesResponse200Scope$inboundSchema;
    /** @deprecated use `ListAliasesProtectionBypassAliasesResponse200Scope$outboundSchema` instead. */
    export const outboundSchema = ListAliasesProtectionBypassAliasesResponse200Scope$outboundSchema;
}

/** @internal */
export const ListAliasesProtectionBypass1$inboundSchema: z.ZodType<
    ListAliasesProtectionBypass1,
    z.ZodTypeDef,
    unknown
> = z.object({
    createdAt: z.number(),
    createdBy: z.string(),
    scope: ListAliasesProtectionBypassAliasesResponse200Scope$inboundSchema,
});

/** @internal */
export type ListAliasesProtectionBypass1$Outbound = {
    createdAt: number;
    createdBy: string;
    scope: string;
};

/** @internal */
export const ListAliasesProtectionBypass1$outboundSchema: z.ZodType<
    ListAliasesProtectionBypass1$Outbound,
    z.ZodTypeDef,
    ListAliasesProtectionBypass1
> = z.object({
    createdAt: z.number(),
    createdBy: z.string(),
    scope: ListAliasesProtectionBypassAliasesResponse200Scope$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesProtectionBypass1$ {
    /** @deprecated use `ListAliasesProtectionBypass1$inboundSchema` instead. */
    export const inboundSchema = ListAliasesProtectionBypass1$inboundSchema;
    /** @deprecated use `ListAliasesProtectionBypass1$outboundSchema` instead. */
    export const outboundSchema = ListAliasesProtectionBypass1$outboundSchema;
    /** @deprecated use `ListAliasesProtectionBypass1$Outbound` instead. */
    export type Outbound = ListAliasesProtectionBypass1$Outbound;
}

/** @internal */
export const ListAliasesProtectionBypass$inboundSchema: z.ZodType<
    ListAliasesProtectionBypass,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => ListAliasesProtectionBypass1$inboundSchema),
    z.lazy(() => ListAliasesProtectionBypass3$inboundSchema),
    z.lazy(() => ListAliasesProtectionBypass4$inboundSchema),
    z.lazy(() => ListAliasesProtectionBypass2$inboundSchema),
]);

/** @internal */
export type ListAliasesProtectionBypass$Outbound =
    | ListAliasesProtectionBypass1$Outbound
    | ListAliasesProtectionBypass3$Outbound
    | ListAliasesProtectionBypass4$Outbound
    | ListAliasesProtectionBypass2$Outbound;

/** @internal */
export const ListAliasesProtectionBypass$outboundSchema: z.ZodType<
    ListAliasesProtectionBypass$Outbound,
    z.ZodTypeDef,
    ListAliasesProtectionBypass
> = z.union([
    z.lazy(() => ListAliasesProtectionBypass1$outboundSchema),
    z.lazy(() => ListAliasesProtectionBypass3$outboundSchema),
    z.lazy(() => ListAliasesProtectionBypass4$outboundSchema),
    z.lazy(() => ListAliasesProtectionBypass2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesProtectionBypass$ {
    /** @deprecated use `ListAliasesProtectionBypass$inboundSchema` instead. */
    export const inboundSchema = ListAliasesProtectionBypass$inboundSchema;
    /** @deprecated use `ListAliasesProtectionBypass$outboundSchema` instead. */
    export const outboundSchema = ListAliasesProtectionBypass$outboundSchema;
    /** @deprecated use `ListAliasesProtectionBypass$Outbound` instead. */
    export type Outbound = ListAliasesProtectionBypass$Outbound;
}

/** @internal */
export const ListAliasesAliases$inboundSchema: z.ZodType<
    ListAliasesAliases,
    z.ZodTypeDef,
    unknown
> = z.object({
    alias: z.string(),
    created: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    createdAt: z.number().optional(),
    creator: z.lazy(() => ListAliasesCreator$inboundSchema).optional(),
    deletedAt: z.number().optional(),
    deployment: z.lazy(() => ListAliasesDeployment$inboundSchema).optional(),
    deploymentId: z.nullable(z.string()),
    projectId: z.nullable(z.string()),
    redirect: z.nullable(z.string()).optional(),
    redirectStatusCode: z.nullable(z.number()).optional(),
    uid: z.string(),
    updatedAt: z.number().optional(),
    protectionBypass: z
        .record(
            z.union([
                z.lazy(() => ListAliasesProtectionBypass1$inboundSchema),
                z.lazy(() => ListAliasesProtectionBypass3$inboundSchema),
                z.lazy(() => ListAliasesProtectionBypass4$inboundSchema),
                z.lazy(() => ListAliasesProtectionBypass2$inboundSchema),
            ])
        )
        .optional(),
});

/** @internal */
export type ListAliasesAliases$Outbound = {
    alias: string;
    created: string;
    createdAt?: number | undefined;
    creator?: ListAliasesCreator$Outbound | undefined;
    deletedAt?: number | undefined;
    deployment?: ListAliasesDeployment$Outbound | undefined;
    deploymentId: string | null;
    projectId: string | null;
    redirect?: string | null | undefined;
    redirectStatusCode?: number | null | undefined;
    uid: string;
    updatedAt?: number | undefined;
    protectionBypass?:
        | {
              [k: string]:
                  | ListAliasesProtectionBypass1$Outbound
                  | ListAliasesProtectionBypass3$Outbound
                  | ListAliasesProtectionBypass4$Outbound
                  | ListAliasesProtectionBypass2$Outbound;
          }
        | undefined;
};

/** @internal */
export const ListAliasesAliases$outboundSchema: z.ZodType<
    ListAliasesAliases$Outbound,
    z.ZodTypeDef,
    ListAliasesAliases
> = z.object({
    alias: z.string(),
    created: z.date().transform((v) => v.toISOString()),
    createdAt: z.number().optional(),
    creator: z.lazy(() => ListAliasesCreator$outboundSchema).optional(),
    deletedAt: z.number().optional(),
    deployment: z.lazy(() => ListAliasesDeployment$outboundSchema).optional(),
    deploymentId: z.nullable(z.string()),
    projectId: z.nullable(z.string()),
    redirect: z.nullable(z.string()).optional(),
    redirectStatusCode: z.nullable(z.number()).optional(),
    uid: z.string(),
    updatedAt: z.number().optional(),
    protectionBypass: z
        .record(
            z.union([
                z.lazy(() => ListAliasesProtectionBypass1$outboundSchema),
                z.lazy(() => ListAliasesProtectionBypass3$outboundSchema),
                z.lazy(() => ListAliasesProtectionBypass4$outboundSchema),
                z.lazy(() => ListAliasesProtectionBypass2$outboundSchema),
            ])
        )
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesAliases$ {
    /** @deprecated use `ListAliasesAliases$inboundSchema` instead. */
    export const inboundSchema = ListAliasesAliases$inboundSchema;
    /** @deprecated use `ListAliasesAliases$outboundSchema` instead. */
    export const outboundSchema = ListAliasesAliases$outboundSchema;
    /** @deprecated use `ListAliasesAliases$Outbound` instead. */
    export type Outbound = ListAliasesAliases$Outbound;
}

/** @internal */
export const ListAliasesResponseBody$inboundSchema: z.ZodType<
    ListAliasesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    aliases: z.array(z.lazy(() => ListAliasesAliases$inboundSchema)),
    pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListAliasesResponseBody$Outbound = {
    aliases: Array<ListAliasesAliases$Outbound>;
    pagination: Pagination$Outbound;
};

/** @internal */
export const ListAliasesResponseBody$outboundSchema: z.ZodType<
    ListAliasesResponseBody$Outbound,
    z.ZodTypeDef,
    ListAliasesResponseBody
> = z.object({
    aliases: z.array(z.lazy(() => ListAliasesAliases$outboundSchema)),
    pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAliasesResponseBody$ {
    /** @deprecated use `ListAliasesResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAliasesResponseBody$inboundSchema;
    /** @deprecated use `ListAliasesResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAliasesResponseBody$outboundSchema;
    /** @deprecated use `ListAliasesResponseBody$Outbound` instead. */
    export type Outbound = ListAliasesResponseBody$Outbound;
}
