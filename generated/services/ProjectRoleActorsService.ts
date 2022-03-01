/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorInputBean } from '../models/ActorInputBean';
import type { ActorsMap } from '../models/ActorsMap';
import type { ProjectRole } from '../models/ProjectRole';
import type { ProjectRoleActorsUpdateBean } from '../models/ProjectRoleActorsUpdateBean';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectRoleActorsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Set actors for project role
     * Sets the actors for a project role for a project, replacing all existing actors.
     *
     * To add actors to the project without overwriting the existing list, use [Add actors to project role](#api-rest-api-3-project-projectIdOrKey-role-id-post).
     *
     * **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param projectIdOrKey The project ID or project key (case sensitive).
     * @param id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param requestBody The groups or users to associate with the project role for this project. Provide the user account ID or group name.
     * @returns ProjectRole Returned if the request is successful. The complete list of actors for the project is returned.
     * @throws ApiError
     */
    public setActors(
        projectIdOrKey: string,
        id: number,
        requestBody: ProjectRoleActorsUpdateBean,
    ): CancelablePromise<ProjectRole> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/project/{projectIdOrKey}/role/{id}',
            path: {
                'projectIdOrKey': projectIdOrKey,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is not valid.`,
                401: `Returned if the authentication credentials are incorrect or missing or if the calling user lacks administrative permissions for the project.`,
                404: `Returned if:

                 *  the project is not found.
                 *  a user or group is not found.
                 *  a group or user is not active.`,
            },
        });
    }

    /**
     * Add actors to project role
     * Adds actors to a project role for the project.
     *
     * To replace all actors for the project, use [Set actors for project role](#api-rest-api-3-project-projectIdOrKey-role-id-put).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param projectIdOrKey The project ID or project key (case sensitive).
     * @param id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param requestBody The groups or users to associate with the project role for this project. Provide the user account ID or group name.
     * @returns ProjectRole Returned if the request is successful. The complete list of actors for the project is returned.
     *
     * For example, the cURL request above adds a group, *jira-developers*. For the response below to be returned as a result of that request, the user *Mia Krystof* would have previously been added as a `user` actor for this project.
     * @throws ApiError
     */
    public addActorUsers(
        projectIdOrKey: string,
        id: number,
        requestBody: ActorsMap,
    ): CancelablePromise<ProjectRole> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/project/{projectIdOrKey}/role/{id}',
            path: {
                'projectIdOrKey': projectIdOrKey,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is not valid.`,
                401: `Returned if the authentication credentials are incorrect or missing or if the calling user lacks administrative permissions for the project.`,
                404: `Returned if:

                 *  the project is not found.
                 *  the user or group is not found.
                 *  the group or user is not active.`,
            },
        });
    }

    /**
     * Delete actors from project role
     * Deletes actors from a project role for the project.
     *
     * To remove default actors from the project role, use [Delete default actors from project role](#api-rest-api-3-role-id-actors-delete).
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param projectIdOrKey The project ID or project key (case sensitive).
     * @param id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param user The user account ID of the user to remove from the project role.
     * @param group The name of the group to remove from the project role.
     * @returns void
     * @throws ApiError
     */
    public deleteActor(
        projectIdOrKey: string,
        id: number,
        user?: string,
        group?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/project/{projectIdOrKey}/role/{id}',
            path: {
                'projectIdOrKey': projectIdOrKey,
                'id': id,
            },
            query: {
                'user': user,
                'group': group,
            },
            errors: {
                400: `Returned if the request is not valid.`,
                404: `Returned if:

                 *  the project or project role is not found.
                 *  the calling user does not have administrative permission.`,
            },
        });
    }

    /**
     * Get default actors for project role
     * Returns the [default actors](#api-rest-api-3-resolution-get) for the project role.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @returns ProjectRole Returned if the request is successful.
     * @throws ApiError
     */
    public getProjectRoleActorsForRole(
        id: number,
    ): CancelablePromise<ProjectRole> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/role/{id}/actors',
            path: {
                'id': id,
            },
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have administrative permissions.`,
                404: `Returned if the project role is not found.`,
            },
        });
    }

    /**
     * Add default actors to project role
     * Adds [default actors](#api-rest-api-3-resolution-get) to a role. You may add groups or users, but you cannot add groups and users in the same request.
     *
     * Changing a project role's default actors does not affect project role members for projects already created.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param requestBody
     * @returns ProjectRole Returned if the request is successful.
     * @throws ApiError
     */
    public addProjectRoleActorsToRole(
        id: number,
        requestBody: ActorInputBean,
    ): CancelablePromise<ProjectRole> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/role/{id}/actors',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have administrative permissions.`,
                404: `Returned if the project role is not found.`,
            },
        });
    }

    /**
     * Delete default actors from project role
     * Deletes the [default actors](#api-rest-api-3-resolution-get) from a project role. You may delete a group or user, but you cannot delete a group and a user in the same request.
     *
     * Changing a project role's default actors does not affect project role members for projects already created.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param user The user account ID of the user to remove as a default actor.
     * @param group The group name of the group to be removed as a default actor.
     * @returns ProjectRole Returned if the request is successful.
     * @throws ApiError
     */
    public deleteProjectRoleActorsFromRole(
        id: number,
        user?: string,
        group?: string,
    ): CancelablePromise<ProjectRole> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/role/{id}/actors',
            path: {
                'id': id,
            },
            query: {
                'user': user,
                'group': group,
            },
            errors: {
                400: `Returned if the request is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have administrative permissions.`,
                404: `Returned if the project role is not found.`,
            },
        });
    }

}