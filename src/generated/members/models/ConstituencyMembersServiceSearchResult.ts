/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConstituencyItem } from './ConstituencyItem';
import type { Link } from './Link';
import type { MatchedBy } from './MatchedBy';
export type ConstituencyMembersServiceSearchResult = {
    items?: Array<ConstituencyItem> | null;
    totalResults?: number;
    resultContext?: string | null;
    skip?: number;
    take?: number;
    links?: Array<Link> | null;
    resultType?: MatchedBy | null;
};

