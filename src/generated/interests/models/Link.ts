/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * HATEOAS Link for retrieving related information to a response or object.
 */
export type Link = {
    /**
     * Relationship of the link to the object requested.
     */
    rel?: string | null;
    /**
     * A complete URL that shows how the action can be performed.
     */
    href?: string | null;
    /**
     * Request method of the link.
     */
    method?: string | null;
};

