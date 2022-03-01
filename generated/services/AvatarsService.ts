/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Avatar } from '../models/Avatar';
import type { Avatars } from '../models/Avatars';
import type { SystemAvatars } from '../models/SystemAvatars';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AvatarsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get system avatars by type
     * Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None.
     * @param type The avatar type.
     * @returns SystemAvatars Returned if the request is successful.
     * @throws ApiError
     */
    public getAllSystemAvatars(
        type: 'issuetype' | 'project' | 'user',
    ): CancelablePromise<SystemAvatars> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/avatar/{type}/system',
            path: {
                'type': type,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                500: `Returned if an error occurs while retrieving the list of avatars.`,
            },
        });
    }

    /**
     * Get avatars
     * Returns the system and custom avatars for a project or issue type.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  for custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.
     * *  for custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.
     * *  for system avatars, none.
     * @param type The avatar type.
     * @param entityId The ID of the item the avatar is associated with.
     * @returns Avatars Returned if the request is successful.
     * @throws ApiError
     */
    public getAvatars(
        type: 'project' | 'issuetype',
        entityId: string,
    ): CancelablePromise<Avatars> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/universal_avatar/type/{type}/owner/{entityId}',
            path: {
                'type': type,
                'entityId': entityId,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the avatar type is invalid, the associated item ID is missing, or the item is not found.`,
            },
        });
    }

    /**
     * Load avatar
     * Loads a custom avatar for a project or issue type.
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
     * `--url 'https://your-domain.atlassian.net/rest/api/3/universal_avatar/type/{type}/owner/{entityId}'`
     *
     * The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image.
     *
     * The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.
     *
     * After creating the avatar use:
     *
     * *  [Update issue type](#api-rest-api-3-issuetype-id-put) to set it as the issue type's displayed avatar.
     * *  [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project's displayed avatar.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param type The avatar type.
     * @param entityId The ID of the item the avatar is associated with.
     * @param size The length of each side of the crop region.
     * @param requestBody
     * @param x The X coordinate of the top-left corner of the crop region.
     * @param y The Y coordinate of the top-left corner of the crop region.
     * @returns Avatar Returned if the request is successful.
     * @throws ApiError
     */
    public storeAvatar(
        type: 'project' | 'issuetype',
        entityId: string,
        size: number,
        requestBody: any,
        x?: number,
        y?: number,
    ): CancelablePromise<Avatar> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/universal_avatar/type/{type}/owner/{entityId}',
            path: {
                'type': type,
                'entityId': entityId,
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
                403: `Returned if the user does not have the necessary permissions.`,
                404: `Returned if the avatar type is invalid, the associated item ID is missing, or the item is not found.`,
            },
        });
    }

    /**
     * Delete avatar
     * Deletes an avatar from a project or issue type.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param type The avatar type.
     * @param owningObjectId The ID of the item the avatar is associated with.
     * @param id The ID of the avatar.
     * @returns void
     * @throws ApiError
     */
    public deleteAvatar(
        type: 'project' | 'issuetype',
        owningObjectId: string,
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}',
            path: {
                'type': type,
                'owningObjectId': owningObjectId,
                'id': id,
            },
            errors: {
                400: `Returned if the request is invalid.`,
                403: `Returned if the user does not have permission to delete the avatar, the avatar is not deletable.`,
                404: `Returned if the avatar type, associated item ID, or avatar ID is invalid.`,
            },
        });
    }

    /**
     * Get avatar image by type
     * Returns the default project or issue type avatar image.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None.
     * @param type The icon type of the avatar.
     * @param size The size of the avatar image. If not provided the default size is returned.
     * @param format The format to return the avatar image in. If not provided the original content format is returned.
     * @returns any Returned if the request is successful.
     * @throws ApiError
     */
    public getAvatarImageByType(
        type: 'issuetype' | 'project',
        size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge',
        format?: 'png' | 'svg',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/universal_avatar/view/type/{type}',
            path: {
                'type': type,
            },
            query: {
                'size': size,
                'format': format,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if an avatar is not found or an avatar matching the requested size is not found.`,
            },
        });
    }

    /**
     * Get avatar image by ID
     * Returns a project or issue type avatar image by ID.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  For system avatars, none.
     * *  For custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.
     * *  For custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.
     * @param type The icon type of the avatar.
     * @param id The ID of the avatar.
     * @param size The size of the avatar image. If not provided the default size is returned.
     * @param format The format to return the avatar image in. If not provided the original content format is returned.
     * @returns any Returned if the request is successful.
     * @throws ApiError
     */
    public getAvatarImageById(
        type: 'issuetype' | 'project',
        id: number,
        size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge',
        format?: 'png' | 'svg',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/universal_avatar/view/type/{type}/avatar/{id}',
            path: {
                'type': type,
                'id': id,
            },
            query: {
                'size': size,
                'format': format,
            },
            errors: {
                400: `Returned if the request is not valid.`,
                401: `Returned if the authentication credentials are incorrect.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if an avatar is not found or an avatar matching the requested size is not found.`,
            },
        });
    }

    /**
     * Get avatar image by owner
     * Returns the avatar image for a project or issue type.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  For system avatars, none.
     * *  For custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to.
     * *  For custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.
     * @param type The icon type of the avatar.
     * @param entityId The ID of the project or issue type the avatar belongs to.
     * @param size The size of the avatar image. If not provided the default size is returned.
     * @param format The format to return the avatar image in. If not provided the original content format is returned.
     * @returns any Returned if the request is successful.
     * @throws ApiError
     */
    public getAvatarImageByOwner(
        type: 'issuetype' | 'project',
        entityId: string,
        size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge',
        format?: 'png' | 'svg',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/universal_avatar/view/type/{type}/owner/{entityId}',
            path: {
                'type': type,
                'entityId': entityId,
            },
            query: {
                'size': size,
                'format': format,
            },
            errors: {
                400: `Returned if the request is not valid.`,
                401: `Returned if the authentication credentials are incorrect.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if an avatar is not found or an avatar matching the requested size is not found.`,
            },
        });
    }

}