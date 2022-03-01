/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldValueUpdateDetails } from '../models/CustomFieldValueUpdateDetails';
import type { MultipleCustomFieldValuesUpdateDetails } from '../models/MultipleCustomFieldValuesUpdateDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueCustomFieldValuesAppsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Update custom fields
     * Updates the value of one or more custom fields on one or more issues. Combinations of custom field and issue should be unique within the request. Custom fields can only be updated by the Forge app that created them.
     *
     * **[Permissions](#permissions) required:** Only the app that created the custom field can update its values with this operation.
     * @param requestBody
     * @param generateChangelog Whether to generate a changelog for this update.
     * @returns void
     * @throws ApiError
     */
    public updateMultipleCustomFieldValues(
        requestBody: MultipleCustomFieldValuesUpdateDetails,
        generateChangelog: boolean = true,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/rest/api/3/app/field/value',
            query: {
                'generateChangelog': generateChangelog,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is invalid.`,
                403: `Returned if the request is not authenticated as the app that provided all the fields.`,
                404: `Returned if any field is not found.`,
            },
        });
    }

    /**
     * Update custom field value
     * Updates the value of a custom field on one or more issues. Custom fields can only be updated by the Forge app that created them.
     *
     * **[Permissions](#permissions) required:** Only the app that created the custom field can update its values with this operation.
     * @param fieldIdOrKey The ID or key of the custom field. For example, `customfield_10010`.
     * @param requestBody
     * @param generateChangelog Whether to generate a changelog for this update.
     * @returns void
     * @throws ApiError
     */
    public updateCustomFieldValue(
        fieldIdOrKey: string,
        requestBody: CustomFieldValueUpdateDetails,
        generateChangelog: boolean = true,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/rest/api/3/app/field/{fieldIdOrKey}/value',
            path: {
                'fieldIdOrKey': fieldIdOrKey,
            },
            query: {
                'generateChangelog': generateChangelog,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Returned if the request is invalid.`,
                403: `Returned if the request is not authenticated as the app that provided the field.`,
                404: `Returned if the field is not found.`,
            },
        });
    }

}