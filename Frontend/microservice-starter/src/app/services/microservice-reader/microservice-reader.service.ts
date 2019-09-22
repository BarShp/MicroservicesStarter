import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MicroserviceReaderService {

  constructor(private http: HttpClient) { }

  public getMicroserviceNames(path: string) {
    // TODO: Implement
  }
}
