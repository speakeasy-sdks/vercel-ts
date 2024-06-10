/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetWebhookRequest = {
    id: string;
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
 * The webhooks events
 */
export enum GetWebhookEvents {
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

export type GetWebhookResponseBody = {
    /**
     * The webhooks events
     */
    events: Array<GetWebhookEvents>;
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
export namespace GetWebhookRequest$ {
    export const inboundSchema: z.ZodType<GetWebhookRequest, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });

    export type Outbound = {
        id: string;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWebhookRequest> = z.object({
        id: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
    });
}

/** @internal */
export namespace GetWebhookEvents$ {
    export const inboundSchema = z.nativeEnum(GetWebhookEvents);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetWebhookResponseBody$ {
    export const inboundSchema: z.ZodType<GetWebhookResponseBody, z.ZodTypeDef, unknown> = z.object(
        {
            events: z.array(GetWebhookEvents$.inboundSchema),
            id: z.string(),
            url: z.string(),
            ownerId: z.string(),
            createdAt: z.number(),
            updatedAt: z.number(),
            projectIds: z.array(z.string()).optional(),
        }
    );

    export type Outbound = {
        events: Array<string>;
        id: string;
        url: string;
        ownerId: string;
        createdAt: number;
        updatedAt: number;
        projectIds?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWebhookResponseBody> =
        z.object({
            events: z.array(GetWebhookEvents$.outboundSchema),
            id: z.string(),
            url: z.string(),
            ownerId: z.string(),
            createdAt: z.number(),
            updatedAt: z.number(),
            projectIds: z.array(z.string()).optional(),
        });
}
