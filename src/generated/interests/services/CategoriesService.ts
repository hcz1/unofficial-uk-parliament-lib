/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublishedCategory } from '../models/PublishedCategory';
import type { PublishedCategoryApiLinkedSearchResult } from '../models/PublishedCategoryApiLinkedSearchResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CategoriesService {
    /**
     * Return a list of categories interests should be registered under, sorted by category number.
     * @returns PublishedCategoryApiLinkedSearchResult OK
     * @throws ApiError
     */
    public static getApiV1Categories({
        skip,
        take = 20,
    }: {
        /**
         * The number of records to skip from the first, default is 0.
         */
        skip?: number,
        /**
         * The number of records to return, default is 20.
         */
        take?: number,
    }): CancelablePromise<PublishedCategoryApiLinkedSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Categories',
            query: {
                'Skip': skip,
                'Take': take,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Return details of an interest category by ID.
     * @returns PublishedCategory OK
     * @throws ApiError
     */
    public static getApiV1Categories1({
        id,
    }: {
        /**
         * ID of the category.
         */
        id: number,
    }): CancelablePromise<PublishedCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Categories/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
