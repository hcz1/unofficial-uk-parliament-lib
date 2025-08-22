/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { MatchedBy } from './MatchedBy';
import type { MembersInterestsItem } from './MembersInterestsItem';
export type MembersInterestsMembersServiceSearchResult = {
    items?: Array<MembersInterestsItem> | null;
    totalResults?: number;
    resultContext?: string | null;
    skip?: number;
    take?: number;
    links?: Array<Link> | null;
    resultType?: MatchedBy | null;
};

