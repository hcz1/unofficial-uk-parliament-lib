/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldTypeInfo } from './FieldTypeInfo';
export type Field = {
    name?: string | null;
    description?: string | null;
    type?: string | null;
    typeInfo?: FieldTypeInfo;
    value?: any;
    values?: Array<Array<Field>> | null;
};

