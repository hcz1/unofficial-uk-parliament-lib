/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { House } from './House';
export type Vote = {
    house?: House;
    id?: number;
    inAffirmativeLobby?: boolean;
    actedAsTeller?: boolean;
    title?: string | null;
    date?: string;
    divisionNumber?: number;
    numberInFavour?: number;
    numberAgainst?: number;
};

