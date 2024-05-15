/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * The origin of the request.
 */
export enum Origin {
    Import = "import",
    Teams = "teams",
    Github = "github",
    Gitlab = "gitlab",
    Bitbucket = "bitbucket",
    Feedback = "feedback",
    OrganizationTeams = "organization-teams",
}

/**
 * The ID of the Git account of the user who requests access.
 */
export type GitUserId = string | number;

export type JoinedFrom = {
    /**
     * The origin of the request.
     */
    origin: Origin;
    /**
     * The commit sha if the origin is a git provider.
     */
    commitId?: string | undefined;
    /**
     * The ID of the repository for the given Git provider.
     */
    repoId?: string | undefined;
    /**
     * The path to the repository for the given Git provider.
     */
    repoPath?: string | undefined;
    /**
     * The ID of the Git account of the user who requests access.
     */
    gitUserId?: string | number | undefined;
    /**
     * The login name for the Git account of the user who requests access.
     */
    gitUserLogin?: string | undefined;
};

export type RequestAccessToTeamRequestBody = {
    joinedFrom: JoinedFrom;
};

export type RequestAccessToTeamRequest = {
    teamId: string;
    requestBody?: RequestAccessToTeamRequestBody | undefined;
};

export enum RequestAccessToTeamOrigin {
    Import = "import",
    Teams = "teams",
    Github = "github",
    Gitlab = "gitlab",
    Bitbucket = "bitbucket",
    Feedback = "feedback",
    OrganizationTeams = "organization-teams",
    Mail = "mail",
    Link = "link",
    Saml = "saml",
    Dsync = "dsync",
}

export type RequestAccessToTeamGitUserId = string | number;

export type RequestAccessToTeamJoinedFrom = {
    origin: RequestAccessToTeamOrigin;
    commitId?: string | undefined;
    repoId?: string | undefined;
    repoPath?: string | undefined;
    gitUserId?: string | number | undefined;
    gitUserLogin?: string | undefined;
    ssoUserId?: string | undefined;
    ssoConnectedAt?: number | undefined;
    idpUserId?: string | undefined;
    dsyncUserId?: string | undefined;
    dsyncConnectedAt?: number | undefined;
};

export type Github = {
    login?: string | undefined;
};

export type Gitlab = {
    login?: string | undefined;
};

export type Bitbucket = {
    login?: string | undefined;
};

/**
 * Successfuly requested access to the team.
 */
export type RequestAccessToTeamResponseBody = {
    teamSlug: string;
    teamName: string;
    confirmed?: boolean | undefined;
    joinedFrom?: RequestAccessToTeamJoinedFrom | undefined;
    accessRequestedAt?: number | undefined;
    github: Github | null;
    gitlab: Gitlab | null;
    bitbucket: Bitbucket | null;
};

export type RequestAccessToTeamResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfuly requested access to the team.
     */
    object?: RequestAccessToTeamResponseBody | undefined;
};

/** @internal */
export namespace Origin$ {
    export const inboundSchema = z.nativeEnum(Origin);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GitUserId$ {
    export const inboundSchema: z.ZodType<GitUserId, z.ZodTypeDef, unknown> = z.union([
        z.string(),
        z.number(),
    ]);

    export type Outbound = string | number;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GitUserId> = z.union([
        z.string(),
        z.number(),
    ]);
}

/** @internal */
export namespace JoinedFrom$ {
    export const inboundSchema: z.ZodType<JoinedFrom, z.ZodTypeDef, unknown> = z
        .object({
            origin: Origin$.inboundSchema,
            commitId: z.string().optional(),
            repoId: z.string().optional(),
            repoPath: z.string().optional(),
            gitUserId: z.union([z.string(), z.number()]).optional(),
            gitUserLogin: z.string().optional(),
        })
        .transform((v) => {
            return {
                origin: v.origin,
                ...(v.commitId === undefined ? null : { commitId: v.commitId }),
                ...(v.repoId === undefined ? null : { repoId: v.repoId }),
                ...(v.repoPath === undefined ? null : { repoPath: v.repoPath }),
                ...(v.gitUserId === undefined ? null : { gitUserId: v.gitUserId }),
                ...(v.gitUserLogin === undefined ? null : { gitUserLogin: v.gitUserLogin }),
            };
        });

    export type Outbound = {
        origin: string;
        commitId?: string | undefined;
        repoId?: string | undefined;
        repoPath?: string | undefined;
        gitUserId?: string | number | undefined;
        gitUserLogin?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JoinedFrom> = z
        .object({
            origin: Origin$.outboundSchema,
            commitId: z.string().optional(),
            repoId: z.string().optional(),
            repoPath: z.string().optional(),
            gitUserId: z.union([z.string(), z.number()]).optional(),
            gitUserLogin: z.string().optional(),
        })
        .transform((v) => {
            return {
                origin: v.origin,
                ...(v.commitId === undefined ? null : { commitId: v.commitId }),
                ...(v.repoId === undefined ? null : { repoId: v.repoId }),
                ...(v.repoPath === undefined ? null : { repoPath: v.repoPath }),
                ...(v.gitUserId === undefined ? null : { gitUserId: v.gitUserId }),
                ...(v.gitUserLogin === undefined ? null : { gitUserLogin: v.gitUserLogin }),
            };
        });
}

/** @internal */
export namespace RequestAccessToTeamRequestBody$ {
    export const inboundSchema: z.ZodType<RequestAccessToTeamRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            joinedFrom: z.lazy(() => JoinedFrom$.inboundSchema),
        })
        .transform((v) => {
            return {
                joinedFrom: v.joinedFrom,
            };
        });

