import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './models/app-state';
import * as MicroservicesActions from './reducers/microservices/microservices.actions';
import { Observable, Subscription } from 'rxjs';
import { Microservices } from './models/microservices';

import { MicroserviceManagerService } from './services/microservice-reader/microservice-manager.service';

@Component({
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private microservices: Microservices;

  private microservicesSubscription: Subscription;

  constructor(private store: Store<AppState>, private msManager: MicroserviceManagerService) { }

  ngOnInit() {
    this.microservicesSubscription = this.store.select('microservices').subscribe((ms) => {
      this.microservices = ms;
    });
  }

  ngOnDestroy(): void {
    this.microservicesSubscription.unsubscribe();
  }

  demo = (path) => {
    this.msManager.getMicroserviceNames(path).subscribe(
      (ms) => {
        this.store.dispatch(new MicroservicesActions.Set({ names: ms, path: path, pathIsValid: !!ms.length }));
        console.log(this.microservices);
      },
      (err) => {
        this.store.dispatch(new MicroservicesActions.Set({ names: [], path: path, pathIsValid: false }));
      }
    );
  }

  runMicroservices(msNames: string[]): void {
    this.msManager.startMicroservices(this.microservices.path, msNames).subscribe(console.log);
  }
}
