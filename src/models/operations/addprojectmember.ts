/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * The project role of the member that will be added.
 */
export enum AddProjectMemberRequestBodyRole {
    Admin = "ADMIN",
    ProjectDeveloper = "PROJECT_DEVELOPER",
    ProjectViewer = "PROJECT_VIEWER",
}

export type AddProjectMemberRequestBody3 = {
    /**
     * The ID of the team member that should be added to this project.
     */
    uid?: string | undefined;
    /**
     * The username of the team member that should be added to this project.
     */
    username?: string | undefined;
    /**
     * The email of the team member that should be added to this project.
     */
    email: string;
    /**
     * The project role of the member that will be added.
     */
    role: AddProjectMemberRequestBodyRole;
};

/**
 * The project role of the member that will be added.
 */
export enum RequestBodyRole {
    Admin = "ADMIN",
    ProjectDeveloper = "PROJECT_DEVELOPER",
    ProjectViewer = "PROJECT_VIEWER",
}

export type AddProjectMemberRequestBody2 = {
    /**
     * The ID of the team member that should be added to this project.
     */
    uid?: string | undefined;
    /**
     * The username of the team member that should be added to this project.
     */
    username: string;
    /**
     * The email of the team member that should be added to this project.
     */
    email?: string | undefined;
    /**
     * The project role of the member that will be added.
     */
    role: RequestBodyRole;
};

/**
 * The project role of the member that will be added.
 */
export enum AddProjectMemberRequestBodyProjectMembersRole {
    Admin = "ADMIN",
    ProjectDeveloper = "PROJECT_DEVELOPER",
    ProjectViewer = "PROJECT_VIEWER",
}

export type AddProjectMemberRequestBody1 = {
    /**
     * The ID of the team member that should be added to this project.
     */
    uid: string;
    /**
     * The username of the team member that should be added to this project.
     */
    username?: string | undefined;
    /**
     * The email of the team member that should be added to this project.
     */
    email?: string | undefined;
    /**
     * The project role of the member that will be added.
     */
    role: AddProjectMemberRequestBodyProjectMembersRole;
};

export type AddProjectMemberRequestBody =
    | AddProjectMemberRequestBody1
    | AddProjectMemberRequestBody2
    | AddProjectMemberRequestBody3;

export type AddProjectMemberRequest = {
    /**
     * The ID or name of the Project.
     */
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?:
        | AddProjectMemberRequestBody1
        | AddProjectMemberRequestBody2
        | AddProjectMemberRequestBody3
        | undefined;
};

/**
 * Responds with the project ID on success.
 */
export type AddProjectMemberResponseBody = {
    id: string;
};

export type AddProjectMemberResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Responds with the project ID on success.
     */
    object?: AddProjectMemberResponseBody | undefined;
};

/** @internal */
export const AddProjectMemberRequestBodyRole$: z.ZodNativeEnum<
    typeof AddProjectMemberRequestBodyRole
> = z.nativeEnum(AddProjectMemberRequestBodyRole);

/** @internal */
export namespace AddProjectMemberRequestBody3$ {
    export const inboundSchema: z.ZodType<AddProjectMemberRequestBody3, z.ZodTypeDef, unknown> = z
        .object({
            uid: z.string().optional(),
            username: z.string().optional(),
            email: z.string(),
            role: AddProjectMemberRequestBodyRole$,
        })
        .transform((v) => {
            return {
                ...(v.uid === undefined ? null : { uid: v.uid }),
                ...(v.username === undefined ? null : { username: v.username }),
                email: v.email,
                role: v.role,
            };
        });

    export type Outbound = {
        uid?: string | undefined;
        username?: string | undefined;
        email: string;
        role: AddProjectMemberRequestBodyRole;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberRequestBody3> = z
        .object({
            uid: z.string().optional(),
            username: z.string().optional(),
            email: z.string(),
            role: AddProjectMemberRequestBodyRole$,
        })
        .transform((v) => {
            return {
                ...(v.uid === undefined ? null : { uid: v.uid }),
                ...(v.username === undefined ? null : { username: v.username }),
                email: v.email,
                role: v.role,
            };
        });
}

/** @internal */
export const RequestBodyRole$: z.ZodNativeEnum<typeof RequestBodyRole> =
    z.nativeEnum(RequestBodyRole);

/** @internal */
export namespace AddProjectMemberRequestBody2$ {
    export const inboundSchema: z.ZodType<AddProjectMemberRequestBody2, z.ZodTypeDef, unknown> = z
        .object({
            uid: z.string().optional(),
            username: z.string(),
            email: z.string().optional(),
            role: RequestBodyRole$,
        })
        .transform((v) => {
            return {
                ...(v.uid === undefined ? null : { uid: v.uid }),
                username: v.username,
                ...(v.email === undefined ? null : { email: v.email }),
                role: v.role,
            };
        });

