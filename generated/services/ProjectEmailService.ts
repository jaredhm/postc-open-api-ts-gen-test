/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectEmailAddress } from '../models/ProjectEmailAddress';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectEmailService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get project's sender email
     * Returns the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).
     *
     * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * @param projectId The project ID.
     * @returns ProjectEmailAddress Returned if the request is successful.
     * @throws ApiError
     */
    public getProjectEmail(
        projectId: number,
    ): CancelablePromise<ProjectEmailAddress> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/project/{projectId}/email',
            path: {
                'projectId': projectId,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have permission to read project.`,
                404: `Returned if the project or project's sender email address is not found.`,
            },
        });
    }

    /**
     * Set project's sender email
     * Sets the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).
     *
     * If `emailAddress` is an empty string, the default email address is restored.
     *
     * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * @param projectId The project ID.
     * @param requestBody The project's sender email address to be set.
     * @returns void
     * @throws ApiError
     */
    public updateProjectEmail(
        projectId: number,
        requestBody: ProjectEmailAddress,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/project/{projectId}/email',
            path: {
                'projectId': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is not valid, if the email address is not valid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have permission to read project.`,
                404: `Returned if the project is not found.`,
            },
        });
    }

}