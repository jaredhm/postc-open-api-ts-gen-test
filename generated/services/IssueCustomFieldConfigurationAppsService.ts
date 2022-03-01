/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldConfigurations } from '../models/CustomFieldConfigurations';
import type { PageBeanContextualConfiguration } from '../models/PageBeanContextualConfiguration';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueCustomFieldConfigurationAppsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get custom field configurations
     * Returns a [paginated](#pagination) list of configurations for a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/).
     *
     * The result can be filtered by one of these criteria:
     *
     * *  `id`.
     * *  `fieldContextId`.
     * *  `issueId`.
     * *  `projectKeyOrId` and `issueTypeId`.
     *
     * Otherwise, all configurations are returned.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field.
     * @param fieldIdOrKey The ID or key of the custom field, for example `customfield_10000`.
     * @param id The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can't be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`.
     * @param contextId DEPRECATED. Do not use.
     * @param fieldContextId The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can't be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`.
     * @param issueId The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with `contextIds`, `projectKeyOrId`, or `issueTypeId`.
     * @param projectKeyOrId The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can't be provided with `contextIds` or `issueId`.
     * @param issueTypeId The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can't be provided with `contextIds` or `issueId`.
     * @param startAt The index of the first item to return in a page of results (page offset).
     * @param maxResults The maximum number of items to return per page.
     * @returns PageBeanContextualConfiguration Returned if the request is successful.
     * @throws ApiError
     */
    public getCustomFieldConfiguration(
        fieldIdOrKey: string,
        id?: Array<number>,
        contextId?: Array<number>,
        fieldContextId?: Array<number>,
        issueId?: number,
        projectKeyOrId?: string,
        issueTypeId?: string,
        startAt?: number,
        maxResults: number = 100,
    ): CancelablePromise<PageBeanContextualConfiguration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/app/field/{fieldIdOrKey}/context/configuration',
            path: {
                'fieldIdOrKey': fieldIdOrKey,
            },
            query: {
                'id': id,
                'contextId': contextId,
                'fieldContextId': fieldContextId,
                'issueId': issueId,
                'projectKeyOrId': projectKeyOrId,
                'issueTypeId': issueTypeId,
                'startAt': startAt,
                'maxResults': maxResults,
            },
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field.`,
                404: `Returned if the custom field is not found.`,
            },
        });
    }

    /**
     * Update custom field configurations
     * Update the configuration for contexts of a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/).
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field.
     * @param fieldIdOrKey The ID or key of the custom field, for example `customfield_10000`.
     * @param requestBody
     * @returns any Returned if the request is successful.
     * @throws ApiError
     */
    public updateCustomFieldConfiguration(
        fieldIdOrKey: string,
        requestBody: CustomFieldConfigurations,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/app/field/{fieldIdOrKey}/context/configuration',
            path: {
                'fieldIdOrKey': fieldIdOrKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field.`,
                404: `Returned if the custom field is not found.`,
            },
        });
    }

}