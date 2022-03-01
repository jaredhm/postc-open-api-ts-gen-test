/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectDetails } from './ProjectDetails';

/**
 * The projects the item is associated with. Indicated for items associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
 */
export type Scope = {
    /**
     * The type of scope.
     */
    readonly type?: Scope.type;
    /**
     * The project the item has scope in.
     */
    readonly project?: ProjectDetails;
};

export namespace Scope {

    /**
     * The type of scope.
     */
    export enum type {
        PROJECT = 'PROJECT',
        TEMPLATE = 'TEMPLATE',
    }


}
