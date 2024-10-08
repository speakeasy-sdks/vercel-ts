/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { promotionsCreate } from "../funcs/promotionsCreate.js";
import { promotionsListAliases } from "../funcs/promotionsListAliases.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  ListPromoteAliasesRequest,
  ListPromoteAliasesResponse,
} from "../models/listpromotealiasesop.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Promotions extends ClientSDK {
  /**
   * Points all production domains for a project to the given deploy
   *
   * @remarks
   * Allows users to promote a deployment to production. Note: This does NOT rebuild the deployment. If you need that, then call create-deployments endpoint.
   */
  async create(
    projectId: string,
    deploymentId: string,
    teamId?: string | undefined,
    slug?: string | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(promotionsCreate(
      this,
      projectId,
      deploymentId,
      teamId,
      slug,
      options,
    ));
  }

  /**
   * Gets a list of aliases with status for the current promote
   *
   * @remarks
   * Get a list of aliases related to the last promote request with their mapping status
   */
  async listAliases(
    request: ListPromoteAliasesRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<ListPromoteAliasesResponse>> {
    return unwrapResultIterator(promotionsListAliases(
      this,
      request,
      options,
    ));
  }
}
