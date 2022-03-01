/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectRoleGroup } from './ProjectRoleGroup';
import type { ProjectRoleUser } from './ProjectRoleUser';

/**
 * Details about a user assigned to a project role.
 */
export type RoleActor = {
    /**
     * The ID of the role actor.
     */
    readonly id?: number;
    /**
     * The display name of the role actor. For users, depending on the user’s privacy setting, this may return an alternative value for the user's name.
     */
    readonly displayName?: string;
    /**
     * The type of role actor.
     */
    readonly type?: RoleActor.type;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     */
    readonly name?: string;
    /**
     * The avatar of the role actor.
     */
    readonly avatarUrl?: string;
    readonly actorUser?: ProjectRoleUser;
    readonly actorGroup?: ProjectRoleGroup;
};

export namespace RoleActor {

    /**
     * The type of role actor.
     */
    export enum type {
        ATLASSIAN_GROUP_ROLE_ACTOR = 'atlassian-group-role-actor',
        ATLASSIAN_USER_ROLE_ACTOR = 'atlassian-user-role-actor',
    }


}
