import { Action } from '@ngrx/store';

export const ADD_MICROSERVICE = '[MicroservicesToRun] AddMicroservice';
export const REMOVE_MICROSERVICE = '[MicroservicesToRun] RemoveMicroservice';
export const ADD_MULTIPLE_MICROSERVICES = '[MicroservicesToRun] AddMultipleMicroservices';
export const CLEAR_ALL = '[MicroservicesToRun] ClearAll';

export class AddMicroservice implements Action {
    readonly type = ADD_MICROSERVICE;

    constructor(public payload: string) { }
}

export class RemoveMicroservice implements Action {
    readonly type = REMOVE_MICROSERVICE;

    constructor(public payload: string) { }
}

export class AddMultipleMicroservices implements Action {
    readonly type = ADD_MULTIPLE_MICROSERVICES;

    constructor(public payload: string[]) { }
}

export class ClearAll implements Action {
    readonly type = CLEAR_ALL;

    constructor() { }
}

export type All =
    AddMicroservice |
    RemoveMicroservice |
    AddMultipleMicroservices |
    ClearAll;
