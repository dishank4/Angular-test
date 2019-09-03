import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient) { }


  public get(url) {
    return this.httpClient.get(url);
  }

  public post(url, data) {
    return this.httpClient.post(url, data);
  }

  public put(url, data) {
    return this.httpClient.put(url, data);
  }

  public delete(url) {
    return this.httpClient.delete(url);
  }
}
