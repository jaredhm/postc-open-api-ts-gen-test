/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskProgressBeanObject } from '../models/TaskProgressBeanObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TasksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get task
     * Returns the status of a [long-running asynchronous task](#async).
     *
     * When a task has finished, this operation returns the JSON blob applicable to the task. See the documentation of the operation that created the task for details. Task details are not permanently retained. As of September 2019, details are retained for 14 days although this period may change without notice.
     *
     * **[Permissions](#permissions) required:** either of:
     *
     * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * *  Creator of the task.
     * @param taskId The ID of the task.
     * @returns TaskProgressBeanObject Returned if the request is successful.
     * @throws ApiError
     */
    public getTask(
        taskId: string,
    ): CancelablePromise<TaskProgressBeanObject> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/task/{taskId}',
            path: {
                'taskId': taskId,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if the task is not found.`,
            },
        });
    }

    /**
     * Cancel task
     * Cancels a task.
     *
     * **[Permissions](#permissions) required:** either of:
     *
     * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * *  Creator of the task.
     * @param taskId The ID of the task.
     * @returns any Returned if the request is successful.
     * @throws ApiError
     */
    public cancelTask(
        taskId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/task/{taskId}/cancel',
            path: {
                'taskId': taskId,
            },
            errors: {
                400: `Returned if cancellation of the task is not possible.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if the task is not found.`,
            },
        });
    }

}