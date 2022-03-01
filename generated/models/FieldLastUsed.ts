/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the most recent use of a field.
 */
export type FieldLastUsed = {
    /**
     * Last used value type:
     *
     * *  *TRACKED*: field is tracked and a last used date is available.
     * *  *NOT\_TRACKED*: field is not tracked, last used date is not available.
     * *  *NO\_INFORMATION*: field is tracked, but no last used date is available.
     */
    type?: FieldLastUsed.type;
    /**
     * The date when the value of the field last changed.
     */
    value?: string;
};

export namespace FieldLastUsed {

    /**
     * Last used value type:
     *
     * *  *TRACKED*: field is tracked and a last used date is available.
     * *  *NOT\_TRACKED*: field is not tracked, last used date is not available.
     * *  *NO\_INFORMATION*: field is tracked, but no last used date is available.
     */
    export enum type {
        TRACKED = 'TRACKED',
        NOT_TRACKED = 'NOT_TRACKED',
        NO_INFORMATION = 'NO_INFORMATION',
    }


}
