/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DebateContributionItem } from './DebateContributionItem';
import type { Link } from './Link';
import type { MatchedBy } from './MatchedBy';
export type DebateContributionMembersServiceSearchResult = {
    items?: Array<DebateContributionItem> | null;
    totalResults?: number;
    resultContext?: string | null;
    skip?: number;
    take?: number;
    links?: Array<Link> | null;
    resultType?: MatchedBy | null;
};

