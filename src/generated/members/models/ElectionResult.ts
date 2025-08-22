/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ElectionCandidate } from './ElectionCandidate';
import type { Party } from './Party';
export type ElectionResult = {
    result?: string | null;
    isNotional?: boolean;
    electorate?: number;
    turnout?: number;
    majority?: number;
    winningParty?: Party | null;
    electionTitle?: string | null;
    electionDate?: string;
    electionId?: number;
    isGeneralElection?: boolean;
    constituencyName?: string | null;
    candidates?: Array<ElectionCandidate> | null;
};