    export type Outbound = {
        uid?: string | undefined;
        username: string;
        email?: string | undefined;
        role: RequestBodyRole;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberRequestBody2> = z
        .object({
            uid: z.string().optional(),
            username: z.string(),
            email: z.string().optional(),
            role: RequestBodyRole$,
        })
        .transform((v) => {
            return {
                ...(v.uid === undefined ? null : { uid: v.uid }),
                username: v.username,
                ...(v.email === undefined ? null : { email: v.email }),
                role: v.role,
            };
        });
}

/** @internal */
export const AddProjectMemberRequestBodyProjectMembersRole$: z.ZodNativeEnum<
    typeof AddProjectMemberRequestBodyProjectMembersRole
> = z.nativeEnum(AddProjectMemberRequestBodyProjectMembersRole);

/** @internal */
export namespace AddProjectMemberRequestBody1$ {
    export const inboundSchema: z.ZodType<AddProjectMemberRequestBody1, z.ZodTypeDef, unknown> = z
        .object({
            uid: z.string(),
            username: z.string().optional(),
            email: z.string().optional(),
            role: AddProjectMemberRequestBodyProjectMembersRole$,
        })
        .transform((v) => {
            return {
                uid: v.uid,
                ...(v.username === undefined ? null : { username: v.username }),
                ...(v.email === undefined ? null : { email: v.email }),
                role: v.role,
            };
        });

    export type Outbound = {
        uid: string;
        username?: string | undefined;
        email?: string | undefined;
        role: AddProjectMemberRequestBodyProjectMembersRole;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberRequestBody1> = z
        .object({
            uid: z.string(),
            username: z.string().optional(),
            email: z.string().optional(),
            role: AddProjectMemberRequestBodyProjectMembersRole$,
        })
        .transform((v) => {
            return {
                uid: v.uid,
                ...(v.username === undefined ? null : { username: v.username }),
                ...(v.email === undefined ? null : { email: v.email }),
                role: v.role,
            };
        });
}

/** @internal */
export namespace AddProjectMemberRequestBody$ {
    export const inboundSchema: z.ZodType<AddProjectMemberRequestBody, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => AddProjectMemberRequestBody1$.inboundSchema),
            z.lazy(() => AddProjectMemberRequestBody2$.inboundSchema),
            z.lazy(() => AddProjectMemberRequestBody3$.inboundSchema),
        ]);

    export type Outbound =
        | AddProjectMemberRequestBody1$.Outbound
        | AddProjectMemberRequestBody2$.Outbound
        | AddProjectMemberRequestBody3$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberRequestBody> =
        z.union([
            z.lazy(() => AddProjectMemberRequestBody1$.outboundSchema),
            z.lazy(() => AddProjectMemberRequestBody2$.outboundSchema),
            z.lazy(() => AddProjectMemberRequestBody3$.outboundSchema),
        ]);
}

/** @internal */
export namespace AddProjectMemberRequest$ {
    export const inboundSchema: z.ZodType<AddProjectMemberRequest, z.ZodTypeDef, unknown> = z
        .object({
            idOrName: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z
                .union([
                    z.lazy(() => AddProjectMemberRequestBody1$.inboundSchema),
                    z.lazy(() => AddProjectMemberRequestBody2$.inboundSchema),
                    z.lazy(() => AddProjectMemberRequestBody3$.inboundSchema),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        idOrName: string;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?:
            | AddProjectMemberRequestBody1$.Outbound
            | AddProjectMemberRequestBody2$.Outbound
            | AddProjectMemberRequestBody3$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberRequest> = z
        .object({
            idOrName: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z
                .union([
                    z.lazy(() => AddProjectMemberRequestBody1$.outboundSchema),
                    z.lazy(() => AddProjectMemberRequestBody2$.outboundSchema),
                    z.lazy(() => AddProjectMemberRequestBody3$.outboundSchema),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                idOrName: v.idOrName,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace AddProjectMemberResponseBody$ {
    export const inboundSchema: z.ZodType<AddProjectMemberResponseBody, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberResponseBody> = z
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
export namespace AddProjectMemberResponse$ {
    export const inboundSchema: z.ZodType<AddProjectMemberResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddProjectMemberResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddProjectMemberResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddProjectMemberResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
