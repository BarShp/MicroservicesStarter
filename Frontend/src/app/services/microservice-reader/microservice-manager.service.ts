import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MicroserviceManagerService {
  private BASE_URL: string = 'http://localhost';

  constructor(private http: HttpClient) { }

  public getMicroserviceNames(path: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.BASE_URL}/microservices?path=${path}`);
  }

  public startMicroservices(path: string, microservices: string[]): Observable<any> {
    return this.http.post(`${this.BASE_URL}/start`, microservices.map(ms => `${path}/${ms}`));
  }
}
