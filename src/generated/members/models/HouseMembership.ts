/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { House } from './House';
import type { HouseMembershipStatus } from './HouseMembershipStatus';
export type HouseMembership = {
    membershipFrom?: string | null;
    membershipFromId?: number | null;
    house?: House | null;
    membershipStartDate?: string | null;
    membershipEndDate?: string | null;
    membershipEndReason?: string | null;
    membershipEndReasonNotes?: string | null;
    membershipEndReasonId?: number | null;
    membershipStatus?: HouseMembershipStatus | null;
};

