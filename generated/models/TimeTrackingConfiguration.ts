/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Details of the time tracking configuration.
 */
export type TimeTrackingConfiguration = {
    /**
     * The number of hours in a working day.
     */
    workingHoursPerDay: number;
    /**
     * The number of days in a working week.
     */
    workingDaysPerWeek: number;
    /**
     * The format that will appear on an issue's *Time Spent* field.
     */
    timeFormat: TimeTrackingConfiguration.timeFormat;
    /**
     * The default unit of time applied to logged time.
     */
    defaultUnit: TimeTrackingConfiguration.defaultUnit;
};

export namespace TimeTrackingConfiguration {

    /**
     * The format that will appear on an issue's *Time Spent* field.
     */
    export enum timeFormat {
        PRETTY = 'pretty',
        DAYS = 'days',
        HOURS = 'hours',
    }

    /**
     * The default unit of time applied to logged time.
     */
    export enum defaultUnit {
        MINUTE = 'minute',
        HOUR = 'hour',
        DAY = 'day',
        WEEK = 'week',
    }


}
