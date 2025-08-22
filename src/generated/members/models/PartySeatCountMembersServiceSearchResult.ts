/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { MatchedBy } from './MatchedBy';
import type { PartySeatCountItem } from './PartySeatCountItem';
export type PartySeatCountMembersServiceSearchResult = {
    items?: Array<PartySeatCountItem> | null;
    totalResults?: number;
    resultContext?: string | null;
    skip?: number;
    take?: number;
    links?: Array<Link> | null;
    resultType?: MatchedBy | null;
};

