/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A list of custom field details.
 */
export type ConnectCustomFieldValue = {
    /**
     * The type of custom field.
     */
    _type: ConnectCustomFieldValue._type;
    /**
     * The issue ID.
     */
    issueID: number;
    /**
     * The custom field ID.
     */
    fieldID: number;
    /**
     * The value of string type custom field when `_type` is `StringIssueField`.
     */
    string?: string;
    /**
     * The value of number type custom field when `_type` is `NumberIssueField`.
     */
    number?: number;
    /**
     * The value of richText type custom field when `_type` is `RichTextIssueField`.
     */
    richText?: string;
    /**
     * The value of single select and multiselect custom field type when `_type` is `SingleSelectIssueField` or `MultiSelectIssueField`.
     */
    optionID?: string;
    /**
     * The value of of text custom field type when `_type` is `TextIssueField`.
     */
    text?: string;
};

export namespace ConnectCustomFieldValue {

    /**
     * The type of custom field.
     */
    export enum _type {
        STRING_ISSUE_FIELD = 'StringIssueField',
        NUMBER_ISSUE_FIELD = 'NumberIssueField',
        RICH_TEXT_ISSUE_FIELD = 'RichTextIssueField',
        SINGLE_SELECT_ISSUE_FIELD = 'SingleSelectIssueField',
        MULTI_SELECT_ISSUE_FIELD = 'MultiSelectIssueField',
        TEXT_ISSUE_FIELD = 'TextIssueField',
    }


}
