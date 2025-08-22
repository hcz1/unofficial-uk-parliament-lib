/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConstituencyItem } from '../models/ConstituencyItem';
import type { ConstituencyMembersServiceSearchResult } from '../models/ConstituencyMembersServiceSearchResult';
import type { ConstituencyRepresentationListItem } from '../models/ConstituencyRepresentationListItem';
import type { ElectionResultItem } from '../models/ElectionResultItem';
import type { ElectionResultListItem } from '../models/ElectionResultListItem';
import type { LocationItem } from '../models/LocationItem';
import type { LocationType } from '../models/LocationType';
import type { StringItem } from '../models/StringItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LocationService {
    /**
     * Returns a list of locations, both parent and child
     * @returns LocationItem Success
     * @throws ApiError
     */
    public static getApiLocationBrowse({
        locationType,
        locationName,
    }: {
        /**
         * Location by type of location
         */
        locationType: LocationType,
        /**
         * Location by name specified
         */
        locationName: string,
    }): CancelablePromise<LocationItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Location/Browse/{locationType}/{locationName}',
            path: {
                'locationType': locationType,
                'locationName': locationName,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns a list of constituencies
     * @returns ConstituencyMembersServiceSearchResult Success
     * @throws ApiError
     */
    public static getApiLocationConstituencySearch({
        searchText,
        skip,
        take = 20,
    }: {
        /**
         * Constituencies containing serach term in their name
         */
        searchText?: string,
        /**
         * The number of records to skip from the first, default is 0
         */
        skip?: number,
        /**
         * The number of records to return, default is 20. Maximum is 20
         */
        take?: number,
    }): CancelablePromise<ConstituencyMembersServiceSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Location/Constituency/Search',
            query: {
                'searchText': searchText,
                'skip': skip,
                'take': take,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Returns a constituency by ID
     * @returns ConstituencyItem Success
     * @throws ApiError
     */
    public static getApiLocationConstituency({
        id,
    }: {
        /**
         * Constituency by ID
         */
        id: number,
    }): CancelablePromise<ConstituencyItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Location/Constituency/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns a synopsis by constituency ID
     * @returns StringItem Success
     * @throws ApiError
     */
    public static getApiLocationConstituencySynopsis({
        id,
    }: {
        /**
         * Synopsis by constituency ID
         */
        id: number,
    }): CancelablePromise<StringItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Location/Constituency/{id}/Synopsis',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns a list of representations by constituency ID
     * @returns ConstituencyRepresentationListItem Success
     * @throws ApiError
     */
    public static getApiLocationConstituencyRepresentations({
        id,
    }: {
        /**
         * Representations by constituency ID
         */
        id: number,
    }): CancelablePromise<ConstituencyRepresentationListItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Location/Constituency/{id}/Representations',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns geometry by constituency ID
     * @returns StringItem Success
     * @throws ApiError
     */
    public static getApiLocationConstituencyGeometry({
        id,
    }: {
        /**
         * Geometry by constituency ID
         */
        id: number,
    }): CancelablePromise<StringItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Location/Constituency/{id}/Geometry',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns a list of election results by constituency ID
     * @returns ElectionResultListItem Success
     * @throws ApiError
     */
    public static getApiLocationConstituencyElectionResults({
        id,
    }: {
        /**
         * Elections results by constituency ID
         */
        id: number,
    }): CancelablePromise<ElectionResultListItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Location/Constituency/{id}/ElectionResults',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns an election result by constituency and election id
     * @returns ElectionResultItem Success
     * @throws ApiError
     */
    public static getApiLocationConstituencyElectionResult({
        id,
        electionId,
    }: {
        /**
         * Election result by constituency id
         */
        id: number,
        /**
         * Election result by election id
         */
        electionId: number,
    }): CancelablePromise<ElectionResultItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Location/Constituency/{id}/ElectionResult/{electionId}',
            path: {
                'id': id,
                'electionId': electionId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns latest election result by constituency id
     * @returns ElectionResultItem Success
     * @throws ApiError
     */
    public static getApiLocationConstituencyElectionResultLatest({
        id,
    }: {
        /**
         * Latest election result by constituency id
         */
        id: number,
    }): CancelablePromise<ElectionResultItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Location/Constituency/{id}/ElectionResult/Latest',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
