/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocationContext } from './LocationContext';
import type { PartySeatCount } from './PartySeatCount';
export type Location = {
    context?: LocationContext | null;
    parentContext?: LocationContext | null;
    childContexts?: Array<LocationContext> | null;
    stateOfTheParties?: Array<PartySeatCount> | null;
};

