/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationScheme } from '../models/NotificationScheme';
import type { PageBeanNotificationScheme } from '../models/PageBeanNotificationScheme';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueNotificationSchemesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get notification schemes paginated
     * Returns a [paginated](#pagination) list of [notification schemes](https://confluence.atlassian.com/x/8YdKLg) ordered by display name.
     *
     * ### About notification schemes ###
     *
     * A notification scheme is a list of events and recipients who will receive notifications for those events. The list is contained within the `notificationSchemeEvents` object and contains pairs of `events` and `notifications`:
     *
     * *  `event` Identifies the type of event. The events can be [Jira system events](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or [custom events](https://confluence.atlassian.com/x/AIlKLg).
     * *  `notifications` Identifies the [recipients](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-recipientsRecipients) of notifications for each event. Recipients can be any of the following types:
     *
     * *  `CurrentAssignee`
     * *  `Reporter`
     * *  `CurrentUser`
     * *  `ProjectLead`
     * *  `ComponentLead`
     * *  `User` (the `parameter` is the user key)
     * *  `Group` (the `parameter` is the group name)
     * *  `ProjectRole` (the `parameter` is the project role ID)
     * *  `EmailAddress`
     * *  `AllWatchers`
     * *  `UserCustomField` (the `parameter` is the ID of the custom field)
     * *  `GroupCustomField`(the `parameter` is the ID of the custom field)
     *
     * *Note that you should allow for events without recipients to appear in responses.*
     *
     * **[Permissions](#permissions) required:** Permission to access Jira, however the user must have permission to administer at least one project associated with a notification scheme for it to be returned.
     * @param startAt The index of the first item to return in a page of results (page offset).
     * @param maxResults The maximum number of items to return per page.
     * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
     *
     * *  `all` Returns all expandable information.
     * *  `field` Returns information about any custom fields assigned to receive an event.
     * *  `group` Returns information about any groups assigned to receive an event.
     * *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.
     * *  `projectRole` Returns information about any project roles assigned to receive an event.
     * *  `user` Returns information about any users assigned to receive an event.
     * @returns PageBeanNotificationScheme Returned if the request is successful. Only returns notification schemes that the user has permission to access. An empty list is returned if the user lacks permission to access all notification schemes.
     * @throws ApiError
     */
    public getNotificationSchemes(
        startAt?: number,
        maxResults: number = 50,
        expand?: string,
    ): CancelablePromise<PageBeanNotificationScheme> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/notificationscheme',
            query: {
                'startAt': startAt,
                'maxResults': maxResults,
                'expand': expand,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * Get notification scheme
     * Returns a [notification scheme](https://confluence.atlassian.com/x/8YdKLg), including the list of events and the recipients who will receive notifications for those events.
     *
     * **[Permissions](#permissions) required:** Permission to access Jira, however the user must have permission to administer at least one project associated with the notification scheme.
     * @param id The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-3-notificationscheme-get) to get a list of notification scheme IDs.
     * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
     *
     * *  `all` Returns all expandable information.
     * *  `field` Returns information about any custom fields assigned to receive an event.
     * *  `group` Returns information about any groups assigned to receive an event.
     * *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.
     * *  `projectRole` Returns information about any project roles assigned to receive an event.
     * *  `user` Returns information about any users assigned to receive an event.
     * @returns NotificationScheme Returned if the request is successful.
     * @throws ApiError
     */
    public getNotificationScheme(
        id: number,
        expand?: string,
    ): CancelablePromise<NotificationScheme> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/notificationscheme/{id}',
            path: {
                'id': id,
            },
            query: {
                'expand': expand,
            },
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the notification scheme is not found or the user does not have permission to view it.`,
            },
        });
    }

}