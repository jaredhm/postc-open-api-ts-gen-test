/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Locale } from '../models/Locale';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MyselfService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get preference
     * Returns the value of a preference of the current user.
     *
     * Note that these keys are deprecated:
     *
     * *  *jira.user.locale* The locale of the user. By default this is not set and the user takes the locale of the instance.
     * *  *jira.user.timezone* The time zone of the user. By default this is not set and the user takes the timezone of the instance.
     *
     * Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @param key The key of the preference.
     * @returns string Returned if the request is successful.
     * @throws ApiError
     */
    public getPreference(
        key: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/mypreferences',
            query: {
                'key': key,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the key is not provided or not found.`,
            },
        });
    }

    /**
     * Set preference
     * Creates a preference for the user or updates a preference's value by sending a plain text string. For example, `false`. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:
     *
     * *  *user.notifications.mimetype* The mime type used in notifications sent to the user. Defaults to `html`.
     * *  *user.notify.own.changes* Whether the user gets notified of their own changes. Defaults to `false`.
     * *  *user.default.share.private* Whether new [ filters](https://confluence.atlassian.com/x/eQiiLQ) are set to private. Defaults to `true`.
     * *  *user.keyboard.shortcuts.disabled* Whether keyboard shortcuts are disabled. Defaults to `false`.
     * *  *user.autowatch.disabled* Whether the user automatically watches issues they create or add a comment to. By default, not set: the user takes the instance autowatch setting.
     *
     * Note that these keys are deprecated:
     *
     * *  *jira.user.locale* The locale of the user. By default, not set. The user takes the instance locale.
     * *  *jira.user.timezone* The time zone of the user. By default, not set. The user takes the instance timezone.
     *
     * Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @param key The key of the preference. The maximum length is 255 characters.
     * @param requestBody The value of the preference as a plain text string. The maximum length is 255 characters.
     * @returns void
     * @throws ApiError
     */
    public setPreference(
        key: string,
        requestBody: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/mypreferences',
            query: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the key or value is not provided or invalid.`,
            },
        });
    }

    /**
     * Delete preference
     * Deletes a preference of the user, which restores the default value of system defined settings.
     *
     * Note that these keys are deprecated:
     *
     * *  *jira.user.locale* The locale of the user. By default, not set. The user takes the instance locale.
     * *  *jira.user.timezone* The time zone of the user. By default, not set. The user takes the instance timezone.
     *
     * Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @param key The key of the preference.
     * @returns void
     * @throws ApiError
     */
    public removePreference(
        key: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/mypreferences',
            query: {
                'key': key,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the key is not provided or not found.`,
            },
        });
    }

    /**
     * Get locale
     * Returns the locale for the user.
     *
     * If the user has no language preference set (which is the default setting) or this resource is accessed anonymous, the browser locale detected by Jira is returned. Jira detects the browser locale using the *Accept-Language* header in the request. However, if this doesn't match a locale available Jira, the site default locale is returned.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None.
     * @returns Locale Returned if the request is successful.
     * @throws ApiError
     */
    public getLocale(): CancelablePromise<Locale> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/mypreferences/locale',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * @deprecated
     * Set locale
     * Deprecated, use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API instead.
     *
     * Sets the locale of the user. The locale must be one supported by the instance of Jira.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @param requestBody The locale defined in a LocaleBean.
     * @returns void
     * @throws ApiError
     */
    public setLocale(
        requestBody: Locale,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/mypreferences/locale',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if request is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * @deprecated
     * Delete locale
     * Deprecated, use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API instead.
     *
     * Deletes the locale of the user, which restores the default setting.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @returns void
     * @throws ApiError
     */
    public deleteLocale(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/mypreferences/locale',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * Get current user
     * Returns details for the current user.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira.
     * @param expand Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:
     *
     * *  `groups` Returns all groups, including nested groups, the user belongs to.
     * *  `applicationRoles` Returns the application roles the user is assigned to.
     * @returns User Returned if the request is successful.
     * @throws ApiError
     */
    public getCurrentUser(
        expand?: string,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/myself',
            query: {
                'expand': expand,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

}