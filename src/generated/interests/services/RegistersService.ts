/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublishedRegister } from '../models/PublishedRegister';
import type { PublishedRegisterApiLinkedSearchResult } from '../models/PublishedRegisterApiLinkedSearchResult';
import type { RegisterDocument } from '../models/RegisterDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RegistersService {
    /**
     * Return a list of published versions of registers of interests.
     * @returns PublishedRegisterApiLinkedSearchResult OK
     * @throws ApiError
     */
    public static getApiV1Registers({
        sessionId,
        skip,
        take = 20,
    }: {
        /**
         * Search for registers published within a parliamentary session with this ID. Find session data at https://whatson-api.parliament.uk/.
         */
        sessionId?: number,
        /**
         * The number of records to skip from the first, default is 0.
         */
        skip?: number,
        /**
         * The number of records to return, default is 20.
         */
        take?: number,
    }): CancelablePromise<PublishedRegisterApiLinkedSearchResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Registers',
            query: {
                'SessionId': sessionId,
                'Skip': skip,
                'Take': take,
            },
        });
    }
    /**
     * Return a published version of a register of interests by ID.
     * @returns PublishedRegister OK
     * @throws ApiError
     */
    public static getApiV1Registers1({
        id,
    }: {
        /**
         * ID of the register.
         */
        id: number,
    }): CancelablePromise<PublishedRegister> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Registers/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Return a published register as a PDF document by ID.
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV1RegistersDocument({
        id,
        type,
    }: {
        /**
         * ID of the register.
         */
        id: number,
        /**
         * Whether to return a document containing the full register or only updates. Default value is Full.
         */
        type?: RegisterDocument,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/Registers/{id}/document',
            path: {
                'id': id,
            },
            query: {
                'type': type,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
