/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JqlQueryField } from './JqlQueryField';

/**
 * An element of the order-by JQL clause.
 */
export type JqlQueryOrderByClauseElement = {
    field: JqlQueryField;
    /**
     * The direction in which to order the results.
     */
    direction?: JqlQueryOrderByClauseElement.direction;
};

export namespace JqlQueryOrderByClauseElement {

    /**
     * The direction in which to order the results.
     */
    export enum direction {
        ASC = 'asc',
        DESC = 'desc',
    }


}
