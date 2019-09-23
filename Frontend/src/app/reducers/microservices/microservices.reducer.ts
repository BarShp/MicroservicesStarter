import * as MicroservicesActions from './microservices.actions';
import { Microservices } from 'src/app/models/microservices';

const defaultState: Microservices = { names: [], pathIsValid: true };

export type Action = MicroservicesActions.All;

export function microservicesReducer(state: Microservices = defaultState, action: Action) {
    switch (action.type) {
        case MicroservicesActions.SET:
            return state = action.payload;

        default:
            return state;
    }
}
