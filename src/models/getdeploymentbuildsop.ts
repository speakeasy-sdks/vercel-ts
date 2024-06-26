/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetDeploymentBuildsRequest = {
    /**
     * The deployment unique identifier
     */
    deploymentId: string;
};

/**
 * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
 */
export enum ReadyState {
    Initializing = "INITIALIZING",
    Building = "BUILDING",
    Uploading = "UPLOADING",
    Deploying = "DEPLOYING",
    Ready = "READY",
    Archived = "ARCHIVED",
    Error = "ERROR",
    Queued = "QUEUED",
    Canceled = "CANCELED",
}

/**
 * An object that contains the Build's configuration
 */
export type Config = {
    distDir?: string | undefined;
    forceBuildIn?: string | undefined;
    reuseWorkPathFrom?: string | undefined;
    zeroConfig?: boolean | undefined;
};

/**
 * The type of the output
 */
export enum GetDeploymentBuildsType {
    Lambda = "lambda",
    File = "file",
    Edge = "edge",
}

/**
 * If the output is a Serverless Function, an object containing the name, location and memory size of the function
 */
export type Lambda = {
    functionName: string;
    deployedTo: Array<string>;
    memorySize?: number | undefined;
    timeout?: number | undefined;
    layers?: Array<string> | undefined;
};

/**
 * Exists if the output is an edge function.
 */
export type Edge = {
    /**
     * The regions where the edge function will be invoked. Only exists if the edge function as a regional edge function, see: https://vercel.com/docs/concepts/edge-network/regions#setting-edge-function-regions
     */
    regions: Array<string> | null;
};

/**
 * A list of outputs for the Build that can be either Serverless Functions or static files
 */
export type GetDeploymentBuildsOutput = {
    /**
     * The type of the output
     */
    type?: GetDeploymentBuildsType | undefined;
    /**
     * The absolute path of the file or Serverless Function
     */
    path: string;
    /**
     * The SHA1 of the file
     */
    digest: string;
    /**
     * The POSIX file permissions
     */
    mode: number;
    /**
     * The size of the file in bytes
     */
    size?: number | undefined;
    /**
     * If the output is a Serverless Function, an object containing the name, location and memory size of the function
     */
    lambda?: Lambda | null | undefined;
    /**
     * Exists if the output is an edge function.
     */
    edge?: Edge | null | undefined;
};

/**
 * An object representing a Build on Vercel
 */
export type Builds = {
    /**
     * The unique identifier of the Build
     */
    id: string;
    /**
     * The unique identifier of the deployment
     */
    deploymentId: string;
    /**
     * The entrypoint of the deployment
     */
    entrypoint: string;
    /**
     * The state of the deployment depending on the process of deploying, or if it is ready or in an error state
     */
    readyState: ReadyState;
    /**
     * The time at which the Build state was last modified
     */
    readyStateAt?: number | undefined;
    /**
     * The time at which the Build was scheduled to be built
     */
    scheduledAt?: number | null | undefined;
    /**
     * The time at which the Build was created
     */
    createdAt?: number | undefined;
    /**
     * The time at which the Build was deployed
     */
    deployedAt?: number | undefined;
    /**
     * The region where the Build was first created
     */
    createdIn?: string | undefined;
    /**
     * The Runtime the Build used to generate the output
     */
    use?: string | undefined;
    /**
     * An object that contains the Build's configuration
     */
    config?: Config | undefined;
    /**
     * A list of outputs for the Build that can be either Serverless Functions or static files
     */
    output: Array<GetDeploymentBuildsOutput>;
    /**
     * If the Build uses the `@vercel/static` Runtime, it contains a hashed string of all outputs
     */
    fingerprint?: string | null | undefined;
    copiedFrom?: string | undefined;
};

export type GetDeploymentBuildsResponseBody = {
    builds: Array<Builds>;
};

/** @internal */
export namespace GetDeploymentBuildsRequest$ {
    export const inboundSchema: z.ZodType<GetDeploymentBuildsRequest, z.ZodTypeDef, unknown> = z
        .object({
            deploymentId: z.string(),
        })
        .transform((v) => {
            return {
                deploymentId: v.deploymentId,
            };
        });

