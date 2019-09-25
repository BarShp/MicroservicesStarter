import { Microservices } from './microservices';

export interface AppState {
    microservices: Microservices;
    microservicesToRun: string[];
}
