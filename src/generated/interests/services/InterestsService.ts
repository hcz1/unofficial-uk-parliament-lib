/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InterestsSortOrder } from '../models/InterestsSortOrder';
import type { PublishedInterest } from '../models/PublishedInterest';
import type { PublishedInterestApiLinkedSearchResult } from '../models/PublishedInterestApiLinkedSearchResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InterestsService {
    /**
     * Return a list of interests that have been published on a register.
     * @returns PublishedInterestApiLinkedSearchResult OK
     * @throws ApiError
     */
    public static getApiV1Interests({
        memberId,
        categoryId,
        publishedFrom,
        publishedTo,
        registeredFrom,
        registeredTo,
        updatedFrom,
        updatedTo,
        registerId,
        expandChildInterests,
        take = 20,
        sortOrder,
        skip,
    }: {
        /**
         * Search for an interest created by member with this ID.
         */
        memberId?: number,
        /**
         * Search for an interest within a specific category with this ID.
         */
        categoryId?: number,
        /**
         * Search for an interest published on or after this date.
         */
        publishedFrom?: string,
        /**
         * Search for an interest published on or before this date.
         */
        publishedTo?: string,
        /**
         * Search for an interest registered on or after this date.
         */
        registeredFrom?: string,
        /**
         * Search for an interest registered on or before this date.
         */
        registeredTo?: string,
        /**
         * Search for an interest which has any updates on or after this date.
         */
        updatedFrom?: string,
        /**
         * Search for an interest which has any updates on or before this date.
         */
        updatedTo?: string,
        /**
         * Search for an interest published in a register with this ID. If not provided, default value is latest register ID.
         */
        registerId?: number,
        /**
         * If true returns related interests in a nested format, rather than as individual items.
         */
        expandChildInterests?: boolean,
        /**
         * The number of records to return, default is 20. Maximum is 20.
         */
        take?: number,
        /**
         * The order in which to return records.
         */
        sortOrder?: InterestsSortOrder,
        /**
         * The number of records to skip from the first, default is 0.
         */
        skip?: number,
    }): CancelablePromise<PublishedInterestApiLinkedSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Interests',
            query: {
                'MemberId': memberId,
                'CategoryId': categoryId,
                'PublishedFrom': publishedFrom,
                'PublishedTo': publishedTo,
                'RegisteredFrom': registeredFrom,
                'RegisteredTo': registeredTo,
                'UpdatedFrom': updatedFrom,
                'UpdatedTo': updatedTo,
                'RegisterId': registerId,
                'ExpandChildInterests': expandChildInterests,
                'Take': take,
                'SortOrder': sortOrder,
                'Skip': skip,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Return interests that have been published on a register as a collection of CSVs packaged in a ZIP file.
     * If the result set is an empty, an empty ZIP will be returned.
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV1InterestsCsv({
        memberId,
        categoryId,
        publishedFrom,
        publishedTo,
        registeredFrom,
        registeredTo,
        updatedFrom,
        updatedTo,
        registerId,
        includeFieldDescriptions,
    }: {
        /**
         * Search for an interest created by member with this ID.
         */
        memberId?: number,
        /**
         * Search for an interest with associated category with this ID.
         */
        categoryId?: number,
        /**
         * Search for an interest published on or after this date.
         */
        publishedFrom?: string,
        /**
         * Search for an interest published on or before this date.
         */
        publishedTo?: string,
        /**
         * Search for an interest registered on or after this date.
         */
        registeredFrom?: string,
        /**
         * Search for an interest registered on or before this date.
         */
        registeredTo?: string,
        /**
         * Search for an interest which has any updates on or after this date.
         */
        updatedFrom?: string,
        /**
         * Search for an interest which has any updates on or before this date.
         */
        updatedTo?: string,
        /**
         * Search for an interest published in a register with this ID. If not provided, default value is latest register ID.
         */
        registerId?: number,
        /**
         * Returns a metadata file for each category, containing a list of fields which are available for a member to add further information about the interest.
         */
        includeFieldDescriptions?: boolean,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Interests/csv',
            query: {
                'MemberId': memberId,
                'CategoryId': categoryId,
                'PublishedFrom': publishedFrom,
                'PublishedTo': publishedTo,
                'RegisteredFrom': registeredFrom,
                'RegisteredTo': registeredTo,
                'UpdatedFrom': updatedFrom,
                'UpdatedTo': updatedTo,
                'RegisterId': registerId,
                'IncludeFieldDescriptions': includeFieldDescriptions,
            },
        });
    }
    /**
     * Return the latest version of an interest which has been published.
     * @returns PublishedInterest OK
     * @throws ApiError
     */
    public static getApiV1Interests1({
        id,
    }: {
        /**
         * ID of the interest.
         */
        id: number,
    }): CancelablePromise<PublishedInterest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Interests/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
