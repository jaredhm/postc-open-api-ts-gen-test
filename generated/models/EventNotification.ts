/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FieldDetails } from './FieldDetails';
import type { GroupName } from './GroupName';
import type { ProjectRole } from './ProjectRole';
import type { UserDetails } from './UserDetails';

/**
 * Details about a notification associated with an event.
 */
export type EventNotification = {
    /**
     * Expand options that include additional event notification details in the response.
     */
    expand?: string;
    /**
     * The ID of the notification.
     */
    id?: number;
    /**
     * Identifies the recipients of the notification.
     */
    notificationType?: EventNotification.notificationType;
    /**
     * As a group's name can change, use of `recipient` is recommended. The identifier associated with the `notificationType` value that defines the receiver of the notification, where the receiver isn't implied by `notificationType` value. So, when `notificationType` is:
     *
     * *  `User` The `parameter` is the user account ID.
     * *  `Group` The `parameter` is the group name.
     * *  `ProjectRole` The `parameter` is the project role ID.
     * *  `UserCustomField` The `parameter` is the ID of the custom field.
     * *  `GroupCustomField` The `parameter` is the ID of the custom field.
     */
    parameter?: string;
    /**
     * The identifier associated with the `notificationType` value that defines the receiver of the notification, where the receiver isn't implied by the `notificationType` value. So, when `notificationType` is:
     *
     * *  `User`, `recipient` is the user account ID.
     * *  `Group`, `recipient` is the group ID.
     * *  `ProjectRole`, `recipient` is the project role ID.
     * *  `UserCustomField`, `recipient` is the ID of the custom field.
     * *  `GroupCustomField`, `recipient` is the ID of the custom field.
     */
    recipient?: string;
    /**
     * The specified group.
     */
    group?: GroupName;
    /**
     * The custom user or group field.
     */
    field?: FieldDetails;
    /**
     * The email address.
     */
    emailAddress?: string;
    /**
     * The specified project role.
     */
    projectRole?: ProjectRole;
    /**
     * The specified user.
     */
    user?: UserDetails;
};

export namespace EventNotification {

    /**
     * Identifies the recipients of the notification.
     */
    export enum notificationType {
        CURRENT_ASSIGNEE = 'CurrentAssignee',
        REPORTER = 'Reporter',
        CURRENT_USER = 'CurrentUser',
        PROJECT_LEAD = 'ProjectLead',
        COMPONENT_LEAD = 'ComponentLead',
        USER = 'User',
        GROUP = 'Group',
        PROJECT_ROLE = 'ProjectRole',
        EMAIL_ADDRESS = 'EmailAddress',
        ALL_WATCHERS = 'AllWatchers',
        USER_CUSTOM_FIELD = 'UserCustomField',
        GROUP_CUSTOM_FIELD = 'GroupCustomField',
    }


}
