/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tokensCreate } from "../funcs/tokensCreate.js";
import { tokensDelete } from "../funcs/tokensDelete.js";
import { tokensGet } from "../funcs/tokensGet.js";
import { tokensList } from "../funcs/tokensList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  CreateAuthTokenRequestBody,
  CreateAuthTokenResponseBody,
} from "../models/createauthtokenop.js";
import { DeleteAuthTokenResponseBody } from "../models/deleteauthtokenop.js";
import { GetAuthTokenResponseBody } from "../models/getauthtokenop.js";
import { ListAuthTokensResponseBody } from "../models/listauthtokensop.js";
import { unwrapAsync } from "../types/fp.js";

export class Tokens extends ClientSDK {
  /**
   * List Auth Tokens
   *
   * @remarks
   * Retrieve a list of the current User's authentication tokens.
   */
  async list(
    options?: RequestOptions,
  ): Promise<ListAuthTokensResponseBody> {
    return unwrapAsync(tokensList(
      this,
      options,
    ));
  }

  /**
   * Create an Auth Token
   *
   * @remarks
   * Creates and returns a new authentication token for the currently authenticated User. The `bearerToken` property is only provided once, in the response body, so be sure to save it on the client for use with API requests.
   */
  async create(
    teamId?: string | undefined,
    slug?: string | undefined,
    requestBody?: CreateAuthTokenRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<CreateAuthTokenResponseBody> {
    return unwrapAsync(tokensCreate(
      this,
      teamId,
      slug,
      requestBody,
      options,
    ));
  }

  /**
   * Get Auth Token Metadata
   *
   * @remarks
   * Retrieve metadata about an authentication token belonging to the currently authenticated User.
   */
  async get(
    tokenId: string,
    options?: RequestOptions,
  ): Promise<GetAuthTokenResponseBody> {
    return unwrapAsync(tokensGet(
      this,
      tokenId,
      options,
    ));
  }

  /**
   * Delete an authentication token
   *
   * @remarks
   * Invalidate an authentication token, such that it will no longer be valid for future HTTP requests.
   */
  async delete(
    tokenId: string,
    options?: RequestOptions,
  ): Promise<DeleteAuthTokenResponseBody> {
    return unwrapAsync(tokensDelete(
      this,
      tokenId,
      options,
    ));
  }
}
