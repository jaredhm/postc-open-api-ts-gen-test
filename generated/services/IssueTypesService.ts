/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Avatar } from '../models/Avatar';
import type { IssueTypeCreateBean } from '../models/IssueTypeCreateBean';
import type { IssueTypeDetails } from '../models/IssueTypeDetails';
import type { IssueTypeUpdateBean } from '../models/IssueTypeUpdateBean';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueTypesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all issue types for user
     * Returns all issue types.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** Issue types are only returned as follows:
     *
     * *  if the user has the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), all issue types are returned.
     * *  if the user has the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, the issue types associated with the projects the user has permission to browse are returned.
     * @returns IssueTypeDetails Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueAllTypes(): CancelablePromise<Array<IssueTypeDetails>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issuetype',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * Create issue type
     * Creates an issue type and adds it to the default issue type scheme.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param requestBody
     * @returns IssueTypeDetails Returned if the request is successful.
     * @throws ApiError
     */
    public createIssueType(
        requestBody: IssueTypeCreateBean,
    ): CancelablePromise<IssueTypeDetails> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/issuetype',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is invalid because:

                 *  no content is sent.
                 *  the issue type name exceeds 60 characters.
                 *  a subtask issue type is requested on an instance where subtasks are disabled.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
                409: `Returned if the issue type name is in use.`,
            },
        });
    }

    /**
     * Get issue types for project
     * Returns issue types for a project.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) in the relevant project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param projectId The ID of the project.
     * @param level The level of the issue type to filter by. Use:
     *
     * *  `-1` for Subtask.
     * *  `0` for Base.
     * *  `1` for Epic.
     * @returns IssueTypeDetails Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueTypesForProject(
        projectId: number,
        level?: number,
    ): CancelablePromise<Array<IssueTypeDetails>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issuetype/project',
            query: {
                'projectId': projectId,
                'level': level,
            },
            errors: {
                400: `Returned if the request is not valid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  the project is not found.
                 *  the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Get issue type
     * Returns an issue type.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) in a project the issue type is associated with or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param id The ID of the issue type.
     * @returns IssueTypeDetails Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueType(
        id: string,
    ): CancelablePromise<IssueTypeDetails> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issuetype/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if the issue type ID is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  the issue type is not found.
                 *  the user does not have the required permissions.`,
            },
        });
    }

    /**
     * Update issue type
     * Updates the issue type.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param id The ID of the issue type.
     * @param requestBody
     * @returns IssueTypeDetails Returned if the request is successful.
     * @throws ApiError
     */
    public updateIssueType(
        id: string,
        requestBody: IssueTypeUpdateBean,
    ): CancelablePromise<IssueTypeDetails> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/issuetype/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is invalid because:

                 *  no content is sent.
                 *  the issue type name exceeds 60 characters.
                 *  the avatar is not associated with this issue type.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if the issue type is not found.`,
                409: `Returned if the issue type name is in use.`,
            },
        });
    }

    /**
     * Delete issue type
     * Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (`alternativeIssueTypeId`). A list of alternative issue types are obtained from the [Get alternative issue types](#api-rest-api-3-issuetype-id-alternatives-get) resource.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param id The ID of the issue type.
     * @param alternativeIssueTypeId The ID of the replacement issue type.
     * @returns void
     * @throws ApiError
     */
    public deleteIssueType(
        id: string,
        alternativeIssueTypeId?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/issuetype/{id}',
            path: {
                'id': id,
            },
            query: {
                'alternativeIssueTypeId': alternativeIssueTypeId,
            },
            errors: {
                400: `Returned if any issues cannot be updated with the alternative issue type.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if:

                 *  the issue type is in use and an alternative issue type is not specified.
                 *  the issue type or alternative issue type is not found.`,
                409: `Returned if the issue type is in use and:

                 *  also specified as the alternative issue type.
                 *  is a *standard* issue type and the alternative issue type is a *subtask*.`,
            },
        });
    }

    /**
     * Get alternative issue types
     * Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None.
     * @param id The ID of the issue type.
     * @returns IssueTypeDetails Returned if the request is successful.
     * @throws ApiError
     */
    public getAlternativeIssueTypes(
        id: string,
    ): CancelablePromise<Array<IssueTypeDetails>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issuetype/{id}/alternatives',
            path: {
                'id': id,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  the issue type is not found.
                 *  the user does not have the required permissions.`,
            },
        });
    }

    /**
     * Load issue type avatar
     * Loads an avatar for the issue type.
     *
     * Specify the avatar's local file location in the body of the request. Also, include the following headers:
     *
     * *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).
     * *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.
     *
     * For example:
     * `curl --request POST \ --user email@example.com:<api_token> \ --header 'X-Atlassian-Token: no-check' \ --header 'Content-Type: image/< image_type>' \ --data-binary "<@/path/to/file/with/your/avatar>" \ --url 'https://your-domain.atlassian.net/rest/api/3/issuetype/{issueTypeId}'This`
     *
     * The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image.
     *
     * The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.
     *
     * After creating the avatar, use [ Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type's displayed avatar.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param id The ID of the issue type.
     * @param size The length of each side of the crop region.
     * @param requestBody
     * @param x The X coordinate of the top-left corner of the crop region.
     * @param y The Y coordinate of the top-left corner of the crop region.
     * @returns Avatar Returned if the request is successful.
     * @throws ApiError
     */
    public createIssueTypeAvatar(
        id: string,
        size: number,
        requestBody: any,
        x?: number,
        y?: number,
    ): CancelablePromise<Avatar> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/issuetype/{id}/avatar2',
            path: {
                'id': id,
            },
            query: {
                'x': x,
                'y': y,
                'size': size,
            },
            body: requestBody,
            mediaType: '*/*',
            errors: {
                400: `Returned if:

                 *  an image isn't included in the request.
                 *  the image type is unsupported.
                 *  the crop parameters extend the crop area beyond the edge of the image.
                 *  \`cropSize\` is missing.
                 *  the issue type ID is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if the issue type is not found.`,
            },
        });
    }

}