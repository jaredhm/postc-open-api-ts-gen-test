/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details about the project.
 */
export type CreateProjectDetails = {
    /**
     * Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters.
     */
    key: string;
    /**
     * The name of the project.
     */
    name: string;
    /**
     * A brief description of the project.
     */
    description?: string;
    /**
     * This parameter is deprecated because of privacy changes. Use `leadAccountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Cannot be provided with `leadAccountId`.
     */
    lead?: string;
    /**
     * The account ID of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Cannot be provided with `lead`.
     */
    leadAccountId?: string;
    /**
     * A link to information about this project, such as project documentation
     */
    url?: string;
    /**
     * The default assignee when creating issues for this project.
     */
    assigneeType?: CreateProjectDetails.assigneeType;
    /**
     * An integer value for the project's avatar.
     */
    avatarId?: number;
    /**
     * The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs.
     */
    issueSecurityScheme?: number;
    /**
     * The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs.
     */
    permissionScheme?: number;
    /**
     * The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs.
     */
    notificationScheme?: number;
    /**
     * The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.
     */
    categoryId?: number;
    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes), which defines the application-specific feature set. If you don't specify the project template you have to specify the project type.
     */
    projectTypeKey?: CreateProjectDetails.projectTypeKey;
    /**
     * A predefined configuration for a project. The type of the `projectTemplateKey` must match with the type of the `projectTypeKey`.
     */
    projectTemplateKey?: CreateProjectDetails.projectTemplateKey;
    /**
     * The ID of the workflow scheme for the project. Use the [Get all workflow schemes](#api-rest-api-3-workflowscheme-get) operation to get a list of workflow scheme IDs. If you specify the workflow scheme you cannot specify the project template key.
     */
    workflowScheme?: number;
    /**
     * The ID of the issue type screen scheme for the project. Use the [Get all issue type screen schemes](#api-rest-api-3-issuetypescreenscheme-get) operation to get a list of issue type screen scheme IDs. If you specify the issue type screen scheme you cannot specify the project template key.
     */
    issueTypeScreenScheme?: number;
    /**
     * The ID of the issue type scheme for the project. Use the [Get all issue type schemes](#api-rest-api-3-issuetypescheme-get) operation to get a list of issue type scheme IDs. If you specify the issue type scheme you cannot specify the project template key.
     */
    issueTypeScheme?: number;
    /**
     * The ID of the field configuration scheme for the project. Use the [Get all field configuration schemes](#api-rest-api-3-fieldconfigurationscheme-get) operation to get a list of field configuration scheme IDs. If you specify the field configuration scheme you cannot specify the project template key.
     */
    fieldConfigurationScheme?: number;
};

export namespace CreateProjectDetails {

    /**
     * The default assignee when creating issues for this project.
     */
    export enum assigneeType {
        PROJECT_LEAD = 'PROJECT_LEAD',
        UNASSIGNED = 'UNASSIGNED',
    }

    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes), which defines the application-specific feature set. If you don't specify the project template you have to specify the project type.
     */
    export enum projectTypeKey {
        SOFTWARE = 'software',
        SERVICE_DESK = 'service_desk',
        BUSINESS = 'business',
    }

    /**
     * A predefined configuration for a project. The type of the `projectTemplateKey` must match with the type of the `projectTypeKey`.
     */
    export enum projectTemplateKey {
        COM_PYXIS_GREENHOPPER_JIRA_GH_SIMPLIFIED_AGILITY_KANBAN = 'com.pyxis.greenhopper.jira:gh-simplified-agility-kanban',
        COM_PYXIS_GREENHOPPER_JIRA_GH_SIMPLIFIED_AGILITY_SCRUM = 'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum',
        COM_PYXIS_GREENHOPPER_JIRA_GH_SIMPLIFIED_BASIC = 'com.pyxis.greenhopper.jira:gh-simplified-basic',
        COM_PYXIS_GREENHOPPER_JIRA_GH_SIMPLIFIED_KANBAN_CLASSIC = 'com.pyxis.greenhopper.jira:gh-simplified-kanban-classic',
        COM_PYXIS_GREENHOPPER_JIRA_GH_SIMPLIFIED_SCRUM_CLASSIC = 'com.pyxis.greenhopper.jira:gh-simplified-scrum-classic',
        COM_ATLASSIAN_SERVICEDESK_SIMPLIFIED_IT_SERVICE_MANAGEMENT = 'com.atlassian.servicedesk:simplified-it-service-management',
        COM_ATLASSIAN_SERVICEDESK_SIMPLIFIED_GENERAL_SERVICE_DESK = 'com.atlassian.servicedesk:simplified-general-service-desk',
        COM_ATLASSIAN_SERVICEDESK_SIMPLIFIED_INTERNAL_SERVICE_DESK = 'com.atlassian.servicedesk:simplified-internal-service-desk',
        COM_ATLASSIAN_SERVICEDESK_SIMPLIFIED_EXTERNAL_SERVICE_DESK = 'com.atlassian.servicedesk:simplified-external-service-desk',
        COM_ATLASSIAN_SERVICEDESK_SIMPLIFIED_HR_SERVICE_DESK = 'com.atlassian.servicedesk:simplified-hr-service-desk',
        COM_ATLASSIAN_SERVICEDESK_SIMPLIFIED_FACILITIES_SERVICE_DESK = 'com.atlassian.servicedesk:simplified-facilities-service-desk',
        COM_ATLASSIAN_SERVICEDESK_SIMPLIFIED_LEGAL_SERVICE_DESK = 'com.atlassian.servicedesk:simplified-legal-service-desk',
        COM_ATLASSIAN_JIRA_CORE_PROJECT_TEMPLATES_JIRA_CORE_SIMPLIFIED_CONTENT_MANAGEMENT = 'com.atlassian.jira-core-project-templates:jira-core-simplified-content-management',
        COM_ATLASSIAN_JIRA_CORE_PROJECT_TEMPLATES_JIRA_CORE_SIMPLIFIED_DOCUMENT_APPROVAL = 'com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval',
        COM_ATLASSIAN_JIRA_CORE_PROJECT_TEMPLATES_JIRA_CORE_SIMPLIFIED_LEAD_TRACKING = 'com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking',
        COM_ATLASSIAN_JIRA_CORE_PROJECT_TEMPLATES_JIRA_CORE_SIMPLIFIED_PROCESS_CONTROL = 'com.atlassian.jira-core-project-templates:jira-core-simplified-process-control',
        COM_ATLASSIAN_JIRA_CORE_PROJECT_TEMPLATES_JIRA_CORE_SIMPLIFIED_PROCUREMENT = 'com.atlassian.jira-core-project-templates:jira-core-simplified-procurement',
        COM_ATLASSIAN_JIRA_CORE_PROJECT_TEMPLATES_JIRA_CORE_SIMPLIFIED_PROJECT_MANAGEMENT = 'com.atlassian.jira-core-project-templates:jira-core-simplified-project-management',
        COM_ATLASSIAN_JIRA_CORE_PROJECT_TEMPLATES_JIRA_CORE_SIMPLIFIED_RECRUITMENT = 'com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment',
        COM_ATLASSIAN_JIRA_CORE_PROJECT_TEMPLATES_JIRA_CORE_SIMPLIFIED_TASK_ = 'com.atlassian.jira-core-project-templates:jira-core-simplified-task-',
    }


}
