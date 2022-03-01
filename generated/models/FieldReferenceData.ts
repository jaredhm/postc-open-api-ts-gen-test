/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details of a field that can be used in advanced searches.
 */
export type FieldReferenceData = {
    /**
     * The field identifier.
     */
    value?: string;
    /**
     * The display name contains the following:
     *
     * *  for system fields, the field name. For example, `Summary`.
     * *  for collapsed custom fields, the field name followed by a hyphen and then the field name and field type. For example, `Component - Component[Dropdown]`.
     * *  for other custom fields, the field name followed by a hyphen and then the custom field ID. For example, `Component - cf[10061]`.
     */
    displayName?: string;
    /**
     * Whether the field can be used in a query's `ORDER BY` clause.
     */
    orderable?: FieldReferenceData.orderable;
    /**
     * Whether the content of this field can be searched.
     */
    searchable?: FieldReferenceData.searchable;
    /**
     * Whether the field provide auto-complete suggestions.
     */
    auto?: FieldReferenceData.auto;
    /**
     * If the item is a custom field, the ID of the custom field.
     */
    cfid?: string;
    /**
     * The valid search operators for the field.
     */
    operators?: Array<string>;
    /**
     * The data types of items in the field.
     */
    types?: Array<string>;
};

export namespace FieldReferenceData {

    /**
     * Whether the field can be used in a query's `ORDER BY` clause.
     */
    export enum orderable {
        TRUE = 'true',
        FALSE = 'false',
    }

    /**
     * Whether the content of this field can be searched.
     */
    export enum searchable {
        TRUE = 'true',
        FALSE = 'false',
    }

    /**
     * Whether the field provide auto-complete suggestions.
     */
    export enum auto {
        TRUE = 'true',
        FALSE = 'false',
    }


}
