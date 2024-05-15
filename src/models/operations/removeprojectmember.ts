/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type RemoveProjectMemberRequest = {
    /**
     * The ID or name of the Project.
     */
    idOrName: string;
    /**
     * The user ID of the member.
     */
    uid: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export type RemoveProjectMemberResponseBody = {
    id: string;
};

export type RemoveProjectMemberResponse = {
    httpMeta: components.HTTPMetadata;
    object?: RemoveProjectMemberResponseBody | undefined;
};

/** @internal */
export namespace RemoveProjectMemberRequest$ {
    export const inboundSchema: z.ZodType<RemoveProjectMemberRequest, z.ZodTypeDef, unknown> = z
        .object({
            idOrName: z.string(),
            uid: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                uid: v.uid,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        idOrName: string;
        uid: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveProjectMemberRequest> = z
        .object({
            idOrName: z.string(),
            uid: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                uid: v.uid,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace RemoveProjectMemberResponseBody$ {
    export const inboundSchema: z.ZodType<RemoveProjectMemberResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                id: z.string(),
            })
            .transform((v) => {
                return {
                    id: v.id,
                };
            });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RemoveProjectMemberResponseBody
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace RemoveProjectMemberResponse$ {
    export const inboundSchema: z.ZodType<RemoveProjectMemberResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => RemoveProjectMemberResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: RemoveProjectMemberResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveProjectMemberResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => RemoveProjectMemberResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}