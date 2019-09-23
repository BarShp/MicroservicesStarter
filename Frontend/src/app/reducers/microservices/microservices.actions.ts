import { Action } from '@ngrx/store';
import { Microservices } from 'src/app/models/microservices';

export const SET = '[Microservices] Set';

export class Set implements Action {
    readonly type = SET;

    constructor(public payload: Microservices) { }
}

export type All
    = Set;
