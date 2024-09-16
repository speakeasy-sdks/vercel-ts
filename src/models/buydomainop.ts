/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";

export type BuyDomainRequestBody = {
  /**
   * The domain name to purchase.
   */
  name: string;
  /**
   * The price you expect to be charged for the purchase.
   */
  expectedPrice?: number | undefined;
  /**
   * Indicates whether the domain should be automatically renewed.
   */
  renew?: boolean | undefined;
  /**
   * The country of the domain registrant
   */
  country: string;
  /**
   * The company name of the domain registrant
   */
  orgName?: string | undefined;
  /**
   * The first name of the domain registrant
   */
  firstName: string;
  /**
   * The last name of the domain registrant
   */
  lastName: string;
  /**
   * The street address of the domain registrant
   */
  address1: string;
  /**
   * The city of the domain registrant
   */
  city: string;
  /**
   * The state of the domain registrant
   */
  state: string;
  /**
   * The postal code of the domain registrant
   */
  postalCode: string;
  /**
   * The phone number of the domain registrant
   */
  phone: string;
  /**
   * The email of the domain registrant
   */
  email: string;
};

export type BuyDomainRequest = {
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: BuyDomainRequestBody | undefined;
};

export type BuyDomainDomain = {
  uid: string;
  ns: Array<string>;
  verified: boolean;
  created: number;
  pending: boolean;
};

/**
 * Domain purchase is being processed asynchronously.
 */
export type BuyDomainDomainsResponseBody = {
  domain: BuyDomainDomain;
};

export type BuyDomainDomainsDomain = {
  uid: string;
  ns: Array<string>;
  verified: boolean;
  created: number;
  pending: boolean;
};

/**
 * Successful response for purchasing a Domain.
 */
export type BuyDomainResponseBody = {
  domain: BuyDomainDomainsDomain;
};

export type BuyDomainResponse =
  | BuyDomainResponseBody
  | BuyDomainDomainsResponseBody;

/** @internal */
export const BuyDomainRequestBody$inboundSchema: z.ZodType<
  BuyDomainRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  expectedPrice: z.number().optional(),
  renew: z.boolean().optional(),
  country: z.string(),
  orgName: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  address1: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  phone: z.string(),
  email: z.string(),
});

/** @internal */
export type BuyDomainRequestBody$Outbound = {
  name: string;
  expectedPrice?: number | undefined;
  renew?: boolean | undefined;
  country: string;
  orgName?: string | undefined;
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  email: string;
};

/** @internal */
export const BuyDomainRequestBody$outboundSchema: z.ZodType<
  BuyDomainRequestBody$Outbound,
  z.ZodTypeDef,
  BuyDomainRequestBody