    export type Outbound = {
        deploymentId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDeploymentBuildsRequest> = z
        .object({
            deploymentId: z.string(),
        })
        .transform((v) => {
            return {
                deploymentId: v.deploymentId,
            };
        });
}

/** @internal */
export namespace ReadyState$ {
    export const inboundSchema = z.nativeEnum(ReadyState);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Config$ {
    export const inboundSchema: z.ZodType<Config, z.ZodTypeDef, unknown> = z
        .object({
            distDir: z.string().optional(),
            forceBuildIn: z.string().optional(),
            reuseWorkPathFrom: z.string().optional(),
            zeroConfig: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.distDir === undefined ? null : { distDir: v.distDir }),
                ...(v.forceBuildIn === undefined ? null : { forceBuildIn: v.forceBuildIn }),
                ...(v.reuseWorkPathFrom === undefined
                    ? null
                    : { reuseWorkPathFrom: v.reuseWorkPathFrom }),
                ...(v.zeroConfig === undefined ? null : { zeroConfig: v.zeroConfig }),
            };
        });

    export type Outbound = {
        distDir?: string | undefined;
        forceBuildIn?: string | undefined;
        reuseWorkPathFrom?: string | undefined;
        zeroConfig?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Config> = z
        .object({
            distDir: z.string().optional(),
            forceBuildIn: z.string().optional(),
            reuseWorkPathFrom: z.string().optional(),
            zeroConfig: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.distDir === undefined ? null : { distDir: v.distDir }),
                ...(v.forceBuildIn === undefined ? null : { forceBuildIn: v.forceBuildIn }),
                ...(v.reuseWorkPathFrom === undefined
                    ? null
                    : { reuseWorkPathFrom: v.reuseWorkPathFrom }),
                ...(v.zeroConfig === undefined ? null : { zeroConfig: v.zeroConfig }),
            };
        });
}

/** @internal */
export namespace GetDeploymentBuildsType$ {
    export const inboundSchema = z.nativeEnum(GetDeploymentBuildsType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Lambda$ {
    export const inboundSchema: z.ZodType<Lambda, z.ZodTypeDef, unknown> = z
        .object({
            functionName: z.string(),
            deployedTo: z.array(z.string()),
            memorySize: z.number().optional(),
            timeout: z.number().optional(),
            layers: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                functionName: v.functionName,
                deployedTo: v.deployedTo,
                ...(v.memorySize === undefined ? null : { memorySize: v.memorySize }),
                ...(v.timeout === undefined ? null : { timeout: v.timeout }),
                ...(v.layers === undefined ? null : { layers: v.layers }),
            };
        });

    export type Outbound = {
        functionName: string;
        deployedTo: Array<string>;
        memorySize?: number | undefined;
        timeout?: number | undefined;
        layers?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Lambda> = z
        .object({
            functionName: z.string(),
            deployedTo: z.array(z.string()),
            memorySize: z.number().optional(),
            timeout: z.number().optional(),
            layers: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                functionName: v.functionName,
                deployedTo: v.deployedTo,
                ...(v.memorySize === undefined ? null : { memorySize: v.memorySize }),
                ...(v.timeout === undefined ? null : { timeout: v.timeout }),
                ...(v.layers === undefined ? null : { layers: v.layers }),
            };
        });
}

/** @internal */
export namespace Edge$ {
    export const inboundSchema: z.ZodType<Edge, z.ZodTypeDef, unknown> = z
        .object({
            regions: z.nullable(z.array(z.string())),
        })
        .transform((v) => {
            return {
                regions: v.regions,
            };
        });

    export type Outbound = {
        regions: Array<string> | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Edge> = z
        .object({
            regions: z.nullable(z.array(z.string())),
        })
        .transform((v) => {
            return {
                regions: v.regions,
            };
        });
}

/** @internal */
export namespace GetDeploymentBuildsOutput$ {
    export const inboundSchema: z.ZodType<GetDeploymentBuildsOutput, z.ZodTypeDef, unknown> = z
        .object({
            type: GetDeploymentBuildsType$.inboundSchema.optional(),
            path: z.string(),
            digest: z.string(),
            mode: z.number(),
            size: z.number().optional(),
            lambda: z.nullable(z.lazy(() => Lambda$.inboundSchema)).optional(),
            edge: z.nullable(z.lazy(() => Edge$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                path: v.path,
                digest: v.digest,
                mode: v.mode,
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.lambda === undefined ? null : { lambda: v.lambda }),
                ...(v.edge === undefined ? null : { edge: v.edge }),
            };
        });

