import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state';
import { Observable, Subscription } from 'rxjs';

import { Microservices } from 'src/app/models/microservices';
import { AddMicroservice, ClearAll, RemoveMicroservice, AddMultipleMicroservices } from 'src/app/reducers/microservices-to-run/microservices-to-run.actions';

@Component({
  selector: 'ms-microservice-runner',
  templateUrl: './microservice-runner.component.html',
  styleUrls: ['./microservice-runner.component.scss']
})
export class MicroserviceRunnerComponent implements OnInit, OnDestroy {
  private microservicesSubscription: Subscription;
  private microservicesToRunSubscription: Subscription;

  private allAvailableMicroservices: string[];

  @Output() public runMicroservicesSubmitted = new EventEmitter<string[]>();

  public microservicesToRun: string[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.microservicesSubscription =
      this.store.select('microservices').subscribe((ms: Microservices) => {
        this.allAvailableMicroservices = ms.names;
        this.clearMicroservicesToRun();
      });

    this.microservicesToRunSubscription =
      this.store.select('microservicesToRun').subscribe((msToRun) => {
        this.microservicesToRun = msToRun;
      });
  }

  ngOnDestroy(): void {
    this.microservicesSubscription.unsubscribe();
    this.microservicesToRunSubscription.unsubscribe();
  }

  getAvailableMicroservices(): string[] {
    return this.distinctArray(this.allAvailableMicroservices, this.microservicesToRun);
  }

  addMicroserviceToRun(msName: string) {
    this.store.dispatch(new AddMicroservice(msName));
  }

  removeMicroserviceToRun(msName: string) {
    this.store.dispatch(new RemoveMicroservice(msName));
  }

  addAllMicroservicesToRun() {
    this.store.dispatch(new AddMultipleMicroservices(this.getAvailableMicroservices()));
  }

  clearMicroservicesToRun() {
    this.store.dispatch(new ClearAll());
  }

  runMicroservices() {
    this.runMicroservicesSubmitted.emit(this.microservicesToRun);
  }

  private distinctArray(arr: any[], distinctByArr: any[]) {
    return arr.filter((value) => !distinctByArr.includes(value));
  }

}
