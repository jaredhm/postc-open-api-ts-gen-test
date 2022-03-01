/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type JsonNode = {
    elements?: any;
    floatingPointNumber?: boolean;
    pojo?: boolean;
    number?: boolean;
    integralNumber?: boolean;
    int?: boolean;
    long?: boolean;
    double?: boolean;
    bigDecimal?: boolean;
    bigInteger?: boolean;
    textual?: boolean;
    boolean?: boolean;
    binary?: boolean;
    containerNode?: boolean;
    missingNode?: boolean;
    object?: boolean;
    valueNode?: boolean;
    numberValue?: number;
    numberType?: JsonNode.numberType;
    intValue?: number;
    longValue?: number;
    bigIntegerValue?: number;
    doubleValue?: number;
    decimalValue?: number;
    booleanValue?: boolean;
    binaryValue?: Array<string>;
    valueAsInt?: number;
    valueAsLong?: number;
    valueAsDouble?: number;
    valueAsBoolean?: boolean;
    textValue?: string;
    valueAsText?: string;
    fieldNames?: any;
    array?: boolean;
    fields?: any;
    null?: boolean;
};

export namespace JsonNode {

    export enum numberType {
        INT = 'INT',
        LONG = 'LONG',
        BIG_INTEGER = 'BIG_INTEGER',
        FLOAT = 'FLOAT',
        DOUBLE = 'DOUBLE',
        BIG_DECIMAL = 'BIG_DECIMAL',
    }


}
