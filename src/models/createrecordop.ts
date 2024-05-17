/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of record, it could be one of the valid DNS records.
 */
export enum CreateRecordRequestBodyDnsRequest10Type {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type RequestBodyHttps = {
    priority: number | null;
    target: string;
    params?: string | undefined;
};

export type Ten = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest10Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    https: RequestBodyHttps;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};

/**
 * The type of record, it could be one of the valid DNS records.
 */
export enum CreateRecordRequestBodyDnsRequest9Type {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type Nine = {
    /**
     * A subdomain name.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest9Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * An NS domain value.
     */
    value?: string | undefined;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};

/**
 * The type of record, it could be one of the valid DNS records.
 */
export enum CreateRecordRequestBodyDnsRequest8Type {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type Eight = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest8Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * A TXT record containing arbitrary text.
     */
    value: string;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};

/**
 * The type of record, it could be one of the valid DNS records.
 */
export enum CreateRecordRequestBodyDnsRequest7Type {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type RequestBodySrv = {
    priority: number | null;
    weight: number | null;
    port: number | null;
    target: string;
};

export type Seven = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest7Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    srv: RequestBodySrv;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};

/**
 * The type of record, it could be one of the valid DNS records.
 */
export enum CreateRecordRequestBodyDnsRequest6Type {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type Six = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest6Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * An MX record specifying the mail server responsible for accepting messages on behalf of the domain name.
     */
    value: string;
    mxPriority: number;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};

/**
 * The type of record, it could be one of the valid DNS records.
 */
export enum CreateRecordRequestBodyDnsRequest5Type {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type RequestBody5 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequest5Type;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * A CNAME record mapping to another domain name.
     */
    value?: string | undefined;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};

/**
 * The type of record, it could be one of the valid DNS records.
 */
export enum CreateRecordRequestBodyDnsRequestType {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type RequestBody4 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsRequestType;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * A CAA record to specify which Certificate Authorities (CAs) are allowed to issue certificates for the domain.
     */
    value: string;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};

/**
 * The type of record, it could be one of the valid DNS records.
 */
export enum CreateRecordRequestBodyDnsType {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type RequestBody3 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyDnsType;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * An ALIAS virtual record pointing to a hostname resolved to an A record on server side.
     */
    value: string;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};

/**
 * The type of record, it could be one of the valid DNS records.
 */
export enum CreateRecordRequestBodyType {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type RequestBody2 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: CreateRecordRequestBodyType;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * An AAAA record pointing to an IPv6 address.
     */
    value: string;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};

/**
 * The type of record, it could be one of the valid DNS records.
 */
export enum RequestBodyType {
    A = "A",
    Aaaa = "AAAA",
    Alias = "ALIAS",
    Caa = "CAA",
    Cname = "CNAME",
    Https = "HTTPS",
    Mx = "MX",
    Srv = "SRV",
    Txt = "TXT",
    Ns = "NS",
}

export type RequestBody1 = {
    /**
     * A subdomain name or an empty string for the root domain.
     */
    name: string;
    /**
     * The type of record, it could be one of the valid DNS records.
     */
    type: RequestBodyType;
    /**
     * The TTL value. Must be a number between 60 and 2147483647. Default value is 60.
     */
    ttl?: number | undefined;
    /**
     * The record value must be a valid IPv4 address.
     */
    value: string;
    /**
     * A comment to add context on what this DNS record is for
     */
    comment?: string | undefined;
};

export type CreateRecordRequestBody =
    | RequestBody1
    | RequestBody2
    | RequestBody3
    | RequestBody4
    | RequestBody5
    | Seven
    | Eight
    | Nine
    | Ten
    | Six;

export type CreateRecordRequest = {
    /**
     * The domain used to create the DNS record.
     */
    domain: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?:
        | RequestBody1
        | RequestBody2
        | RequestBody3
        | RequestBody4
        | RequestBody5
        | Seven
        | Eight
        | Nine
        | Ten
        | Six
        | undefined;
};

export type CreateRecordResponseBody2 = {
    /**
     * The id of the newly created DNS record
     */
    uid: string;
};

export type CreateRecordResponseBody1 = {
    uid: string;
    updated: number;
};

/**
 * Successful response showing the uid of the newly created DNS record.
 */
export type CreateRecordResponseBody = CreateRecordResponseBody2 | CreateRecordResponseBody1;

/** @internal */
export namespace CreateRecordRequestBodyDnsRequest10Type$ {
    export const inboundSchema = z.nativeEnum(CreateRecordRequestBodyDnsRequest10Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RequestBodyHttps$ {
    export const inboundSchema: z.ZodType<RequestBodyHttps, z.ZodTypeDef, unknown> = z
        .object({
            priority: z.nullable(z.number()),
            target: z.string(),
            params: z.string().optional(),
        })
        .transform((v) => {
            return {
                priority: v.priority,
                target: v.target,
                ...(v.params === undefined ? null : { params: v.params }),
            };
        });

    export type Outbound = {
        priority: number | null;
        target: string;
        params?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestBodyHttps> = z
        .object({
            priority: z.nullable(z.number()),
            target: z.string(),
            params: z.string().optional(),
        })
        .transform((v) => {
            return {
                priority: v.priority,
                target: v.target,
                ...(v.params === undefined ? null : { params: v.params }),
            };
        });
}

/** @internal */
export namespace Ten$ {
    export const inboundSchema: z.ZodType<Ten, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest10Type$.inboundSchema,
            ttl: z.number().optional(),
            https: z.lazy(() => RequestBodyHttps$.inboundSchema),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                https: v.https,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });

    export type Outbound = {
        name: string;
        type: string;
        ttl?: number | undefined;
        https: RequestBodyHttps$.Outbound;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Ten> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest10Type$.outboundSchema,
            ttl: z.number().optional(),
            https: z.lazy(() => RequestBodyHttps$.outboundSchema),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                https: v.https,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });
}

/** @internal */
export namespace CreateRecordRequestBodyDnsRequest9Type$ {
    export const inboundSchema = z.nativeEnum(CreateRecordRequestBodyDnsRequest9Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Nine$ {
    export const inboundSchema: z.ZodType<Nine, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest9Type$.inboundSchema,
            ttl: z.number().optional(),
            value: z.string().optional(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                ...(v.value === undefined ? null : { value: v.value }),
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });

    export type Outbound = {
        name: string;
        type: string;
        ttl?: number | undefined;
        value?: string | undefined;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Nine> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest9Type$.outboundSchema,
            ttl: z.number().optional(),
            value: z.string().optional(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                ...(v.value === undefined ? null : { value: v.value }),
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });
}

/** @internal */
export namespace CreateRecordRequestBodyDnsRequest8Type$ {
    export const inboundSchema = z.nativeEnum(CreateRecordRequestBodyDnsRequest8Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Eight$ {
    export const inboundSchema: z.ZodType<Eight, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest8Type$.inboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });

