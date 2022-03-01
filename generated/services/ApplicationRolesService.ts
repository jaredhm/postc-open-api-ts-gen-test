/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationRole } from '../models/ApplicationRole';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApplicationRolesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all application roles
     * Returns all application roles. In Jira, application roles are managed using the [Application access configuration](https://confluence.atlassian.com/x/3YxjL) page.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @returns ApplicationRole Returned if the request is successful.
     * @throws ApiError
     */
    public getAllApplicationRoles(): CancelablePromise<Array<ApplicationRole>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/applicationrole',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user is not an administrator.`,
            },
        });
    }

    /**
     * Get application role
     * Returns an application role.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param key The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role.
     * @returns ApplicationRole Returned if the request is successful.
     * @throws ApiError
     */
    public getApplicationRole(
        key: string,
    ): CancelablePromise<ApplicationRole> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/applicationrole/{key}',
            path: {
                'key': key,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user is not an administrator.`,
                404: `Returned if the role is not found.`,
            },
        });
    }

}