/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { ApplicationRolesService } from './services/ApplicationRolesService';
import { AppMigrationService } from './services/AppMigrationService';
import { AppPropertiesService } from './services/AppPropertiesService';
import { AuditRecordsService } from './services/AuditRecordsService';
import { AvatarsService } from './services/AvatarsService';
import { DashboardsService } from './services/DashboardsService';
import { DynamicModulesService } from './services/DynamicModulesService';
import { FiltersService } from './services/FiltersService';
import { FilterSharingService } from './services/FilterSharingService';
import { GroupAndUserPickerService } from './services/GroupAndUserPickerService';
import { GroupsService } from './services/GroupsService';
import { InstanceInformationService } from './services/InstanceInformationService';
import { IssueAttachmentsService } from './services/IssueAttachmentsService';
import { IssueCommentPropertiesService } from './services/IssueCommentPropertiesService';
import { IssueCommentsService } from './services/IssueCommentsService';
import { IssueCustomFieldConfigurationAppsService } from './services/IssueCustomFieldConfigurationAppsService';
import { IssueCustomFieldContextsService } from './services/IssueCustomFieldContextsService';
import { IssueCustomFieldOptionsService } from './services/IssueCustomFieldOptionsService';
import { IssueCustomFieldOptionsAppsService } from './services/IssueCustomFieldOptionsAppsService';
import { IssueCustomFieldValuesAppsService } from './services/IssueCustomFieldValuesAppsService';
import { IssueFieldConfigurationsService } from './services/IssueFieldConfigurationsService';
import { IssueFieldsService } from './services/IssueFieldsService';
import { IssueLinksService } from './services/IssueLinksService';
import { IssueLinkTypesService } from './services/IssueLinkTypesService';
import { IssueNavigatorSettingsService } from './services/IssueNavigatorSettingsService';
import { IssueNotificationSchemesService } from './services/IssueNotificationSchemesService';
import { IssuePrioritiesService } from './services/IssuePrioritiesService';
import { IssuePropertiesService } from './services/IssuePropertiesService';
import { IssueRemoteLinksService } from './services/IssueRemoteLinksService';
import { IssueResolutionsService } from './services/IssueResolutionsService';
import { IssuesService } from './services/IssuesService';
import { IssueSearchService } from './services/IssueSearchService';
import { IssueSecurityLevelService } from './services/IssueSecurityLevelService';
import { IssueSecuritySchemesService } from './services/IssueSecuritySchemesService';
import { IssueTypePropertiesService } from './services/IssueTypePropertiesService';
import { IssueTypesService } from './services/IssueTypesService';
import { IssueTypeSchemesService } from './services/IssueTypeSchemesService';
import { IssueTypeScreenSchemesService } from './services/IssueTypeScreenSchemesService';
import { IssueVotesService } from './services/IssueVotesService';
import { IssueWatchersService } from './services/IssueWatchersService';
import { IssueWorklogPropertiesService } from './services/IssueWorklogPropertiesService';
import { IssueWorklogsService } from './services/IssueWorklogsService';
import { JiraExpressionsService } from './services/JiraExpressionsService';
import { JiraSettingsService } from './services/JiraSettingsService';
import { JqlService } from './services/JqlService';
import { LabelsService } from './services/LabelsService';
import { MyselfService } from './services/MyselfService';
import { PermissionsService } from './services/PermissionsService';
import { PermissionSchemesService } from './services/PermissionSchemesService';
import { ProjectAvatarsService } from './services/ProjectAvatarsService';
import { ProjectCategoriesService } from './services/ProjectCategoriesService';
import { ProjectComponentsService } from './services/ProjectComponentsService';
import { ProjectEmailService } from './services/ProjectEmailService';
import { ProjectFeaturesService } from './services/ProjectFeaturesService';
import { ProjectKeyAndNameValidationService } from './services/ProjectKeyAndNameValidationService';
import { ProjectPermissionSchemesService } from './services/ProjectPermissionSchemesService';
import { ProjectPropertiesService } from './services/ProjectPropertiesService';
import { ProjectRoleActorsService } from './services/ProjectRoleActorsService';
import { ProjectRolesService } from './services/ProjectRolesService';
import { ProjectsService } from './services/ProjectsService';
import { ProjectTypesService } from './services/ProjectTypesService';
import { ProjectVersionsService } from './services/ProjectVersionsService';
import { ScreensService } from './services/ScreensService';
import { ScreenSchemesService } from './services/ScreenSchemesService';
import { ScreenTabFieldsService } from './services/ScreenTabFieldsService';
import { ScreenTabsService } from './services/ScreenTabsService';
import { ServerInfoService } from './services/ServerInfoService';
import { TasksService } from './services/TasksService';
import { TimeTrackingService } from './services/TimeTrackingService';
import { UserPropertiesService } from './services/UserPropertiesService';
import { UsersService } from './services/UsersService';
import { UserSearchService } from './services/UserSearchService';
import { WebhooksService } from './services/WebhooksService';
import { WorkflowsService } from './services/WorkflowsService';
import { WorkflowSchemeDraftsService } from './services/WorkflowSchemeDraftsService';
import { WorkflowSchemeProjectAssociationsService } from './services/WorkflowSchemeProjectAssociationsService';
import { WorkflowSchemesService } from './services/WorkflowSchemesService';
import { WorkflowStatusCategoriesService } from './services/WorkflowStatusCategoriesService';
import { WorkflowStatusesService } from './services/WorkflowStatusesService';
import { WorkflowTransitionPropertiesService } from './services/WorkflowTransitionPropertiesService';
import { WorkflowTransitionRulesService } from './services/WorkflowTransitionRulesService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class JiraClient {

    public readonly applicationRoles: ApplicationRolesService;
    public readonly appMigration: AppMigrationService;
    public readonly appProperties: AppPropertiesService;
    public readonly auditRecords: AuditRecordsService;
    public readonly avatars: AvatarsService;
    public readonly dashboards: DashboardsService;
    public readonly dynamicModules: DynamicModulesService;
    public readonly filters: FiltersService;
    public readonly filterSharing: FilterSharingService;
    public readonly groupAndUserPicker: GroupAndUserPickerService;
    public readonly groups: GroupsService;
    public readonly instanceInformation: InstanceInformationService;
    public readonly issueAttachments: IssueAttachmentsService;
    public readonly issueCommentProperties: IssueCommentPropertiesService;
    public readonly issueComments: IssueCommentsService;
    public readonly issueCustomFieldConfigurationApps: IssueCustomFieldConfigurationAppsService;
    public readonly issueCustomFieldContexts: IssueCustomFieldContextsService;
    public readonly issueCustomFieldOptions: IssueCustomFieldOptionsService;
    public readonly issueCustomFieldOptionsApps: IssueCustomFieldOptionsAppsService;
    public readonly issueCustomFieldValuesApps: IssueCustomFieldValuesAppsService;
    public readonly issueFieldConfigurations: IssueFieldConfigurationsService;
    public readonly issueFields: IssueFieldsService;
    public readonly issueLinks: IssueLinksService;
    public readonly issueLinkTypes: IssueLinkTypesService;
    public readonly issueNavigatorSettings: IssueNavigatorSettingsService;
    public readonly issueNotificationSchemes: IssueNotificationSchemesService;
    public readonly issuePriorities: IssuePrioritiesService;
    public readonly issueProperties: IssuePropertiesService;
    public readonly issueRemoteLinks: IssueRemoteLinksService;
    public readonly issueResolutions: IssueResolutionsService;
    public readonly issues: IssuesService;
    public readonly issueSearch: IssueSearchService;
    public readonly issueSecurityLevel: IssueSecurityLevelService;
    public readonly issueSecuritySchemes: IssueSecuritySchemesService;
    public readonly issueTypeProperties: IssueTypePropertiesService;
    public readonly issueTypes: IssueTypesService;
    public readonly issueTypeSchemes: IssueTypeSchemesService;
    public readonly issueTypeScreenSchemes: IssueTypeScreenSchemesService;
    public readonly issueVotes: IssueVotesService;
    public readonly issueWatchers: IssueWatchersService;
    public readonly issueWorklogProperties: IssueWorklogPropertiesService;
    public readonly issueWorklogs: IssueWorklogsService;
    public readonly jiraExpressions: JiraExpressionsService;
    public readonly jiraSettings: JiraSettingsService;
    public readonly jql: JqlService;
    public readonly labels: LabelsService;
    public readonly myself: MyselfService;
    public readonly permissions: PermissionsService;
    public readonly permissionSchemes: PermissionSchemesService;
    public readonly projectAvatars: ProjectAvatarsService;
    public readonly projectCategories: ProjectCategoriesService;
    public readonly projectComponents: ProjectComponentsService;
    public readonly projectEmail: ProjectEmailService;
    public readonly projectFeatures: ProjectFeaturesService;
    public readonly projectKeyAndNameValidation: ProjectKeyAndNameValidationService;
    public readonly projectPermissionSchemes: ProjectPermissionSchemesService;
    public readonly projectProperties: ProjectPropertiesService;
    public readonly projectRoleActors: ProjectRoleActorsService;
    public readonly projectRoles: ProjectRolesService;
    public readonly projects: ProjectsService;
    public readonly projectTypes: ProjectTypesService;
    public readonly projectVersions: ProjectVersionsService;
    public readonly screens: ScreensService;
    public readonly screenSchemes: ScreenSchemesService;
    public readonly screenTabFields: ScreenTabFieldsService;
    public readonly screenTabs: ScreenTabsService;
    public readonly serverInfo: ServerInfoService;
    public readonly tasks: TasksService;
    public readonly timeTracking: TimeTrackingService;
    public readonly userProperties: UserPropertiesService;
    public readonly users: UsersService;
    public readonly userSearch: UserSearchService;
    public readonly webhooks: WebhooksService;
    public readonly workflows: WorkflowsService;
    public readonly workflowSchemeDrafts: WorkflowSchemeDraftsService;
    public readonly workflowSchemeProjectAssociations: WorkflowSchemeProjectAssociationsService;
    public readonly workflowSchemes: WorkflowSchemesService;
    public readonly workflowStatusCategories: WorkflowStatusCategoriesService;
    public readonly workflowStatuses: WorkflowStatusesService;
    public readonly workflowTransitionProperties: WorkflowTransitionPropertiesService;
    public readonly workflowTransitionRules: WorkflowTransitionRulesService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://your-domain.atlassian.net',
            VERSION: config?.VERSION ?? '1001.0.0-SNAPSHOT',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.applicationRoles = new ApplicationRolesService(this.request);
        this.appMigration = new AppMigrationService(this.request);
        this.appProperties = new AppPropertiesService(this.request);
        this.auditRecords = new AuditRecordsService(this.request);
        this.avatars = new AvatarsService(this.request);
        this.dashboards = new DashboardsService(this.request);
        this.dynamicModules = new DynamicModulesService(this.request);
        this.filters = new FiltersService(this.request);
        this.filterSharing = new FilterSharingService(this.request);
        this.groupAndUserPicker = new GroupAndUserPickerService(this.request);
        this.groups = new GroupsService(this.request);
        this.instanceInformation = new InstanceInformationService(this.request);
        this.issueAttachments = new IssueAttachmentsService(this.request);
        this.issueCommentProperties = new IssueCommentPropertiesService(this.request);
        this.issueComments = new IssueCommentsService(this.request);
        this.issueCustomFieldConfigurationApps = new IssueCustomFieldConfigurationAppsService(this.request);
        this.issueCustomFieldContexts = new IssueCustomFieldContextsService(this.request);
        this.issueCustomFieldOptions = new IssueCustomFieldOptionsService(this.request);
        this.issueCustomFieldOptionsApps = new IssueCustomFieldOptionsAppsService(this.request);
        this.issueCustomFieldValuesApps = new IssueCustomFieldValuesAppsService(this.request);
        this.issueFieldConfigurations = new IssueFieldConfigurationsService(this.request);
        this.issueFields = new IssueFieldsService(this.request);
        this.issueLinks = new IssueLinksService(this.request);
        this.issueLinkTypes = new IssueLinkTypesService(this.request);
        this.issueNavigatorSettings = new IssueNavigatorSettingsService(this.request);
        this.issueNotificationSchemes = new IssueNotificationSchemesService(this.request);
        this.issuePriorities = new IssuePrioritiesService(this.request);
        this.issueProperties = new IssuePropertiesService(this.request);
        this.issueRemoteLinks = new IssueRemoteLinksService(this.request);
        this.issueResolutions = new IssueResolutionsService(this.request);
        this.issues = new IssuesService(this.request);
        this.issueSearch = new IssueSearchService(this.request);
        this.issueSecurityLevel = new IssueSecurityLevelService(this.request);
        this.issueSecuritySchemes = new IssueSecuritySchemesService(this.request);
        this.issueTypeProperties = new IssueTypePropertiesService(this.request);
        this.issueTypes = new IssueTypesService(this.request);
        this.issueTypeSchemes = new IssueTypeSchemesService(this.request);
        this.issueTypeScreenSchemes = new IssueTypeScreenSchemesService(this.request);
        this.issueVotes = new IssueVotesService(this.request);
        this.issueWatchers = new IssueWatchersService(this.request);
        this.issueWorklogProperties = new IssueWorklogPropertiesService(this.request);
        this.issueWorklogs = new IssueWorklogsService(this.request);
        this.jiraExpressions = new JiraExpressionsService(this.request);
        this.jiraSettings = new JiraSettingsService(this.request);
        this.jql = new JqlService(this.request);
        this.labels = new LabelsService(this.request);
        this.myself = new MyselfService(this.request);
        this.permissions = new PermissionsService(this.request);
        this.permissionSchemes = new PermissionSchemesService(this.request);
        this.projectAvatars = new ProjectAvatarsService(this.request);
        this.projectCategories = new ProjectCategoriesService(this.request);
        this.projectComponents = new ProjectComponentsService(this.request);
        this.projectEmail = new ProjectEmailService(this.request);
        this.projectFeatures = new ProjectFeaturesService(this.request);
        this.projectKeyAndNameValidation = new ProjectKeyAndNameValidationService(this.request);
        this.projectPermissionSchemes = new ProjectPermissionSchemesService(this.request);
        this.projectProperties = new ProjectPropertiesService(this.request);
        this.projectRoleActors = new ProjectRoleActorsService(this.request);
        this.projectRoles = new ProjectRolesService(this.request);
        this.projects = new ProjectsService(this.request);
        this.projectTypes = new ProjectTypesService(this.request);
        this.projectVersions = new ProjectVersionsService(this.request);
        this.screens = new ScreensService(this.request);
        this.screenSchemes = new ScreenSchemesService(this.request);
        this.screenTabFields = new ScreenTabFieldsService(this.request);
        this.screenTabs = new ScreenTabsService(this.request);
        this.serverInfo = new ServerInfoService(this.request);
        this.tasks = new TasksService(this.request);
        this.timeTracking = new TimeTrackingService(this.request);
        this.userProperties = new UserPropertiesService(this.request);
        this.users = new UsersService(this.request);
        this.userSearch = new UserSearchService(this.request);
        this.webhooks = new WebhooksService(this.request);
        this.workflows = new WorkflowsService(this.request);
        this.workflowSchemeDrafts = new WorkflowSchemeDraftsService(this.request);
        this.workflowSchemeProjectAssociations = new WorkflowSchemeProjectAssociationsService(this.request);
        this.workflowSchemes = new WorkflowSchemesService(this.request);
        this.workflowStatusCategories = new WorkflowStatusCategoriesService(this.request);
        this.workflowStatuses = new WorkflowStatusesService(this.request);
        this.workflowTransitionProperties = new WorkflowTransitionPropertiesService(this.request);
        this.workflowTransitionRules = new WorkflowTransitionRulesService(this.request);
    }
}
