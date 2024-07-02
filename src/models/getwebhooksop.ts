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
export namespace GetWebhooksRequest$ {
    export const inboundSchema: z.ZodType<GetWebhooksRequest, z.ZodTypeDef, unknown> = z.object({
        projectId: z.string().optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });

    export type Outbound = {
        projectId?: string | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWebhooksRequest> = z.object({
        projectId: z.string().optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });
}

/** @internal */
export namespace ResponseBodyFramework$ {
    export const inboundSchema: z.ZodNativeEnum<typeof ResponseBodyFramework> =
        z.nativeEnum(ResponseBodyFramework);
    export const outboundSchema: z.ZodNativeEnum<typeof ResponseBodyFramework> = inboundSchema;
}

/** @internal */
export namespace ProjectsMetadata$ {
    export const inboundSchema: z.ZodType<ProjectsMetadata, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        name: z.string(),
        framework: z.nullable(ResponseBodyFramework$.inboundSchema).optional(),
        latestDeployment: z.string().optional(),
    });

    export type Outbound = {
        id: string;
        name: string;
        framework?: string | null | undefined;
        latestDeployment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProjectsMetadata> = z.object({
        id: z.string(),
        name: z.string(),
        framework: z.nullable(ResponseBodyFramework$.outboundSchema).optional(),
        latestDeployment: z.string().optional(),
    });
}

/** @internal */
export namespace ResponseBodyEvents$ {
    export const inboundSchema: z.ZodNativeEnum<typeof ResponseBodyEvents> =
        z.nativeEnum(ResponseBodyEvents);
    export const outboundSchema: z.ZodNativeEnum<typeof ResponseBodyEvents> = inboundSchema;
}

/** @internal */
export namespace GetWebhooksResponseBody$ {
    export const inboundSchema: z.ZodType<GetWebhooksResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            projectsMetadata: z.nullable(z.array(z.lazy(() => ProjectsMetadata$.inboundSchema))),
            events: z.array(ResponseBodyEvents$.inboundSchema),
            id: z.string(),
            url: z.string(),
            ownerId: z.string(),
            createdAt: z.number(),
            updatedAt: z.number(),
            projectIds: z.array(z.string()).optional(),
        });

    export type Outbound = {
        projectsMetadata: Array<ProjectsMetadata$.Outbound> | null;
        events: Array<string>;
        id: string;
        url: string;
        ownerId: string;
        createdAt: number;
        updatedAt: number;
        projectIds?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWebhooksResponseBody> =
        z.object({
            projectsMetadata: z.nullable(z.array(z.lazy(() => ProjectsMetadata$.outboundSchema))),
            events: z.array(ResponseBodyEvents$.outboundSchema),
            id: z.string(),
            url: z.string(),
            ownerId: z.string(),
            createdAt: z.number(),
            updatedAt: z.number(),
            projectIds: z.array(z.string()).optional(),
        });
}
