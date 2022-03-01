/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssueLinkType } from './IssueLinkType';
import type { LinkedIssue } from './LinkedIssue';

/**
 * Details of a link between issues.
 */
export type IssueLink = {
    /**
     * The ID of the issue link.
     */
    readonly id?: string;
    /**
     * The URL of the issue link.
     */
    readonly self?: string;
    /**
     * The type of link between the issues.
     */
    type: IssueLinkType;
    /**
     * The issue the link joins to.
     */
    inwardIssue: LinkedIssue;
    /**
     * The issue the link originates from.
     */
    outwardIssue: LinkedIssue;
};
