/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AuthToken, AuthToken$ } from "./authtoken";
import { Pagination, Pagination$ } from "./pagination";
import * as z from "zod";

export type ListAuthTokensResponseBody = {
    tokens: Array<AuthToken>;
    /**
     * Authentication token metadata.
     */
    testingToken?: AuthToken | undefined;
    /**
     * This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.
     */
    pagination: Pagination;
};

/** @internal */
export namespace ListAuthTokensResponseBody$ {
    export const inboundSchema: z.ZodType<ListAuthTokensResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            tokens: z.array(AuthToken$.inboundSchema),
            testingToken: AuthToken$.inboundSchema.optional(),
            pagination: Pagination$.inboundSchema,
        });

    export type Outbound = {
        tokens: Array<AuthToken$.Outbound>;
        testingToken?: AuthToken$.Outbound | undefined;
        pagination: Pagination$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListAuthTokensResponseBody> =
        z.object({
            tokens: z.array(AuthToken$.outboundSchema),
            testingToken: AuthToken$.outboundSchema.optional(),
            pagination: Pagination$.outboundSchema,
        });
}
