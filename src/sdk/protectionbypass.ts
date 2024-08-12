/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { protectionBypassUpdate } from "../funcs/protectionBypassUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
    UpdateProjectProtectionBypassRequestBody,
    UpdateProjectProtectionBypassResponseBody,
} from "../models/updateprojectprotectionbypassop.js";
import { unwrapAsync } from "../types/fp.js";

export class ProtectionBypass extends ClientSDK {
    /**
     * Update Protection Bypass for Automation
     *
     * @remarks
     * Update the deployment protection automation bypass for a project
     */
    async update(
        idOrName: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        requestBody?: UpdateProjectProtectionBypassRequestBody | undefined,
        options?: RequestOptions
    ): Promise<UpdateProjectProtectionBypassResponseBody> {
        return unwrapAsync(
            protectionBypassUpdate(this, idOrName, teamId, slug, requestBody, options)
        );
    }
}