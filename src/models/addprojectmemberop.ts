/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
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

/** @internal */
export namespace AddProjectMemberRequestBodyRole$ {
    export const inboundSchema: z.ZodNativeEnum<typeof AddProjectMemberRequestBodyRole> =
        z.nativeEnum(AddProjectMemberRequestBodyRole);
    export const outboundSchema: z.ZodNativeEnum<typeof AddProjectMemberRequestBodyRole> =
        inboundSchema;
}

/** @internal */
export namespace AddProjectMemberRequestBody3$ {
    export const inboundSchema: z.ZodType<AddProjectMemberRequestBody3, z.ZodTypeDef, unknown> =
        z.object({
            uid: z.string().optional(),
            username: z.string().optional(),
            email: z.string(),
            role: AddProjectMemberRequestBodyRole$.inboundSchema,
        });

    export type Outbound = {
        uid?: string | undefined;
        username?: string | undefined;
        email: string;
        role: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberRequestBody3> =
        z.object({
            uid: z.string().optional(),
            username: z.string().optional(),
            email: z.string(),
            role: AddProjectMemberRequestBodyRole$.outboundSchema,
        });
}

/** @internal */
export namespace RequestBodyRole$ {
    export const inboundSchema: z.ZodNativeEnum<typeof RequestBodyRole> =
        z.nativeEnum(RequestBodyRole);
    export const outboundSchema: z.ZodNativeEnum<typeof RequestBodyRole> = inboundSchema;
}

/** @internal */
export namespace AddProjectMemberRequestBody2$ {
    export const inboundSchema: z.ZodType<AddProjectMemberRequestBody2, z.ZodTypeDef, unknown> =
        z.object({
            uid: z.string().optional(),
            username: z.string(),
            email: z.string().optional(),
            role: RequestBodyRole$.inboundSchema,
        });

    export type Outbound = {
        uid?: string | undefined;
        username: string;
        email?: string | undefined;
        role: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberRequestBody2> =
        z.object({
            uid: z.string().optional(),
            username: z.string(),
            email: z.string().optional(),
            role: RequestBodyRole$.outboundSchema,
        });
}

/** @internal */
export namespace AddProjectMemberRequestBodyProjectMembersRole$ {
    export const inboundSchema: z.ZodNativeEnum<
        typeof AddProjectMemberRequestBodyProjectMembersRole
    > = z.nativeEnum(AddProjectMemberRequestBodyProjectMembersRole);
    export const outboundSchema: z.ZodNativeEnum<
        typeof AddProjectMemberRequestBodyProjectMembersRole
    > = inboundSchema;
}

/** @internal */
export namespace AddProjectMemberRequestBody1$ {
    export const inboundSchema: z.ZodType<AddProjectMemberRequestBody1, z.ZodTypeDef, unknown> =
        z.object({
            uid: z.string(),
            username: z.string().optional(),
            email: z.string().optional(),
            role: AddProjectMemberRequestBodyProjectMembersRole$.inboundSchema,
        });

    export type Outbound = {
        uid: string;
        username?: string | undefined;
        email?: string | undefined;
        role: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberRequestBody1> =
        z.object({
            uid: z.string(),
            username: z.string().optional(),
            email: z.string().optional(),
            role: AddProjectMemberRequestBodyProjectMembersRole$.outboundSchema,
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
            return remap$(v, {
                RequestBody: "requestBody",
            });
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
            return remap$(v, {
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace AddProjectMemberResponseBody$ {
    export const inboundSchema: z.ZodType<AddProjectMemberResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddProjectMemberResponseBody> =
        z.object({
            id: z.string(),
        });
}
