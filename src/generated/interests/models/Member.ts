/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
/**
 * Member of Parliament who has registered the interest.
 */
export type Member = {
    /**
     * ID of the member.
     */
    id?: number;
    /**
     * Member's current full name, as it should be displayed in text.
     */
    nameDisplayAs?: string | null;
    /**
     * Member's current name in the format {surname}, {forename}, for use in an ordered list.
     */
    nameListAs?: string | null;
    /**
     * The name of the House the Member is currently associated with.
     */
    house?: string | null;
    /**
     * Constituency of Commons Members.
     */
    memberFrom?: string | null;
    /**
     * Party the Member is currently associated with.
     */
    party?: string | null;
    /**
     * A list of HATEOAS Links for retrieving further information about this member.
     */
    links?: Array<Link> | null;
};

