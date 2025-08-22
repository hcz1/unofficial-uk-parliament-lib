/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GovernmentDepartment } from './GovernmentDepartment';
import type { GovernmentOppositionPostHolder } from './GovernmentOppositionPostHolder';
import type { PostType } from './PostType';
export type GovernmentOppositionPost = {
    type?: PostType | null;
    name?: string | null;
    hansardName?: string | null;
    id?: number;
    postHolders?: Array<GovernmentOppositionPostHolder> | null;
    governmentDepartments?: Array<GovernmentDepartment> | null;
    createdWhen?: string;
    order?: number;
};

