import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { AppState } from 'src/app/models/app-state';

@Component({
  selector: 'ms-path-chooser',
  templateUrl: './path-chooser.component.html',
  styleUrls: ['./path-chooser.component.scss']
})
export class PathChooserComponent implements OnInit, OnDestroy {
  private microservicesSubscription: Subscription;

  private localStoragePathKey = 'path';
  private pathIsValid = true;
  private lastInvalidPath = null;
  private pathChooserForm: FormGroup;
  private pathFormControl: FormControl;

  @Output() public pathSubmitted = new EventEmitter<string>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.pathFormControl = new FormControl(localStorage.getItem(this.localStoragePathKey),
      [
        Validators.required,
        this.pathOkValidator(),
        this.sameInvalidPath()
      ]);
    this.pathChooserForm = new FormGroup({
      path: this.pathFormControl
    });

    this.microservicesSubscription = this.store.select('microservices').subscribe((ms) => {
      this.pathIsValid = ms.pathIsValid;
      if (this.pathIsValid) {
        localStorage.setItem(this.localStoragePathKey, this.pathFormControl.value);
        this.lastInvalidPath = null;
      } else {
        this.lastInvalidPath = this.pathFormControl.value;
      }
      this.pathFormControl.updateValueAndValidity();
    });
  }

  ngOnDestroy(): void {
    this.microservicesSubscription.unsubscribe();
  }

  onSubmit() {
    this.pathSubmitted.emit(this.pathChooserForm.get('path').value);
  }

  private pathOkValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return this.pathIsValid ? null : { invalidPath: control.value };
    };
  }

  private sameInvalidPath(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return control.value !== this.lastInvalidPath ? null : { sameInvalidPath: control.value };
    };
  }
}
