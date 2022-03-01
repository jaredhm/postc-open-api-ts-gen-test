/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServerInformation } from '../models/ServerInformation';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ServerInfoService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Jira instance info
     * Returns information about the Jira instance.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None.
     * @returns ServerInformation Returned if the request is successful.
     * @throws ApiError
     */
    public getServerInfo(): CancelablePromise<ServerInformation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/serverInfo',
            errors: {
                401: `Returned if the authentication credentials are incorrect.`,
            },
        });
    }

}