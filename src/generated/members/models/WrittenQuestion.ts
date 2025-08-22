/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnsweringBody } from './AnsweringBody';
import type { GroupedQuestion } from './GroupedQuestion';
import type { House } from './House';
import type { Member } from './Member';
export type WrittenQuestion = {
    id?: number;
    askingMemberId?: number;
    house?: House;
    memberHasInterest?: boolean;
    dateTabled?: string;
    dateForAnswer?: string;
    uin?: string | null;
    questionText?: string | null;
    answeringBodyId?: number;
    isWithdrawn?: boolean;
    isNamedDay?: boolean;
    groupedQuestions?: Array<string> | null;
    groupedQuestionsDates?: Array<GroupedQuestion> | null;
    answerIsHolding?: boolean | null;
    answerIsCorrection?: boolean | null;
    answeringMemberId?: number | null;
    correctingMemberId?: number | null;
    dateAnswered?: string | null;
    answerText?: string | null;
    attachmentCount?: number;
    heading?: string | null;
    answeringMember?: Member | null;
    correctingMember?: Member | null;
    answeringBody?: AnsweringBody | null;
};

