/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityProperty } from '../models/EntityProperty';
import type { PropertyKeys } from '../models/PropertyKeys';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueWorklogPropertiesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get worklog property keys
     * Returns the keys of all properties for a worklog.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * @param issueIdOrKey The ID or key of the issue.
     * @param worklogId The ID of the worklog.
     * @returns PropertyKeys Returned if the request is successful.
     * @throws ApiError
     */
    public getWorklogPropertyKeys(
        issueIdOrKey: string,
        worklogId: string,
    ): CancelablePromise<PropertyKeys> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties',
            path: {
                'issueIdOrKey': issueIdOrKey,
                'worklogId': worklogId,
            },
            errors: {
                400: `Returned if the worklog ID is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  the issue or worklog is not found.
                 *  the user does not have permission to view the issue or worklog.`,
            },
        });
    }

    /**
     * Get worklog property
     * Returns the value of a worklog property.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * @param issueIdOrKey The ID or key of the issue.
     * @param worklogId The ID of the worklog.
     * @param propertyKey The key of the property.
     * @returns EntityProperty Returned if the request is successful.
     * @throws ApiError
     */
    public getWorklogProperty(
        issueIdOrKey: string,
        worklogId: string,
        propertyKey: string,
    ): CancelablePromise<EntityProperty> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}',
            path: {
                'issueIdOrKey': issueIdOrKey,
                'worklogId': worklogId,
                'propertyKey': propertyKey,
            },
            errors: {
                400: `Returned if the worklog ID is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  the issue, worklog, or property is not found.
                 *  the user does not have permission to view the issue or worklog.`,
            },
        });
    }

    /**
     * Set worklog property
     * Sets the value of a worklog property. Use this operation to store custom data against the worklog.
     *
     * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * *  *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit own worklogs* to update worklogs created by the user.
     * *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * @param issueIdOrKey The ID or key of the issue.
     * @param worklogId The ID of the worklog.
     * @param propertyKey The key of the issue property. The maximum length is 255 characters.
     * @param requestBody
     * @returns any Returned if the worklog property is updated.
     * @throws ApiError
     */
    public setWorklogProperty(
        issueIdOrKey: string,
        worklogId: string,
        propertyKey: string,
        requestBody: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}',
            path: {
                'issueIdOrKey': issueIdOrKey,
                'worklogId': worklogId,
                'propertyKey': propertyKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the worklog ID is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have permission to edit the worklog.`,
                404: `Returned if:

                 *  the issue or worklog is not found.
                 *  the user does not have permission to view the issue or worklog.`,
            },
        });
    }

    /**
     * Delete worklog property
     * Deletes a worklog property.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * @param issueIdOrKey The ID or key of the issue.
     * @param worklogId The ID of the worklog.
     * @param propertyKey The key of the property.
     * @returns void
     * @throws ApiError
     */
    public deleteWorklogProperty(
        issueIdOrKey: string,
        worklogId: string,
        propertyKey: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}',
            path: {
                'issueIdOrKey': issueIdOrKey,
                'worklogId': worklogId,
                'propertyKey': propertyKey,
            },
            errors: {
                400: `Returned if the worklog key or id is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have permission to edit the worklog.`,
                404: `Returned if:

                 *  the issue, worklog, or property is not found.
                 *  the user does not have permission to view the issue or worklog.`,
            },
        });
    }

}