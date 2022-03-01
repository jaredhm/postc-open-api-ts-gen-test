/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusDetails } from '../models/StatusDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkflowStatusesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all statuses
     * Returns a list of all statuses associated with active workflows.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None.
     * @returns StatusDetails Returned if the request is successful.
     * @throws ApiError
     */
    public getStatuses(): CancelablePromise<Array<StatusDetails>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/status',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * Get status
     * Returns a status. The status must be associated with an active workflow to be returned.
     *
     * If a name is used on more than one status, only the status found first is returned. Therefore, identifying the status by its ID may be preferable.
     *
     * This operation can be accessed anonymously.
     *
     * [Permissions](#permissions) required: None.
     * @param idOrName The ID or name of the status.
     * @returns StatusDetails Returned if the request is successful.
     * @throws ApiError
     */
    public getStatus(
        idOrName: string,
    ): CancelablePromise<StatusDetails> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/status/{idOrName}',
            path: {
                'idOrName': idOrName,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  the status is not found.
                 *  the status is not associated with a workflow.
                 *  the user does not have the required permissions.`,
            },
        });
    }

}