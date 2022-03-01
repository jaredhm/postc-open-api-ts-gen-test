/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusCategory } from '../models/StatusCategory';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkflowStatusCategoriesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all status categories
     * Returns a list of all status categories.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @returns StatusCategory Returned if the request is successful.
     * @throws ApiError
     */
    public getStatusCategories(): CancelablePromise<Array<StatusCategory>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/statuscategory',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * Get status category
     * Returns a status category. Status categories provided a mechanism for categorizing [statuses](#api-rest-api-3-status-idOrName-get).
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @param idOrKey The ID or key of the status category.
     * @returns StatusCategory Returned if the request is successful.
     * @throws ApiError
     */
    public getStatusCategory(
        idOrKey: string,
    ): CancelablePromise<StatusCategory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/statuscategory/{idOrKey}',
            path: {
                'idOrKey': idOrKey,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the status category is not found.`,
            },
        });
    }

}