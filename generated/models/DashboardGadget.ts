/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DashboardGadgetPosition } from './DashboardGadgetPosition';

/**
 * Details of a gadget.
 */
export type DashboardGadget = {
    /**
     * The ID of the gadget instance.
     */
    readonly id: number;
    /**
     * The module key of the gadget type.
     */
    readonly moduleKey?: string;
    /**
     * The URI of the gadget type.
     */
    readonly uri?: string;
    /**
     * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
     */
    readonly color: DashboardGadget.color;
    /**
     * The position of the gadget.
     */
    readonly position: DashboardGadgetPosition;
    /**
     * The title of the gadget.
     */
    readonly title: string;
};

export namespace DashboardGadget {

    /**
     * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
     */
    export enum color {
        BLUE = 'blue',
        RED = 'red',
        YELLOW = 'yellow',
        GREEN = 'green',
        CYAN = 'cyan',
        PURPLE = 'purple',
        GRAY = 'gray',
        WHITE = 'white',
    }


}
