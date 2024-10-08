/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accessGroupsCreate } from "../funcs/accessGroupsCreate.js";
import { accessGroupsDelete } from "../funcs/accessGroupsDelete.js";
import { accessGroupsList } from "../funcs/accessGroupsList.js";
import { accessGroupsListMembers } from "../funcs/accessGroupsListMembers.js";
import { accessGroupsListProjects } from "../funcs/accessGroupsListProjects.js";
import { accessGroupsRead } from "../funcs/accessGroupsRead.js";
import { accessGroupsUpdate } from "../funcs/accessGroupsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { AccessGroup } from "../models/accessgroup.js";
import {
  CreateAccessGroupRequestBody,
  CreateAccessGroupResponseBody,
} from "../models/createaccessgroupop.js";
import {
  ListAccessGroupMembersRequest,
  ListAccessGroupMembersResponseBody,
} from "../models/listaccessgroupmembersop.js";
import {
  ListAccessGroupProjectsRequest,
  ListAccessGroupProjectsResponseBody,
} from "../models/listaccessgroupprojectsop.js";
import {
  ListAccessGroupsRequest,
  ListAccessGroupsResponseBody,
} from "../models/listaccessgroupsop.js";
import { ReadAccessGroupResponseBody } from "../models/readaccessgroupop.js";
import { UpdateAccessGroupRequestBody } from "../models/updateaccessgroupop.js";
import { unwrapAsync } from "../types/fp.js";

export class AccessGroups extends ClientSDK {
  /**
   * Reads an access group
   *
   * @remarks
   * Allows to read an access group
   */
  async read(
    idOrName: string,
    teamId?: string | undefined,
    slug?: string | undefined,
    options?: RequestOptions,
  ): Promise<ReadAccessGroupResponseBody> {
    return unwrapAsync(accessGroupsRead(
      this,
      idOrName,
      teamId,
      slug,
      options,
    ));
  }

  /**
   * Update an access group
   *
   * @remarks
   * Allows to update an access group metadata
   */
  async update(
    idOrName: string,
    teamId?: string | undefined,
    slug?: string | undefined,
    requestBody?: UpdateAccessGroupRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<AccessGroup> {
    return unwrapAsync(accessGroupsUpdate(
      this,
      idOrName,
      teamId,
      slug,
      requestBody,
      options,
    ));
  }

  /**
   * Deletes an access group
   *
   * @remarks
   * Allows to delete an access group
   */
  async delete(
    idOrName: string,
    teamId?: string | undefined,
    slug?: string | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(accessGroupsDelete(
      this,
      idOrName,
      teamId,
      slug,
      options,
    ));
  }

  /**
   * List members of an access group
   *
   * @remarks
   * List members of an access group
   */
  async listMembers(
    request: ListAccessGroupMembersRequest,
    options?: RequestOptions,
  ): Promise<ListAccessGroupMembersResponseBody> {
    return unwrapAsync(accessGroupsListMembers(
      this,
      request,
      options,
    ));
  }

  /**
   * List access groups for a team, project or member
   *
   * @remarks
   * List access groups
   */
  async list(
    request: ListAccessGroupsRequest,
    options?: RequestOptions,
  ): Promise<ListAccessGroupsResponseBody> {
    return unwrapAsync(accessGroupsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Creates an access group
   *
   * @remarks
   * Allows to create an access group
   */
  async create(
    teamId?: string | undefined,
    slug?: string | undefined,
    requestBody?: CreateAccessGroupRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<CreateAccessGroupResponseBody> {
    return unwrapAsync(accessGroupsCreate(
      this,
      teamId,
      slug,
      requestBody,
      options,
    ));
  }

  /**
   * List projects of an access group
   *
   * @remarks
   * List projects of an access group
   */
  async listProjects(
    request: ListAccessGroupProjectsRequest,
    options?: RequestOptions,
  ): Promise<ListAccessGroupProjectsResponseBody> {
    return unwrapAsync(accessGroupsListProjects(
      this,
      request,
      options,
    ));
  }
}
