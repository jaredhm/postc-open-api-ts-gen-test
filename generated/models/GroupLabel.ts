/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A group label.
 */
export type GroupLabel = {
    /**
     * The group label name.
     */
    text?: string;
    /**
     * The title of the group label.
     */
    title?: string;
    /**
     * The type of the group label.
     */
    type?: GroupLabel.type;
};

export namespace GroupLabel {

    /**
     * The type of the group label.
     */
    export enum type {
        ADMIN = 'ADMIN',
        SINGLE = 'SINGLE',
        MULTIPLE = 'MULTIPLE',
    }


}
