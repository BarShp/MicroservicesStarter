import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule, MatInputModule } from '@angular/material';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { microservicesReducer } from './reducers/microservices/microservices.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { MicroserviceReaderService } from './services/microservice-reader/microservice-reader.service';
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
      microservices: microservicesReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [MicroserviceReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
