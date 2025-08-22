/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnsweringBody } from '../models/AnsweringBody';
import type { GenericReferenceData } from '../models/GenericReferenceData';
import type { GovernmentDepartment } from '../models/GovernmentDepartment';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReferenceService {
    /**
     * Returns a list of policy interest.
     * @returns GenericReferenceData Success
     * @throws ApiError
     */
    public static getApiReferencePolicyInterests(): CancelablePromise<Array<GenericReferenceData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Reference/PolicyInterests',
        });
    }
    /**
     * Returns a list of departments.
     * @returns GovernmentDepartment Success
     * @throws ApiError
     */
    public static getApiReferenceDepartments({
        id,
        nameContains,
    }: {
        id?: number,
        nameContains?: string,
    }): CancelablePromise<Array<GovernmentDepartment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Reference/Departments',
            query: {
                'id': id,
                'nameContains': nameContains,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Returns a list of answering bodies.
     * @returns AnsweringBody Success
     * @throws ApiError
     */
    public static getApiReferenceAnsweringBodies({
        id,
        nameContains,
    }: {
        id?: number,
        nameContains?: string,
    }): CancelablePromise<Array<AnsweringBody>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Reference/AnsweringBodies',
            query: {
                'id': id,
                'nameContains': nameContains,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Returns department logo.
     * @returns any Success
     * @throws ApiError
     */
    public static getApiReferenceDepartmentsLogo({
        id,
    }: {
        /**
         * Logo by department ID
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Reference/Departments/{id}/Logo',
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
