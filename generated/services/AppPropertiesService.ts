/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityProperty } from '../models/EntityProperty';
import type { OperationMessage } from '../models/OperationMessage';
import type { PropertyKeys } from '../models/PropertyKeys';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AppPropertiesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get app properties
     * Gets all the properties of an app.
     *
     * **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * @param addonKey The key of the app, as defined in its descriptor.
     * @returns PropertyKeys Returned if the request is successful.
     * @throws ApiError
     */
    public addonPropertiesResourceGetAddonPropertiesGet(
        addonKey: string,
    ): CancelablePromise<PropertyKeys> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/atlassian-connect/1/addons/{addonKey}/properties',
            path: {
                'addonKey': addonKey,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * Get app property
     * Returns the key and value of an app's property.
     *
     * **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * @param addonKey The key of the app, as defined in its descriptor.
     * @param propertyKey The key of the property.
     * @returns EntityProperty Returned if the request is successful.
     * @throws ApiError
     */
    public addonPropertiesResourceGetAddonPropertyGet(
        addonKey: string,
        propertyKey: string,
    ): CancelablePromise<EntityProperty> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}',
            path: {
                'addonKey': addonKey,
                'propertyKey': propertyKey,
            },
            errors: {
                400: `Returned if the property key is longer than 127 characters.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the property is not found or doesn't belong to the app.`,
            },
        });
    }

    /**
     * Set app property
     * Sets the value of an app's property. Use this resource to store custom data for your app.
     *
     * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
     *
     * **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * @param addonKey The key of the app, as defined in its descriptor.
     * @param propertyKey The key of the property.
     * @param requestBody
     * @returns OperationMessage Returned if the property is updated.
     * @throws ApiError
     */
    public addonPropertiesResourcePutAddonPropertyPut(
        addonKey: string,
        propertyKey: string,
        requestBody: any,
    ): CancelablePromise<OperationMessage> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}',
            path: {
                'addonKey': addonKey,
                'propertyKey': propertyKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:
                 * the property key is longer than 127 characters.
                 * the value is not valid JSON.
                 * the value is longer than 32768 characters.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * Delete app property
     * Deletes an app's property.
     *
     * **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
     * @param addonKey The key of the app, as defined in its descriptor.
     * @param propertyKey The key of the property.
     * @returns void
     * @throws ApiError
     */
    public addonPropertiesResourceDeleteAddonPropertyDelete(
        addonKey: string,
        propertyKey: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}',
            path: {
                'addonKey': addonKey,
                'propertyKey': propertyKey,
            },
            errors: {
                400: `Returned if the property key is longer than 127 characters.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the property is not found or doesn't belong to the app.`,
            },
        });
    }

}