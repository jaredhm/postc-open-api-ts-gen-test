/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IssueLink } from '../models/IssueLink';
import type { LinkIssueRequestJsonBean } from '../models/LinkIssueRequestJsonBean';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueLinksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create issue link
     * Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have [Issue Linking](https://confluence.atlassian.com/x/yoXKM) enabled.
     *
     * This resource returns nothing on the creation of an issue link. To obtain the ID of the issue link, use `https://your-domain.atlassian.net/rest/api/3/issue/[linked issue key]?fields=issuelinks`.
     *
     * If the link request duplicates a link, the response indicates that the issue link was created. If the request included a comment, the comment is added.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse project* [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the issues to be linked,
     * *  *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) on the project containing the from (outward) issue,
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * @param requestBody The issue link request.
     * @returns any Returned if the request is successful.
     * @throws ApiError
     */
    public linkIssues(
        requestBody: LinkIssueRequestJsonBean,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/issueLink',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the comment is not created. The response contains an error message indicating why the comment wasn't created. The issue link is also not created.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  issue linking is disabled.
                 *  the user cannot view one or both of the issues. For example, the user doesn't have *Browse project* project permission for a project containing one of the issues.
                 *  the user does not have *link issues* project permission.
                 *  either of the link issues are not found.
                 *  the issue link type is not found.`,
            },
        });
    }

    /**
     * Get issue link
     * Returns an issue link.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  *Browse project* [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the linked issues.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, permission to view both of the issues.
     * @param linkId The ID of the issue link.
     * @returns IssueLink Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueLink(
        linkId: string,
    ): CancelablePromise<IssueLink> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issueLink/{linkId}',
            path: {
                'linkId': linkId,
            },
            errors: {
                400: `Returned if the issue link ID is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  issue linking is disabled.
                 *  the issue link is not found.
                 *  the user doesn't have the required permissions.`,
            },
        });
    }

    /**
     * Delete issue link
     * Deletes an issue link.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:**
     *
     * *  Browse project [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the issues in the link.
     * *  *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one of the projects containing issues in the link.
     * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, permission to view both of the issues.
     * @param linkId The ID of the issue link.
     * @returns any 200 response
     * @throws ApiError
     */
    public deleteIssueLink(
        linkId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/rest/api/3/issueLink/{linkId}',
            path: {
                'linkId': linkId,
            },
            errors: {
                400: `Returned if the issue link ID is invalid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                404: `Returned if:

                 *  issue linking is disabled.
                 *  the issue link is not found.
                 *  the user doesn't have the required permissions.`,
            },
        });
    }

}