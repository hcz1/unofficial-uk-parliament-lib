/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RegisteredInterest = {
    id?: number;
    interest?: string | null;
    createdWhen?: string | null;
    lastAmendedWhen?: string | null;
    deletedWhen?: string | null;
    isCorrection?: boolean;
    childInterests?: Array<RegisteredInterest> | null;
};

