/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Resolution } from '../models/Resolution';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueResolutionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get resolutions
     * Returns a list of all issue resolution values.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @returns Resolution Returned if the request is successful.
     * @throws ApiError
     */
    public getResolutions(): CancelablePromise<Array<Resolution>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/resolution',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * Get resolution
     * Returns an issue resolution value.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @param id The ID of the issue resolution value.
     * @returns Resolution Returned if the request is successful.
     * @throws ApiError
     */
    public getResolution(
        id: string,
    ): CancelablePromise<Resolution> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/resolution/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the issue resolution value is not found.`,
            },
        });
    }

}