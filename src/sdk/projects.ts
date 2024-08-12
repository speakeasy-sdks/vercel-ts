/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectsCreate } from "../funcs/projectsCreate.js";
import { projectsDelete } from "../funcs/projectsDelete.js";
import { projectsGetAll } from "../funcs/projectsGetAll.js";
import { projectsPause } from "../funcs/projectsPause.js";
import { projectsUnpause } from "../funcs/projectsUnpause.js";
import { projectsUpdate } from "../funcs/projectsUpdate.js";
import { projectsUpdateDataCache } from "../funcs/projectsUpdateDataCache.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CreateProjectRequestBody, CreateProjectResponseBody } from "../models/createprojectop.js";
import { GetProjectsRequest, GetProjectsResponseBody } from "../models/getprojectsop.js";
import {
    UpdateProjectDataCacheRequestBody,
    UpdateProjectDataCacheResponseBody,
} from "../models/updateprojectdatacacheop.js";
import { UpdateProjectRequestBody, UpdateProjectResponseBody } from "../models/updateprojectop.js";
import { unwrapAsync } from "../types/fp.js";

export class Projects extends ClientSDK {
    /**
     * Update the data cache feature
     *
     * @remarks
     * Update the data cache feature on a project.
     */
    async updateDataCache(
        projectId: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: UpdateProjectDataCacheRequestBody | undefined,
        options?: RequestOptions
    ): Promise<UpdateProjectDataCacheResponseBody> {
        return unwrapAsync(
            projectsUpdateDataCache(this, projectId, teamId, slug, requestBody, options)
        );
    }

    /**
     * Retrieve a list of projects
     *
     * @remarks
     * Allows to retrieve the list of projects of the authenticated user or team. The list will be paginated and the provided query parameters allow filtering the returned projects.
     */
    async getAll(
        request?: GetProjectsRequest | undefined,
        options?: RequestOptions
    ): Promise<GetProjectsResponseBody> {
        return unwrapAsync(projectsGetAll(this, request, options));
    }

    /**
     * Create a new project
     *
     * @remarks
     * Allows to create a new project with the provided configuration. It only requires the project `name` but more configuration can be provided to override the defaults.
     */
    async create(
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: CreateProjectRequestBody | undefined,
        options?: RequestOptions
    ): Promise<CreateProjectResponseBody> {
        return unwrapAsync(projectsCreate(this, teamId, slug, requestBody, options));
    }

    /**
     * Update an existing project
     *
     * @remarks
     * Update the fields of a project using either its `name` or `id`.
     */
    async update(
        idOrName: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: UpdateProjectRequestBody | undefined,
        options?: RequestOptions
    ): Promise<UpdateProjectResponseBody> {
        return unwrapAsync(projectsUpdate(this, idOrName, teamId, slug, requestBody, options));
    }

    /**
     * Delete a Project
     *
     * @remarks
     * Delete a specific project by passing either the project `id` or `name` in the URL.
     */
    async delete(
        idOrName: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(projectsDelete(this, idOrName, teamId, slug, options));
    }

    /**
     * Pause a project
     *
     * @remarks
     * Pause a project by passing its project `id` in the URL. If the project does not exist given the id then the request will fail with 400 status code. If the project disables auto assigning custom production domains and blocks the active Production Deployment then the request will return with 200 status code.
     */
    async pause(
        projectId: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(projectsPause(this, projectId, teamId, slug, options));
    }

    /**
     * Unpause a project
     *
     * @remarks
     * Unpause a project by passing its project `id` in the URL. If the project does not exist given the id then the request will fail with 400 status code. If the project enables auto assigning custom production domains and unblocks the active Production Deployment then the request will return with 200 status code.
     */
    async unpause(
        projectId: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(projectsUnpause(this, projectId, teamId, slug, options));
    }
}
