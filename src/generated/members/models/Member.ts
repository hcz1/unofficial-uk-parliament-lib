/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HouseMembership } from './HouseMembership';
import type { Party } from './Party';
export type Member = {
    id?: number;
    nameListAs?: string | null;
    nameDisplayAs?: string | null;
    nameFullTitle?: string | null;
    nameAddressAs?: string | null;
    latestParty?: Party | null;
    gender?: string | null;
    latestHouseMembership?: HouseMembership | null;
    thumbnailUrl?: string | null;
};

