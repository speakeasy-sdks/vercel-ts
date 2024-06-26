/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { UserEvent, UserEvent$ } from "./userevent";
import * as z from "zod";

export type ListUserEventRequest = {
    /**
     * Maximum number of items which may be returned.
     */
    limit?: number | undefined;
    /**
     * Timestamp to only include items created since then.
     */
    since?: string | undefined;
    /**
     * Timestamp to only include items created until then.
     */
    until?: string | undefined;
    /**
     * Comma-delimited list of event \"types\" to filter the results by.
     */
    types?: string | undefined;
    /**
     * When retrieving events for a Team, the `userId` parameter may be specified to filter events generated by a specific member of the Team.
     */
    userId?: string | undefined;
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
 * Successful response.
 */
export type ListUserEventResponseBody = {
    /**
     * Array of events generated by the User.
     */
    events: Array<UserEvent>;
};

/** @internal */
export namespace ListUserEventRequest$ {
    export const inboundSchema: z.ZodType<ListUserEventRequest, z.ZodTypeDef, unknown> = z
        .object({
            limit: z.number().optional(),
            since: z.string().optional(),
            until: z.string().optional(),
            types: z.string().optional(),
            userId: z.string().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.since === undefined ? null : { since: v.since }),
                ...(v.until === undefined ? null : { until: v.until }),
                ...(v.types === undefined ? null : { types: v.types }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });

    export type Outbound = {
        limit?: number | undefined;
        since?: string | undefined;
        until?: string | undefined;
        types?: string | undefined;
        userId?: string | undefined;
        teamId?: string | undefined;
        slug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListUserEventRequest> = z
        .object({
            limit: z.number().optional(),
            since: z.string().optional(),
            until: z.string().optional(),
            types: z.string().optional(),
            userId: z.string().optional(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.since === undefined ? null : { since: v.since }),
                ...(v.until === undefined ? null : { until: v.until }),
                ...(v.types === undefined ? null : { types: v.types }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
            };
        });
}

/** @internal */
export namespace ListUserEventResponseBody$ {
    export const inboundSchema: z.ZodType<ListUserEventResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            events: z.array(UserEvent$.inboundSchema),
        })
        .transform((v) => {
            return {
                events: v.events,
            };
        });

    export type Outbound = {
        events: Array<UserEvent$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListUserEventResponseBody> = z
        .object({
            events: z.array(UserEvent$.outboundSchema),
        })
        .transform((v) => {
            return {
                events: v.events,
            };
        });
}
