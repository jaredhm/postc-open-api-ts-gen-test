/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Comment } from './Comment';

export type PaginatedResponseComment = {
    total?: number;
    results?: Array<Comment>;
    maxResults?: number;
    startAt?: number;
};
