/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowCondition } from './WorkflowCondition';

/**
 * A compound workflow transition rule condition. This object returns `nodeType` as `compound`.
 */
export type WorkflowCompoundCondition = {
    /**
     * The compound condition operator.
     */
    operator: WorkflowCompoundCondition.operator;
    /**
     * The list of workflow conditions.
     */
    conditions: Array<WorkflowCondition>;
    nodeType: 'compound';
};

export namespace WorkflowCompoundCondition {

    /**
     * The compound condition operator.
     */
    export enum operator {
        AND = 'AND',
        OR = 'OR',
    }


}
