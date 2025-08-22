/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { LordsByTypeItem } from './LordsByTypeItem';
import type { MatchedBy } from './MatchedBy';
export type LordsByTypeMembersServiceSearchResult = {
    items?: Array<LordsByTypeItem> | null;
    totalResults?: number;
    resultContext?: string | null;
    skip?: number;
    take?: number;
    links?: Array<Link> | null;
    resultType?: MatchedBy | null;
};

