/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The group or role to which this item is visible.
 */
export type Visibility = {
    /**
     * Whether visibility of this item is restricted to a group or role.
     */
    type?: Visibility.type;
    /**
     * The name of the group or role that visibility of this item is restricted to. Please note that the name of a group is mutable, to reliably identify a group use `identifier`.
     */
    value?: string;
    /**
     * The ID of the group or role that visibility of this item is restricted to.
     */
    identifier?: string | null;
};

export namespace Visibility {

    /**
     * Whether visibility of this item is restricted to a group or role.
     */
    export enum type {
        GROUP = 'group',
        ROLE = 'role',
    }


}