    export type Outbound = {
        name: string;
        type: string;
        ttl?: number | undefined;
        value: string;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Eight> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest8Type$.outboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });
}

/** @internal */
export namespace CreateRecordRequestBodyDnsRequest7Type$ {
    export const inboundSchema = z.nativeEnum(CreateRecordRequestBodyDnsRequest7Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RequestBodySrv$ {
    export const inboundSchema: z.ZodType<RequestBodySrv, z.ZodTypeDef, unknown> = z
        .object({
            priority: z.nullable(z.number()),
            weight: z.nullable(z.number()),
            port: z.nullable(z.number()),
            target: z.string(),
        })
        .transform((v) => {
            return {
                priority: v.priority,
                weight: v.weight,
                port: v.port,
                target: v.target,
            };
        });

    export type Outbound = {
        priority: number | null;
        weight: number | null;
        port: number | null;
        target: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestBodySrv> = z
        .object({
            priority: z.nullable(z.number()),
            weight: z.nullable(z.number()),
            port: z.nullable(z.number()),
            target: z.string(),
        })
        .transform((v) => {
            return {
                priority: v.priority,
                weight: v.weight,
                port: v.port,
                target: v.target,
            };
        });
}

/** @internal */
export namespace Seven$ {
    export const inboundSchema: z.ZodType<Seven, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest7Type$.inboundSchema,
            ttl: z.number().optional(),
            srv: z.lazy(() => RequestBodySrv$.inboundSchema),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                srv: v.srv,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });

    export type Outbound = {
        name: string;
        type: string;
        ttl?: number | undefined;
        srv: RequestBodySrv$.Outbound;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Seven> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest7Type$.outboundSchema,
            ttl: z.number().optional(),
            srv: z.lazy(() => RequestBodySrv$.outboundSchema),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                srv: v.srv,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });
}

/** @internal */
export namespace CreateRecordRequestBodyDnsRequest6Type$ {
    export const inboundSchema = z.nativeEnum(CreateRecordRequestBodyDnsRequest6Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Six$ {
    export const inboundSchema: z.ZodType<Six, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest6Type$.inboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            mxPriority: z.number(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                mxPriority: v.mxPriority,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });

    export type Outbound = {
        name: string;
        type: string;
        ttl?: number | undefined;
        value: string;
        mxPriority: number;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Six> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest6Type$.outboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            mxPriority: z.number(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                mxPriority: v.mxPriority,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });
}

/** @internal */
export namespace CreateRecordRequestBodyDnsRequest5Type$ {
    export const inboundSchema = z.nativeEnum(CreateRecordRequestBodyDnsRequest5Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RequestBody5$ {
    export const inboundSchema: z.ZodType<RequestBody5, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest5Type$.inboundSchema,
            ttl: z.number().optional(),
            value: z.string().optional(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                ...(v.value === undefined ? null : { value: v.value }),
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });

    export type Outbound = {
        name: string;
        type: string;
        ttl?: number | undefined;
        value?: string | undefined;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestBody5> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequest5Type$.outboundSchema,
            ttl: z.number().optional(),
            value: z.string().optional(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                ...(v.value === undefined ? null : { value: v.value }),
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });
}

/** @internal */
export namespace CreateRecordRequestBodyDnsRequestType$ {
    export const inboundSchema = z.nativeEnum(CreateRecordRequestBodyDnsRequestType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RequestBody4$ {
    export const inboundSchema: z.ZodType<RequestBody4, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequestType$.inboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });

