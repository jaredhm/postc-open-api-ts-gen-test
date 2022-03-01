/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Avatar } from '../models/Avatar';
import type { ProjectAvatars } from '../models/ProjectAvatars';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectAvatarsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Set project avatar
     * Sets the avatar displayed for a project.
     *
     * Use [Load project avatar](#api-rest-api-3-project-projectIdOrKey-avatar2-post) to store avatars against the project, before using this operation to set the displayed avatar.
     *
     * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * @param projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public updateProjectAvatar(
        projectIdOrKey: string,
        requestBody: Avatar,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/project/{projectIdOrKey}/avatar',
            path: {
                'projectIdOrKey': projectIdOrKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have permission to administer the project.`,
                404: `Returned if the project or avatar is not found or the user does not have permission to view the project.`,
            },
        });
    }

    /**
     * Delete project avatar
     * Deletes a custom avatar from a project. Note that system avatars cannot be deleted.
     *
     * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * @param projectIdOrKey The project ID or (case-sensitive) key.
     * @param id The ID of the avatar.
     * @returns void
     * @throws ApiError
     */
    public deleteProjectAvatar(
        projectIdOrKey: string,
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/project/{projectIdOrKey}/avatar/{id}',
            path: {
                'projectIdOrKey': projectIdOrKey,
                'id': id,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the avatar is a system avatar or the user does not have permission to administer the project.`,
                404: `Returned if the project or avatar is not found or the user does not have permission to view the project.`,
            },
        });
    }

    /**
     * Load project avatar
     * Loads an avatar for a project.
     *
     * Specify the avatar's local file location in the body of the request. Also, include the following headers:
     *
     * *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).
     * *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG.
     *
     * For example:
     * `curl --request POST `
     *
     * `--user email@example.com:<api_token> `
     *
     * `--header 'X-Atlassian-Token: no-check' `
     *
     * `--header 'Content-Type: image/< image_type>' `
     *
     * `--data-binary "<@/path/to/file/with/your/avatar>" `
     *
     * `--url 'https://your-domain.atlassian.net/rest/api/3/project/{projectIdOrKey}/avatar2'`
     *
     * The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image.
     *
     * The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.
     *
     * After creating the avatar use [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project's displayed avatar.
     *
     * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
     * @param projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param requestBody
     * @param x The X coordinate of the top-left corner of the crop region.
     * @param y The Y coordinate of the top-left corner of the crop region.
     * @param size The length of each side of the crop region.
     * @returns Avatar Returned if the request is successful.
     * @throws ApiError
     */
    public createProjectAvatar(
        projectIdOrKey: string,
        requestBody: any,
        x?: number,
        y?: number,
        size?: number,
    ): CancelablePromise<Avatar> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/project/{projectIdOrKey}/avatar2',
            path: {
                'projectIdOrKey': projectIdOrKey,
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
                 *  the crop parameters extend the crop area beyond the edge of the image.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have permission to administer the project or an anonymous call is made to the operation.`,
                404: `Returned if the project is not found or the user does not have permission to view the project.`,
            },
        });
    }

    /**
     * Get all project avatars
     * Returns all project avatars, grouped by system and custom avatars.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * @param projectIdOrKey The ID or (case-sensitive) key of the project.
     * @returns ProjectAvatars Returned if request is successful.
     * @throws ApiError
     */
    public getAllProjectAvatars(
        projectIdOrKey: string,
    ): CancelablePromise<ProjectAvatars> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/project/{projectIdOrKey}/avatars',
            path: {
                'projectIdOrKey': projectIdOrKey,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the project is not found or the user does not have permission to view the project.`,
            },
        });
    }

}