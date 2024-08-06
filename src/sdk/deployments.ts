/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsCancel } from "../funcs/deploymentsCancel.js";
import { deploymentsCreate } from "../funcs/deploymentsCreate.js";
import { deploymentsDelete } from "../funcs/deploymentsDelete.js";
import { deploymentsGetDeployment } from "../funcs/deploymentsGetDeployment.js";
import {
    deploymentsGetDeploymentEvents,
    GetDeploymentEventsAcceptEnum,
} from "../funcs/deploymentsGetDeploymentEvents.js";
import { deploymentsGetDeploymentFileContents } from "../funcs/deploymentsGetDeploymentFileContents.js";
import { deploymentsList } from "../funcs/deploymentsList.js";
import { deploymentsListDeploymentFiles } from "../funcs/deploymentsListDeploymentFiles.js";
import { deploymentsUploadFile } from "../funcs/deploymentsUploadFile.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CancelDeploymentResponseBody } from "../models/canceldeploymentop.js";
import {
    CreateDeploymentRequest,
    CreateDeploymentResponseBody,
} from "../models/createdeploymentop.js";
import { DeleteDeploymentResponseBody } from "../models/deletedeploymentop.js";
import { FileTree } from "../models/filetree.js";
import {
    GetDeploymentEventsRequest,
    GetDeploymentEventsResponse,
} from "../models/getdeploymenteventsop.js";
import { GetDeploymentFileContentsRequest } from "../models/getdeploymentfilecontentsop.js";
import { GetDeploymentResponseBody } from "../models/getdeploymentop.js";
import { GetDeploymentsRequest, GetDeploymentsResponseBody } from "../models/getdeploymentsop.js";
import { UploadFileRequest, UploadFileResponseBody } from "../models/uploadfileop.js";
import { unwrapAsync } from "../types/fp.js";

export { GetDeploymentEventsAcceptEnum } from "../funcs/deploymentsGetDeploymentEvents.js";

export class Deployments extends ClientSDK {
    /**
     * Get deployment events
     *
     * @remarks
     * Get the build logs of a deployment by deployment ID and build ID. It can work as an infinite stream of logs or as a JSON endpoint depending on the input parameters.
     */
    async getDeploymentEvents(
        request: GetDeploymentEventsRequest,
        options?: RequestOptions & { acceptHeaderOverride?: GetDeploymentEventsAcceptEnum }
    ): Promise<GetDeploymentEventsResponse> {
        return unwrapAsync(deploymentsGetDeploymentEvents(this, request, options));
    }

    /**
     * Get a deployment by ID or URL
     *
     * @remarks
     * Retrieves information for a deployment either by supplying its ID (`id` property) or Hostname (`url` property). Additional details will be included when the authenticated user or team is an owner of the deployment.
     */
    async getDeployment(
        idOrUrl: string,
        withGitRepoInfo?: string | undefined,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<GetDeploymentResponseBody> {
        return unwrapAsync(
            deploymentsGetDeployment(this, idOrUrl, withGitRepoInfo, teamId, slug, options)
        );
    }

    /**
     * Create a new deployment
     *
     * @remarks
     * Create a new deployment with all the required and intended data. If the deployment is not a git deployment, all files must be provided with the request, either referenced or inlined. Additionally, a deployment id can be specified to redeploy a previous deployment.
     */
    async create(
        request?: CreateDeploymentRequest | undefined,
        options?: RequestOptions
    ): Promise<CreateDeploymentResponseBody> {
        return unwrapAsync(deploymentsCreate(this, request, options));
    }

    /**
     * Cancel a deployment
     *
     * @remarks
     * This endpoint allows you to cancel a deployment which is currently building, by supplying its `id` in the URL.
     */
    async cancel(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<CancelDeploymentResponseBody> {
        return unwrapAsync(deploymentsCancel(this, id, teamId, slug, options));
    }

    /**
     * Upload Deployment Files
     *
     * @remarks
     * Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that's completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you'll receive a status code 200 with an empty body.
     */
    async uploadFile(
        request?: UploadFileRequest | undefined,
        options?: RequestOptions
    ): Promise<UploadFileResponseBody> {
        return unwrapAsync(deploymentsUploadFile(this, request, options));
    }

    /**
     * List Deployment Files
     *
     * @remarks
     * Allows to retrieve the file structure of a deployment by supplying the deployment unique identifier.
     */
    async listDeploymentFiles(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<Array<FileTree>> {
        return unwrapAsync(deploymentsListDeploymentFiles(this, id, teamId, slug, options));
    }

    /**
     * Get Deployment File Contents
     *
     * @remarks
     * Allows to retrieve the content of a file by supplying the file identifier and the deployment unique identifier. The response body will contain a JSON response containing the contents of the file encoded as base64.
     */
    async getDeploymentFileContents(
        request: GetDeploymentFileContentsRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(deploymentsGetDeploymentFileContents(this, request, options));
    }

    /**
     * List deployments
     *
     * @remarks
     * List deployments under the authenticated user or team. If a deployment hasn't finished uploading (is incomplete), the `url` property will have a value of `null`.
     */
    async list(
        request?: GetDeploymentsRequest | undefined,
        options?: RequestOptions
    ): Promise<GetDeploymentsResponseBody> {
        return unwrapAsync(deploymentsList(this, request, options));
    }

    /**
     * Delete a Deployment
     *
     * @remarks
     * This API allows you to delete a deployment, either by supplying its `id` in the URL or the `url` of the deployment as a query parameter. You can obtain the ID, for example, by listing all deployments.
     */
    async delete(
        id: string,
        url?: string | undefined,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<DeleteDeploymentResponseBody> {
        return unwrapAsync(deploymentsDelete(this, id, url, teamId, slug, options));
    }
}
