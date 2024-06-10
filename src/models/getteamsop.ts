/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Pagination, Pagination$ } from "./pagination";
import { Team, Team$ } from "./team";
import { TeamLimited, TeamLimited$ } from "./teamlimited";
import * as z from "zod";

export type GetTeamsRequest = {
    /**
     * Maximum number of Teams which may be returned.
     */
    limit?: number | undefined;
    /**
     * Timestamp (in milliseconds) to only include Teams created since then.
     */
    since?: number | undefined;
    /**
     * Timestamp (in milliseconds) to only include Teams created until then.
     */
    until?: number | undefined;
};

export type GetTeamsTeams = Team | TeamLimited;

/**
 * A paginated list of teams.
 */
export type GetTeamsResponseBody = {
    teams: Array<Team | TeamLimited>;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};

/** @internal */
export namespace GetTeamsRequest$ {
    export const inboundSchema: z.ZodType<GetTeamsRequest, z.ZodTypeDef, unknown> = z.object({
        limit: z.number().optional(),
        since: z.number().optional(),
        until: z.number().optional(),
    });

    export type Outbound = {
        limit?: number | undefined;
        since?: number | undefined;
        until?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamsRequest> = z.object({
        limit: z.number().optional(),
        since: z.number().optional(),
        until: z.number().optional(),
    });
}

/** @internal */
export namespace GetTeamsTeams$ {
    export const inboundSchema: z.ZodType<GetTeamsTeams, z.ZodTypeDef, unknown> = z.union([
        Team$.inboundSchema,
        TeamLimited$.inboundSchema,
    ]);

    export type Outbound = Team$.Outbound | TeamLimited$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamsTeams> = z.union([
        Team$.outboundSchema,
        TeamLimited$.outboundSchema,
    ]);
}

/** @internal */
export namespace GetTeamsResponseBody$ {
    export const inboundSchema: z.ZodType<GetTeamsResponseBody, z.ZodTypeDef, unknown> = z.object({
        teams: z.array(z.union([Team$.inboundSchema, TeamLimited$.inboundSchema])),
        pagination: Pagination$.inboundSchema,
    });

    export type Outbound = {
        teams: Array<Team$.Outbound | TeamLimited$.Outbound>;
        pagination: Pagination$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTeamsResponseBody> = z.object(
        {
            teams: z.array(z.union([Team$.outboundSchema, TeamLimited$.outboundSchema])),
            pagination: Pagination$.outboundSchema,
        }
    );
}
