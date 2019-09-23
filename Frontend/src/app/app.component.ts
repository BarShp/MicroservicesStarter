import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './models/app-state';
import * as MicroservicesActions from './reducers/microservices/microservices.actions';
import { Observable, Subscription } from 'rxjs';
import { Microservices } from './models/microservices';

import { MicroserviceReaderService } from './services/microservice-reader/microservice-reader.service';

@Component({
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  pathError = null;
  microservices: Observable<Microservices>;

  private microservicesSubscription: Subscription;

  constructor(private store: Store<AppState>, private msReader: MicroserviceReaderService) { }

  ngOnInit() {
    this.microservices = this.store.select('microservices');
    this.microservicesSubscription = this.microservices.subscribe((ms) => {
      console.log(ms);
    });
  }

  ngOnDestroy(): void {
    this.microservicesSubscription.unsubscribe();
  }

  demo = (path) => {
    this.msReader.getMicroserviceNames(path).subscribe(
      (ms) => {
        this.store.dispatch(new MicroservicesActions.Set({ names: ms, pathIsValid: !!ms.length }));
        console.log(this.microservices);
      },
      (err) => {
        this.store.dispatch(new MicroservicesActions.Set({ names: null, pathIsValid: false }));
      }
    );
  }
}
