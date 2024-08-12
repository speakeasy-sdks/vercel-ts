/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { integrationsDeleteConfiguration } from "../funcs/integrationsDeleteConfiguration.js";
import { integrationsGetConfiguration } from "../funcs/integrationsGetConfiguration.js";
import { integrationsGetConfigurations } from "../funcs/integrationsGetConfigurations.js";
import { integrationsGetGitNamespaces } from "../funcs/integrationsGetGitNamespaces.js";
import { integrationsSearchRepos } from "../funcs/integrationsSearchRepos.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { GetConfigurationResponseBody } from "../models/getconfigurationop.js";
import { GetConfigurationsResponseBody, View } from "../models/getconfigurationsop.js";
import { GitNamespacesResponseBody, Provider } from "../models/gitnamespacesop.js";
import { SearchRepoRequest, SearchRepoResponseBody } from "../models/searchrepoop.js";
import { unwrapAsync } from "../types/fp.js";

export class Integrations extends ClientSDK {
    /**
     * Get configurations for the authenticated user or team
     *
     * @remarks
     * Allows to retrieve all configurations for an authenticated integration. When the `project` view is used, configurations generated for the authorization flow will be filtered out of the results.
     */
    async getConfigurations(
        view: View,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<Array<GetConfigurationsResponseBody>> {
        return unwrapAsync(integrationsGetConfigurations(this, view, teamId, slug, options));
    }

    /**
     * Retrieve an integration configuration
     *
     * @remarks
     * Allows to retrieve a the configuration with the provided id in case it exists. The authenticated user or team must be the owner of the config in order to access it.
     */
    async getConfiguration(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<GetConfigurationResponseBody> {
        return unwrapAsync(integrationsGetConfiguration(this, id, teamId, slug, options));
    }

    /**
     * Delete an integration configuration
     *
     * @remarks
     * Allows to remove the configuration with the `id` provided in the parameters. The configuration and all of its resources will be removed. This includes Webhooks, LogDrains and Project Env variables.
     */
    async deleteConfiguration(
        id: string,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(integrationsDeleteConfiguration(this, id, teamId, slug, options));
    }

    /**
     * List git namespaces by provider
     *
     * @remarks
     * Lists git namespaces for a supported provider. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider is not provided, it will try to obtain it from the user that authenticated the request.
     */
    async getGitNamespaces(
        host?: string | undefined,
        provider?: Provider | undefined,
        teamId?: string | undefined,
        slug?: string | undefined,
        options?: RequestOptions
    ): Promise<Array<GitNamespacesResponseBody>> {
        return unwrapAsync(
            integrationsGetGitNamespaces(this, host, provider, teamId, slug, options)
        );
    }

    /**
     * List git repositories linked to namespace by provider
     *
     * @remarks
     * Lists git repositories linked to a namespace `id` for a supported provider. A specific namespace `id` can be obtained via the `git-namespaces`  endpoint. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider or namespace is not provided, it will try to obtain it from the user that authenticated the request.
     */
    async searchRepos(
        request?: SearchRepoRequest | undefined,
        options?: RequestOptions
    ): Promise<SearchRepoResponseBody> {
        return unwrapAsync(integrationsSearchRepos(this, request, options));
    }
}
