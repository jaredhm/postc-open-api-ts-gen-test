/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Scope } from './Scope';

/**
 * A screen.
 */
export type Screen = {
    /**
     * The ID of the screen.
     */
    readonly id?: number;
    /**
     * The name of the screen.
     */
    readonly name?: string;
    /**
     * The description of the screen.
     */
    readonly description?: string;
    /**
     * The scope of the screen.
     */
    scope?: Scope;
};
