import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { AppState } from 'src/app/models/app-state';

@Component({
  selector: 'ms-path-chooser',
  templateUrl: './path-chooser.component.html',
  styleUrls: ['./path-chooser.component.scss']
})
export class PathChooserComponent implements OnInit {
  private microservicesSubscription: Subscription;

  private pathIsValid = true;
  private pathChooserForm: FormGroup;
  private pathFormControl: FormControl;

  @Output() pathSubmitted = new EventEmitter<string>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // const pathRegex =
    //   new RegExp(`^[a-zA-Z]:\\[\\\S|*\S]?.*$`);

    this.pathFormControl = new FormControl('',
      [
        Validators.required,
        this.pathOkValidator(),
      ]);
    this.pathChooserForm = new FormGroup({
      path: this.pathFormControl
    });

    this.microservicesSubscription = this.store.select('microservices').subscribe((ms) => {
      this.pathIsValid = ms.pathIsValid;
      this.pathFormControl.updateValueAndValidity();
    });
    this.pathFormControl.valueChanges.subscribe(() => {
      this.pathIsValid = true;
    });
  }

  onSubmit() {
    // TODO: Save in localsession

    this.pathSubmitted.emit(this.pathChooserForm.get('path').value);
  }

  private pathOkValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return this.pathIsValid ? null : { invalidPath: control.value };
    };
  }
}
