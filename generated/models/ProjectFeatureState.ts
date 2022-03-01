/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details of the feature state.
 */
export type ProjectFeatureState = {
    /**
     * The feature state.
     */
    state?: ProjectFeatureState.state;
};

export namespace ProjectFeatureState {

    /**
     * The feature state.
     */
    export enum state {
        ENABLED = 'ENABLED',
        DISABLED = 'DISABLED',
        COMING_SOON = 'COMING_SOON',
    }


}
