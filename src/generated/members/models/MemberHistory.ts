/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HouseMembership } from './HouseMembership';
import type { MemberName } from './MemberName';
import type { MemberParty } from './MemberParty';
export type MemberHistory = {
    id?: number;
    thumbnailUrl?: string | null;
    partyHistory?: Array<MemberParty> | null;
    houseMembershipHistory?: Array<HouseMembership> | null;
    nameHistory?: Array<MemberName> | null;
};

