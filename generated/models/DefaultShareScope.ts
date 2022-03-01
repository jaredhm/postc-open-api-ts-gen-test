/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details of the scope of the default sharing for new filters and dashboards.
 */
export type DefaultShareScope = {
    /**
     * The scope of the default sharing for new filters and dashboards:
     *
     * *  `AUTHENTICATED` Shared with all logged-in users.
     * *  `GLOBAL` Shared with all logged-in users. This shows as `AUTHENTICATED` in the response.
     * *  `PRIVATE` Not shared with any users.
     */
    scope: DefaultShareScope.scope;
};

export namespace DefaultShareScope {

    /**
     * The scope of the default sharing for new filters and dashboards:
     *
     * *  `AUTHENTICATED` Shared with all logged-in users.
     * *  `GLOBAL` Shared with all logged-in users. This shows as `AUTHENTICATED` in the response.
     * *  `PRIVATE` Not shared with any users.
     */
    export enum scope {
        GLOBAL = 'GLOBAL',
        AUTHENTICATED = 'AUTHENTICATED',
        PRIVATE = 'PRIVATE',
    }


}
