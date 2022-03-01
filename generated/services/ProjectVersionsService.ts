/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteAndReplaceVersionBean } from '../models/DeleteAndReplaceVersionBean';
import type { PageBeanVersion } from '../models/PageBeanVersion';
import type { Version } from '../models/Version';
import type { VersionIssueCounts } from '../models/VersionIssueCounts';
import type { VersionMoveBean } from '../models/VersionMoveBean';
import type { VersionUnresolvedIssuesCount } from '../models/VersionUnresolvedIssuesCount';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectVersionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get project versions paginated
     * Returns a [paginated](#pagination) list of all versions in a project. See the [Get project versions](#api-rest-api-3-project-projectIdOrKey-versions-get) resource if you want to get a full list of versions without pagination.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * @param projectIdOrKey The project ID or project key (case sensitive).
     * @param startAt The index of the first item to return in a page of results (page offset).
     * @param maxResults The maximum number of items to return per page.
     * @param orderBy [Order](#ordering) the results by a field:
     *
     * *  `description` Sorts by version description.
     * *  `name` Sorts by version name.
     * *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.
     * *  `sequence` Sorts by the order of appearance in the user interface.
     * *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last.
     * @param query Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive).
     * @param status A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`.
     * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
     *
     * *  `issuesstatus` Returns the number of issues in each status category for each version.
     * *  `operations` Returns actions that can be performed on the specified version.
     * @returns PageBeanVersion Returned if the request is successful.
     * @throws ApiError
     */
    public getProjectVersionsPaginated(
        projectIdOrKey: string,
        startAt?: number,
        maxResults: number = 50,
        orderBy?: 'description' | '-description' | '+description' | 'name' | '-name' | '+name' | 'releaseDate' | '-releaseDate' | '+releaseDate' | 'sequence' | '-sequence' | '+sequence' | 'startDate' | '-startDate' | '+startDate',
        query?: string,
        status?: string,
        expand?: string,
    ): CancelablePromise<PageBeanVersion> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/project/{projectIdOrKey}/version',
            path: {
                'projectIdOrKey': projectIdOrKey,
            },
            query: {
                'startAt': startAt,
                'maxResults': maxResults,
                'orderBy': orderBy,
                'query': query,
                'status': status,
                'expand': expand,
            },
            errors: {
                404: `Returned if the project is not found or the user does not have permission to view it.`,
            },
        });
    }

    /**
     * Get project versions
     * Returns all versions in a project. The response is not paginated. Use [Get project versions paginated](#api-rest-api-3-project-projectIdOrKey-version-get) if you want to get the versions in a project with pagination.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * @param projectIdOrKey The project ID or project key (case sensitive).
     * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version.
     * @returns Version Returned if the request is successful.
     * @throws ApiError
     */
    public getProjectVersions(
        projectIdOrKey: string,
        expand?: string,
    ): CancelablePromise<Array<Version>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/project/{projectIdOrKey}/versions',
            path: {
                'projectIdOrKey': projectIdOrKey,
            },
            query: {
                'expand': expand,
            },
            errors: {
                404: `Returned if the project is not found or the user does not have permission to view it.`,
            },
        });
    }

    /**
     * Create version
     * Creates a project version.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the version is added to.
     * @param requestBody
     * @returns Version Returned if the request is successful.
     * @throws ApiError
     */
    public createVersion(
        requestBody: Version,
    ): CancelablePromise<Version> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/version',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  the project is not found.
                 *  the user does not have the required permissions.`,
            },
        });
    }

    /**
     * Get version
     * Returns a project version.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the version.
     * @param id The ID of the version.
     * @param expand Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:
     *
     * *  `operations` Returns the list of operations available for this version.
     * *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.
     * @returns Version Returned if the request is successful.
     * @throws ApiError
     */
    public getVersion(
        id: string,
        expand?: string,
    ): CancelablePromise<Version> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/version/{id}',
            path: {
                'id': id,
            },
            query: {
                'expand': expand,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the version is not found or the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Update version
     * Updates a project version.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
     * @param id The ID of the version.
     * @param requestBody
     * @returns Version Returned if the request is successful.
     * @throws ApiError
     */
    public updateVersion(
        id: string,
        requestBody: Version,
    ): CancelablePromise<Version> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/version/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:

                 *  the request is invalid.
                 *  the user does not have the required permissions.`,
                401: `Returned if the authentication credentials are incorrect.`,
                404: `Returned if the version is not found.`,
            },
        });
    }

    /**
     * @deprecated
     * Delete version
     * Deletes a project version.
     *
     * Deprecated, use [ Delete and replace version](#api-rest-api-3-version-id-removeAndSwap-post) that supports swapping version values in custom fields, in addition to the swapping for `fixVersion` and `affectedVersion` provided in this resource.
     *
     * Alternative versions can be provided to update issues that use the deleted version in `fixVersion` or `affectedVersion`. If alternatives are not provided, occurrences of `fixVersion` and `affectedVersion` that contain the deleted version are cleared.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
     * @param id The ID of the version.
     * @param moveFixIssuesTo The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     * @param moveAffectedIssuesTo The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     * @returns void
     * @throws ApiError
     */
    public deleteVersion(
        id: string,
        moveFixIssuesTo?: string,
        moveAffectedIssuesTo?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/version/{id}',
            path: {
                'id': id,
            },
            query: {
                'moveFixIssuesTo': moveFixIssuesTo,
                'moveAffectedIssuesTo': moveAffectedIssuesTo,
            },
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if:

                 *  the authentication credentials are incorrect.
                 *  the user does not have the required permissions.`,
                404: `Returned if the version is not found.`,
            },
        });
    }

    /**
     * Merge versions
     * Merges two project versions. The merge is completed by deleting the version specified in `id` and replacing any occurrences of its ID in `fixVersion` with the version ID specified in `moveIssuesTo`.
     *
     * Consider using [ Delete and replace version](#api-rest-api-3-version-id-removeAndSwap-post) instead. This resource supports swapping version values in `fixVersion`, `affectedVersion`, and custom fields.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
     * @param id The ID of the version to delete.
     * @param moveIssuesTo The ID of the version to merge into.
     * @returns void
     * @throws ApiError
     */
    public mergeVersions(
        id: string,
        moveIssuesTo: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/version/{id}/mergeto/{moveIssuesTo}',
            path: {
                'id': id,
                'moveIssuesTo': moveIssuesTo,
            },
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if:

                 *  the authentication credentials are incorrect or missing.
                 *  the user does not have the required permissions.`,
                404: `Returned if the version to be deleted or the version to merge to are not found.`,
            },
        });
    }

    /**
     * Move version
     * Modifies the version's sequence within the project, which affects the display order of the versions in Jira.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.
     * @param id The ID of the version to be moved.
     * @param requestBody
     * @returns Version Returned if the request is successful.
     * @throws ApiError
     */
    public moveVersion(
        id: string,
        requestBody: VersionMoveBean,
    ): CancelablePromise<Version> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/version/{id}/move',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:

                 *  no body parameters are provided.
                 *  \`after\` and \`position\` are provided.
                 *  \`position\` is invalid.`,
                401: `Returned if:

                 *  the authentication credentials are incorrect or missing
                 *  the user does not have the required commissions.`,
                404: `Returned if the version or move after version are not found.`,
            },
        });
    }

    /**
     * Get version's related issues count
     * Returns the following counts for a version:
     *
     * *  Number of issues where the `fixVersion` is set to the version.
     * *  Number of issues where the `affectedVersion` is set to the version.
     * *  Number of issues where a version custom field is set to the version.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.
     * @param id The ID of the version.
     * @returns VersionIssueCounts Returned if the request is successful.
     * @throws ApiError
     */
    public getVersionRelatedIssues(
        id: string,
    ): CancelablePromise<VersionIssueCounts> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/version/{id}/relatedIssueCounts',
            path: {
                'id': id,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect.`,
                404: `Returned if:

                 *  the version is not found.
                 *  the user does not have the required permissions.`,
            },
        });
    }

    /**
     * Delete and replace version
     * Deletes a project version.
     *
     * Alternative versions can be provided to update issues that use the deleted version in `fixVersion`, `affectedVersion`, or any version picker custom fields. If alternatives are not provided, occurrences of `fixVersion`, `affectedVersion`, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
     * @param id The ID of the version.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public deleteAndReplaceVersion(
        id: string,
        requestBody: DeleteAndReplaceVersionBean,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/version/{id}/removeAndSwap',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  the version to delete is not found.
                 *  the user does not have the required permissions.`,
            },
        });
    }

    /**
     * Get version's unresolved issues count
     * Returns counts of the issues and unresolved issues for the project version.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.
     * @param id The ID of the version.
     * @returns VersionUnresolvedIssuesCount Returned if the request is successful.
     * @throws ApiError
     */
    public getVersionUnresolvedIssues(
        id: string,
    ): CancelablePromise<VersionUnresolvedIssuesCount> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/version/{id}/unresolvedIssueCount',
            path: {
                'id': id,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  the version is not found.
                 *  the user does not have the required permissions.`,
            },
        });
    }

}