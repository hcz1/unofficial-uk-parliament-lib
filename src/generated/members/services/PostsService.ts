/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GovernmentDepartment } from '../models/GovernmentDepartment';
import type { GovernmentOppositionPostItem } from '../models/GovernmentOppositionPostItem';
import type { MemberItem } from '../models/MemberItem';
import type { PostType } from '../models/PostType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostsService {
    /**
     * Returns a list of government posts.
     * @returns GovernmentOppositionPostItem Success
     * @throws ApiError
     */
    public static getApiPostsGovernmentPosts({
        departmentId,
    }: {
        /**
         * Government posts by department ID
         */
        departmentId?: number,
    }): CancelablePromise<Array<GovernmentOppositionPostItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts/GovernmentPosts',
            query: {
                'departmentId': departmentId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns a list of opposition posts.
     * @returns GovernmentOppositionPostItem Success
     * @throws ApiError
     */
    public static getApiPostsOppositionPosts({
        departmentId,
    }: {
        /**
         * Opposition posts by department ID
         */
        departmentId?: number,
    }): CancelablePromise<Array<GovernmentOppositionPostItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts/OppositionPosts',
            query: {
                'departmentId': departmentId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns a list of spokespersons.
     * @returns GovernmentOppositionPostItem Success
     * @throws ApiError
     */
    public static getApiPostsSpokespersons({
        partyId,
    }: {
        /**
         * Spokespersons by party ID
         */
        partyId?: number,
    }): CancelablePromise<Array<GovernmentOppositionPostItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts/Spokespersons',
            query: {
                'partyId': partyId,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns a list of departments.
     * @returns GovernmentDepartment Success
     * @throws ApiError
     */
    public static getApiPostsDepartments({
        type,
    }: {
        /**
         * Departments by type
         */
        type: PostType,
    }): CancelablePromise<Array<GovernmentDepartment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts/Departments/{type}',
            path: {
                'type': type,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * Returns a list containing the speaker and deputy speakers.
     * @returns MemberItem Success
     * @throws ApiError
     */
    public static getApiPostsSpeakerAndDeputies({
        forDate,
    }: {
        /**
         * Speaker and deputy speakers for date specified
         */
        forDate: string,
    }): CancelablePromise<Array<MemberItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Posts/SpeakerAndDeputies/{forDate}',
            path: {
                'forDate': forDate,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
}
