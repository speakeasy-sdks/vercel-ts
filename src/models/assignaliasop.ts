/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";

export type AssignAliasRequestBody = {
  /**
   * The alias we want to assign to the deployment defined in the URL
   */
  alias?: string | undefined;
  /**
   * The redirect property will take precedence over the deployment id from the URL and consists of a hostname (like test.com) to which the alias should redirect using status code 307
   */
  redirect?: string | null | undefined;
};

export type AssignAliasRequest = {
  /**
   * The ID of the deployment the aliases should be listed for
   */
  id: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: AssignAliasRequestBody | undefined;
};

/**
 * The alias was successfully assigned to the deployment
 */
export type AssignAliasResponseBody = {
  /**
   * The unique identifier of the alias
   */
  uid: string;
  /**
   * The assigned alias name
   */
  alias: string;
  /**
   * The date when the alias was created
   */
  created: Date;
  /**
   * The unique identifier of the previously aliased deployment, only received when the alias was used before
   */
  oldDeploymentId?: string | null | undefined;
};

/** @internal */
export const AssignAliasRequestBody$inboundSchema: z.ZodType<
  AssignAliasRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  alias: z.string().optional(),
  redirect: z.nullable(z.string()).optional(),
});

/** @internal */
export type AssignAliasRequestBody$Outbound = {
  alias?: string | undefined;
  redirect?: string | null | undefined;
};

/** @internal */
export const AssignAliasRequestBody$outboundSchema: z.ZodType<
  AssignAliasRequestBody$Outbound,
  z.ZodTypeDef,
  AssignAliasRequestBody
> = z.object({
  alias: z.string().optional(),
  redirect: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignAliasRequestBody$ {
  /** @deprecated use `AssignAliasRequestBody$inboundSchema` instead. */
  export const inboundSchema = AssignAliasRequestBody$inboundSchema;
  /** @deprecated use `AssignAliasRequestBody$outboundSchema` instead. */
  export const outboundSchema = AssignAliasRequestBody$outboundSchema;
  /** @deprecated use `AssignAliasRequestBody$Outbound` instead. */
  export type Outbound = AssignAliasRequestBody$Outbound;
}

/** @internal */
export const AssignAliasRequest$inboundSchema: z.ZodType<
  AssignAliasRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => AssignAliasRequestBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type AssignAliasRequest$Outbound = {
  id: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?: AssignAliasRequestBody$Outbound | undefined;
};

/** @internal */
export const AssignAliasRequest$outboundSchema: z.ZodType<
  AssignAliasRequest$Outbound,
  z.ZodTypeDef,
  AssignAliasRequest
> = z.object({
  id: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => AssignAliasRequestBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignAliasRequest$ {
  /** @deprecated use `AssignAliasRequest$inboundSchema` instead. */
  export const inboundSchema = AssignAliasRequest$inboundSchema;
  /** @deprecated use `AssignAliasRequest$outboundSchema` instead. */
  export const outboundSchema = AssignAliasRequest$outboundSchema;
  /** @deprecated use `AssignAliasRequest$Outbound` instead. */
  export type Outbound = AssignAliasRequest$Outbound;
}

/** @internal */
export const AssignAliasResponseBody$inboundSchema: z.ZodType<
  AssignAliasResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  uid: z.string(),
  alias: z.string(),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  oldDeploymentId: z.nullable(z.string()).optional(),
});

/** @internal */
export type AssignAliasResponseBody$Outbound = {
  uid: string;
  alias: string;
  created: string;
  oldDeploymentId?: string | null | undefined;
};

/** @internal */
export const AssignAliasResponseBody$outboundSchema: z.ZodType<
  AssignAliasResponseBody$Outbound,
  z.ZodTypeDef,
  AssignAliasResponseBody
> = z.object({
  uid: z.string(),
  alias: z.string(),
  created: z.date().transform(v => v.toISOString()),
  oldDeploymentId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignAliasResponseBody$ {
  /** @deprecated use `AssignAliasResponseBody$inboundSchema` instead. */
  export const inboundSchema = AssignAliasResponseBody$inboundSchema;
  /** @deprecated use `AssignAliasResponseBody$outboundSchema` instead. */
  export const outboundSchema = AssignAliasResponseBody$outboundSchema;
  /** @deprecated use `AssignAliasResponseBody$Outbound` instead. */
  export type Outbound = AssignAliasResponseBody$Outbound;
}
