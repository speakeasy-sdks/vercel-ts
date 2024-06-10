/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum Provider {
    Github = "github",
    GithubCustomHost = "github-custom-host",
    Gitlab = "gitlab",
    Bitbucket = "bitbucket",
}

export type GitNamespacesRequest = {
    /**
     * The custom Git host if using a custom Git provider, like GitHub Enterprise Server
     */
    host?: string | undefined;
    provider?: Provider | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export type Id = string | number;

export type GitNamespacesResponseBody = {
    provider: string;
    slug: string;
    id: string | number;
    ownerType: string;
    name?: string | undefined;
    isAccessRestricted?: boolean | undefined;
    installationId?: number | undefined;
    requireReauth?: boolean | undefined;
};

/** @internal */
export namespace Provider$ {
    export const inboundSchema = z.nativeEnum(Provider);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GitNamespacesRequest$ {
    export const inboundSchema: z.ZodType<GitNamespacesRequest, z.ZodTypeDef, unknown> = z.object({
        host: z.string().optional(),
        provider: Provider$.inboundSchema.optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });

    export type Outbound = {
        host?: string | undefined;
        provider?: string | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GitNamespacesRequest> = z.object(
        {
            host: z.string().optional(),
            provider: Provider$.outboundSchema.optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        }
    );
}

/** @internal */
export namespace Id$ {
    export const inboundSchema: z.ZodType<Id, z.ZodTypeDef, unknown> = z.union([
        z.string(),
        z.number(),
    ]);

    export type Outbound = string | number;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Id> = z.union([
        z.string(),
        z.number(),
    ]);
}

/** @internal */
export namespace GitNamespacesResponseBody$ {
    export const inboundSchema: z.ZodType<GitNamespacesResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            provider: z.string(),
            slug: z.string(),
            id: z.union([z.string(), z.number()]),
            ownerType: z.string(),
            name: z.string().optional(),
            isAccessRestricted: z.boolean().optional(),
            installationId: z.number().optional(),
            requireReauth: z.boolean().optional(),
        });

    export type Outbound = {
        provider: string;
        slug: string;
        id: string | number;
        ownerType: string;
        name?: string | undefined;
        isAccessRestricted?: boolean | undefined;
        installationId?: number | undefined;
        requireReauth?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GitNamespacesResponseBody> =
        z.object({
            provider: z.string(),
            slug: z.string(),
            id: z.union([z.string(), z.number()]),
            ownerType: z.string(),
            name: z.string().optional(),
            isAccessRestricted: z.boolean().optional(),
            installationId: z.number().optional(),
            requireReauth: z.boolean().optional(),
        });
}
