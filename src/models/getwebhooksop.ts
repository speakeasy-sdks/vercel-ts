/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetWebhooksRequest = {
    projectId?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export enum ResponseBodyFramework {
    Blitzjs = "blitzjs",
    Nextjs = "nextjs",
    Gatsby = "gatsby",
    Remix = "remix",
    Astro = "astro",
    Hexo = "hexo",
    Eleventy = "eleventy",
    Docusaurus2 = "docusaurus-2",
    Docusaurus = "docusaurus",
    Preact = "preact",
    Solidstart1 = "solidstart-1",
    Solidstart = "solidstart",
    Dojo = "dojo",
    Ember = "ember",
    Vue = "vue",
    Scully = "scully",
    IonicAngular = "ionic-angular",
    Angular = "angular",
    Polymer = "polymer",
    Svelte = "svelte",
    Sveltekit = "sveltekit",
    Sveltekit1 = "sveltekit-1",
    IonicReact = "ionic-react",
    CreateReactApp = "create-react-app",
    Gridsome = "gridsome",
    Umijs = "umijs",
    Sapper = "sapper",
    Saber = "saber",
    Stencil = "stencil",
    Nuxtjs = "nuxtjs",
    Redwoodjs = "redwoodjs",
    Hugo = "hugo",
    Jekyll = "jekyll",
    Brunch = "brunch",
    Middleman = "middleman",
    Zola = "zola",
    Hydrogen = "hydrogen",
    Vite = "vite",
    Vitepress = "vitepress",
    Vuepress = "vuepress",
    Parcel = "parcel",
    Sanity = "sanity",
    Storybook = "storybook",
}

export type ProjectsMetadata = {
    id: string;
    name: string;
    framework?: ResponseBodyFramework | null | undefined;
    latestDeployment?: string | undefined;
};

/**
 * The webhooks events
 */
export enum ResponseBodyEvents {
    BudgetReached = "budget.reached",
    BudgetReset = "budget.reset",
    DomainCreated = "domain.created",
    DeploymentCreated = "deployment.created",
    DeploymentError = "deployment.error",
    DeploymentCanceled = "deployment.canceled",
    DeploymentSucceeded = "deployment.succeeded",
    DeploymentReady = "deployment.ready",
    DeploymentCheckRerequested = "deployment.check-rerequested",
    IntegrationConfigurationPermissionUpgraded = "integration-configuration.permission-upgraded",
    IntegrationConfigurationRemoved = "integration-configuration.removed",
    IntegrationConfigurationScopeChangeConfirmed = "integration-configuration.scope-change-confirmed",
    ProjectCreated = "project.created",
    ProjectRemoved = "project.removed",
    DeploymentChecksCompleted = "deployment-checks-completed",
    DeploymentDashReady = "deployment-ready",
    DeploymentDashPrepared = "deployment-prepared",
    DeploymentDashError = "deployment-error",
    DeploymentDashCheckRerequested = "deployment-check-rerequested",
    DeploymentDashCanceled = "deployment-canceled",
    ProjectDashCreated = "project-created",
    ProjectDashRemoved = "project-removed",
    DomainDashCreated = "domain-created",
    Deployment = "deployment",
    IntegrationConfigurationDashPermissionUpdated = "integration-configuration-permission-updated",
    IntegrationConfigurationDashRemoved = "integration-configuration-removed",
    IntegrationConfigurationDashScopeChangeConfirmed = "integration-configuration-scope-change-confirmed",
    TestWebhook = "test-webhook",
}

export type GetWebhooksResponseBody = {
    projectsMetadata: Array<ProjectsMetadata> | null;
    /**
     * The webhooks events
     */
    events: Array<ResponseBodyEvents>;
    /**
     * The webhook id
     */
    id: string;
    /**
     * A string with the URL of the webhook
     */
    url: string;
    /**
     * The unique ID of the team the webhook belongs to
     */
    ownerId: string;
    /**
     * A number containing the date when the webhook was created in in milliseconds
     */
    createdAt: number;
    /**
     * A number containing the date when the webhook was updated in in milliseconds
     */
    updatedAt: number;
    /**
     * The ID of the projects the webhook is associated with
     */
    projectIds?: Array<string> | undefined;
};

/** @internal */
export const GetWebhooksRequest$inboundSchema: z.ZodType<
    GetWebhooksRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    projectId: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type GetWebhooksRequest$Outbound = {
    projectId?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetWebhooksRequest$outboundSchema: z.ZodType<
    GetWebhooksRequest$Outbound,
    z.ZodTypeDef,
    GetWebhooksRequest
> = z.object({
    projectId: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWebhooksRequest$ {
    /** @deprecated use `GetWebhooksRequest$inboundSchema` instead. */
    export const inboundSchema = GetWebhooksRequest$inboundSchema;
    /** @deprecated use `GetWebhooksRequest$outboundSchema` instead. */
    export const outboundSchema = GetWebhooksRequest$outboundSchema;
    /** @deprecated use `GetWebhooksRequest$Outbound` instead. */
    export type Outbound = GetWebhooksRequest$Outbound;
}

/** @internal */
export const ResponseBodyFramework$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyFramework> =
    z.nativeEnum(ResponseBodyFramework);

/** @internal */
export const ResponseBodyFramework$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyFramework> =
    ResponseBodyFramework$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyFramework$ {
    /** @deprecated use `ResponseBodyFramework$inboundSchema` instead. */
    export const inboundSchema = ResponseBodyFramework$inboundSchema;
    /** @deprecated use `ResponseBodyFramework$outboundSchema` instead. */
    export const outboundSchema = ResponseBodyFramework$outboundSchema;
}

/** @internal */
export const ProjectsMetadata$inboundSchema: z.ZodType<ProjectsMetadata, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
        name: z.string(),
        framework: z.nullable(ResponseBodyFramework$inboundSchema).optional(),
        latestDeployment: z.string().optional(),
    });

/** @internal */
export type ProjectsMetadata$Outbound = {
    id: string;
    name: string;
    framework?: string | null | undefined;
    latestDeployment?: string | undefined;
};

/** @internal */
export const ProjectsMetadata$outboundSchema: z.ZodType<
    ProjectsMetadata$Outbound,
    z.ZodTypeDef,
    ProjectsMetadata
> = z.object({
    id: z.string(),
    name: z.string(),
    framework: z.nullable(ResponseBodyFramework$outboundSchema).optional(),
    latestDeployment: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectsMetadata$ {
    /** @deprecated use `ProjectsMetadata$inboundSchema` instead. */
    export const inboundSchema = ProjectsMetadata$inboundSchema;
    /** @deprecated use `ProjectsMetadata$outboundSchema` instead. */
    export const outboundSchema = ProjectsMetadata$outboundSchema;
    /** @deprecated use `ProjectsMetadata$Outbound` instead. */
    export type Outbound = ProjectsMetadata$Outbound;
}

/** @internal */
export const ResponseBodyEvents$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyEvents> =
    z.nativeEnum(ResponseBodyEvents);

/** @internal */
export const ResponseBodyEvents$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyEvents> =
    ResponseBodyEvents$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyEvents$ {
    /** @deprecated use `ResponseBodyEvents$inboundSchema` instead. */
    export const inboundSchema = ResponseBodyEvents$inboundSchema;
    /** @deprecated use `ResponseBodyEvents$outboundSchema` instead. */
    export const outboundSchema = ResponseBodyEvents$outboundSchema;
}

/** @internal */
export const GetWebhooksResponseBody$inboundSchema: z.ZodType<
    GetWebhooksResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    projectsMetadata: z.nullable(z.array(z.lazy(() => ProjectsMetadata$inboundSchema))),
    events: z.array(ResponseBodyEvents$inboundSchema),
    id: z.string(),
    url: z.string(),
    ownerId: z.string(),
    createdAt: z.number(),
    updatedAt: z.number(),
    projectIds: z.array(z.string()).optional(),
});

/** @internal */
export type GetWebhooksResponseBody$Outbound = {
    projectsMetadata: Array<ProjectsMetadata$Outbound> | null;
    events: Array<string>;
    id: string;
    url: string;
    ownerId: string;
    createdAt: number;
    updatedAt: number;
    projectIds?: Array<string> | undefined;
};

/** @internal */
export const GetWebhooksResponseBody$outboundSchema: z.ZodType<
    GetWebhooksResponseBody$Outbound,
    z.ZodTypeDef,
    GetWebhooksResponseBody
> = z.object({
    projectsMetadata: z.nullable(z.array(z.lazy(() => ProjectsMetadata$outboundSchema))),
    events: z.array(ResponseBodyEvents$outboundSchema),
    id: z.string(),
    url: z.string(),
    ownerId: z.string(),
    createdAt: z.number(),
    updatedAt: z.number(),
    projectIds: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWebhooksResponseBody$ {
    /** @deprecated use `GetWebhooksResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetWebhooksResponseBody$inboundSchema;
    /** @deprecated use `GetWebhooksResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetWebhooksResponseBody$outboundSchema;
    /** @deprecated use `GetWebhooksResponseBody$Outbound` instead. */
    export type Outbound = GetWebhooksResponseBody$Outbound;
}
