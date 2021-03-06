/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SharePermissionInputBean = {
    /**
     * The type of the share permission.Specify the type as follows:
     *
     * *  `user` Share with a user.
     * *  `group` Share with a group. Specify `groupname` as well.
     * *  `project` Share with a project. Specify `projectId` as well.
     * *  `projectRole` Share with a project role in a project. Specify `projectId` and `projectRoleId` as well.
     * *  `global` Share globally, including anonymous users. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.
     * *  `authenticated` Share with all logged-in users. This shows as `loggedin` in the response. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.
     */
    type: SharePermissionInputBean.type;
    /**
     * The ID of the project to share the filter with. Set `type` to `project`.
     */
    projectId?: string;
    /**
     * The name of the group to share the filter with. Set `type` to `group`.
     */
    groupname?: string;
    /**
     * The ID of the project role to share the filter with. Set `type` to `projectRole` and the `projectId` for the project that the role is in.
     */
    projectRoleId?: string;
    /**
     * The user account ID that the filter is shared with. For a request, specify the `accountId` property for the user.
     */
    accountId?: string;
    /**
     * The rights for the share permission.
     */
    rights?: number;
};

export namespace SharePermissionInputBean {

    /**
     * The type of the share permission.Specify the type as follows:
     *
     * *  `user` Share with a user.
     * *  `group` Share with a group. Specify `groupname` as well.
     * *  `project` Share with a project. Specify `projectId` as well.
     * *  `projectRole` Share with a project role in a project. Specify `projectId` and `projectRoleId` as well.
     * *  `global` Share globally, including anonymous users. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.
     * *  `authenticated` Share with all logged-in users. This shows as `loggedin` in the response. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.
     */
    export enum type {
        USER = 'user',
        PROJECT = 'project',
        GROUP = 'group',
        PROJECT_ROLE = 'projectRole',
        GLOBAL = 'global',
        AUTHENTICATED = 'authenticated',
    }


}
