/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SecurityScheme } from '../models/SecurityScheme';
import type { SecuritySchemes } from '../models/SecuritySchemes';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueSecuritySchemesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get issue security schemes
     * Returns all [issue security schemes](https://confluence.atlassian.com/x/J4lKLg).
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @returns SecuritySchemes Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueSecuritySchemes(): CancelablePromise<SecuritySchemes> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issuesecurityschemes',
            errors: {
                401: `Returned if the authentication credentials are incorrect.`,
                403: `Returned if the user does not have permission to administer issue security schemes.`,
            },
        });
    }

    /**
     * Get issue security scheme
     * Returns an issue security scheme along with its security levels.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project that uses the requested issue security scheme.
     * @param id The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
     * @returns SecurityScheme Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueSecurityScheme(
        id: number,
    ): CancelablePromise<SecurityScheme> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issuesecurityschemes/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the administrator permission and the scheme is not used in any project where the user has administrative permission.`,
            },
        });
    }

}