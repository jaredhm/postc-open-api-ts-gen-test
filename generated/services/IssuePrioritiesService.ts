/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Priority } from '../models/Priority';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssuePrioritiesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get priorities
     * Returns the list of all issue priorities.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @returns Priority Returned if the request is successful.
     * @throws ApiError
     */
    public getPriorities(): CancelablePromise<Array<Priority>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/priority',
            errors: {
                401: `Returned if the authentication credentials are incorrect.`,
            },
        });
    }

    /**
     * Get priority
     * Returns an issue priority.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @param id The ID of the issue priority.
     * @returns Priority Returned if the request is successful.
     * @throws ApiError
     */
    public getPriority(
        id: string,
    ): CancelablePromise<Priority> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/priority/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect.`,
                404: `Returned if the issue priority is not found.`,
            },
        });
    }

}