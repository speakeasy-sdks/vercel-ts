/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { certsGetById } from "../funcs/certsGetById.js";
import { certsIssue } from "../funcs/certsIssue.js";
import { certsRemove } from "../funcs/certsRemove.js";
import { certsUpload } from "../funcs/certsUpload.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { GetCertByIdResponseBody } from "../models/getcertbyidop.js";
import { IssueCertRequestBody, IssueCertResponseBody } from "../models/issuecertop.js";
import { RemoveCertResponseBody } from "../models/removecertop.js";
import { UploadCertRequestBody, UploadCertResponseBody } from "../models/uploadcertop.js";
import { unwrapAsync } from "../types/fp.js";

export class Certs extends ClientSDK {
    /**
     * Get cert by id
     *
     * @remarks
     * Get cert by id
     */
    async getById(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<GetCertByIdResponseBody> {
        return unwrapAsync(certsGetById(this, id, teamId, slug, options));
    }

    /**
     * Remove cert
     *
     * @remarks
     * Remove cert
     */
    async remove(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<RemoveCertResponseBody> {
        return unwrapAsync(certsRemove(this, id, teamId, slug, options));
    }

    /**
     * Issue a new cert
     *
     * @remarks
     * Issue a new cert
     */
    async issue(
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: IssueCertRequestBody | undefined,
        options?: RequestOptions
    ): Promise<IssueCertResponseBody> {
        return unwrapAsync(certsIssue(this, teamId, slug, requestBody, options));
    }

    /**
     * Upload a cert
     *
     * @remarks
     * Upload a cert
     */
    async upload(
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: UploadCertRequestBody | undefined,
        options?: RequestOptions
    ): Promise<UploadCertResponseBody> {
        return unwrapAsync(certsUpload(this, teamId, slug, requestBody, options));
    }
}
