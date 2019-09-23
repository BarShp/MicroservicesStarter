import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'ms-path-chooser',
  templateUrl: './path-chooser.component.html',
  styleUrls: ['./path-chooser.component.scss']
})
export class PathChooserComponent implements OnInit {
  private pathChooserForm: FormGroup;
  private path = new FormControl('',
    [
      Validators.required
    ]);

  @Input() pathErr: Error;
  @Output() pathSubmitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    // const pathRegex =
    //   new RegExp(`^[a-zA-Z]:\\[\\\S|*\S]?.*$`);
    this.pathChooserForm = new FormGroup({
      path: new FormControl('',
        [
          Validators.required,
          this.pathOkValidator,
        ])
    });
  }

  onSubmit() {
    // TODO: Save in localsession

    this.pathSubmitted.emit(this.pathChooserForm.get('path').value);
  }

  private pathOkValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return this.pathErr ? { 'invalidPath': { value: `Path Search Error: ${this.pathErr}` } } : null;
    };
  }
}
