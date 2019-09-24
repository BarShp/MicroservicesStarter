import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state';
import { Observable, Subscription } from 'rxjs';

import { Microservices } from 'src/app/models/microservices';

@Component({
  selector: 'ms-microservice-runner',
  templateUrl: './microservice-runner.component.html',
  styleUrls: ['./microservice-runner.component.scss']
})
export class MicroserviceRunnerComponent implements OnInit {
  private microservicesSubscription: Subscription;

  public microservices: Observable<Microservices>;
  public tmp;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.microservices = this.store.select('microservices');
    this.microservices.subscribe((a) => {
      this.tmp = a;
      console.log("Hello From runner");
    });
  }

}
