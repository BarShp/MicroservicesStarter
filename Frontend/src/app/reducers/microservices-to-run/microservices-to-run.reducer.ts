import * as MicroservicesToRunActions from './microservices-to-run.actions';

const defaultState: string[] = [];

export type Action = MicroservicesToRunActions.All;

export function microservicesToRunReducer(state: string[] = defaultState, action: Action) {
    switch (action.type) {
        case MicroservicesToRunActions.ADD_MICROSERVICE:
            return [...state, action.payload];

        case MicroservicesToRunActions.ADD_MULTIPLE_MICROSERVICES:
            return [...state, ...action.payload];

        case MicroservicesToRunActions.REMOVE_MICROSERVICE:
            return state.filter(x => x !== action.payload);

        case MicroservicesToRunActions.CLEAR_ALL:
            return defaultState;

        default:
            return state;
    }
}

