/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MembersInterestsMembersServiceSearchResult } from '../models/MembersInterestsMembersServiceSearchResult';
import type { MembersStaffMembersServiceSearchResult } from '../models/MembersStaffMembersServiceSearchResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LordsInterestsService {
    /**
     * Returns a list of registered interests
     * @returns MembersInterestsMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiLordsInterestsRegister({
        searchTerm,
        page,
        includeDeleted = false,
    }: {
        /**
         * Registered interests containing search term
         */
        searchTerm?: string,
        /**
         * Page of results to return, default 0. Results per page 20.
         */
        page?: number,
        /**
         * Registered interests that have been deleted
         */
        includeDeleted?: boolean,
    }): CancelablePromise<MembersInterestsMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/LordsInterests/Register',
            query: {
                'searchTerm': searchTerm,
                'page': page,
                'includeDeleted': includeDeleted,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Returns a list of staff
     * @returns MembersStaffMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiLordsInterestsStaff({
        searchTerm,
        page,
    }: {
        /**
         * Staff containing search term
         */
        searchTerm?: string,
        /**
         * Page of results to return, default 0. Results per page 20.
         */
        page?: number,
    }): CancelablePromise<MembersStaffMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/LordsInterests/Staff',
            query: {
                'searchTerm': searchTerm,
                'page': page,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
