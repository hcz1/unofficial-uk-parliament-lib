/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from './Link';
import type { RegisterType } from './RegisterType';
/**
 * A published version of a register of interests.
 */
export type PublishedRegister = {
    /**
     * ID of the register.
     */
    id?: number;
    /**
     * Date when the Register was published.
     */
    publishedDate?: string;
    type?: RegisterType;
    /**
     * A list of HATEOAS Links for retrieving related information about this register.
     */
    links?: Array<Link> | null;
};

