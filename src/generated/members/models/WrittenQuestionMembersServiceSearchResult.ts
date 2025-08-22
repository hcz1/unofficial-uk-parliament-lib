/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { MatchedBy } from './MatchedBy';
import type { WrittenQuestionItem } from './WrittenQuestionItem';
export type WrittenQuestionMembersServiceSearchResult = {
    items?: Array<WrittenQuestionItem> | null;
    totalResults?: number;
    resultContext?: string | null;
    skip?: number;
    take?: number;
    links?: Array<Link> | null;
    resultType?: MatchedBy | null;
};

