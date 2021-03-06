/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details about syntax and type errors. The error details apply to the entire expression, unless the object includes:
 *
 * *  `line` and `column`
 * *  `expression`
 */
export type JiraExpressionValidationError = {
    /**
     * The text line in which the error occurred.
     */
    line?: number;
    /**
     * The text column in which the error occurred.
     */
    column?: number;
    /**
     * The part of the expression in which the error occurred.
     */
    expression?: string;
    /**
     * Details about the error.
     */
    message: string;
    /**
     * The error type.
     */
    type: JiraExpressionValidationError.type;
};

export namespace JiraExpressionValidationError {

    /**
     * The error type.
     */
    export enum type {
        SYNTAX = 'syntax',
        TYPE = 'type',
        OTHER = 'other',
    }


}
