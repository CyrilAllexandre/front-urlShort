import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api/v1/shorten';

  constructor(private http: HttpClient) { }

  sendUrl(url: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, { url });
  }
}