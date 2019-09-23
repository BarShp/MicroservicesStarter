import { Component, OnInit } from '@angular/core';

import { MicroserviceReaderService } from 'src/app/services/microservice-reader/microservice-reader.service';

@Component({
  selector: 'ms-microservice-checker',
  templateUrl: './microservice-checker.component.html',
  styleUrls: ['./microservice-checker.component.scss']
})
export class MicroserviceCheckerComponent implements OnInit {

  constructor(private msReader: MicroserviceReaderService) { }

  ngOnInit() {
    //D:/Bar/Projects/Others/
    //D:/Bar/Projects/Others/MicroserviceStarter
    //D:\Bar\Projects\Git\egged
    this.msReader.getMicroserviceNames('D:\\Bar\\Projects\\Git\\egged').subscribe(console.log);
  }

}
