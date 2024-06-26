/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Enum containing the actions that can be performed against a resource. Group operations are included.
 */
export enum ACLAction {
    Create = "create",
    Delete = "delete",
    Read = "read",
    Update = "update",
    List = "list",
}

/** @internal */
export namespace ACLAction$ {
    export const inboundSchema = z.nativeEnum(ACLAction);
    export const outboundSchema = inboundSchema;
}
