/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GovernmentType } from './GovernmentType';
export type Party = {
    id?: number;
    name?: string | null;
    abbreviation?: string | null;
    backgroundColour?: string | null;
    foregroundColour?: string | null;
    isLordsMainParty?: boolean;
    isLordsSpiritualParty?: boolean;
    governmentType?: GovernmentType | null;
    readonly isIndependentParty?: boolean;
};

