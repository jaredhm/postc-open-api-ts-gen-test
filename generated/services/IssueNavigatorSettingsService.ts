/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColumnItem } from '../models/ColumnItem';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueNavigatorSettingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get issue navigator default columns
     * Returns the default issue navigator columns.
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @returns ColumnItem Returned if the request is successful.
     * @throws ApiError
     */
    public getIssueNavigatorDefaultColumns(): CancelablePromise<Array<ColumnItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/settings/columns',
            errors: {
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
            },
        });
    }

    /**
     * Set issue navigator default columns
     * Sets the default issue navigator columns.
     *
     * The `columns` parameter accepts a navigable field value and is expressed as HTML form data. To specify multiple columns, pass multiple `columns` parameters. For example, in curl:
     *
     * `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/settings/columns`
     *
     * If no column details are sent, then all default columns are removed.
     *
     * A navigable field is one that can be used as a column on the issue navigator. Find details of navigable issue columns using [Get fields](#api-rest-api-3-field-get).
     *
     * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * @param formData A navigable field value.
     * @returns any Returned if the request is successful.
     * @throws ApiError
     */
    public setIssueNavigatorDefaultColumns(
        formData?: Array<string>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/settings/columns',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Returned if invalid parameters are passed.`,
                401: `Returned if the authentication credentials are incorrect or missing.`,
                403: `Returned if the user does not have the necessary permission.`,
                404: `Returned if a navigable field value is not found.`,
            },
        });
    }

}