    export type Outbound = {
        name: string;
        type: string;
        ttl?: number | undefined;
        value: string;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestBody4> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsRequestType$.outboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });
}

/** @internal */
export namespace CreateRecordRequestBodyDnsType$ {
    export const inboundSchema = z.nativeEnum(CreateRecordRequestBodyDnsType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RequestBody3$ {
    export const inboundSchema: z.ZodType<RequestBody3, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsType$.inboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });

    export type Outbound = {
        name: string;
        type: string;
        ttl?: number | undefined;
        value: string;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestBody3> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyDnsType$.outboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });
}

/** @internal */
export namespace CreateRecordRequestBodyType$ {
    export const inboundSchema = z.nativeEnum(CreateRecordRequestBodyType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RequestBody2$ {
    export const inboundSchema: z.ZodType<RequestBody2, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyType$.inboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });

    export type Outbound = {
        name: string;
        type: string;
        ttl?: number | undefined;
        value: string;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestBody2> = z
        .object({
            name: z.string(),
            type: CreateRecordRequestBodyType$.outboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });
}

/** @internal */
export namespace RequestBodyType$ {
    export const inboundSchema = z.nativeEnum(RequestBodyType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace RequestBody1$ {
    export const inboundSchema: z.ZodType<RequestBody1, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            type: RequestBodyType$.inboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });

    export type Outbound = {
        name: string;
        type: string;
        ttl?: number | undefined;
        value: string;
        comment?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestBody1> = z
        .object({
            name: z.string(),
            type: RequestBodyType$.outboundSchema,
            ttl: z.number().optional(),
            value: z.string(),
            comment: z.string().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                type: v.type,
                ...(v.ttl === undefined ? null : { ttl: v.ttl }),
                value: v.value,
                ...(v.comment === undefined ? null : { comment: v.comment }),
            };
        });
}

/** @internal */
export namespace CreateRecordRequestBody$ {
    export const inboundSchema: z.ZodType<CreateRecordRequestBody, z.ZodTypeDef, unknown> = z.union(
        [
            z.lazy(() => RequestBody1$.inboundSchema),
            z.lazy(() => RequestBody2$.inboundSchema),
            z.lazy(() => RequestBody3$.inboundSchema),
            z.lazy(() => RequestBody4$.inboundSchema),
            z.lazy(() => RequestBody5$.inboundSchema),
            z.lazy(() => Seven$.inboundSchema),
            z.lazy(() => Eight$.inboundSchema),
            z.lazy(() => Nine$.inboundSchema),
            z.lazy(() => Ten$.inboundSchema),
            z.lazy(() => Six$.inboundSchema),
        ]
    );

