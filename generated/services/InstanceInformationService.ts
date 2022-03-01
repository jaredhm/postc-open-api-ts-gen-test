/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { License } from '../models/License';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InstanceInformationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get license
     * Returns licensing information about the Jira instance.
     *
     * **[Permissions](#permissions) required:** None.
     * @returns License Returned if the request is successful.
     * @throws ApiError
     */
    public getLicense(): CancelablePromise<License> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/instance/license',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

}