> = z.object({
  name: z.string(),
  expectedPrice: z.number().optional(),
  renew: z.boolean().optional(),
  country: z.string(),
  orgName: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  address1: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  phone: z.string(),
  email: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuyDomainRequestBody$ {
  /** @deprecated use `BuyDomainRequestBody$inboundSchema` instead. */
  export const inboundSchema = BuyDomainRequestBody$inboundSchema;
  /** @deprecated use `BuyDomainRequestBody$outboundSchema` instead. */
  export const outboundSchema = BuyDomainRequestBody$outboundSchema;
  /** @deprecated use `BuyDomainRequestBody$Outbound` instead. */
  export type Outbound = BuyDomainRequestBody$Outbound;
}

/** @internal */
export const BuyDomainRequest$inboundSchema: z.ZodType<
  BuyDomainRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => BuyDomainRequestBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type BuyDomainRequest$Outbound = {
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?: BuyDomainRequestBody$Outbound | undefined;
};

/** @internal */
export const BuyDomainRequest$outboundSchema: z.ZodType<
  BuyDomainRequest$Outbound,
  z.ZodTypeDef,
  BuyDomainRequest
> = z.object({
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => BuyDomainRequestBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuyDomainRequest$ {
  /** @deprecated use `BuyDomainRequest$inboundSchema` instead. */
  export const inboundSchema = BuyDomainRequest$inboundSchema;
  /** @deprecated use `BuyDomainRequest$outboundSchema` instead. */
  export const outboundSchema = BuyDomainRequest$outboundSchema;
  /** @deprecated use `BuyDomainRequest$Outbound` instead. */
  export type Outbound = BuyDomainRequest$Outbound;
}

/** @internal */
export const BuyDomainDomain$inboundSchema: z.ZodType<
  BuyDomainDomain,
  z.ZodTypeDef,
  unknown
> = z.object({
  uid: z.string(),
  ns: z.array(z.string()),
  verified: z.boolean(),
  created: z.number(),
  pending: z.boolean(),
});

/** @internal */
export type BuyDomainDomain$Outbound = {
  uid: string;
  ns: Array<string>;
  verified: boolean;
  created: number;
  pending: boolean;
};

/** @internal */
export const BuyDomainDomain$outboundSchema: z.ZodType<
  BuyDomainDomain$Outbound,
  z.ZodTypeDef,
  BuyDomainDomain
> = z.object({
  uid: z.string(),
  ns: z.array(z.string()),
  verified: z.boolean(),
  created: z.number(),
  pending: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuyDomainDomain$ {
  /** @deprecated use `BuyDomainDomain$inboundSchema` instead. */
  export const inboundSchema = BuyDomainDomain$inboundSchema;
  /** @deprecated use `BuyDomainDomain$outboundSchema` instead. */
  export const outboundSchema = BuyDomainDomain$outboundSchema;
  /** @deprecated use `BuyDomainDomain$Outbound` instead. */
  export type Outbound = BuyDomainDomain$Outbound;
}

/** @internal */
export const BuyDomainDomainsResponseBody$inboundSchema: z.ZodType<
  BuyDomainDomainsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  domain: z.lazy(() => BuyDomainDomain$inboundSchema),
});

/** @internal */
export type BuyDomainDomainsResponseBody$Outbound = {
  domain: BuyDomainDomain$Outbound;
};

/** @internal */
export const BuyDomainDomainsResponseBody$outboundSchema: z.ZodType<
  BuyDomainDomainsResponseBody$Outbound,
  z.ZodTypeDef,
  BuyDomainDomainsResponseBody
> = z.object({
  domain: z.lazy(() => BuyDomainDomain$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuyDomainDomainsResponseBody$ {
  /** @deprecated use `BuyDomainDomainsResponseBody$inboundSchema` instead. */
  export const inboundSchema = BuyDomainDomainsResponseBody$inboundSchema;
  /** @deprecated use `BuyDomainDomainsResponseBody$outboundSchema` instead. */
  export const outboundSchema = BuyDomainDomainsResponseBody$outboundSchema;
  /** @deprecated use `BuyDomainDomainsResponseBody$Outbound` instead. */
  export type Outbound = BuyDomainDomainsResponseBody$Outbound;
}

/** @internal */
export const BuyDomainDomainsDomain$inboundSchema: z.ZodType<
  BuyDomainDomainsDomain,
  z.ZodTypeDef,
  unknown
> = z.object({
  uid: z.string(),
  ns: z.array(z.string()),
  verified: z.boolean(),
  created: z.number(),
  pending: z.boolean(),
});

/** @internal */
export type BuyDomainDomainsDomain$Outbound = {
  uid: string;
  ns: Array<string>;
  verified: boolean;
  created: number;
  pending: boolean;
};

/** @internal */
export const BuyDomainDomainsDomain$outboundSchema: z.ZodType<
  BuyDomainDomainsDomain$Outbound,
  z.ZodTypeDef,
  BuyDomainDomainsDomain
> = z.object({
  uid: z.string(),
  ns: z.array(z.string()),
  verified: z.boolean(),
  created: z.number(),
  pending: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuyDomainDomainsDomain$ {
  /** @deprecated use `BuyDomainDomainsDomain$inboundSchema` instead. */
  export const inboundSchema = BuyDomainDomainsDomain$inboundSchema;
  /** @deprecated use `BuyDomainDomainsDomain$outboundSchema` instead. */
  export const outboundSchema = BuyDomainDomainsDomain$outboundSchema;
  /** @deprecated use `BuyDomainDomainsDomain$Outbound` instead. */
  export type Outbound = BuyDomainDomainsDomain$Outbound;
}

/** @internal */
export const BuyDomainResponseBody$inboundSchema: z.ZodType<
  BuyDomainResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  domain: z.lazy(() => BuyDomainDomainsDomain$inboundSchema),
});

/** @internal */
export type BuyDomainResponseBody$Outbound = {
  domain: BuyDomainDomainsDomain$Outbound;
};

/** @internal */
export const BuyDomainResponseBody$outboundSchema: z.ZodType<
  BuyDomainResponseBody$Outbound,
  z.ZodTypeDef,
  BuyDomainResponseBody
> = z.object({
  domain: z.lazy(() => BuyDomainDomainsDomain$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuyDomainResponseBody$ {
  /** @deprecated use `BuyDomainResponseBody$inboundSchema` instead. */
  export const inboundSchema = BuyDomainResponseBody$inboundSchema;
  /** @deprecated use `BuyDomainResponseBody$outboundSchema` instead. */
  export const outboundSchema = BuyDomainResponseBody$outboundSchema;
  /** @deprecated use `BuyDomainResponseBody$Outbound` instead. */
  export type Outbound = BuyDomainResponseBody$Outbound;
}

/** @internal */
export const BuyDomainResponse$inboundSchema: z.ZodType<
  BuyDomainResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => BuyDomainResponseBody$inboundSchema),
  z.lazy(() => BuyDomainDomainsResponseBody$inboundSchema),
]);

/** @internal */
export type BuyDomainResponse$Outbound =
  | BuyDomainResponseBody$Outbound
  | BuyDomainDomainsResponseBody$Outbound;

/** @internal */
export const BuyDomainResponse$outboundSchema: z.ZodType<
  BuyDomainResponse$Outbound,
  z.ZodTypeDef,
  BuyDomainResponse
> = z.union([
  z.lazy(() => BuyDomainResponseBody$outboundSchema),
  z.lazy(() => BuyDomainDomainsResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuyDomainResponse$ {
  /** @deprecated use `BuyDomainResponse$inboundSchema` instead. */
  export const inboundSchema = BuyDomainResponse$inboundSchema;
  /** @deprecated use `BuyDomainResponse$outboundSchema` instead. */
  export const outboundSchema = BuyDomainResponse$outboundSchema;
  /** @deprecated use `BuyDomainResponse$Outbound` instead. */
  export type Outbound = BuyDomainResponse$Outbound;
}
