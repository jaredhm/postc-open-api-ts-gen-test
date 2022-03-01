/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectModules } from '../models/ConnectModules';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DynamicModulesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get modules
     * Returns all modules registered dynamically by the calling app.
     *
     * **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * @returns ConnectModules Returned if the request is successful.
     * @throws ApiError
     */
    public dynamicModulesResourceGetModulesGet(): CancelablePromise<ConnectModules> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/atlassian-connect/1/app/module/dynamic',
            errors: {
                401: `Returned if the call is not from a Connect app.`,
            },
        });
    }

    /**
     * Register modules
     * Registers a list of modules.
     *
     * **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * @param requestBody
     * @returns any Returned if the request is successful.
     * @throws ApiError
     */
    public dynamicModulesResourceRegisterModulesPost(
        requestBody: ConnectModules,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/atlassian-connect/1/app/module/dynamic',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:
                 * any of the provided modules is invalid. For example, required properties are missing.
                 * any of the modules conflict with registered dynamic modules or modules defined in the app descriptor. For example, there are duplicate keys.

                Details of the issues encountered are included in the error message.`,
                401: `Returned if the call is not from a Connect app.`,
            },
        });
    }

    /**
     * Remove modules
     * Remove all or a list of modules registered by the calling app.
     *
     * **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * @param moduleKey The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter.
     * For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`.
     * Nonexistent keys are ignored.
     * @returns void
     * @throws ApiError
     */
    public dynamicModulesResourceRemoveModulesDelete(
        moduleKey?: Array<string>,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/atlassian-connect/1/app/module/dynamic',
            query: {
                'moduleKey': moduleKey,
            },
            errors: {
                401: `Returned if the call is not from a Connect app.`,
            },
        });
    }

}