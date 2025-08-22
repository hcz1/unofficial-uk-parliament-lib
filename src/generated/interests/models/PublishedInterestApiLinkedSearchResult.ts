/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { PublishedInterest } from './PublishedInterest';
/**
 * Paginated search result with HATEOAS Links.
 */
export type PublishedInterestApiLinkedSearchResult = {
    /**
     * The skip value that was used in the query.
     */
    skip?: number;
    /**
     * The take value that was used in the query.
     */
    take?: number;
    /**
     * The total number of results which matches the query.
     */
    totalResults?: number;
    /**
     * The list of items found for the specified page (by requested skip and take).
     */
    items?: Array<PublishedInterest> | null;
    /**
     * A list of HATEOAS Links for navigating through the paginated result.
     */
    links?: Array<Link> | null;
};

