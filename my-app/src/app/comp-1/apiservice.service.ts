import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  
})
export class ApiserviceService {
  constructor(private http: HttpClient) { }

  apiCall() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
  
}
