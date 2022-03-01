/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details of a custom field.
 */
export type UpdateCustomFieldDetails = {
    /**
     * The name of the custom field. It doesn't have to be unique. The maximum length is 255 characters.
     */
    name?: string;
    /**
     * The description of the custom field. The maximum length is 40000 characters.
     */
    description?: string;
    /**
     * The searcher that defines the way the field is searched in Jira. It can be set to `null`, otherwise you must specify the valid searcher for the field type, as listed below (abbreviated values shown):
     *
     * *  `cascadingselect`: `cascadingselectsearcher`
     * *  `datepicker`: `daterange`
     * *  `datetime`: `datetimerange`
     * *  `float`: `exactnumber` or `numberrange`
     * *  `grouppicker`: `grouppickersearcher`
     * *  `importid`: `exactnumber` or `numberrange`
     * *  `labels`: `labelsearcher`
     * *  `multicheckboxes`: `multiselectsearcher`
     * *  `multigrouppicker`: `multiselectsearcher`
     * *  `multiselect`: `multiselectsearcher`
     * *  `multiuserpicker`: `userpickergroupsearcher`
     * *  `multiversion`: `versionsearcher`
     * *  `project`: `projectsearcher`
     * *  `radiobuttons`: `multiselectsearcher`
     * *  `readonlyfield`: `textsearcher`
     * *  `select`: `multiselectsearcher`
     * *  `textarea`: `textsearcher`
     * *  `textfield`: `textsearcher`
     * *  `url`: `exacttextsearcher`
     * *  `userpicker`: `userpickergroupsearcher`
     * *  `version`: `versionsearcher`
     */
    searcherKey?: UpdateCustomFieldDetails.searcherKey;
};

export namespace UpdateCustomFieldDetails {

    /**
     * The searcher that defines the way the field is searched in Jira. It can be set to `null`, otherwise you must specify the valid searcher for the field type, as listed below (abbreviated values shown):
     *
     * *  `cascadingselect`: `cascadingselectsearcher`
     * *  `datepicker`: `daterange`
     * *  `datetime`: `datetimerange`
     * *  `float`: `exactnumber` or `numberrange`
     * *  `grouppicker`: `grouppickersearcher`
     * *  `importid`: `exactnumber` or `numberrange`
     * *  `labels`: `labelsearcher`
     * *  `multicheckboxes`: `multiselectsearcher`
     * *  `multigrouppicker`: `multiselectsearcher`
     * *  `multiselect`: `multiselectsearcher`
     * *  `multiuserpicker`: `userpickergroupsearcher`
     * *  `multiversion`: `versionsearcher`
     * *  `project`: `projectsearcher`
     * *  `radiobuttons`: `multiselectsearcher`
     * *  `readonlyfield`: `textsearcher`
     * *  `select`: `multiselectsearcher`
     * *  `textarea`: `textsearcher`
     * *  `textfield`: `textsearcher`
     * *  `url`: `exacttextsearcher`
     * *  `userpicker`: `userpickergroupsearcher`
     * *  `version`: `versionsearcher`
     */
    export enum searcherKey {
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_CASCADINGSELECTSEARCHER = 'com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_DATERANGE = 'com.atlassian.jira.plugin.system.customfieldtypes:daterange',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_DATETIMERANGE = 'com.atlassian.jira.plugin.system.customfieldtypes:datetimerange',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_EXACTNUMBER = 'com.atlassian.jira.plugin.system.customfieldtypes:exactnumber',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_EXACTTEXTSEARCHER = 'com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_GROUPPICKERSEARCHER = 'com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_LABELSEARCHER = 'com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_MULTISELECTSEARCHER = 'com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_NUMBERRANGE = 'com.atlassian.jira.plugin.system.customfieldtypes:numberrange',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_PROJECTSEARCHER = 'com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_TEXTSEARCHER = 'com.atlassian.jira.plugin.system.customfieldtypes:textsearcher',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_USERPICKERGROUPSEARCHER = 'com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher',
        COM_ATLASSIAN_JIRA_PLUGIN_SYSTEM_CUSTOMFIELDTYPES_VERSIONSEARCHER = 'com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher',
    }


}
