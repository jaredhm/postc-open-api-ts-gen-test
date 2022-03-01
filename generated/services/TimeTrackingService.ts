/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimeTrackingConfiguration } from '../models/TimeTrackingConfiguration';
import type { TimeTrackingProvider } from '../models/TimeTrackingProvider';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TimeTrackingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get selected time tracking provider
     * Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @returns TimeTrackingProvider Returned if the request is successful and time tracking is enabled.
     * @throws ApiError
     */
    public getSelectedTimeTrackingImplementation(): CancelablePromise<TimeTrackingProvider> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/configuration/timetracking',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Select time tracking provider
     * Selects a time tracking provider.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public selectTimeTrackingImplementation(
        requestBody: TimeTrackingProvider,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/configuration/timetracking',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the time tracking provider is not found.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Get all time tracking providers
     * Returns all time tracking providers. By default, Jira only has one time tracking provider: *JIRA provided time tracking*. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the [ Time Tracking Provider](https://developer.atlassian.com/cloud/jira/platform/modules/time-tracking-provider/) module.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @returns TimeTrackingProvider Returned if the request is successful.
     * @throws ApiError
     */
    public getAvailableTimeTrackingImplementations(): CancelablePromise<Array<TimeTrackingProvider>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/configuration/timetracking/list',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Get time tracking settings
     * Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @returns TimeTrackingConfiguration Returned if the request is successful.
     * @throws ApiError
     */
    public getSharedTimeTrackingConfiguration(): CancelablePromise<TimeTrackingConfiguration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/configuration/timetracking/options',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Set time tracking settings
     * Sets the time tracking settings.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param requestBody
     * @returns TimeTrackingConfiguration Returned if the request is successful.
     * @throws ApiError
     */
    public setSharedTimeTrackingConfiguration(
        requestBody: TimeTrackingConfiguration,
    ): CancelablePromise<TimeTrackingConfiguration> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/configuration/timetracking/options',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request object is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
            },
        });
    }

}