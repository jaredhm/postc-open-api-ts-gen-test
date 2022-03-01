/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VersionMoveBean = {
    /**
     * The URL (self link) of the version after which to place the moved version. Cannot be used with `position`.
     */
    after?: string;
    /**
     * An absolute position in which to place the moved version. Cannot be used with `after`.
     */
    position?: VersionMoveBean.position;
};

export namespace VersionMoveBean {

    /**
     * An absolute position in which to place the moved version. Cannot be used with `after`.
     */
    export enum position {
        EARLIER = 'Earlier',
        LATER = 'Later',
        FIRST = 'First',
        LAST = 'Last',
    }


}
