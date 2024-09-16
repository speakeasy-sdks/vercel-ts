/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";

export type DownloadArtifactRequest = {
  /**
   * The continuous integration or delivery environment where this artifact is downloaded.
   */
  xArtifactClientCi?: string | undefined;
  /**
   * 1 if the client is an interactive shell. Otherwise 0
   */
  xArtifactClientInteractive?: number | undefined;
  /**
   * The artifact hash
   */
  hash: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/** @internal */
export const DownloadArtifactRequest$inboundSchema: z.ZodType<
  DownloadArtifactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-artifact-client-ci": z.string().optional(),
  "x-artifact-client-interactive": z.number().int().optional(),
  hash: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "x-artifact-client-ci": "xArtifactClientCi",
    "x-artifact-client-interactive": "xArtifactClientInteractive",
  });
});

/** @internal */
export type DownloadArtifactRequest$Outbound = {
  "x-artifact-client-ci"?: string | undefined;
  "x-artifact-client-interactive"?: number | undefined;
  hash: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const DownloadArtifactRequest$outboundSchema: z.ZodType<
  DownloadArtifactRequest$Outbound,
  z.ZodTypeDef,
  DownloadArtifactRequest
> = z.object({
  xArtifactClientCi: z.string().optional(),
  xArtifactClientInteractive: z.number().int().optional(),
  hash: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    xArtifactClientCi: "x-artifact-client-ci",
    xArtifactClientInteractive: "x-artifact-client-interactive",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadArtifactRequest$ {
  /** @deprecated use `DownloadArtifactRequest$inboundSchema` instead. */
  export const inboundSchema = DownloadArtifactRequest$inboundSchema;
  /** @deprecated use `DownloadArtifactRequest$outboundSchema` instead. */
  export const outboundSchema = DownloadArtifactRequest$outboundSchema;
  /** @deprecated use `DownloadArtifactRequest$Outbound` instead. */
  export type Outbound = DownloadArtifactRequest$Outbound;
}
