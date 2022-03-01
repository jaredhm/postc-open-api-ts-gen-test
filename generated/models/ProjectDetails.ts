/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AvatarUrlsBean } from './AvatarUrlsBean';
import type { UpdatedProjectCategory } from './UpdatedProjectCategory';

/**
 * Details about a project.
 */
export type ProjectDetails = {
    /**
     * The URL of the project details.
     */
    readonly self?: string;
    /**
     * The ID of the project.
     */
    id?: string;
    /**
     * The key of the project.
     */
    readonly key?: string;
    /**
     * The name of the project.
     */
    readonly name?: string;
    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
     */
    readonly projectTypeKey?: ProjectDetails.projectTypeKey;
    /**
     * Whether or not the project is simplified.
     */
    readonly simplified?: boolean;
    /**
     * The URLs of the project's avatars.
     */
    readonly avatarUrls?: AvatarUrlsBean;
    /**
     * The category the project belongs to.
     */
    readonly projectCategory?: UpdatedProjectCategory;
};

export namespace ProjectDetails {

    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
     */
    export enum projectTypeKey {
        SOFTWARE = 'software',
        SERVICE_DESK = 'service_desk',
        BUSINESS = 'business',
    }


}