    export type Outbound = {
        type?: string | undefined;
        path: string;
        digest: string;
        mode: number;
        size?: number | undefined;
        lambda?: Lambda$.Outbound | null | undefined;
        edge?: Edge$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDeploymentBuildsOutput> = z
        .object({
            type: GetDeploymentBuildsType$.outboundSchema.optional(),
            path: z.string(),
            digest: z.string(),
            mode: z.number(),
            size: z.number().optional(),
            lambda: z.nullable(z.lazy(() => Lambda$.outboundSchema)).optional(),
            edge: z.nullable(z.lazy(() => Edge$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                path: v.path,
                digest: v.digest,
                mode: v.mode,
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.lambda === undefined ? null : { lambda: v.lambda }),
                ...(v.edge === undefined ? null : { edge: v.edge }),
            };
        });
}

/** @internal */
export namespace Builds$ {
    export const inboundSchema: z.ZodType<Builds, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            deploymentId: z.string(),
            entrypoint: z.string(),
            readyState: ReadyState$.inboundSchema,
            readyStateAt: z.number().optional(),
            scheduledAt: z.nullable(z.number()).optional(),
            createdAt: z.number().optional(),
            deployedAt: z.number().optional(),
            createdIn: z.string().optional(),
            use: z.string().optional(),
            config: z.lazy(() => Config$.inboundSchema).optional(),
            output: z.array(z.lazy(() => GetDeploymentBuildsOutput$.inboundSchema)),
            fingerprint: z.nullable(z.string()).optional(),
            copiedFrom: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                deploymentId: v.deploymentId,
                entrypoint: v.entrypoint,
                readyState: v.readyState,
                ...(v.readyStateAt === undefined ? null : { readyStateAt: v.readyStateAt }),
                ...(v.scheduledAt === undefined ? null : { scheduledAt: v.scheduledAt }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.deployedAt === undefined ? null : { deployedAt: v.deployedAt }),
                ...(v.createdIn === undefined ? null : { createdIn: v.createdIn }),
                ...(v.use === undefined ? null : { use: v.use }),
                ...(v.config === undefined ? null : { config: v.config }),
                output: v.output,
                ...(v.fingerprint === undefined ? null : { fingerprint: v.fingerprint }),
                ...(v.copiedFrom === undefined ? null : { copiedFrom: v.copiedFrom }),
            };
        });

    export type Outbound = {
        id: string;
        deploymentId: string;
        entrypoint: string;
        readyState: string;
        readyStateAt?: number | undefined;
        scheduledAt?: number | null | undefined;
        createdAt?: number | undefined;
        deployedAt?: number | undefined;
        createdIn?: string | undefined;
        use?: string | undefined;
        config?: Config$.Outbound | undefined;
        output: Array<GetDeploymentBuildsOutput$.Outbound>;
        fingerprint?: string | null | undefined;
        copiedFrom?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Builds> = z
        .object({
            id: z.string(),
            deploymentId: z.string(),
            entrypoint: z.string(),
            readyState: ReadyState$.outboundSchema,
            readyStateAt: z.number().optional(),
            scheduledAt: z.nullable(z.number()).optional(),
            createdAt: z.number().optional(),
            deployedAt: z.number().optional(),
            createdIn: z.string().optional(),
            use: z.string().optional(),
            config: z.lazy(() => Config$.outboundSchema).optional(),
            output: z.array(z.lazy(() => GetDeploymentBuildsOutput$.outboundSchema)),
            fingerprint: z.nullable(z.string()).optional(),
            copiedFrom: z.string().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                deploymentId: v.deploymentId,
                entrypoint: v.entrypoint,
                readyState: v.readyState,
                ...(v.readyStateAt === undefined ? null : { readyStateAt: v.readyStateAt }),
                ...(v.scheduledAt === undefined ? null : { scheduledAt: v.scheduledAt }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.deployedAt === undefined ? null : { deployedAt: v.deployedAt }),
                ...(v.createdIn === undefined ? null : { createdIn: v.createdIn }),
                ...(v.use === undefined ? null : { use: v.use }),
                ...(v.config === undefined ? null : { config: v.config }),
                output: v.output,
                ...(v.fingerprint === undefined ? null : { fingerprint: v.fingerprint }),
                ...(v.copiedFrom === undefined ? null : { copiedFrom: v.copiedFrom }),
            };
        });
}

/** @internal */
export namespace GetDeploymentBuildsResponseBody$ {
    export const inboundSchema: z.ZodType<GetDeploymentBuildsResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                builds: z.array(z.lazy(() => Builds$.inboundSchema)),
            })
            .transform((v) => {
                return {
                    builds: v.builds,
                };
            });

    export type Outbound = {
        builds: Array<Builds$.Outbound>;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetDeploymentBuildsResponseBody
    > = z
        .object({
            builds: z.array(z.lazy(() => Builds$.outboundSchema)),
        })
        .transform((v) => {
            return {
                builds: v.builds,
            };
        });
}
