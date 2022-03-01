/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityProperty } from '../models/EntityProperty';
import type { PropertyKeys } from '../models/PropertyKeys';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueTypePropertiesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get issue type property keys
     * Returns all the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys of the issue type.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the property keys of any issue type.
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the property keys of any issue types associated with the projects the user has permission to browse.
     * @param issueTypeId The ID of the issue type.
     * @returns PropertyKeys Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueTypePropertyKeys(
        issueTypeId: string,
    ): CancelablePromise<PropertyKeys> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issuetype/{issueTypeId}/properties',
            path: {
                'issueTypeId': issueTypeId,
            },
            errors: {
                400: `Returned if the issue type ID is invalid.`,
                404: `Returned if:

                 *  the issue type is not found.
                 *  the user does not have the required permissions.`,
            },
        });
    }

    /**
     * Get issue type property
     * Returns the key and value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the details of any issue type.
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the details of any issue types associated with the projects the user has permission to browse.
     * @param issueTypeId The ID of the issue type.
     * @param propertyKey The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
     * @returns EntityProperty Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueTypeProperty(
        issueTypeId: string,
        propertyKey: string,
    ): CancelablePromise<EntityProperty> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}',
            path: {
                'issueTypeId': issueTypeId,
                'propertyKey': propertyKey,
            },
            errors: {
                400: `Returned if the issue type ID is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the issue type or property is not found or the user does not have the required permissions.`,
            },
        });
    }

    /**
     * Set issue type property
     * Creates or updates the value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). Use this resource to store and update data against an issue type.
     *
     * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param issueTypeId The ID of the issue type.
     * @param propertyKey The key of the issue type property. The maximum length is 255 characters.
     * @param requestBody
     * @returns any Returned if the issue type property is updated.
     * @throws ApiError
     */
    public setIssueTypeProperty(
        issueTypeId: string,
        propertyKey: string,
        requestBody: any,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}',
            path: {
                'issueTypeId': issueTypeId,
                'propertyKey': propertyKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:

                 *  the issue type ID is invalid.
                 *  a property value is not provided.
                 *  the property value JSON content is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have permission to modify the issue type.`,
                404: `Returned if:

                 *  the issue type is not found.
                 *  the user does not have the permission view the issue type.`,
            },
        });
    }

    /**
     * Delete issue type property
     * Deletes the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param issueTypeId The ID of the issue type.
     * @param propertyKey The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
     * @returns void
     * @throws ApiError
     */
    public deleteIssueTypeProperty(
        issueTypeId: string,
        propertyKey: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}',
            path: {
                'issueTypeId': issueTypeId,
                'propertyKey': propertyKey,
            },
            errors: {
                400: `Returned if the issue type ID is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if the issue type or property is not found.`,
            },
        });
    }

}