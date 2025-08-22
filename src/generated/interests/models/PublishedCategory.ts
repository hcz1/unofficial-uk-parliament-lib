/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { RegisterType } from './RegisterType';
/**
 * Category an interest can be registered with.
 */
export type PublishedCategory = {
    /**
     * ID of the category.
     */
    id?: number;
    /**
     * Number of the category in the code of conduct.
     */
    number?: string | null;
    /**
     * Name of the category.
     */
    name?: string | null;
    /**
     * The unique ID for any parent category to which this category is associated, if the category is associated with another category.
     */
    parentCategoryIds?: Array<number> | null;
    type?: RegisterType;
    /**
     * A list of HATEOAS Links for retrieving further information about this category.
     */
    links?: Array<Link> | null;
};

