/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { House } from '../models/House';
import type { LordsByTypeMembersServiceSearchResult } from '../models/LordsByTypeMembersServiceSearchResult';
import type { PartyMembersServiceSearchResult } from '../models/PartyMembersServiceSearchResult';
import type { PartySeatCountMembersServiceSearchResult } from '../models/PartySeatCountMembersServiceSearchResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PartiesService {
    /**
     * Returns current state of parties
     * @returns PartySeatCountMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiPartiesStateOfTheParties({
        house,
        forDate,
    }: {
        /**
         * State of parties in Commons or Lords.
         */
        house: House,
        /**
         * State of parties for the date specified
         */
        forDate: string,
    }): CancelablePromise<PartySeatCountMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Parties/StateOfTheParties/{house}/{forDate}',
            path: {
                'house': house,
                'forDate': forDate,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Returns the composition of the House of Lords by peerage type.
     * @returns LordsByTypeMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiPartiesLordsByType({
        forDate,
    }: {
        /**
         * Composition of the Lords for date specified.
         */
        forDate: string,
    }): CancelablePromise<LordsByTypeMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Parties/LordsByType/{forDate}',
            path: {
                'forDate': forDate,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Returns a list of current parties with at least one active member.
     * @returns PartyMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiPartiesGetActive({
        house,
    }: {
        /**
         * Current parties by house
         */
        house: House,
    }): CancelablePromise<PartyMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Parties/GetActive/{house}',
            path: {
                'house': house,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
