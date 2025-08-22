/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Field } from './Field';
import type { Link } from './Link';
import type { Member } from './Member';
import type { PublishedCategory } from './PublishedCategory';
/**
 * Version of an interest which has been published.
 */
export type PublishedInterest = {
    /**
     * ID of the interest.
     */
    id?: number;
    /**
     * Title Summary for the interest.
     */
    summary?: string | null;
    /**
     * The unique ID for the payer (parent interest) to which this payment (child interest) is associated.
     */
    parentInterestId?: number | null;
    /**
     * Registration Date on the published interest.
     */
    registrationDate?: string | null;
    /**
     * Date when the interest was first published.
     */
    publishedDate?: string | null;
    /**
     * A list of dates on which the interest has been updated since it has been published.
     */
    updatedDates?: Array<string> | null;
    category?: PublishedCategory;
    member?: Member;
    /**
     * List of fields which are available for a member to add further information about the interest.
     */
    fields?: Array<Field> | null;
    /**
     * List of Interests which are sub interests of this interest. This property is only present if `ExpandChildInterests` is true, and is not defined by default.
     */
    childInterests?: Array<PublishedInterest> | null;
    /**
     * A list of HATEOAS Links for retrieving related information about this interest.
     */
    links?: Array<Link> | null;
    /**
     * Whether the interest has been rectified (e.g. when the interest was submitted late).
     */
    rectified?: boolean;
    /**
     * The reason that the interest was rectified, or `null` if the interest was not rectified.
     */
    rectifiedDetails?: string | null;
};

