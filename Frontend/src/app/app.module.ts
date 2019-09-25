import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatInputModule } from '@angular/material';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { microservicesReducer } from './reducers/microservices/microservices.reducer';
import { microservicesToRunReducer } from './reducers/microservices-to-run/microservices-to-run.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { MicroserviceManagerService } from './services/microservice-reader/microservice-manager.service';
import { PathChooserComponent } from './components/path-chooser/path-chooser.component';
import { MicroserviceRunnerComponent } from './components/microservice-runner/microservice-runner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PathChooserComponent,
    MicroserviceRunnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    HttpClientModule,
    StoreModule.forRoot({
      microservices: microservicesReducer,
      microservicesToRun: microservicesToRunReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [MicroserviceManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
