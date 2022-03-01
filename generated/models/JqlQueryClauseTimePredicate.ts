/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JqlQueryClauseOperand } from './JqlQueryClauseOperand';

/**
 * A time predicate for a temporal JQL clause.
 */
export type JqlQueryClauseTimePredicate = {
    /**
     * The operator between the field and the operand.
     */
    operator: JqlQueryClauseTimePredicate.operator;
    operand: JqlQueryClauseOperand;
};

export namespace JqlQueryClauseTimePredicate {

    /**
     * The operator between the field and the operand.
     */
    export enum operator {
        BEFORE = 'before',
        AFTER = 'after',
        FROM = 'from',
        TO = 'to',
        ON = 'on',
        DURING = 'during',
        BY = 'by',
    }


}