    export type Outbound =
        | RequestBody1$.Outbound
        | RequestBody2$.Outbound
        | RequestBody3$.Outbound
        | RequestBody4$.Outbound
        | RequestBody5$.Outbound
        | Seven$.Outbound
        | Eight$.Outbound
        | Nine$.Outbound
        | Ten$.Outbound
        | Six$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRecordRequestBody> =
        z.union([
            z.lazy(() => RequestBody1$.outboundSchema),
            z.lazy(() => RequestBody2$.outboundSchema),
            z.lazy(() => RequestBody3$.outboundSchema),
            z.lazy(() => RequestBody4$.outboundSchema),
            z.lazy(() => RequestBody5$.outboundSchema),
            z.lazy(() => Seven$.outboundSchema),
            z.lazy(() => Eight$.outboundSchema),
            z.lazy(() => Nine$.outboundSchema),
            z.lazy(() => Ten$.outboundSchema),
            z.lazy(() => Six$.outboundSchema),
        ]);
}

/** @internal */
export namespace CreateRecordRequest$ {
    export const inboundSchema: z.ZodType<CreateRecordRequest, z.ZodTypeDef, unknown> = z
        .object({
            domain: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            RequestBody: z
                .union([
                    z.lazy(() => RequestBody1$.inboundSchema),
                    z.lazy(() => RequestBody2$.inboundSchema),
                    z.lazy(() => RequestBody3$.inboundSchema),
                    z.lazy(() => RequestBody4$.inboundSchema),
                    z.lazy(() => RequestBody5$.inboundSchema),
                    z.lazy(() => Seven$.inboundSchema),
                    z.lazy(() => Eight$.inboundSchema),
                    z.lazy(() => Nine$.inboundSchema),
                    z.lazy(() => Ten$.inboundSchema),
                    z.lazy(() => Six$.inboundSchema),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        domain: string;
        teamId?: string | undefined;
        slug?: string | undefined;
        RequestBody?:
            | RequestBody1$.Outbound
            | RequestBody2$.Outbound
            | RequestBody3$.Outbound
            | RequestBody4$.Outbound
            | RequestBody5$.Outbound
            | Seven$.Outbound
            | Eight$.Outbound
            | Nine$.Outbound
            | Ten$.Outbound
            | Six$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRecordRequest> = z
        .object({
            domain: z.string(),
            teamId: z.string().optional(),
            slug: z.string().optional(),
            requestBody: z
                .union([
                    z.lazy(() => RequestBody1$.outboundSchema),
                    z.lazy(() => RequestBody2$.outboundSchema),
                    z.lazy(() => RequestBody3$.outboundSchema),
                    z.lazy(() => RequestBody4$.outboundSchema),
                    z.lazy(() => RequestBody5$.outboundSchema),
                    z.lazy(() => Seven$.outboundSchema),
                    z.lazy(() => Eight$.outboundSchema),
                    z.lazy(() => Nine$.outboundSchema),
                    z.lazy(() => Ten$.outboundSchema),
                    z.lazy(() => Six$.outboundSchema),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                domain: v.domain,
                ...(v.teamId === undefined ? null : { teamId: v.teamId }),
                ...(v.slug === undefined ? null : { slug: v.slug }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace CreateRecordResponseBody2$ {
    export const inboundSchema: z.ZodType<CreateRecordResponseBody2, z.ZodTypeDef, unknown> = z
        .object({
            uid: z.string(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
            };
        });

    export type Outbound = {
        uid: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRecordResponseBody2> = z
        .object({
            uid: z.string(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
            };
        });
}

/** @internal */
export namespace CreateRecordResponseBody1$ {
    export const inboundSchema: z.ZodType<CreateRecordResponseBody1, z.ZodTypeDef, unknown> = z
        .object({
            uid: z.string(),
            updated: z.number(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                updated: v.updated,
            };
        });

    export type Outbound = {
        uid: string;
        updated: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRecordResponseBody1> = z
        .object({
            uid: z.string(),
            updated: z.number(),
        })
        .transform((v) => {
            return {
                uid: v.uid,
                updated: v.updated,
            };
        });
}

/** @internal */
export namespace CreateRecordResponseBody$ {
    export const inboundSchema: z.ZodType<CreateRecordResponseBody, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => CreateRecordResponseBody2$.inboundSchema),
            z.lazy(() => CreateRecordResponseBody1$.inboundSchema),
        ]);

    export type Outbound =
        | CreateRecordResponseBody2$.Outbound
        | CreateRecordResponseBody1$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRecordResponseBody> =
        z.union([
            z.lazy(() => CreateRecordResponseBody2$.outboundSchema),
            z.lazy(() => CreateRecordResponseBody1$.outboundSchema),
        ]);
}