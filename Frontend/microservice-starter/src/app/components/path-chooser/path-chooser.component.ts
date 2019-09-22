import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-path-chooser',
  templateUrl: './path-chooser.component.html',
  styleUrls: ['./path-chooser.component.scss']
})
export class PathChooserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onInputChanged() {
    // TODO: Validate is path
  }

  onNewPath() {
    // TODO: Save in localsession
  }

}
