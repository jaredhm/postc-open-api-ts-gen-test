/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JqlQueryClauseOperand } from './JqlQueryClauseOperand';
import type { JqlQueryField } from './JqlQueryField';

/**
 * A clause that asserts the current value of a field. For example, `summary ~ test`.
 */
export type FieldValueClause = {
    field: JqlQueryField;
    /**
     * The operator between the field and operand.
     */
    operator: FieldValueClause.operator;
    operand: JqlQueryClauseOperand;
};

export namespace FieldValueClause {

    /**
     * The operator between the field and operand.
     */
    export enum operator {
        _ = '=',
        _ = '!=',
        _ = '>',
        _ = '<',
        _ = '>=',
        _ = '<=',
        IN = 'in',
        NOT_IN = 'not in',
        _ = '~',
        _ = '~=',
        IS = 'is',
        IS_NOT = 'is not',
    }


}
