/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkPermissionGrants } from '../models/BulkPermissionGrants';
import type { BulkPermissionsRequestBean } from '../models/BulkPermissionsRequestBean';
import type { Permissions } from '../models/Permissions';
import type { PermissionsKeysBean } from '../models/PermissionsKeysBean';
import type { PermittedProjects } from '../models/PermittedProjects';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PermissionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get my permissions
     * Returns a list of permissions indicating which permissions the user has. Details of the user's permissions can be obtained in a global, project, or issue context.
     *
     * The user is reported as having a project permission:
     *
     * *  in the global context, if the user has the project permission in any project.
     * *  for a project, where the project permission is determined using issue data, if the user meets the permission's criteria for any issue in the project. Otherwise, if the user has the project permission in the project.
     * *  for an issue, where a project permission is determined using issue data, if the user has the permission in the issue. Otherwise, if the user has the project permission in the project containing the issue.
     *
     * This means that users may be shown as having an issue permission (such as EDIT\_ISSUES) in the global context or a project context but may not have the permission for any or all issues. For example, if Reporters have the EDIT\_ISSUES permission a user would be shown as having this permission in the global context or the context of a project, because any user can be a reporter. However, if they are not the user who reported the issue queried they would not have EDIT\_ISSUES permission for that issue.
     *
     * Global permissions are unaffected by context.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None.
     * @param projectKey The key of project. Ignored if `projectId` is provided.
     * @param projectId The ID of project.
     * @param issueKey The key of the issue. Ignored if `issueId` is provided.
     * @param issueId The ID of the issue.
     * @param permissions A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get).
     * @param projectUuid
     * @param projectConfigurationUuid
     * @returns Permissions Returned if the request is successful.
     * @throws ApiError
     */
    public getMyPermissions(
        projectKey?: string,
        projectId?: string,
        issueKey?: string,
        issueId?: string,
        permissions?: string,
        projectUuid?: string,
        projectConfigurationUuid?: string,
    ): CancelablePromise<Permissions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/mypermissions',
            query: {
                'projectKey': projectKey,
                'projectId': projectId,
                'issueKey': issueKey,
                'issueId': issueId,
                'permissions': permissions,
                'projectUuid': projectUuid,
                'projectConfigurationUuid': projectConfigurationUuid,
            },
            errors: {
                400: `Returned if \`permissions\` is empty or the permission key it contains is not found or deprecated.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the project or issue is not found or the user does not have permission to view the project or issue.`,
            },
        });
    }

    /**
     * Get all permissions
     * Returns all permissions, including:
     *
     * *  global permissions.
     * *  project permissions.
     * *  global permissions added by plugins.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @returns Permissions Returned if the request is successful.
     * @throws ApiError
     */
    public getAllPermissions(): CancelablePromise<Permissions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/permissions',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Get bulk permissions
     * Returns:
     *
     * *  for a list of global permissions, the global permissions granted to a user.
     * *  for a list of project permissions and lists of projects and issues, for each project permission a list of the projects and issues a user can access or manipulate.
     *
     * If no account ID is provided, the operation returns details for the logged in user.
     *
     * Note that:
     *
     * *  Invalid project and issue IDs are ignored.
     * *  A maximum of 1000 projects and 1000 issues can be checked.
     * *  Null values in `globalPermissions`, `projectPermissions`, `projectPermissions.projects`, and `projectPermissions.issues` are ignored.
     * *  Empty strings in `projectPermissions.permissions` are ignored.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to check the permissions for other users, otherwise none. However, Connect apps can make a call from the app server to the product to obtain permission details for any user, without admin permission. This Connect app ability doesn't apply to calls made using AP.request() in a browser.
     * @param requestBody Details of the permissions to check.
     * @returns BulkPermissionGrants Returned if the request is successful.
     * @throws ApiError
     */
    public getBulkPermissions(
        requestBody: BulkPermissionsRequestBean,
    ): CancelablePromise<BulkPermissionGrants> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/permissions/check',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:

                 *  \`projectPermissions\` is provided without at least one project permission being provided.
                 *  an invalid global permission is provided in the global permissions list.
                 *  an invalid project permission is provided in the project permissions list.
                 *  more than 1000 valid project IDs or more than 1000 valid issue IDs are provided.
                 *  an invalid account ID is provided.`,
                403: `Returned if the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Get permitted projects
     * Returns all the projects where the user is granted a list of project permissions.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None.
     * @param requestBody
     * @returns PermittedProjects Returned if the request is successful.
     * @throws ApiError
     */
    public getPermittedProjects(
        requestBody: PermissionsKeysBean,
    ): CancelablePromise<PermittedProjects> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/permissions/project',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if a project permission is not found.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

}