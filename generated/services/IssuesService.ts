/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatedIssue } from '../models/CreatedIssue';
import type { CreatedIssues } from '../models/CreatedIssues';
import type { IssueBean } from '../models/IssueBean';
import type { IssueChangelogIds } from '../models/IssueChangelogIds';
import type { IssueCreateMetadata } from '../models/IssueCreateMetadata';
import type { IssueEvent } from '../models/IssueEvent';
import type { IssuesUpdateBean } from '../models/IssuesUpdateBean';
import type { IssueUpdateDetails } from '../models/IssueUpdateDetails';
import type { IssueUpdateMetadata } from '../models/IssueUpdateMetadata';
import type { Notification } from '../models/Notification';
import type { PageBeanChangelog } from '../models/PageBeanChangelog';
import type { PageOfChangelogs } from '../models/PageOfChangelogs';
import type { Transitions } from '../models/Transitions';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssuesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get events
     * Returns all issue events.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @returns IssueEvent Returned if the request is successful.
     * @throws ApiError
     */
    public getEvents(): CancelablePromise<Array<IssueEvent>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/events',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have permission to complete this request.`,
            },
        });
    }

    /**
     * Create issue
     * Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask. A transition may be applied, to move the issue or subtask to a workflow step other than the default start step, and issue properties set.
     *
     * The content of the issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get). These are the same fields that appear on the issue's create screen. Note that the `description`, `environment`, and any `textarea` type custom fields (multi-line text fields) take Atlassian Document Format content. Single line custom fields (`textfield`) accept a string and don't handle Atlassian Document Format content.
     *
     * Creating a subtask differs from creating an issue as follows:
     *
     * *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get) to find subtask issue types).
     * *  `parent` must contain the ID or key of the parent issue.
     *
     * In a next-gen project any issue may be made a child providing that the parent and child are members of the same project.
     *
     * **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue or subtask is created.
     * @param requestBody
     * @param updateHistory Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. When provided, the issue type and request type are added to the user's history for a project. These values are then used to provide defaults on the issue create screen.
     * @returns CreatedIssue Returned if the request is successful.
     * @throws ApiError
     */
    public createIssue(
        requestBody: IssueUpdateDetails,
        updateHistory: boolean = false,
    ): CancelablePromise<CreatedIssue> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/issue',
            query: {
                'updateHistory': updateHistory,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request:

                 *  is missing required fields.
                 *  contains invalid field values.
                 *  contains fields that cannot be set for the issue type.
                 *  is by a user who does not have the necessary permission.
                 *  is to create a subtype in a project different that of the parent issue.
                 *  is for a subtask when the option to create subtasks is disabled.
                 *  is invalid for any other reason.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Bulk create issue
     * Creates upto **50** issues and, where the option to create subtasks is enabled in Jira, subtasks. Transitions may be applied, to move the issues or subtasks to a workflow step other than the default start step, and issue properties set.
     *
     * The content of each issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get). These are the same fields that appear on the issues' create screens. Note that the `description`, `environment`, and any `textarea` type custom fields (multi-line text fields) take Atlassian Document Format content. Single line custom fields (`textfield`) accept a string and don't handle Atlassian Document Format content.
     *
     * Creating a subtask differs from creating an issue as follows:
     *
     * *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get) to find subtask issue types).
     * *  `parent` the must contain the ID or key of the parent issue.
     *
     * **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which each issue or subtask is created.
     * @param requestBody
     * @returns CreatedIssues Returned if any of the issue or subtask creation requests were successful. A request may be unsuccessful when it:
     *
     * *  is missing required fields.
     * *  contains invalid field values.
     * *  contains fields that cannot be set for the issue type.
     * *  is by a user who does not have the necessary permission.
     * *  is to create a subtype in a project different that of the parent issue.
     * *  is for a subtask when the option to create subtasks is disabled.
     * *  is invalid for any other reason.
     * @throws ApiError
     */
    public createIssues(
        requestBody: IssuesUpdateBean,
    ): CancelablePromise<CreatedIssues> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/issue/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if all requests are invalid. Requests may be unsuccessful when they:

                 *  are missing required fields.
                 *  contain invalid field values.
                 *  contain fields that cannot be set for the issue type.
                 *  are by a user who does not have the necessary permission.
                 *  are to create a subtype in a project different that of the parent issue.
                 *  is for a subtask when the option to create subtasks is disabled.
                 *  are invalid for any other reason.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * Get create issue metadata
     * Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in [ Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).
     *
     * The request can be restricted to specific projects or issue types using the query parameters. The response will contain information for the valid projects, issue types, or project and issue type combinations requested. Note that invalid project, issue type, or project and issue type combinations do not generate errors.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects.
     * @param projectIds List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, `projectIds=10000,10001&projectIds=10020,10021`. This parameter may be provided with `projectKeys`.
     * @param projectKeys List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, `projectKeys=proj1,proj2&projectKeys=proj3`. This parameter may be provided with `projectIds`.
     * @param issuetypeIds List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, `issuetypeIds=10000,10001&issuetypeIds=10020,10021`. This parameter may be provided with `issuetypeNames`.
     * @param issuetypeNames List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, `issuetypeNames=name1,name2&issuetypeNames=name3`. This parameter may be provided with `issuetypeIds`.
     * @param expand Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts `projects.issuetypes.fields`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the `fields` and `update` fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).
     * @returns IssueCreateMetadata Returned if the request is successful.
     * @throws ApiError
     */
    public getCreateIssueMeta(
        projectIds?: Array<string>,
        projectKeys?: Array<string>,
        issuetypeIds?: Array<string>,
        issuetypeNames?: Array<string>,
        expand?: string,
    ): CancelablePromise<IssueCreateMetadata> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issue/createmeta',
            query: {
                'projectIds': projectIds,
                'projectKeys': projectKeys,
                'issuetypeIds': issuetypeIds,
                'issuetypeNames': issuetypeNames,
                'expand': expand,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
            },
        });
    }

    /**
     * Get issue
     * Returns the details for an issue.
     *
     * The issue is identified by its ID or key, however, if the identifier doesn't match an issue, a case-insensitive search and check for moved issues is performed. If a matching issue is found its details are returned, a 302 or other redirect is **not** returned. The issue key returned in the response is the key of the issue found.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @param issueIdOrKey The ID or key of the issue.
     * @param fields A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:
     *
     * *  `*all` Returns all fields.
     * *  `*navigable` Returns navigable fields.
     * *  Any issue field, prefixed with a minus to exclude.
     *
     * Examples:
     *
     * *  `summary,comment` Returns only the summary and comments fields.
     * *  `-description` Returns all (default) fields except description.
     * *  `*navigable,-comment` Returns all navigable fields except comment.
     *
     * This parameter may be specified multiple times. For example, `fields=field1,field2& fields=field3`.
     *
     * Note: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields.
     * @param fieldsByKeys Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
     * @param expand Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:
     *
     * *  `renderedFields` Returns field values rendered in HTML format.
     * *  `names` Returns the display name of each field.
     * *  `schema` Returns the schema describing a field type.
     * *  `transitions` Returns all possible transitions for the issue.
     * *  `editmeta` Returns information about how each field can be edited.
     * *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
     * *  `versionedRepresentations` Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the `fields` parameter is ignored.
     * @param properties A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:
     *
     * *  `*all` Returns all issue properties.
     * *  Any issue property key, prefixed with a minus to exclude.
     *
     * Examples:
     *
     * *  `*all` Returns all properties.
     * *  `*all,-prop1` Returns all properties except `prop1`.
     * *  `prop1,prop2` Returns `prop1` and `prop2` properties.
     *
     * This parameter may be specified multiple times. For example, `properties=prop1,prop2& properties=prop3`.
     * @param updateHistory Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) `lastViewed` field.
     * @returns IssueBean Returned if the request is successful.
     * @throws ApiError
     */
    public getIssue(
        issueIdOrKey: string,
        fields?: Array<string>,
        fieldsByKeys: boolean = false,
        expand?: string,
        properties?: Array<string>,
        updateHistory: boolean = false,
    ): CancelablePromise<IssueBean> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issue/{issueIdOrKey}',
            path: {
                'issueIdOrKey': issueIdOrKey,
            },
            query: {
                'fields': fields,
                'fieldsByKeys': fieldsByKeys,
                'expand': expand,
                'properties': properties,
                'updateHistory': updateHistory,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the issue is not found or the user does not have permission to view it.`,
            },
        });
    }

    /**
     * Edit issue
     * Edits an issue. A transition may be applied and issue properties updated as part of the edit.
     *
     * The edits to the issue's fields are defined using `update` and `fields`. The fields that can be edited are determined using [ Get edit issue metadata](#api-rest-api-3-issue-issueIdOrKey-editmeta-get).
     *
     * The parent field may be set by key or ID. For standard issue types, the parent may be removed by setting `update.parent.set.none` to *true*. Note that the `description`, `environment`, and any `textarea` type custom fields (multi-line text fields) take Atlassian Document Format content. Single line custom fields (`textfield`) accept a string and don't handle Atlassian Document Format content.
     *
     * Connect apps having an app user with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), can override the screen security configuration using `overrideScreenSecurity` and `overrideEditableFlag`.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* and *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @param issueIdOrKey The ID or key of the issue.
     * @param requestBody
     * @param notifyUsers Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
     * @param overrideScreenSecurity Whether screen security is overridden to enable hidden fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param overrideEditableFlag Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @returns void
     * @throws ApiError
     */
    public editIssue(
        issueIdOrKey: string,
        requestBody: IssueUpdateDetails,
        notifyUsers: boolean = true,
        overrideScreenSecurity: boolean = false,
        overrideEditableFlag: boolean = false,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/issue/{issueIdOrKey}',
            path: {
                'issueIdOrKey': issueIdOrKey,
            },
            query: {
                'notifyUsers': notifyUsers,
                'overrideScreenSecurity': overrideScreenSecurity,
                'overrideEditableFlag': overrideEditableFlag,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:

                 *  the request body is missing.
                 *  the user does not have the necessary permission to edit one or more fields.
                 *  the request includes one or more fields that are not found or are not associated with the issue's edit screen.
                 *  the request includes an invalid transition.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user uses \`overrideScreenSecurity\` or \`overrideEditableFlag\` but doesn't have the necessary permission.`,
                404: `Returned if the issue is not found or the user does not have permission to view it.`,
            },
        });
    }

    /**
     * Delete issue
     * Deletes an issue.
     *
     * An issue cannot be deleted if it has one or more subtasks. To delete an issue with subtasks, set `deleteSubtasks`. This causes the issue's subtasks to be deleted with the issue.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* and *Delete issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @param issueIdOrKey The ID or key of the issue.
     * @param deleteSubtasks Whether the issue's subtasks are deleted when the issue is deleted.
     * @returns void
     * @throws ApiError
     */
    public deleteIssue(
        issueIdOrKey: string,
        deleteSubtasks: 'true' | 'false' = 'false',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/issue/{issueIdOrKey}',
            path: {
                'issueIdOrKey': issueIdOrKey,
            },
            query: {
                'deleteSubtasks': deleteSubtasks,
            },
            errors: {
                400: `Returned if the issue has subtasks and \`deleteSubtasks\` is not set to *true*.`,
                401: `Returned if the authentication credentials are incorrect.`,
                403: `Returned if the user does not have permission to delete the issue.`,
                404: `Returned if the issue is not found or the user does not have permission to view the issue.`,
            },
        });
    }

    /**
     * Assign issue
     * Assigns an issue to a user. Use this operation when the calling user does not have the *Edit Issues* permission but has the *Assign issue* permission for the project that the issue is in.
     *
     * If `name` or `accountId` is set to:
     *
     * *  `"-1"`, the issue is assigned to the default assignee for the project.
     * *  `null`, the issue is set to unassigned.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse Projects* and *Assign Issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @param issueIdOrKey The ID or key of the issue to be assigned.
     * @param requestBody The request object with the user that the issue is assigned to.
     * @returns void
     * @throws ApiError
     */
    public assignIssue(
        issueIdOrKey: string,
        requestBody: User,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/issue/{issueIdOrKey}/assignee',
            path: {
                'issueIdOrKey': issueIdOrKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:

                 *  the user is not found.
                 *  \`name\`, \`key\`, or \`accountId\` is missing.
                 *  more than one of \`name\`, \`key\`, and \`accountId\` are provided.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if the issue is not found.`,
            },
        });
    }

    /**
     * Get changelogs
     * Returns a [paginated](#pagination) list of all changelogs for an issue sorted by date, starting from the oldest.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @param issueIdOrKey The ID or key of the issue.
     * @param startAt The index of the first item to return in a page of results (page offset).
     * @param maxResults The maximum number of items to return per page.
     * @returns PageBeanChangelog Returned if the request is successful.
     * @throws ApiError
     */
    public getChangeLogs(
        issueIdOrKey: string,
        startAt?: number,
        maxResults: number = 100,
    ): CancelablePromise<PageBeanChangelog> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issue/{issueIdOrKey}/changelog',
            path: {
                'issueIdOrKey': issueIdOrKey,
            },
            query: {
                'startAt': startAt,
                'maxResults': maxResults,
            },
            errors: {
                404: `Returned if the issue is not found or the user does not have permission to view it.`,
            },
        });
    }

    /**
     * Get changelogs by IDs
     * Returns changelogs for an issue specified by a list of changelog IDs.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @param issueIdOrKey The ID or key of the issue.
     * @param requestBody
     * @returns PageOfChangelogs Returned if the request is successful.
     * @throws ApiError
     */
    public getChangeLogsByIds(
        issueIdOrKey: string,
        requestBody: IssueChangelogIds,
    ): CancelablePromise<PageOfChangelogs> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/issue/{issueIdOrKey}/changelog/list',
            path: {
                'issueIdOrKey': issueIdOrKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is not valid.`,
                404: `Returned if the issue is not found or the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Get edit issue metadata
     * Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in [Edit issue](#api-rest-api-3-issue-issueIdOrKey-put).
     *
     * Connect apps having an app user with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), can return additional details using:
     *
     * *  `overrideScreenSecurity` Returns hidden fields.
     * *  `overrideEditableFlag` Returns uneditable fields. For example, where an issue has a workflow status of closed none of its fields are editable.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     *
     * Note: For any fields to be editable the user must have the *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the issue.
     * @param issueIdOrKey The ID or key of the issue.
     * @param overrideScreenSecurity Whether hidden fields are returned. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param overrideEditableFlag Whether non-editable fields are returned. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @returns IssueUpdateMetadata Returned if the request is successful.
     * @throws ApiError
     */
    public getEditIssueMeta(
        issueIdOrKey: string,
        overrideScreenSecurity: boolean = false,
        overrideEditableFlag: boolean = false,
    ): CancelablePromise<IssueUpdateMetadata> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issue/{issueIdOrKey}/editmeta',
            path: {
                'issueIdOrKey': issueIdOrKey,
            },
            query: {
                'overrideScreenSecurity': overrideScreenSecurity,
                'overrideEditableFlag': overrideEditableFlag,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user uses an override parameter but doesn't have permission to do so.`,
                404: `Returned if the issue is not found or the user does not have permission to view it.`,
            },
        });
    }

    /**
     * Send notification for issue
     * Creates an email notification for an issue and adds it to the mail queue.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @param issueIdOrKey ID or key of the issue that the notification is sent for.
     * @param requestBody The request object for the notification and recipients.
     * @returns void
     * @throws ApiError
     */
    public notify(
        issueIdOrKey: string,
        requestBody: Notification,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/issue/{issueIdOrKey}/notify',
            path: {
                'issueIdOrKey': issueIdOrKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:

                 *  the recipient is the same as the calling user.
                 *  the recipient is invalid. For example, the recipient is set to the assignee, but the issue is unassigned.
                 *  the request is invalid. For example, required fields are missing or have invalid values.`,
                403: `Returned if:

                 *  outgoing emails are disabled.
                 *  no SMTP server is configured.`,
                404: `Returned if the issue is not found.`,
            },
        });
    }

    /**
     * Get transitions
     * Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status.
     *
     * Note, if a request is made for a transition that does not exist or cannot be performed on the issue, given its status, the response will return any empty transitions list.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required: A list or transition is returned only when the user has:**
     *
     * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     *
     * However, if the user does not have the *Transition issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) the response will not list any transitions.
     * @param issueIdOrKey The ID or key of the issue.
     * @param expand Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post).
     * @param transitionId The ID of the transition.
     * @param skipRemoteOnlyCondition Whether transitions with the condition *Hide From User Condition* are included in the response.
     * @param includeUnavailableTransitions Whether details of transitions that fail a condition are included in the response
     * @param sortByOpsBarAndStatus Whether the transitions are sorted by ops-bar sequence value first then category order (Todo, In Progress, Done) or only by ops-bar sequence value.
     * @returns Transitions Returned if the request is successful.
     * @throws ApiError
     */
    public getTransitions(
        issueIdOrKey: string,
        expand?: string,
        transitionId?: string,
        skipRemoteOnlyCondition: boolean = false,
        includeUnavailableTransitions: boolean = false,
        sortByOpsBarAndStatus: boolean = false,
    ): CancelablePromise<Transitions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issue/{issueIdOrKey}/transitions',
            path: {
                'issueIdOrKey': issueIdOrKey,
            },
            query: {
                'expand': expand,
                'transitionId': transitionId,
                'skipRemoteOnlyCondition': skipRemoteOnlyCondition,
                'includeUnavailableTransitions': includeUnavailableTransitions,
                'sortByOpsBarAndStatus': sortByOpsBarAndStatus,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the issue is not found or the user does not have permission to view it.`,
            },
        });
    }

    /**
     * Transition issue
     * Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen.
     *
     * sortByCategory To update the fields on the transition screen, specify the fields in the `fields` or `update` parameters in the request body. Get details about the fields using [ Get transitions](#api-rest-api-3-issue-issueIdOrKey-transitions-get) with the `transitions.fields` expand.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse projects* and *Transition issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * @param issueIdOrKey The ID or key of the issue.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public doTransition(
        issueIdOrKey: string,
        requestBody: IssueUpdateDetails,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/issue/{issueIdOrKey}/transitions',
            path: {
                'issueIdOrKey': issueIdOrKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if:

                 *  no transition is specified.
                 *  the user does not have permission to transition the issue.
                 *  a field that isn't included on the transition screen is defined in \`fields\` or \`update\`.
                 *  a field is specified in both \`fields\` and \`update\`.
                 *  the request is invalid for any other reason.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if the issue is not found or the user does not have permission to view it.`,
            },
        });
    }

}