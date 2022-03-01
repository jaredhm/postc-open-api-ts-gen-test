/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageBeanIssueSecurityLevelMember } from '../models/PageBeanIssueSecurityLevelMember';
import type { SecurityLevel } from '../models/SecurityLevel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueSecurityLevelService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get issue security level members
     * Returns issue security level members.
     *
     * Only issue security level members in context of classic projects are returned.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param issueSecuritySchemeId The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
     * @param startAt The index of the first item to return in a page of results (page offset).
     * @param maxResults The maximum number of items to return per page.
     * @param issueSecurityLevelId The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: `issueSecurityLevelId=10000&issueSecurityLevelId=10001`.
     * @param expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
     *
     * *  `all` Returns all expandable information.
     * *  `field` Returns information about the custom field granted the permission.
     * *  `group` Returns information about the group that is granted the permission.
     * *  `projectRole` Returns information about the project role granted the permission.
     * *  `user` Returns information about the user who is granted the permission.
     * @returns PageBeanIssueSecurityLevelMember Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueSecurityLevelMembers(
        issueSecuritySchemeId: number,
        startAt?: number,
        maxResults: number = 50,
        issueSecurityLevelId?: Array<number>,
        expand?: string,
    ): CancelablePromise<PageBeanIssueSecurityLevelMember> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/issuesecurityschemes/{issueSecuritySchemeId}/members',
            path: {
                'issueSecuritySchemeId': issueSecuritySchemeId,
            },
            query: {
                'startAt': startAt,
                'maxResults': maxResults,
                'issueSecurityLevelId': issueSecurityLevelId,
                'expand': expand,
            },
            errors: {
                400: `Returned if the request is not valid.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if no issue security level members are found.`,
            },
        });
    }

    /**
     * Get issue security level
     * Returns details of an issue security level.
     *
     * Use [Get issue security scheme](#api-rest-api-3-issuesecurityschemes-id-get) to obtain the IDs of issue security levels associated with the issue security scheme.
     *
     * This operation can be accessed anonymously.
     *
     * **[Permissions](#permissions) required:** None.
     * @param id The ID of the issue security level.
     * @returns SecurityLevel Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueSecurityLevel(
        id: string,
    ): CancelablePromise<SecurityLevel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/securitylevel/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Returned if the authentication credentials are incorrect.`,
                404: `Returned if the issue security level is not found.`,
            },
        });
    }

}