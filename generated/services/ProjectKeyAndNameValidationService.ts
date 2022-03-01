/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorCollection } from '../models/ErrorCollection';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectKeyAndNameValidationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Validate project key
     * Validates a project key by confirming the key is a valid string and not in use.
     *
     * **[Permissions](#permissions) required:** None.
     * @param key The project key.
     * @returns ErrorCollection Returned if the request is successful.
     * @throws ApiError
     */
    public validateProjectKey(
        key?: string,
    ): CancelablePromise<ErrorCollection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/projectvalidate/key',
            query: {
                'key': key,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect.`,
            },
        });
    }

    /**
     * Get valid project key
     * Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.
     *
     * **[Permissions](#permissions) required:** None.
     * @param key The project key.
     * @returns string Returned if the request is successful.
     * @throws ApiError
     */
    public getValidProjectKey(
        key?: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/projectvalidate/validProjectKey',
            query: {
                'key': key,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect.`,
            },
        });
    }

    /**
     * Get valid project name
     * Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.
     *
     * **[Permissions](#permissions) required:** None.
     * @param name The project name.
     * @returns string Returned if the request is successful.
     * @throws ApiError
     */
    public getValidProjectName(
        name: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/projectvalidate/validProjectName',
            query: {
                'name': name,
            },
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if the authentication credentials are incorrect.`,
                404: `Returned if a valid project name cannot be generated.`,
            },
        });
    }

}