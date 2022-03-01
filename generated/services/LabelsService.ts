/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageBeanString } from '../models/PageBeanString';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LabelsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all labels
     * Returns a [paginated](#pagination) list of labels.
     * @param startAt The index of the first item to return in a page of results (page offset).
     * @param maxResults The maximum number of items to return per page.
     * @returns PageBeanString Returned if the request is successful.
     * @throws ApiError
     */
    public getAllLabels(
        startAt?: number,
        maxResults: number = 1000,
    ): CancelablePromise<PageBeanString> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rest/api/3/label',
            query: {
                'startAt': startAt,
                'maxResults': maxResults,
            },
        });
    }

}