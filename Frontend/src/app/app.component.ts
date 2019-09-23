import { Component } from '@angular/core';

import { MicroserviceReaderService } from './services/microservice-reader/microservice-reader.service';

@Component({
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'microservice-starter';

  constructor(private msReader: MicroserviceReaderService) { }

  demo = (path) => {
    this.msReader.getMicroserviceNames(path).subscribe(console.log);
  }
}
