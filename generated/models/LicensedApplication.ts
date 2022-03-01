/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details about a licensed Jira application.
 */
export type LicensedApplication = {
    /**
     * The ID of the application.
     */
    readonly id: string;
    /**
     * The licensing plan.
     */
    readonly plan: LicensedApplication.plan;
};

export namespace LicensedApplication {

    /**
     * The licensing plan.
     */
    export enum plan {
        UNLICENSED = 'UNLICENSED',
        FREE = 'FREE',
        PAID = 'PAID',
    }


}
