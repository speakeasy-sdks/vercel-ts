/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dnsCreateRecord } from "../funcs/dnsCreateRecord.js";
import { dnsListRecords } from "../funcs/dnsListRecords.js";
import { dnsRemoveRecord } from "../funcs/dnsRemoveRecord.js";
import { dnsUpdateRecord } from "../funcs/dnsUpdateRecord.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  CreateRecordRequestBody,
  CreateRecordResponseBody,
} from "../models/createrecordop.js";
import {
  GetRecordsRequest,
  GetRecordsResponse,
} from "../models/getrecordsop.js";
import { RemoveRecordResponseBody } from "../models/removerecordop.js";
import {
  UpdateRecordRequestBody,
  UpdateRecordResponseBody,
} from "../models/updaterecordop.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Dns extends ClientSDK {
  /**
   * List existing DNS records
   *
   * @remarks
   * Retrieves a list of DNS records created for a domain name. By default it returns 20 records if no limit is provided. The rest can be retrieved using the pagination options.
   */
  async listRecords(
    request: GetRecordsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<GetRecordsResponse>> {
    return unwrapResultIterator(dnsListRecords(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a DNS record
   *
   * @remarks
   * Creates a DNS record for a domain.
   */
  async createRecord(
    domain: string,
    teamId?: string | undefined,
    slug?: string | undefined,
    requestBody?: CreateRecordRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<CreateRecordResponseBody> {
    return unwrapAsync(dnsCreateRecord(
      this,
      domain,
      teamId,
      slug,
      requestBody,
      options,
    ));
  }

  /**
   * Update an existing DNS record
   *
   * @remarks
   * Updates an existing DNS record for a domain name.
   */
  async updateRecord(
    recordId: string,
    teamId?: string | undefined,
    slug?: string | undefined,
    requestBody?: UpdateRecordRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<UpdateRecordResponseBody> {
    return unwrapAsync(dnsUpdateRecord(
      this,
      recordId,
      teamId,
      slug,
      requestBody,
      options,
    ));
  }

  /**
   * Delete a DNS record
   *
   * @remarks
   * Removes an existing DNS record from a domain name.
   */
  async removeRecord(
    domain: string,
    recordId: string,
    teamId?: string | undefined,
    slug?: string | undefined,
    options?: RequestOptions,
  ): Promise<RemoveRecordResponseBody> {
    return unwrapAsync(dnsRemoveRecord(
      this,
      domain,
      recordId,
      teamId,
      slug,
      options,
    ));
  }
}
