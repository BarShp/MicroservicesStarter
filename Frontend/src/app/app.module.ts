import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatButtonModule, MatInputModule, MatCheckboxModule } from '@angular/material';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { microservicesReducer } from './reducers/microservices/microservices.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { MicroserviceCheckerComponent } from './components/microservice-checker/microservice-checker.component';
import { MicroserviceReaderService } from './services/microservice-reader/microservice-reader.service';
import { PathChooserComponent } from './components/path-chooser/path-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MicroserviceCheckerComponent,
    PathChooserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
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