    export type Outbound = {
        joinedFrom: JoinedFrom$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestAccessToTeamRequestBody> =
        z
            .object({
                joinedFrom: z.lazy(() => JoinedFrom$.outboundSchema),
            })
            .transform((v) => {
                return {
                    joinedFrom: v.joinedFrom,
                };
            });
}

/** @internal */
export namespace RequestAccessToTeamRequest$ {
    export const inboundSchema: z.ZodType<RequestAccessToTeamRequest, z.ZodTypeDef, unknown> = z
        .object({
            teamId: z.string(),
            RequestBody: z.lazy(() => RequestAccessToTeamRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        teamId: string;
        RequestBody?: RequestAccessToTeamRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestAccessToTeamRequest> = z
        .object({
            teamId: z.string(),
            requestBody: z.lazy(() => RequestAccessToTeamRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace RequestAccessToTeamOrigin$ {
    export const inboundSchema = z.nativeEnum(RequestAccessToTeamOrigin);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RequestAccessToTeamGitUserId$ {
    export const inboundSchema: z.ZodType<RequestAccessToTeamGitUserId, z.ZodTypeDef, unknown> =
        z.union([z.string(), z.number()]);

    export type Outbound = string | number;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestAccessToTeamGitUserId> =
        z.union([z.string(), z.number()]);
}

/** @internal */
export namespace RequestAccessToTeamJoinedFrom$ {
    export const inboundSchema: z.ZodType<RequestAccessToTeamJoinedFrom, z.ZodTypeDef, unknown> = z
        .object({
            origin: RequestAccessToTeamOrigin$.inboundSchema,
            commitId: z.string().optional(),
            repoId: z.string().optional(),
            repoPath: z.string().optional(),
            gitUserId: z.union([z.string(), z.number()]).optional(),
            gitUserLogin: z.string().optional(),
            ssoUserId: z.string().optional(),
            ssoConnectedAt: z.number().optional(),
            idpUserId: z.string().optional(),
            dsyncUserId: z.string().optional(),
            dsyncConnectedAt: z.number().optional(),
        })
        .transform((v) => {
            return {
                origin: v.origin,
                ...(v.commitId === undefined ? null : { commitId: v.commitId }),
                ...(v.repoId === undefined ? null : { repoId: v.repoId }),
                ...(v.repoPath === undefined ? null : { repoPath: v.repoPath }),
                ...(v.gitUserId === undefined ? null : { gitUserId: v.gitUserId }),
                ...(v.gitUserLogin === undefined ? null : { gitUserLogin: v.gitUserLogin }),
                ...(v.ssoUserId === undefined ? null : { ssoUserId: v.ssoUserId }),
                ...(v.ssoConnectedAt === undefined ? null : { ssoConnectedAt: v.ssoConnectedAt }),
                ...(v.idpUserId === undefined ? null : { idpUserId: v.idpUserId }),
                ...(v.dsyncUserId === undefined ? null : { dsyncUserId: v.dsyncUserId }),
                ...(v.dsyncConnectedAt === undefined
                    ? null
                    : { dsyncConnectedAt: v.dsyncConnectedAt }),
            };
        });

    export type Outbound = {
        origin: string;
        commitId?: string | undefined;
        repoId?: string | undefined;
        repoPath?: string | undefined;
        gitUserId?: string | number | undefined;
        gitUserLogin?: string | undefined;
        ssoUserId?: string | undefined;
        ssoConnectedAt?: number | undefined;
        idpUserId?: string | undefined;
        dsyncUserId?: string | undefined;
        dsyncConnectedAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestAccessToTeamJoinedFrom> =
        z
            .object({
                origin: RequestAccessToTeamOrigin$.outboundSchema,
                commitId: z.string().optional(),
                repoId: z.string().optional(),
                repoPath: z.string().optional(),
                gitUserId: z.union([z.string(), z.number()]).optional(),
                gitUserLogin: z.string().optional(),
                ssoUserId: z.string().optional(),
                ssoConnectedAt: z.number().optional(),
                idpUserId: z.string().optional(),
                dsyncUserId: z.string().optional(),
                dsyncConnectedAt: z.number().optional(),
            })
            .transform((v) => {
                return {
                    origin: v.origin,
                    ...(v.commitId === undefined ? null : { commitId: v.commitId }),
                    ...(v.repoId === undefined ? null : { repoId: v.repoId }),
                    ...(v.repoPath === undefined ? null : { repoPath: v.repoPath }),
                    ...(v.gitUserId === undefined ? null : { gitUserId: v.gitUserId }),
                    ...(v.gitUserLogin === undefined ? null : { gitUserLogin: v.gitUserLogin }),
                    ...(v.ssoUserId === undefined ? null : { ssoUserId: v.ssoUserId }),
                    ...(v.ssoConnectedAt === undefined
                        ? null
                        : { ssoConnectedAt: v.ssoConnectedAt }),
                    ...(v.idpUserId === undefined ? null : { idpUserId: v.idpUserId }),
                    ...(v.dsyncUserId === undefined ? null : { dsyncUserId: v.dsyncUserId }),
                    ...(v.dsyncConnectedAt === undefined
                        ? null
                        : { dsyncConnectedAt: v.dsyncConnectedAt }),
                };
            });
}

/** @internal */
export namespace Github$ {
    export const inboundSchema: z.ZodType<Github, z.ZodTypeDef, unknown> = z
        .object({
            login: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.login === undefined ? null : { login: v.login }),
            };
        });

    export type Outbound = {
        login?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Github> = z
        .object({
            login: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.login === undefined ? null : { login: v.login }),
            };
        });
}

/** @internal */
export namespace Gitlab$ {
    export const inboundSchema: z.ZodType<Gitlab, z.ZodTypeDef, unknown> = z
        .object({
            login: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.login === undefined ? null : { login: v.login }),
            };
        });

    export type Outbound = {
        login?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Gitlab> = z
        .object({
            login: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.login === undefined ? null : { login: v.login }),
            };
        });
}

/** @internal */
export namespace Bitbucket$ {
    export const inboundSchema: z.ZodType<Bitbucket, z.ZodTypeDef, unknown> = z
        .object({
            login: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.login === undefined ? null : { login: v.login }),
            };
        });

    export type Outbound = {
        login?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Bitbucket> = z
        .object({
            login: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.login === undefined ? null : { login: v.login }),
            };
        });
}

/** @internal */
export namespace RequestAccessToTeamResponseBody$ {
    export const inboundSchema: z.ZodType<RequestAccessToTeamResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                teamSlug: z.string(),
                teamName: z.string(),
                confirmed: z.boolean().optional(),
                joinedFrom: z.lazy(() => RequestAccessToTeamJoinedFrom$.inboundSchema).optional(),
                accessRequestedAt: z.number().optional(),
                github: z.nullable(z.lazy(() => Github$.inboundSchema)),
                gitlab: z.nullable(z.lazy(() => Gitlab$.inboundSchema)),
                bitbucket: z.nullable(z.lazy(() => Bitbucket$.inboundSchema)),
            })
            .transform((v) => {
                return {
                    teamSlug: v.teamSlug,
                    teamName: v.teamName,
                    ...(v.confirmed === undefined ? null : { confirmed: v.confirmed }),
                    ...(v.joinedFrom === undefined ? null : { joinedFrom: v.joinedFrom }),
                    ...(v.accessRequestedAt === undefined
                        ? null
                        : { accessRequestedAt: v.accessRequestedAt }),
                    github: v.github,
                    gitlab: v.gitlab,
                    bitbucket: v.bitbucket,
                };
            });

    export type Outbound = {
        teamSlug: string;
        teamName: string;
        confirmed?: boolean | undefined;
        joinedFrom?: RequestAccessToTeamJoinedFrom$.Outbound | undefined;
        accessRequestedAt?: number | undefined;
        github: Github$.Outbound | null;
        gitlab: Gitlab$.Outbound | null;
        bitbucket: Bitbucket$.Outbound | null;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        RequestAccessToTeamResponseBody
    > = z
        .object({
            teamSlug: z.string(),
            teamName: z.string(),
            confirmed: z.boolean().optional(),
            joinedFrom: z.lazy(() => RequestAccessToTeamJoinedFrom$.outboundSchema).optional(),
            accessRequestedAt: z.number().optional(),
            github: z.nullable(z.lazy(() => Github$.outboundSchema)),
            gitlab: z.nullable(z.lazy(() => Gitlab$.outboundSchema)),
            bitbucket: z.nullable(z.lazy(() => Bitbucket$.outboundSchema)),
        })
        .transform((v) => {
            return {
                teamSlug: v.teamSlug,
                teamName: v.teamName,
                ...(v.confirmed === undefined ? null : { confirmed: v.confirmed }),
                ...(v.joinedFrom === undefined ? null : { joinedFrom: v.joinedFrom }),
                ...(v.accessRequestedAt === undefined
                    ? null
                    : { accessRequestedAt: v.accessRequestedAt }),
                github: v.github,
                gitlab: v.gitlab,
                bitbucket: v.bitbucket,
            };
        });
}

/** @internal */
export namespace RequestAccessToTeamResponse$ {
    export const inboundSchema: z.ZodType<RequestAccessToTeamResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => RequestAccessToTeamResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: RequestAccessToTeamResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestAccessToTeamResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => RequestAccessToTeamResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
